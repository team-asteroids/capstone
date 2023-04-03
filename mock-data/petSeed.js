const pets = [
  {
    name: 'Frank',
    breed: 'Golden Retrievers',
    age: 13,
    size: 'extra-large',
    sex: 'female',
    imageSrc:
      'https://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg',
    userId: 19,
  },
  {
    name: 'Rufus',
    breed: 'Labrador Retrievers',
    age: 3,
    size: 'large',
    sex: 'male',
    imageSrc:
      'https://www.thedogandfriends.com/assets/img/index/img-hero_dog.png',
    userId: 2,
  },
  {
    name: 'Buddy',
    breed: 'Boxers',
    age: 5,
    size: 'large',
    sex: 'male',
    imageSrc:
      'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1200/675/iStock-500726617.jpg?ve=1&tl=1',
    userId: 1,
  },
  {
    name: 'Lola',
    breed: 'Pugs',
    age: 7,
    size: 'small',
    sex: 'female',
    imageSrc:
      'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
    userId: 2,
  },
  {
    name: 'Max',
    breed: 'Belgian Sheepdogs',
    age: 4,
    size: 'medium',
    sex: 'male',
    imageSrc:
      'https://www.akc.org/wp-content/uploads/2017/11/Belgian-Sheepdog-standing-in-a-field.jpg',
    userId: 3,
  },
  {
    name: 'Bailey',
    breed: 'Entlebucher Mountain Dogs',
    age: 2,
    size: 'large',
    sex: 'female',
    imageSrc:
      'https://assets.technologynetworks.com/production/dynamic/images/content/361072/dog-breed-is-not-an-accurate-way-to-predict-behavior-361072-960x540.jpg?cb=11742263',
    userId: 4,
  },
  {
    name: 'Charlie',
    breed: 'Chihuahuas',
    age: 6,
    size: 'small',
    sex: 'male',
    imageSrc:
      'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59486286/1/?bust=1673903094&width=667',
    userId: 5,
  },
  {
    name: 'Daisy',
    breed: 'Silky Terriers',
    age: 1,
    size: 'small',
    sex: 'female',
    imageSrc:
      'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
    userId: 6,
  },
  {
    name: 'Rocky',
    breed: 'Siberian Huskies',
    age: 2,
    size: 'large',
    sex: 'male',
    imageSrc:
      'https://kc-media-cdn-live.azureedge.net/cache/c/a/b/3/a/2/cab3a23ae84ce11e4e4659fb3f884ebeee690b9f.jpg',
    userId: 7,
  },
  {
    name: 'Maggie',
    breed: 'Pembroke Welsh Corgis',
    age: 8,
    size: 'medium',
    sex: 'female',
    imageSrc:
      'https://hips.hearstapps.com/goodhousekeeping/assets/17/30/pembroke-welsh-corgi.jpg',
    userId: 8,
  },
  {
    name: 'Toby',
    breed: 'Australian Shepherds',
    age: 5,
    size: 'small',
    sex: 'male',
    imageSrc:
      'https://assets1.cbsnewsstatic.com/hub/i/r/2020/05/05/7f40e69e-da4e-4f48-891f-ff44c7483f15/thumbnail/640x427/df92cca498226e6548fe9ec617955926/gettyimages-506082982.jpg',
    userId: 9,
  },
  {
    name: 'Molly',
    breed: 'Pulik',
    age: 4,
    size: 'medium',
    sex: 'female',
    imageSrc:
      'https://www.cesarsway.com/wp-content/uploads/2015/06/7-reasons-to-adopt-a-senior-dog.jpg',
    userId: 10,
  },
  {
    name: 'Jack',
    breed: 'Mixed',
    age: 2,
    size: 'small',
    sex: 'male',
    imageSrc:
      'https://hips.hearstapps.com/hmg-prod/images/smartest-dog-breeds-1651788779.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*',
    userId: 11,
  },
  {
    name: 'Bella',
    breed: 'Cavalier King Charles Spaniels',
    age: 1,
    size: 'small',
    sex: 'female',
    imageSrc:
      'https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg',
    userId: 12,
  },
  {
    name: 'Bear',
    breed: 'Labrador Retrievers',
    age: 6,
    size: 'extra-large',
    sex: 'male',
    imageSrc: 'https://images.indianexpress.com/2022/05/dogs_1200.jpg',
    userId: 13,
  },
  {
    name: 'Lucy',
    breed: 'Mixed',
    age: 3,
    size: 'medium',
    sex: 'female',
    imageSrc:
      'https://www.southernliving.com/thmb/WHH7cdFT3YMJlJN4y7y3lsAKvJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-114166947-1-268128f97e5c415baede328c1fe32f55.jpg',
    userId: 14,
  },
  {
    name: 'Zoey',
    breed: 'Labrador Retrievers',
    age: 5,
    size: 'large',
    imageSrc:
      'https://lh3.googleusercontent.com/tjkXqyhxEsGo5IrL46z8FkFvoQmRHphl8qo-oL3ot8CIqInHrviNH4d7s6dgqs7pI42AJ5SBLfF89fy9RG6-1cP05paDJRzqfSnhLugdo6VGWzyQn4lgfPYW-4Hn8vyL4l2ruXvw-bAmnytE4dIZV0WO96pMDeg0jnCAjqnChv1UkkikmYQDuQPQeyejpHXlwrRQ94IBcE7mNFrEvbKJAXp6pgAm-o2QqNfCwGgUlOYUH0Vqm5lnQgf-brsX7N_YX9YP8liCX47RMzuSgIX-Na9mTzyJ7bXLJijumRzgmhn9Zf1Qj5eEfVFeMiEvkzG0hy13BxU-51_q1Loh36uOIKaaL6tQWhgu8gw4SMKSdhPe0PmrwPtr_ALdD3LOob-QcrWPuCRuYduAFahDbObyb4pW6HLDpKLxMYbxGHhJVSlMzFc59c-2pKNiWC7pT3qHhC0u9IV8q3kvT4He0jMaNlWPTrI-txOqXs2nolkFmfvgD2Kb6mCcpa3XVhzEt1k0cnrDENQf5a5MLHM_qk3MHDw_WIlE7PEnzW1XTeUcs9210k07oIUZ42uqFHXbxhUa0sreD5QldtEnspHznQYVVB10jeD3qogAWsTI99wK-E02WukRjXjZm07bg7_ELhESpfni0AHWs7IWbTylkAxlO6wFdU6KJ6TCBJFhmE7KSAe68whkFh1FNUFlWZom2ih2zkLL_dL6dlTei2Xe9V7_h0KH-IryV6Mfry_zK8pTDKQCdgRbL_4jVTBeiDIQ9dnFSn6669SkAuRQUt_z1yXm1i5-fc_iZEjCOXXNhPEdKdxjvrvb8hpiKPEAXj_pQpS7WCN4xxIvtMBmJPsjG_q80YwXNH2FHWvFpibnfkfRul37Pp5U9DnC9PjJYllNUqQe8lSxGBO2MJDHFiqMhN12JTXbBhjHMBa2zWgg86S8agjT=w593-h790-s-no?authuser=0',
    sex: 'female',
    userId: 23,
  },
  {
    name: 'Chance',
    breed: 'Mixed',
    age: 5,
    size: 'large',
    imageSrc:
      'https://lh3.googleusercontent.com/33sRWRmcp9nF9zruouwKFMOF8q61qWTv1wTar3xE7zUn_S5EquSnXqhNyeiYVaQ8gCthKd_AH5tJ9uAsd1m_s5yB7dWUdCgddoarM-HS-HFtP5GMakZSP7QlYbyR_eGtYGIeEkMYcVpqRHkyM7pvbTmgBdg5hG8JotX7axNNOMb2qN6oRsQKQt5EUtFSIw5QXpgZGUat_U3JgwPEb1NNa5c0tmbpUNOW_0wjKw7-p7MJcwl8Ojt6EuopEZNHTYLYSPxADSo4ayvesjuAQ1s6zriRKkZLnTNOf45aMA9Pk_F1enZ4QmvAXB6JJ2Pd_ZYpWfhkSWsaERq9uEp-WQTskIKRcEdTBu6tyVmliRO8zBn0SDlFTZyYgy1UyidRzqJoIOQ60Oq5NUFNrzY_OT9n91m9hjQERyavi11_LYE81O9t2ENOF9yWj0Lw4jCTGBsU4Mv4EMO7vrYonSXGn8mewNx7NH6CRqRwjsbZ4LwNj3-3roSDkdVjdV3JtzkPQho1wQD5aw8L1i7V0zkg0RHtoV4e7E2kUcs_ggCD626-whSPoBGbUVgYk-e1SY7n7ObWW6KZnuvhe4qMp1WsgcDCCGZEKZByHHx51k90gPprqIBU66ZJCOLbIPXBUwnMgEKvMkUXEcf7iSr8hkMs7t-U_zeueub_WPBJeeloesAzfML4ZLuTZxxZE-uw7utxQKa3g3Dkp9tN9QjWtQjBoQ25mSyOB5lIvy7Rg3UiV3Lp3hp_H-CqN9yWRSnPjXzt1Zatg3yKXcRPbMFJWjv25SHmIwwipYkUcHO05Hv-RtfThg4uK07OZaXv-aJ5g049-08elROaGDXSO_kJA-SdSxmPyxwu8gFxgjIGwOLfp4nmTEQZVPRCuOQEZw44r_NidGGKw3wLzr26bXyp93nzva2YQvuBGft5ol52UaqlZaTNEH-d=w593-h790-s-no?authuser=0',
    sex: 'male',
    userId: 23,
  },
  {
    name: 'Saxen',
    breed: 'Mixed',
    age: 5,
    size: 'large',
    imageSrc:
      'https://lh3.googleusercontent.com/pw/AMWts8AL79nUfG2rGBp-82ddSJBVDh6gtf5OqtEQSp_Fo2eswb7DzvfQyXj_ltz6drybu4DQz4D0HEYMteZ80wl_hDGAW8E7tSSTx9Et9_xNHmMTTMeOJOuj1zOUzY2bx7xRWm1UmMsQSLOrScGo3cuIZeUc=w1178-h1178-s-no?authuser=0',
    sex: 'male',
    userId: 21,
  },
];

module.exports = pets;
