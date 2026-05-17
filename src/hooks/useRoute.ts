import { useLocation } from "react-router-dom";

export function useRoute() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getRootPath = () => {
    const segments = currentPath.split("/").filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : "/";
  };

  return {
    currentPath,      
    isActive,         
    getRootPath,      
  };
}