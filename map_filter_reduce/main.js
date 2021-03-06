/**************** map() ******************/

const product = [
    {id:1, name:'Computer', preise: 500},
    {id:2, name:'tablet', preise: 1000},
    {id:3, name:'phone', preise: 1500},
    {id:4, name:'laptop', preise: 2000},
  ];



  const newProduct = (pro) => `${pro.name} ${pro.preise}`

  console.log(product.map((newProduct)));


/**************** filter() ******************/

const product2 = [
    {id:1, name:'Computer', preise: 500},
    {id:2, name:'tablet', preise: 1000},
    {id:3, name:'Phone', preise: 1500},
    {id:4, name:'laptop', preise: 2000},
  ];

  console.log(
      product2.filter((pro) => pro.preise > 500).
      map((pro) => `${pro.name} ${pro.preise}`)
      );

  console.log(
  product2.filter((pro) => pro.name.toLowerCase().includes('phone'))
  );



  const arr1 = [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa'
  ]


  let result1=arr1.filter((x) => x.length>3)
  console.log(result1);


  const arr2 = [
    6,
    12,
    16,
    18
  ]


  const result2 = arr2.filter(kontrol);
  

  function kontrol(wert){
    return wert >10
  }
  console.log(result2);
  
/**************** reduce() ******************/

const product3 = [
    {id:1, name:'computer', preise: 500},
    {id:2, name:'tablet', preise: 1000},
    {id:3, name:'Phone', preise: 1500},
    {id:4, name:'laptop', preise: 2000},
  ];

 const toplamFiyat =  
 product3.reduce((toplam, pro) => (toplam = toplam + pro.preise ),0)
 console.log(toplamFiyat);


 const yeniDeger = product3.reduce((tum, pro) => (tum = `${tum} ${pro.name}`),[])
 console.log(yeniDeger);



 const tumDizi = product3.reduce((tum,pro) => (tum = [...tum, pro.name]),[]);
 console.log(tumDizi);


 