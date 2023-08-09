const writeupsContainer = document.getElementById('writeups');

const writeupData = {
  xss: [
    { title: 'XSS Writeup 1', url: 'https://example.com/xss-writeup-1' },
    { title: 'XSS Writeup 2', url: 'https://example.com/xss-writeup-2' },
    // Add more links here
  ],
  ssrf: [
    { title: 'SSRF Writeup 1', url: 'https://example.com/ssrf-writeup-1' },
    { title: 'SSRF Writeup 2', url: 'https://example.com/ssrf-writeup-2' },
    // Add more links here
  },
  // Add more categories and links here
};

function loadCategory(category) {
  const categoryData = writeupData[category];
  
  if (categoryData) {
    const writeupList = document.createElement('ul');
    categoryData.forEach(writeup => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = writeup.url;
      link.target = '_blank'; // Open link in a new tab
      link.textContent = writeup.title;
      listItem.appendChild(link);
      writeupList.appendChild(listItem);
    });
    
    writeupsContainer.innerHTML = '';
    writeupsContainer.appendChild(writeupList);
  } else {
    writeupsContainer.innerHTML = '<p>No writeups available for this category.</p>';
  }
}
