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

// Sort in chronological order (oldest first)
commits.sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`));

// Function to animate counter with easing
function animateCounter(elementId, targetValue, duration = 1500, suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const startTime = performance.now();
  const startValue = 0;
  
  function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease out animation
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(startValue + easeProgress * (targetValue - startValue));
      
      element.textContent = currentValue + suffix;
      
      if (progress < 1) {
          requestAnimationFrame(updateCounter);
      }
  }
  
  setTimeout(() => {
      requestAnimationFrame(updateCounter);
  }, 300);
}

// Function to populate timeline with commits
function populateTimeline(commits) {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  
  // Clear any existing content
  timeline.innerHTML = '';
  
  // Group commits by date
  const commitsByDate = {};
  commits.forEach(commit => {
      if (!commitsByDate[commit.date]) {
          commitsByDate[commit.date] = [];
      }
      commitsByDate[commit.date].push(commit);
  });
  
  // Sort dates in descending order (newest first)
  const sortedDates = Object.keys(commitsByDate).sort((a, b) => new Date(b) - new Date(a));
  
  // Create timeline entries
  sortedDates.forEach((date, dateIndex) => {
      const dateCommits = commitsByDate[date];
      
      // Format date for display
      const displayDate = new Date(date).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
      });
      
      // Create date section
      const dateSection = document.createElement('div');
      dateSection.className = 'space-y-4';
      
      // Date header
      const dateHeader = document.createElement('div');
      dateHeader.className = 'flex items-center space-x-3';
      dateHeader.innerHTML = `
          <svg class="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <h4 class="text-sm font-semibold text-slate-700 border-b border-slate-200 pb-1">${displayDate}</h4>
      `;
      
      // Commits container
      const commitsContainer = document.createElement('div');
      commitsContainer.className = 'ml-1 space-y-1';
      
      // Create commit entries
      dateCommits.forEach((commit, commitIndex) => {
          const isLast = dateIndex === sortedDates.length - 1 && commitIndex === dateCommits.length - 1;
          
          const commitEntry = document.createElement('div');
          commitEntry.className = 'relative flex items-start group timeline-entry';
          
          commitEntry.innerHTML = `
              <!-- Timeline line -->
              <div class="absolute left-4 top-8 w-0.5 bg-gradient-to-b from-red-200 to-transparent h-full" 
                   style="display: ${isLast ? 'none' : 'block'}"></div>
              
              <!-- Timeline dot -->
              <div class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-red-200 rounded-full group-hover:border-red-400 transition-colors duration-200">
                  <svg class="w-3 h-3 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
              </div>
              
              <!-- Content -->
              <div class="ml-4 flex-1 pb-6">
                  <div class="bg-white rounded-lg border border-slate-200 p-4 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                      <div class="flex items-center justify-between mb-2">
                          <span class="text-xs text-slate-500 font-mono">${commit.time || ''}</span>
                      </div>
                      <p class="text-sm text-slate-700 leading-relaxed">${commit.message}</p>
                      ${commit.author ? `<div class="mt-2 text-xs text-slate-500">By: ${commit.author}</div>` : ''}
                  </div>
              </div>
          `;
          
          commitsContainer.appendChild(commitEntry);
      });
      
      dateSection.appendChild(dateHeader);
      dateSection.appendChild(commitsContainer);
      timeline.appendChild(dateSection);
  });

  // Adjust timeline height to match article height
  adjustTimelineHeight();
}

// Function to adjust timeline height to match article height
function adjustTimelineHeight() {
  const articleElement = document.getElementById('main-article');
  const timelineContainer = document.getElementById('timeline-container');
  
  if (articleElement && timelineContainer) {
      // Get the height of the article
      const articleHeight = articleElement.offsetHeight;
      
      // Set the timeline container height to match
      timelineContainer.style.maxHeight = `${articleHeight}px`;
  }
}

// Function to calculate metrics from commits
function calculateMetrics(commits) {
  // Total commits
  const totalCommits = commits.length;

  // Days active - count unique dates
  const uniqueDates = new Set(commits.map((c) => c.date));
  const daysActive = uniqueDates.size;

  // Major features - count commits with feature-related keywords
  const featureKeywords = ["implement", "create"];
  const majorFeatures = commits.filter((c) =>
    featureKeywords.some((keyword) => c.message.toLowerCase().includes(keyword))
  ).length;

  // Set success rate to 100%
  const successRate = 100;

  return {
    totalCommits,
    daysActive,
    majorFeatures,
    successRate,
  };
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Calculate metrics
  const metrics = calculateMetrics(commits);
  
  // Populate timeline
  populateTimeline(commits);
  
  // Animate metrics with staggered timing
  animateCounter('total-commits', metrics.totalCommits, 1500);
  animateCounter('days-active', metrics.daysActive, 1700);
  animateCounter('major-features', metrics.majorFeatures, 1900);
  animateCounter('success-rate', metrics.successRate, 2100, '%');
  
  // Re-adjust timeline height when window is resized
  window.addEventListener('resize', adjustTimelineHeight);
});