/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
export const videos = [
  {
    _id: uuid(),
    title: "Conor McGregor vs Marcus Brimage",
    video: "https://www.youtube.com/embed/HelivOF6vI8",
    thumbnail: "https://i.ytimg.com/vi/HelivOF6vI8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmlnccdGcTIEPBCMQZ0h4Pimy-qQ",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Soham Shah",
  },
  {
    _id: uuid(),
    title: "Khabib Nurmagomedov vs Justin Gaethje",
    video: "https://www.youtube.com/embed/MQcXEWPesAw",
    thumbnail: "https://i.ytimg.com/vi/MQcXEWPesAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjatUoW9YJ6DmVVeXVo_Zj2qJdtA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Rampage Jackson vs Wanderlei Silva",
    video: "https://www.youtube.com/embed/9V03KpJBEaw",
    thumbnail: "https://i.ytimg.com/vi/9V03KpJBEaw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJXwtLRNkypqk1KpnN5nSSYMMMIw",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Brock Lesnar vs Aliaster Overreem",
    video: "https://www.youtube.com/embed/DyvjV3Lt8Pw",
    thumbnail: "https://i.ytimg.com/vi/DyvjV3Lt8Pw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYL1CtslYP3CgpgkpNOZtYaNELWw",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Finishes You Forgot in 2021",
    video: "https://www.youtube.com/embed/vio-IeNBCvk",
    thumbnail: "https://i.ytimg.com/vi/vio-IeNBCvk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZtF1lASi64A6VloNOF7MrIjvb8w",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Blaydes vs Ngannou 2",
    video: "https://www.youtube.com/embed/NR3SEWZ481E",
    thumbnail: "https://i.ytimg.com/vi/NR3SEWZ481E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUnM7BZsfZVF24HIsO9rqptvD2zA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Anderson Silva vs Chael Sonnen 1",
    video: "https://www.youtube.com/embed/DpLaqnwFQEY",
    thumbnail: "https://i.ytimg.com/vi/DpLaqnwFQEY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVwDl2LvRmVq2Jj6NJ1ZaqssDc8w",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Alexander Volkanovski vs Yusuke Kasuya",
    video: "https://www.youtube.com/embed/Gc5eZhgEb1c",
    thumbnail: "https://i.ytimg.com/vi/Gc5eZhgEb1c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBskgEB29hPQQzvgYqPcLwg9nxKHg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Israel Adesanya vs Rob Wilkinson",
    video: "https://www.youtube.com/embed/zea_QpSpfGs",
    thumbnail: "https://i.ytimg.com/vi/zea_QpSpfGs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdFxJl9PXbrkuVN7I19BdWMNkyqg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Top Finishes From UFC London Fighters",
    video: "https://www.youtube.com/embed/oCEYKYWsQEg",
    thumbnail: "https://i.ytimg.com/vi/oCEYKYWsQEg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEh-n0y2mhyn1n6rZtOGX7Gh-HKw",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Top Finishes From UFC Columbus Fighters",
    video: "https://www.youtube.com/embed/EGi-rB1jCCY",
    thumbnail: "https://i.ytimg.com/vi/EGi-rB1jCCY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQgm3N8P_3739QCTqbaaRC3SY4Jw",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "10 Interesting Facts About Khamzat Chimaev",
    video: "https://www.youtube.com/embed/2N_7pgW0vE4",
    thumbnail: "https://i.ytimg.com/vi/2N_7pgW0vE4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxbTCOhJYlFyApI50hsDxRe11uNg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "10 Unbelievable Facts About Early UFCs",
    video: "https://www.youtube.com/embed/Ky2srpDCwk8",
    thumbnail: "https://i.ytimg.com/vi/Ky2srpDCwk8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVajvC5P1uZUZqFYIMMtFxGlNIeg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "The 10 Most Exhausting Rivalries In MMA History",
    video: "https://www.youtube.com/embed/H0lwHFgYHXk",
    thumbnail: "https://i.ytimg.com/vi/H0lwHFgYHXk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHbQPdlTONU4jmTEtFNLsvvUQgtg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "MMA On Point Crashes UFC London, A VIP Experience w/ Mac Mally",
    video: "https://www.youtube.com/embed/scB4HhWe3_o",
    thumbnail: "https://i.ytimg.com/vi/scB4HhWe3_o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAd6pwyGy6OvzlLfLWRa28IvQssrA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "10 Fighters Who Fought To Save Their Careers",
    video: "https://www.youtube.com/embed/jDRSkTn4OZE",
    thumbnail: "https://i.ytimg.com/vi/jDRSkTn4OZE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLoy0HvHK0H56ifL1qivG2mmvB8g",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "The Top 10 Worst MMA Protégé Debuts",
    video: "https://www.youtube.com/embed/DH6mHW8_sYk",
    thumbnail: "https://i.ytimg.com/vi/DH6mHW8_sYk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCce2gDkxeInhAsjZ2nEF33nl-l5A",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "10 Prominent MMA Figures That Suddenly Vanished",
    video: "https://www.youtube.com/embed/lIwjvbj2Wcc",
    thumbnail: "https://i.ytimg.com/vi/lIwjvbj2Wcc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmOsccLd2T2QOBlq6JaASZ1u_xmg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "The 10 Most Random Stars To Try MMA",
    video: "https://www.youtube.com/embed/8_pMTmjDbnY",
    thumbnail: "https://i.ytimg.com/vi/8_pMTmjDbnY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbnWQ24kL9aJdoPnQ9yx5wMZTmAA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "The 10 Most Random Stars To Try MMA",
    video: "https://www.youtube.com/embed/8_pMTmjDbnY",
    thumbnail: "https://i.ytimg.com/vi/8_pMTmjDbnY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbnWQ24kL9aJdoPnQ9yx5wMZTmAA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Joe Rogan Experience #822 - Chael Sonnen",
    video: "https://www.youtube.com/embed/rAnLPKGbytU",
    thumbnail: "https://i.ytimg.com/vi/rAnLPKGbytU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB66kko1fxhjRhD_3tGQMzoLEfvzg",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Khabib Nurmagomedov on fighting McGregor again",
    video: "https://www.youtube.com/embed/Hk3X_QNWSd8",
    thumbnail: "https://i.ytimg.com/vi/Hk3X_QNWSd8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT8ccag8nLBLirPyVx_VKaIx5xkQ",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "Volkanovski vs Korean Zombie Storylines",
    video: "https://www.youtube.com/embed/8TpUS1IKwvE",
    thumbnail: "https://i.ytimg.com/vi/8TpUS1IKwvE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtKlqCtzTGTE_Xv-st5kla3Hjh_A",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: uuid(),
    title: "JRE MMA Show #82 with Israel Adesanya",
    video: "https://www.youtube.com/embed/yZKhfZ25L4o",
    thumbnail: "https://i.ytimg.com/vi/yZKhfZ25L4o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALYGYscLma_lz33X-b-mKYFR2FVA",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];
