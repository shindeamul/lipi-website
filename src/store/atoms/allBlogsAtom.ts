import { atom, selector } from "recoil";
import axios from "axios";

// Atom for current page
export const currentPageAtom = atom<number>({
  key: "currentPageAtom",
  default: 1, // Default page is 1
});

// Atom for posts per page (for pagination)
export const postsPerPageAtom = atom<number>({
  key: "postsPerPageAtom",
  default: 6, // Number of posts per page
});

// Selector to fetch all blog posts with pagination
export const AllBlogsAtom = selector<any>({
  key: "AllBlogsSelector",
  get: async ({ get }) => {
    const currentPage = get(currentPageAtom);  // Get current page
    const postsPerPage = get(postsPerPageAtom); // Get posts per page
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_GOOGLE_SHEET_API}?action=blogs&page=${currentPage}&limit=${postsPerPage}`);
      return {
        blogs: response.data.blogs,  // List of blogs for current page
        totalPages: response.data.totalPages,  // Total number of pages
        totalPosts: response.data.totalPosts,  // Total number of posts
      };
    } catch (e: any) {
      throw new Error(e.response?.data?.msg || e.message);
    }
  },
});
