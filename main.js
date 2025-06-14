// Commit log data
const commits = [
  { hash: "3153024", date: "2025-06-02", author: "OwPor", message: "Initialize WMSU CMS with essential pages and authentication system" },
  { hash: "50253f7", date: "2025-06-02", author: "OwPor", message: "Implement category archive page and enhance navigation with categories dropdown" },
  { hash: "7b7bc99", date: "2025-06-02", author: "OwPor", message: "Enhance admin header styles and improve mobile navigation accessibility" },
  { hash: "df84ccf", date: "2025-06-02", author: "OwPor", message: "Set page title for media management" },
  { hash: "6bcb9ef", date: "2025-06-02", author: "OwPor", message: "Update admin header and sidebar for improved mobile navigation and accessibility" },
  { hash: "391d638", date: "2025-06-03", author: "OwPor", message: "Update redirect functionality to use JavaScript for improved compatibility" },
  { hash: "5014a00", date: "2025-06-04", author: "OwPor", message: "Refactor code structure for improved readability and maintainability" },
  { hash: "eba7002", date: "2025-06-04", author: "OwPor", message: "Enhance sidebar responsiveness and improve logout process with JavaScript cleanup" },
  { hash: "c6cc6d7", date: "2025-06-05", author: "OwPor", message: "Add README.md with project overview, features, setup instructions, and folder structure" },
  { hash: "f175619", date: "2025-06-05", author: "OwPor", message: "Update get_pages_for_dropdown function to exclude specific page ID and switch to CKEditor for content input" },
  { hash: "833a117", date: "2025-06-05", author: "OwPor", message: "Update file upload allowed types and enhance content handling in forms" },
  { hash: "9b5c1ea", date: "2025-06-05", author: "OwPor", message: "Adjust CKEditor initialization and remove inline style for content textarea" },
  { hash: "662b38f", date: "2025-06-05", author: "OwPor", message: "Refactor CKEditor initialization to set minimum height for editor" },
  { hash: "d8d7fe4", date: "2025-06-05", author: "OwPor", message: "Update package-lock.json with project name and version" },
  { hash: "6220cf4", date: "2025-06-05", author: "OwPor", message: "Increase title font size in content display" },
  { hash: "77a0214", date: "2025-06-06", author: "OwPor", message: "Update .gitignore to include all uploads while excluding subdirectories" },
  { hash: "e70e1b1", date: "2025-06-06", author: "OwPor", message: "Update .gitignore to include uploads directory without subdirectories" },
  { hash: "5d5fe38", date: "2025-06-06", author: "OwPor", message: "Refactor settings handling to use key-value pairs and improve footer/header integration" },
  { hash: "33689ba", date: "2025-06-06", author: "OwPor", message: "Add footer settings management and improve footer display logic" },
  { hash: "b0c9f65", date: "2025-06-06", author: "OwPor", message: "Implement maintenance mode functionality with dedicated pages and footer settings" },
  { hash: "cafa03e", date: "2025-06-06", author: "OwPor", message: "Enhance appearance settings with theme customization options and CSS variables" },
  { hash: "7852c49", date: "2025-06-06", author: "OwPor", message: "Add initial database schema and data for WMSU CMS" },
  { hash: "ede90ab", date: "2025-06-06", author: "OwPor", message: "Remove logo and favicon URL settings from footer management in settings.php; update database schema and data for WMSU CMS, including new categories and user logs" },
  { hash: "ef73fcc", date: "2025-06-06", author: "OwPor", message: "Refactor code structure for improved readability and maintainability" },
  { hash: "e20516c", date: "2025-06-06", author: "stevegwapss", message: "Modified the card and fixed text overflow, fixed the contents in the readmore individual pages" },
  { hash: "50ea6c3", date: "2025-06-06", author: "stevegwapss", message: "Fix image layout, and adjusted admin text limit" },
  { hash: "b941cac", date: "2025-06-06", author: "stevegwapss", message: "Merge pull request #1 from stevegwapss/feature-UI" },
  { hash: "ab07873", date: "2025-06-06", author: "OwPor", message: "Add initial database schema and seed data for WMSU CMS" },
  { hash: "3a90e8a", date: "2025-06-06", author: "OwPor", message: "Update delete modal to ensure proper visibility and functionality" },
  { hash: "88ddceb", date: "2025-06-06", author: "OwPor", message: "Implement password reset functionality with email notifications" },
  { hash: "0fb1cb2", date: "2025-06-06", author: "OwPor", message: "Add landing page title and description settings" },
  { hash: "2328253", date: "2025-06-06", author: "OwPor", message: "Ensure CKEditor initializes only if the editor element exists" },
  { hash: "58b2315", date: "2025-06-06", author: "OwPor", message: "Add initial database schema and menu helper functions for WMSU CMS" },
  { hash: "6f8e045", date: "2025-06-06", author: "OwPor", message: "Enhance mobile menu with collapsible categories" },
  { hash: "ac41ff4", date: "2025-06-06", author: "OwPor", message: "Update mobile menu styling and enhance category dropdown functionality" },
  { hash: "aa2a49d", date: "2025-06-07", author: "stevegwapss", message: "Added a styling to the drop down, fixed header inconsistencies." },
  { hash: "e766e30", date: "2025-06-07", author: "stevegwapss", message: "Lowered border radius for dropdown" },
  { hash: "5c12328", date: "2025-06-07", author: "stevegwapss", message: "Fixed hover state when in active page" },
  { hash: "c2db424", date: "2025-06-07", author: "OwPor", message: "Update user role support and simplify page management logic" },
  { hash: "0b9dc81", date: "2025-06-07", author: "OwPor", message: "Update menu item retrieval order to sort by title instead of order_position" },
  { hash: "3cd4013", date: "2025-06-07", author: "OwPor", message: "Add pages dropdown to header and implement page retrieval for menu" },
  { hash: "d866b2f", date: "2025-06-07", author: "stevegwapss", message: "Removed red text" },
  { hash: "d5a346a", date: "2025-06-07", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "455855a", date: "2025-06-07", author: "OwPor", message: "Add parent_id field to pages table and update page management logic for hierarchical structure" },
  { hash: "9e414e4", date: "2025-06-07", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "06b78c0", date: "2025-06-08", author: "stevegwapss", message: "Added dynamic dropdowns, nested sub menus, and mobile view fixes." },
  { hash: "94c1cda", date: "2025-06-08", author: "OwPor", message: "Enhance menu and page management with hierarchical structure and dropdown rendering" },
  { hash: "1183be3", date: "2025-06-08", author: "OwPor", message: "Conditionally display parent item dropdown based on item hierarchy" },
  { hash: "818d2a7", date: "2025-06-08", author: "OwPor", message: "Conditionally display parent page dropdown based on child pages" },
  { hash: "400fd6d", date: "2025-06-08", author: "OwPor", message: "Remove student role from user management and update related logic" },
  { hash: "e3612a8", date: "2025-06-08", author: "OwPor", message: "Update audit log query to use correct table aliases for filtering" },
  { hash: "d7b9bdb", date: "2025-06-08", author: "OwPor", message: "Refactor code structure and remove redundant functions for improved readability" },
  { hash: "4f1ca66", date: "2025-06-08", author: "OwPor", message: "Refactor code structure and remove redundant sections for improved readability and maintainability" },
  { hash: "e1d49a4", date: "2025-06-08", author: "stevegwapss", message: "Added rotating carousel" },
  { hash: "4c072fb", date: "2025-06-08", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "3298a23", date: "2025-06-08", author: "OwPor", message: "Refactor code structure for improved readability and maintainability" },
  { hash: "ec8d364", date: "2025-06-08", author: "OwPor", message: "Update section title from 'Upcoming Events' to 'Events' for clarity" },
  { hash: "c9ed683", date: "2025-06-08", author: "stevegwapss", message: "Refactor code structure for improved readability and maintainability" },
  { hash: "88dcbaf", date: "2025-06-08", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "8cc95a9", date: "2025-06-09", author: "OwPor", message: "Remove unnecessary htmlspecialchars calls for improved readability" },
  { hash: "06fad73", date: "2025-06-09", author: "stevegwapss", message: "Added rotating carousel in the news section" },
  { hash: "db3c2e6", date: "2025-06-09", author: "stevegwapss", message: "Improve responsiveness" },
  { hash: "abd0950", date: "2025-06-09", author: "stevegwapss", message: "Adjusted the wmsu title to fit smaller screen sizes" },
  { hash: "1625736", date: "2025-06-09", author: "stevegwapss", message: "Added border radius" },
  { hash: "7fadb46", date: "2025-06-09", author: "stevegwapss", message: "Added card consistent styling" },
  { hash: "0da45a3", date: "2025-06-09", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "b2427ec", date: "2025-06-10", author: "stevegwapss", message: "Fixed header position, and added a hover effect reveal on the nav bar" },
  { hash: "5f3b9d0", date: "2025-06-10", author: "stevegwapss", message: "Adjusted last child drop down to prevent overflow" },
  { hash: "3bac740", date: "2025-06-10", author: "stevegwapss", message: "Reverted drop down submenu" },
  { hash: "f3af68f", date: "2025-06-10", author: "stevegwapss", message: "Fixed font overflows in tablet and moble view, and added a sliding feature instead of buttons" },
  { hash: "93f9692", date: "2025-06-10", author: "stevegwapss", message: "Moved the css stylings to different files" },
  { hash: "485e5d9", date: "2025-06-10", author: "stevegwapss", message: "Removed duplicates" },
  { hash: "578810c", date: "2025-06-10", author: "OwPor", message: "Refactor events section for improved layout and styling" },
  { hash: "913cc1f", date: "2025-06-10", author: "OwPor", message: "Add display title field to page creation and update forms" },
  { hash: "8b4c473", date: "2025-06-10", author: "OwPor", message: "Refactor code structure for improved readability and maintainability" },
  { hash: "23855ca", date: "2025-06-10", author: "OwPor", message: "Correct display title rendering in mobile menu items" },
  { hash: "f816cc2", date: "2025-06-11", author: "stevegwapss", message: "Added a scrollable sidebar in admin panel" },
  { hash: "766c82d", date: "2025-06-11", author: "OwPor", message: "Implement Board of Regents management page and link in sidebar" },
  { hash: "03d62eb", date: "2025-06-11", author: "OwPor", message: "Added board of regents" },
  { hash: "95b2625", date: "2025-06-12", author: "stevegwapss", message: "Added a regents card and proper styling, also added a divider for each section" },
  { hash: "8a19cba", date: "2025-06-12", author: "OwPor", message: "Add Quick Links section with dynamic links from settings" },
  { hash: "4194176", date: "2025-06-12", author: "stevegwapss", message: "Added a new field description to board of regents" },
  { hash: "8449206", date: "2025-06-12", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "8d6370e", date: "2025-06-13", author: "OwPor", message: "Improve quick links rendering to support image URLs and enhance instructions" },
  { hash: "0aa74a3", date: "2025-06-14", author: "stevegwapss", message: "Merge branch 'main' of github.com:OwPor/WMSU-CMS-PHP" },
  { hash: "497be90", date: "2025-06-14", author: "stevegwapss", message: "Added a new column is_featured to the post table. and added a featured checkbox" },
  { hash: "c134c5a", date: "2025-06-14", author: "stevegwapss", message: "Changed all news related content into featured content, and added auto archiving posts when it exceed 5." },
  { hash: "eb05919", date: "2025-06-14", author: "stevegwapss", message: "Added is_featured column to post table" },
  { hash: "fffb36c", date: "2025-06-14", author: "OwPor", message: "Refactor: streamline footer and header settings handling, improve default value assignments, and enhance accessibility in home page" }
];
commits.reverse();

function renderTimeline(commits) {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  timeline.innerHTML = '';
  // Sort commits from most recent to oldest
  commits.sort((a, b) => new Date(b.date) - new Date(a.date));

  let lastDate = null;

  for (const c of commits) {
    const currentDate = c.date;
    // Add a date header if the date has changed
    if (currentDate !== lastDate) {
      const dateHeader = document.createElement('div');
      dateHeader.className = 'mb-4 -ml-3';
      dateHeader.innerHTML = `<span class="bg-slate-200 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">${new Date(currentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>`;
      timeline.appendChild(dateHeader);
      lastDate = currentDate;
    }

    const item = document.createElement('div');
    item.className = 'mb-8 ml-8 relative';
    item.innerHTML = `
      <div class="absolute w-4 h-4 bg-red-600 rounded-full -left-[38px] top-1.5 border-4 border-slate-100"></div>
      <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
        <p class="font-medium text-slate-800 leading-snug">${c.message}</p>
        <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
            <div class="flex items-center space-x-1" title="Author">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" clip-rule="evenodd" /></svg>
                <span class="font-semibold">${c.author}</span>
            </div>
            <div class="flex items-center space-x-1" title="Commit Hash">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.603 3.693a.75.75 0 0 1 .846.846l-.53 2.652A3.5 3.5 0 0 1 9.25 10.5H8.5v-1.75a.75.75 0 0 1 1.5 0V10.5h.75a2 2 0 0 0 1.93-1.498l.53-2.652a2.25 2.25 0 0 0-4.328-1.018l-.986 4.933a.75.75 0 0 1-1.48-.297l.986-4.933A3.75 3.75 0 0 1 11.603 3.693Zm-3.134 10.373a.75.75 0 0 1-.846-.846l.53-2.652A3.5 3.5 0 0 1 10.75 9.5h.75v1.75a.75.75 0 0 1-1.5 0V9.5h-.75a2 2 0 0 0-1.93 1.498l-.53 2.652a2.25 2.25 0 0 0 4.328 1.018l.986-4.933a.75.75 0 0 1 1.48.297l-.986 4.933A3.75 3.75 0 0 1 8.47 14.066Z" clip-rule="evenodd" /></svg>
                <span class="font-mono">${c.hash}</span>
            </div>
        </div>
      </div>
    `;
    timeline.appendChild(item);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTimeline(commits);
});