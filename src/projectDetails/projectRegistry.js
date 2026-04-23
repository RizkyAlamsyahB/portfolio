import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "haji-umroh-store": lazy(() => import("./HajiUmrohStoreDetail")),
  "rewrite-pmii": lazy(() => import("./RewritePMIIDetail")),
  "plex-seller": lazy(() => import("./PlexSellerDetail")),
  "alena-soccer": lazy(() => import("./AlenaSoccerDetail")),
  "elibrary-bawaslu": lazy(() => import("./ELibraryBawasluDetail")),
  "afi-sport": lazy(() => import("./AfiSportDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
