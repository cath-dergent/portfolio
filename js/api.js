fetch('https://getfullyear.com/api/year')
  .then(response => response.json())
  .then(data => {
    console.log(data.sponsored_by);
    footerYear.textContent = data.year;
  });