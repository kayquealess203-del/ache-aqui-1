export type Product = { id:string; slug:string; brand:string; name:string; category:string; image:string; price:number; oldPrice?:number; rating:number; reviewCount:number; storage:string[]; colors:string[]; ram:string; sku:string; description:string; specs:Record<string,string>; available:boolean };
export type CartItem = { product:Product; quantity:number; storage:string; color:string };
