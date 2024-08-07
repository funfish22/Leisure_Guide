import FoodPageComponent from '@/components/foodPageComponent';

const items = [
  { key: 'brunch', label: '早午餐' },
  { key: 'japan', label: '日式' },
  { key: 'skewers', label: '串燒' },
  { key: 'curry', label: '咖哩' },
  { key: 'italian', label: '義式' },
  { key: 'hotPot', label: '火鍋' },
  { key: 'desserts_coffee', label: '甜點&咖啡' },
  { key: 'ramen', label: '拉麵' },
  { key: 'riceBowl', label: '蓋飯' }
];


const foodData = {
  'brunch': [
    {
      title: '主觀餐廳',
      igLink: 'https://www.instagram.com/p/C91LYmihjkt',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3640.6451375228394!2d120.6602640071248!3d24.14909739722207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d3df6aadc97%3A0x3d12e941a895f2aa!2z5Li76KeA5bua5oi_LlN1YmplY3RpdmUgdGFzdGU!5e0!3m2!1szh-TW!2stw!4v1721986978470!5m2!1szh-TW!2stw'
    },
    {
      title: '一人一伴 ともだち',
      igLink: 'https://www.instagram.com/p/C76KMS9ypV8',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3640.736054372717!2d120.66669071080076!3d24.145905873387864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d1192f39d71%3A0x6cd3b529562cba9b!2z5LiA5Lq65LiA5Ly0IOOBqOOCguOBoOOBoe-9nOeEoeioguS9jeacjeWLmeeahuePvuWgtOWAmeS9je-9nOacgOW-jOaUtuWuouaZgumWkzE0OjAw772c5Zug56m66ZaT6ZmQ5Yi25pqr54Sh5o6l5b6FMTDmrbLku6XkuIvlj4o05Lq65Lul5LiK5ZyY6auU5a6i772c!5e0!3m2!1szh-TW!2stw!4v1722263356638!5m2!1szh-TW!2stw'
    }
  ],
  'japan': [
    {
      title: '小小麥鮨遇',
      igLink: 'https://www.instagram.com/reel/C151pepvc3s',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3640.332849254055!2d120.67896471080122!3d24.16005687283629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d752abb2dcb%3A0xdcee45585430ffcb!2z5bCP5bCP6bqlIOmuqOmBh--9nOWFjeaUtuacjeWLmeiyu--8iOa1t-murueDj-m-jem6tSQxNDl1cCAv55Sf6a2a54mH77yP5aO95Y-477yP5Liy54eSKSAyMTowMOW-jCDnlJ_llaTosrcx6YCBMe-8jOe3muS4iuioguS9jQ!5e0!3m2!1szh-TW!2stw!4v1721959005830!5m2!1szh-TW!2stw'
    },
  ],
  'skewers': [
    {
      title: '蛋串燒居酒屋',
      igLink: 'https://www.instagram.com/reel/C0yijeqB90D',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3639.4415749981604!2d120.68095611080201!3d24.191309671616718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d0af47f91d3%3A0xf72970f6e1d1f4de!2z6JuL5Liy54eS6bm954Ok5bGF6YWS5bGLIO-8iOWPsOS4reWMl-Wxr-a0sumam--8ieaOqOiWpuS4sueHkuWxhemFkuWxiw!5e0!3m2!1szh-TW!2stw!4v1721959086293!5m2!1szh-TW!2stw'
    }
  ],
  'curry': [
    {
      title: '福氣咖哩',
      igLink: 'https://www.instagram.com/p/C8Ew7YXvO0L',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3169.267294191799!2d120.68332874677527!3d24.153080817994773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d006f8951f7%3A0x5181e72be95d71d7!2z56aP5rCj5ZKW5ZOp772c5YyX5Y2A576O6aOf772c5ZKW5ZOp6aOv772c6LGs5o6S6aOv772c5Lit56eR5aSn576O6aOf772c5Lit5ZyL6Yar576O6aOf!5e0!3m2!1szh-TW!2stw!4v1721977838462!5m2!1szh-TW!2stw'
    },
    {
      title: '壱絕咖哩',
      igLink: 'https://www.instagram.com/p/C7oXgKWvzpE',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d19215.560105009565!2d120.6568544487781!3d24.148308650448687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dd15752e907%3A0xb7def130dd857d4!2z5aOx57WV5ZKW5ZOpIHwg5pel5byP5ZKW5ZOpIHwg5ZKW5ZOp6aOvIHwg5Yuk576O6aSQ5buz!5e0!3m2!1szh-TW!2stw'
    }
  ],
  'italian': [
    {
      title: '有種Pizza',
      igLink: 'https://www.instagram.com/reel/C5QrWZMvBmU',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3640.952299143345!2d120.65806731080053!3d24.1383132736837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d1f67bf7c15%3A0xc90e6f41cfb7dba5!2z5pyJ56iuIFBJWlpBIFNUQVJURVLjgJDlhavmnIjmmqvlgZzpoJDoqILvvIzku6Xnj77loLTni4Dms4HngrrkuLvjgJHjgJDmiYDmnInkuovlrpzku6VJbnN0YWdyYW3ngrrkuLvvvIzoq4voqbPplrFJbnN0YWdyYW3lhazlkYroiIfopo_lrprvvIzlj6_phY3lkIjlho3kvobjgJHjgIzlhafnlKjmnIDlpJrlm5vkvY0v5pW46YeP5pyJ6ZmQ6LOj5a6M54K65q2i44CN!5e0!3m2!1szh-TW!2stw!4v1721983464549!5m2!1szh-TW!2stw'
    },
  ],
  'hotPot': [],
  'desserts_coffee': [],
  'ramen': [
    {
      title: '今喜拉麵俱樂部',
      igLink: 'https://www.instagram.com/reel/C8ZEvgWvaQw',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d3640.4672686751505!2d120.68183661663949!3d24.155340117255793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9eeeefb6ef%3A0x8b2b7235a0023b3f!2z5LuK5Zac5ouJ6bq15L-x5qiC6YOo!5e0!3m2!1szh-TW!2stw!4v1721983508892!5m2!1szh-TW!2stw'
    },
    {
      title: '灣guán濃湯麵',
      igLink: 'https://www.instagram.com/reel/C7MHaU0PnQd',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d344.8783835385119!2d120.65885463720541!3d24.15217233124869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d7ec101dcfb%3A0x94292c0d6e83fa4d!2z54GjZ3XDoW7mv4Pmua_purU!5e0!3m2!1szh-TW!2stw!4v1721983619012!5m2!1szh-TW!2stw'
    }
  ],
  'riceBowl': [
    {
      title: '夏威夷蓋飯(蒔光&Poke Bowl)',
      igLink: 'https://www.instagram.com/reel/C9W59WTvKCo',
      img: '',
      mapLink: '!1m18!1m12!1m3!1d2759.093000970314!2d120.6618532123507!3d24.14910288533263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d263a032303%3A0xdf30fdb6f5047122!2z6JKU5YWJJlBva2UgQm93bC3opb_ljYDljYjppJDpppbpgbh85aSW5bi26aSQ55uSfOWklumAgemkkOebknznsr7nt7vppJDnm5J85bmz5YO55Y2I6aSQfOS9juWNoemkkOebknznibnoibLovJXpo58!5e0!3m2!1szh-TW!2stw!4v1721983756749!5m2!1szh-TW!2stw'
    }
  ]
}

const Food = ({ searchParams }) => {
  return (
    <FoodPageComponent searchParams={searchParams} items={items} foodData={foodData}/>
  );
};
export default Food;
