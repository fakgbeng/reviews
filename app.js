// local reviews data
const reviews = [
  {
    id: 0,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 1,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 2,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 3,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const review = document.querySelector('.review-edit');
let currentPage = 1;

const personalReview = function (page) {
  reviews.filter((mov) => {
    if (mov.id === page) {
      review.innerHTML = '';
      const html = `
  <div class="img-container">
  <img src="${mov.img}" id="person-img" alt="" />
</div>
<h4 id="author">${mov.name}</h4>
<p id="job">${mov.job}</p>
<p id="info">
 ${mov.text}
</p>
`;
      review.insertAdjacentHTML('afterbegin', html);
    }
  });
};

prevBtn.addEventListener('click', function () {
  currentPage--;
  if (currentPage < 0) {
    currentPage = reviews.length - 1;
  }

  personalReview(currentPage);
});

nextBtn.addEventListener('click', function () {
  currentPage++;
  if (currentPage > reviews.length - 1) {
    currentPage = 0;
  }

  personalReview(currentPage);
});
randomBtn.addEventListener('click', function () {
  const page = Math.floor(Math.random() * reviews.length);
  personalReview(page);
});
