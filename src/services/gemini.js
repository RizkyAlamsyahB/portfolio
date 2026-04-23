import Groq from "groq-sdk";
import { generateSystemPrompt, buildScopedContext } from './aiContext';

const API_KEY = (import.meta.env.VITE_GROQ_API_KEY || '').trim();

// Error classification for granular UI feedback
const classifyError = (error) => {
    const msg = error?.message?.toLowerCase() || '';
    const status = error?.status || error?.statusCode || error?.code || 0;

    if (status === 429 || msg.includes('rate limit') || msg.includes('too many') || msg.includes('quota')) {
        return { type: 'rate_limit', message: 'API quota exceeded. Please try again later.' };
    }
    if ((typeof navigator !== 'undefined' && !navigator.onLine) || msg.includes('failed to fetch') || msg.includes('econnrefused')) {
        return { type: 'network', message: 'Connection lost. Check your internet and try again.' };
    }
    if (status >= 500 || msg.includes('server') || msg.includes('internal')) {
        return { type: 'server', message: 'Server is temporarily unavailable. Try again shortly.' };
    }
    if (status === 401 || status === 403 || msg.includes('auth') || msg.includes('api key')) {
        return { type: 'auth', message: 'Authentication error. Contact the site owner.' };
    }
    return { type: 'unknown', message: 'Something went wrong. Please try again.' };
};

/**
 * Stream chat completions from Groq API.
 * Yields text chunks as they arrive.
 * @param {Array} messages - Chat messages [{role: 'user'|'assistant', content: '...'}]
 * @returns {AsyncGenerator<string>} - Yields text content chunks
 */
export async function* streamGemini(messages) {
    if (!API_KEY) {
        const error = new Error('Missing API key');
        error.status = 401;
        throw classifyError(error);
    }

    const systemPrompt = generateSystemPrompt();
    const latestUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
    const scopedContext = buildScopedContext(latestUserMessage);

    const fullSystemPrompt = systemPrompt + (scopedContext ? '\n\n' + scopedContext : '');

    try {
        const groq = new Groq({ apiKey: API_KEY, dangerouslyAllowBrowser: true });

        const groqMessages = [
            { role: 'system', content: fullSystemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
        ];

        const stream = await groq.chat.completions.create({
            messages: groqMessages,
            model: "llama-3.3-70b-versatile",
            stream: true,
            max_tokens: 1024,
        });

        for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || '';
            if (text) yield text;
        }
    } catch (error) {
        const classified = classifyError(error);
        throw classified;
    }
}