export type Category = { name: string; slug: string; subcategories: string[] };
export type Product = { id: string; slug: string; name: string; category: string; categorySlug: string; subcategory: string; store: "Mercado Livre"; affiliateUrl: string; image?: string; price?: number; priceCapturedAt?: string; previousPrice?: number; discount?: number; description?: string; status: "active" };
export const categories: Category[] = [
  { name: "Eletrônicos", slug: "eletronicos", subcategories: ["Smartphones", "Televisores", "Outros eletrônicos"] },
  { name: "Informática e Games", slug: "informatica-e-games", subcategories: ["Controles", "Acessórios para PC", "Periféricos"] },
  { name: "Casa e Cozinha", slug: "casa-e-cozinha", subcategories: ["Eletrodomésticos", "Cozinha", "Organização"] },
  { name: "Fitness e Saúde", slug: "fitness-e-saude", subcategories: ["Suplementos", "Academia", "Fitness"] },
  { name: "Moda", slug: "moda", subcategories: ["Moda Feminina", "Moda Masculina", "Calças", "Blusas", "Vestidos", "Moda Fitness"] },
  { name: "Acessórios", slug: "acessorios", subcategories: ["Relógios", "Acessórios pessoais"] },
];
const make = (id: number, slug: string, name: string, category: string, categorySlug: string, subcategory: string, affiliateUrl: string): Product => ({ id: String(id), slug, name, category, categorySlug, subcategory, store: "Mercado Livre", affiliateUrl, status: "active" });
export const products: Product[] = [
  make(1,"air-fryer-oven-philco-paf11b","Fritadeira Air Fryer Oven 11 Litros 1800W 8 Funções Philco PAF11B","Casa e Cozinha","casa-e-cozinha","Eletrodomésticos","https://meli.la/2Ze1HU9"),
  make(2,"kit-potes-vidro-rishon","Kit 10 Pote De Vidro Marmita Hermético 640ml Freezer Fitness Rishon","Casa e Cozinha","casa-e-cozinha","Organização","https://meli.la/31199JY"),
  make(3,"samsung-galaxy-a36-5g","Smartphone Samsung Galaxy A36 5G 128GB 6GB RAM Câmera Tripla de até 50MP Selfie de 12MP IP67 Super AMOLED 6.7’’ NFC Recursos AI Android e Segurança Snapdragon - Branco","Eletrônicos","eletronicos","Smartphones","https://meli.la/2faUpXG"),
  make(4,"smart-tv-philco-roku-p32crb","Smart TV 32 Philco Roku TV Dolby Áudio HDR10 P32CRB","Eletrônicos","eletronicos","Televisores","https://meli.la/1m6LVCj"),
  make(5,"controle-easysmx-x05","Controle Bluetooth Sem Fio EasySMX X05 Para PC Android, Cor Preto","Informática e Games","informatica-e-games","Controles","https://meli.la/1wGZ1ZA"),
  make(6,"creatina-growth-250g","Creatina Growth Supplements Monohidratada em Pó Sem Sabor 250g","Fitness e Saúde","fitness-e-saude","Suplementos","https://meli.la/2bDpKW1"),
  make(7,"calca-mom-jeans-marmorizada","Calça Mom Jeans Feminina Cintura Alta Marmorizada","Moda","moda","Calças","https://meli.la/1c8iRyS"),
  make(8,"legging-lupo-fitness","Calça Legging Lupo Fitness Não Fica Transparente Compressão","Moda","moda","Moda Fitness","https://meli.la/26jirqr"),
  make(9,"camisa-polo-feminina","Camisa Gola Polo Feminina Básica Algodão Social Uniforme","Moda","moda","Blusas","https://meli.la/1Eps5Ss"),
  make(10,"calca-wide-leg-stillge","Calça Jeans Wide Leg Feminina Cintura Alta Sem Lycra Stillge","Moda","moda","Calças","https://meli.la/2PmJdoA"),
  make(11,"moletom-canguru-masculino","Moletom Canguru Com Capuz Masculino Flanelado Liso","Moda","moda","Moda Masculina","https://meli.la/22Bc77w"),
  make(12,"kit-3-leggings-grossas","Kit 3 Calças Legging Legg Grossa Zero Transparência Promoção","Moda","moda","Moda Fitness","https://meli.la/2SEuFkv"),
  make(13,"vestido-tule-ombro-unico","Vestido Feminino Longo De Festa Em Tule, Ombro Único OX004","Moda","moda","Vestidos","https://meli.la/1QiRUia"),
  make(14,"legging-poliamida-sem-costura","Calça Legging Poliamida Sem Costura Benévola Leg Confortável","Moda","moda","Moda Fitness","https://meli.la/1kmodp8"),
  make(15,"kit-3-leggings-empina","Kit 3 Calças Legging Empina Levanta Bumbum Fitness Academia","Moda","moda","Moda Fitness","https://meli.la/1HrkCUj"),
  make(16,"calca-cargo-masculina-jeans","Calça Cargo Masculina Jeans Cós De Elástico Streetwear Larga","Moda","moda","Moda Masculina","https://meli.la/2Vv1drY"),
  make(17,"relogio-feminino-orient-gw","Relógio Feminino Orient Original A Prova D’Água Luxo GW","Acessórios","acessorios","Relógios","https://meli.la/2H7Zuhj"),
  make(18,"blusa-tule-segunda-pele","Blusa Tule Transparente Feminina Segunda Pele Manga Longa","Moda","moda","Blusas","https://meli.la/2yWbeN3"),
  make(19,"calca-jeans-flare-blogueira","Calça Jeans Flare Feminina Cintura Alta Elastano Blogueira","Moda","moda","Calças","https://meli.la/2ivA4Zf"),
  make(20,"blusa-muscle-tee-viscolycra","Blusa Feminino Muscle Tee Regata Viscolycra Comfy Soltinha","Moda","moda","Blusas","https://meli.la/2fiZkEj"),
  make(21,"blusa-evangelica-elegante","Blusa Feminina Evangélica Elegante Social Manga Curta","Moda","moda","Blusas","https://meli.la/2AxGNtD"),
];
const imagesBySlug: Record<string, string> = {
  "air-fryer-oven-philco-paf11b":"https://http2.mlstatic.com/D_Q_NP_2X_633098-MLA92276027266_092025-V.webp", "kit-potes-vidro-rishon":"https://http2.mlstatic.com/D_Q_NP_2X_900432-MLA113518359539_062026-V.webp", "samsung-galaxy-a36-5g":"https://http2.mlstatic.com/D_Q_NP_2X_944288-MLA116511342948_092026-V.webp", "smart-tv-philco-roku-p32crb":"https://http2.mlstatic.com/D_Q_NP_2X_875689-MLA107805437119_022026-V.webp", "controle-easysmx-x05":"https://http2.mlstatic.com/D_Q_NP_2X_786044-MLA99920305379_112025-V.webp", "creatina-growth-250g":"https://http2.mlstatic.com/D_Q_NP_2X_662415-MLA97812910758_112025-V.webp", "calca-mom-jeans-marmorizada":"https://http2.mlstatic.com/D_Q_NP_2X_799787-MLB85664619217_062025-V-calca-mom-jeans-feminina-cintura-alta-marmorizada.webp", "legging-lupo-fitness":"https://http2.mlstatic.com/D_Q_NP_2X_695622-MLB85935887155_062025-V-calca-legging-lupo-fitness-no-fica-transparente-compresso.webp", "camisa-polo-feminina":"https://http2.mlstatic.com/D_Q_NP_2X_748728-MLB114023913304_072026-V-camisa-gola-polo-feminina-basica-algodo-social-uniforme.webp", "calca-wide-leg-stillge":"https://http2.mlstatic.com/D_Q_NP_2X_717613-MLB96633630079_102025-V-calca-jeans-wide-leg-feminina-cintura-alta-sem-lycra-stillge.webp", "moletom-canguru-masculino":"https://http2.mlstatic.com/D_Q_NP_2X_697113-MLB114639026987_072026-V-moletom-canguru-com-capuz-masculino-flanelado-liso.webp", "kit-3-leggings-grossas":"https://http2.mlstatic.com/D_Q_NP_2X_789046-MLB91870342743_092025-V-kit-3-calcas-legging-legg-grossa-zero-transparncia-promoco.webp", "vestido-tule-ombro-unico":"https://http2.mlstatic.com/D_Q_NP_2X_984176-MLB105359286291_012026-V-vestido-feminino-longo-de-festa-em-tule-ombro-unico-ox004.webp", "legging-poliamida-sem-costura":"https://http2.mlstatic.com/D_Q_NP_2X_813874-MLB112499025488_062026-V-calca-legging-poliamida-sem-costura-benevola-leg-confortavel.webp", "kit-3-leggings-empina":"https://http2.mlstatic.com/D_Q_NP_2X_968450-MLB83802436041_042025-V.webp", "calca-cargo-masculina-jeans":"https://http2.mlstatic.com/D_Q_NP_2X_740695-MLB117804313759_092026-V-calca-cargo-masculina-jeans-cos-de-elastico-streetwear-larga.webp", "relogio-feminino-orient-gw":"https://http2.mlstatic.com/D_Q_NP_2X_937771-MLB115256661094_082026-V.webp", "blusa-tule-segunda-pele":"https://http2.mlstatic.com/D_Q_NP_2X_740301-MLB84701093399_052025-V-blusa-tule-transparente-feminina-segunda-pele-manga-longa.webp", "calca-jeans-flare-blogueira":"https://http2.mlstatic.com/D_Q_NP_2X_604038-MLB97000561336_112025-V-calca-jeans-flare-feminina-cintura-alta-elastano-blogueira.webp", "blusa-muscle-tee-viscolycra":"https://http2.mlstatic.com/D_Q_NP_2X_631187-MLB117427101055_092026-V-blusa-feminino-muscle-tee-regata-viscolycra-comfy-soltinha.webp", "blusa-evangelica-elegante":"https://http2.mlstatic.com/D_Q_NP_2X_860723-MLB88308930328_072025-V-blusa-feminina-evangelica-elegante-social-manga-curta.webp",
};
products.forEach((product) => { product.image = imagesBySlug[product.slug]; });
// Valores observados diretamente nas páginas públicas das ofertas em 01/10/2026.
// Eles são estáticos: a loja pode alterar preço, estoque e condições a qualquer momento.
const staticPricesById: Record<string, number> = {
  "1": 377.52, "2": 89.81, "3": 1289, "4": 1049, "5": 159,
  "6": 39.9, "7": 53, "8": 147.56, "9": 29.9, "10": 63.9,
  "11": 24.99, "12": 69.97, "13": 184.3, "14": 78.88, "16": 72,
  "17": 67.69, "18": 29.78, "19": 75.9, "20": 25.9, "21": 36.99,
};
products.forEach((product) => {
  const price = staticPricesById[product.id];
  if (price !== undefined) {
    product.price = price;
    product.priceCapturedAt = "2026-10-01";
  }
});
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
