// AutoParts Africa - Multi-language System (i18n)
const i18n = {
  current: localStorage.getItem('lang') || 'en',
  strings: {
  nav_home:       { zh:'首页',       en:'Home',        es:'Inicio' },
  nav_products:   { zh:'产品目录',   en:'Products',    es:'Productos' },
  nav_about:      { zh:'关于我们',   en:'About Us',    es:'Sobre Nosotros' },
  nav_contact:    { zh:'联系我们',   en:'Contact',     es:'Contacto' },
  nav_quote:      { zh:'获取报价',   en:'Get Quote',   es:'Cotizar' },
  hero_title_full:{ zh:'优质 <span>日系</span> 汽车配件<br>直达 <span>非洲</span>', en:'Premium <span>Japanese</span> Auto Parts<br>Delivered Across <span>Africa</span>', es:'<span>Autopartes</span> Japonesas Premium<br>Entregadas en Toda <span>Africa</span>' },
  hero_desc:      { zh:'您的日系车配件信赖供应商。丰田、本田、日产、三菱等品牌配件，竞争力价格，可靠运输至非洲各主要港口。', en:'Your trusted source for genuine and aftermarket Toyota, Honda, Nissan, Mitsubishi and more. Competitive pricing, reliable shipping to all major African ports.', es:'Su fuente confiable de repuestos genuinos y aftermarket para Toyota, Honda, Nissan, Mitsubishi y mas. Precios competitivos, envios confiables a todos los principales puertos africanos.' },
  hero_browse:    { zh:'浏览产品',   en:'Browse Products', es:'Ver Productos' },
  hero_request:   { zh:'索取报价',   en:'Request Quote', es:'Solicitar Cotizacion' },
  stat_stock:     { zh:'库存配件',   en:'Parts in Stock', es:'Piezas en Stock' },
  stat_countries: { zh:'非洲国家覆盖', en:'African Countries Served', es:'Paises Africanos' },
  stat_years:     { zh:'年行业经验', en:'Years Experience', es:'Anos de Experiencia' },
  stat_satisfaction: { zh:'客户满意度', en:'Client Satisfaction', es:'Satisfaccion' },
  cat_title:      { zh:'产品分类',   en:'Product Categories', es:'Categorias de Productos' },
  cat_desc:       { zh:'覆盖所有主流日系品牌的全面配件系列', en:'Comprehensive range of auto parts for all major Japanese brands', es:'Amplia gama de autopartes para las principales marcas japonesas' },
  brands_title:   { zh:'我们供应的品牌', en:'Brands We Supply', es:'Marcas que Suministramos' },
  brands_desc:    { zh:'专注所有日本主流汽车品牌', en:'Specialized in all major Japanese automotive brands', es:'Especializados en las principales marcas japonesas' },
  featured_title: { zh:'精选产品',   en:'Featured Products', es:'Productos Destacados' },
  featured_desc:  { zh:'非洲市场最畅销的配件', en:'Our most in-demand parts across African markets', es:'Nuestras piezas mas demandadas en los mercados africanos' },
  view_all:       { zh:'查看全部产品', en:'View All Products', es:'Ver Todos los Productos' },
  inquire_now:    { zh:'立即询价',   en:'Inquire Now', es:'Consultar Ahora' },
  hot_seller:     { zh:'热销',       en:'Hot Seller', es:'Mas Vendido' },
  new_arrival:    { zh:'新品上架',   en:'New Arrival', es:'Recien Llegado' },
  inquiry_price:  { zh:'询价',       en:'Inquiry for Price', es:'Consultar Precio' },
  why_title:      { zh:'为什么选择我们', en:'Why Choose AutoParts Africa', es:'Por Que Elegir AutoParts Africa' },
  why_desc:       { zh:'非洲大陆日系配件首选供应商', en:'The preferred Japanese auto parts supplier across the African continent', es:'El proveedor preferido de autopartes japonesas en el continente africano' },
  markets_title:  { zh:'服务市场',   en:'Markets We Serve', es:'Mercados que Servimos' },
  markets_desc:   { zh:'非洲各地配件经销商和维修厂的信任伙伴', en:'Trusted partner for auto parts distributors and workshops across Africa', es:'Socio de confianza para distribuidores y talleres en toda Africa' },
  test_title:     { zh:'客户评价',   en:'What Our Clients Say', es:'Lo que Dicen Nuestros Clientes' },
  test_desc:      { zh:'全非洲经销商和维修厂的信任', en:'Trusted by dealers and workshops across the continent', es:'Respaldados por comerciantes y talleres en todo el continente' },
  cta_title:      { zh:'准备采购优质日系配件？', en:'Ready to Source Quality Japanese Auto Parts?', es:'Listo para Adquirir Autopartes Japonesas de Calidad?' },
  cta_desc:       { zh:'发送您的配件清单，24小时内获取有竞争力的报价', en:'Send us your parts list and receive a competitive quotation within 24 hours', es:'Envienos su lista de piezas y reciba una cotizacion competitiva en 24 horas' },
  cta_btn:        { zh:'立即获取报价', en:'Get Your Quote Now', es:'Obtenga su Cotizacion Ahora' },
  footer_about:   { zh:'关于 AutoParts Africa', en:'About AutoParts Africa', es:'Sobre AutoParts Africa' },
  footer_about_desc:{ zh:'您在非洲的日系汽车配件首选来源。供应丰田、本田、日产、三菱、铃木、马自达等品牌优质配件。', en:'Your premier source for Japanese automotive parts in Africa. Quality parts for Toyota, Honda, Nissan, Mitsubishi, Suzuki, Mazda and more.', es:'Su principal fuente de autopartes japonesas en Africa. Piezas de calidad para Toyota, Honda, Nissan, Mitsubishi, Suzuki, Mazda y mas.' },
  footer_hours:   { zh:'营业时间: 周一至周五 8:00-18:00 (GMT+8)', en:'Business hours: Mon-Fri 8:00-18:00 (GMT+8)', es:'Horario: Lun-Vie 8:00-18:00 (GMT+8)' },
  footer_links:   { zh:'快速链接',   en:'Quick Links', es:'Enlaces Rapidos' },
  footer_brands:  { zh:'品牌',       en:'Brands',      es:'Marcas' },
  footer_contact: { zh:'联系信息',   en:'Contact Info', es:'Contacto' },
  footer_copyright:{ zh:'版权所有。日系汽车配件服务非洲。', en:'All Rights Reserved. | Japanese Auto Parts for Africa', es:'Todos los Derechos Reservados. | Autopartes Japonesas para Africa' },
  prod_hero_full:{ zh:'我们的 <span>产品</span> 目录', en:'Our <span>Product</span> Catalog', es:'Nuestro <span>Catalogo</span> de Productos' },
  prod_hero_title:{ zh:'产品',       en:'Our Product', es:'Nuestro' },
  prod_hero_title2:{ zh:'目录',      en:'Catalog',     es:'Catalogo' },
  prod_hero_desc:{ zh:'丰富的日系配件，随时发往非洲', en:'Extensive range of Japanese auto parts ready for shipment to Africa', es:'Amplia gama de autopartes japonesas listas para envio a Africa' },
  search_placeholder:{ zh:'按名称、SKU或车型搜索...', en:'Search parts by name, SKU or model...', es:'Buscar por nombre, SKU o modelo...' },
  all_brands:     { zh:'全部品牌',   en:'All Brands',  es:'Todas las Marcas' },
  all_categories: { zh:'全部分类',   en:'All Categories', es:'Todas las Categorias' },
  showing_all:{ zh:'显示全部产品', en:'Showing all products', es:'Mostrando todos los productos' },
  showing_results:{ zh:'显示',       en:'Showing',     es:'Mostrando' },
  of_text:        { zh:'共',         en:'of',          es:'de' },
  products_text:  { zh:'款产品',     en:'products',    es:'productos' },
  no_products:    { zh:'未找到产品', en:'No Products Found', es:'No se Encontraron Productos' },
  no_products_desc:{ zh:'请调整搜索条件或筛选条件', en:'Try adjusting your search or filter criteria', es:'Intente ajustar su busqueda o criterios de filtro' },
  cant_find:      { zh:'找不到需要的配件？', en:"Can't Find What You Need?", es:'No encuentra lo que necesita?' },
  cant_find_desc:{ zh:'发送您的配件清单给我们，我们以最优价格为您采购', en:"Send us your parts list and we'll source it for you at the best price", es:'Envienos su lista de piezas y se las conseguimos al mejor precio' },
  send_inquiry:   { zh:'发送询价',   en:'Send Inquiry', es:'Enviar Consulta' },
  fits_text:      { zh:'适配车型:',  en:'Fits:',       es:'Compatible:' },
  about_hero_full:{ zh:'<span>关于</span> AutoParts Africa', en:'About <span>AutoParts</span> Africa', es:'<span>Sobre</span> AutoParts Africa' },
  about_hero:     { zh:'关于',       en:'About',       es:'Sobre' },
  about_hero2:    { zh:'AutoParts Africa', en:'AutoParts Africa', es:'AutoParts Africa' },
  about_hero_desc:{ zh:'连接日本汽车工业卓越品质与非洲市场的桥梁', en:'Bridging the gap between Japanese automotive excellence and African markets', es:'Uniendo la excelencia automotriz japonesa con los mercados africanos' },
  about_story:    { zh:'我们的故事', en:'Our Story',   es:'Nuestra Historia' },
  about_mission:  { zh:'使命与愿景', en:'Our Mission & Vision', es:'Mision y Vision' },
  about_mission_desc:{ zh:'用可靠的汽车配件推动非洲前进', en:'Driving Africa forward with reliable automotive parts', es:'Impulsando Africa con autopartes confiables' },
  about_mission_title:{ zh:'我们的使命', en:'Our Mission', es:'Nuestra Mision' },
  about_vision_title:{ zh:'我们的愿景', en:'Our Vision', es:'Nuestra Vision' },
  about_commit_title:{ zh:'我们的承诺', en:'Our Commitment', es:'Nuestro Compromiso' },
  about_values:   { zh:'我们的价值观', en:'Our Values', es:'Nuestros Valores' },
  about_values_desc:{ zh:'指导我们一切工作的原则', en:'The principles that guide everything we do', es:'Los principios que guian todo lo que hacemos' },
  about_quality:{ zh:'质量第一', en:'Quality First', es:'Calidad Primero' },
  about_partner_v:{ zh:'合作伙伴', en:'Partnership', es:'Asociacion' },
  about_reliability:{ zh:'可靠性', en:'Reliability', es:'Confiabilidad' },
  about_africa_focus:{ zh:'聚焦非洲', en:'Africa-Focused', es:'Enfocados en Africa' },
  about_why:      { zh:'为什么聚焦非洲', en:'Why We Focus on Africa', es:'Por Que Nos Enfocamos en Africa' },
  about_why_desc:{ zh:'非洲是全球增长最快的汽车市场之一', en:"Africa is one of the world's fastest-growing automotive markets", es:'Africa es uno de los mercados automotrices de mas rapido crecimiento' },
  about_partner:  { zh:'今天就与 AutoParts Africa 合作', en:'Partner With AutoParts Africa Today', es:'Asociese con AutoParts Africa Hoy' },
  about_partner_desc:{ zh:'加入非洲数百家满意的配件经销商和维修厂', en:'Join hundreds of satisfied auto parts dealers and workshops across Africa', es:'Unase a cientos de comerciantes y talleres satisfechos en Africa' },
  contact_hero_full:{ zh:'<span>联系</span> 我们', en:'Get In <span>Touch</span>', es:'Pongase en <span>Contacto</span>' },
  contact_hero:   { zh:'联系',       en:'Get In',      es:'Pongase en' },
  contact_hero2:  { zh:'我们',       en:'Touch',       es:'Contacto' },
  contact_hero_desc:{ zh:'我们随时为您解决非洲各地的配件需求', en:"We're here to help with your auto parts needs across Africa", es:'Estamos aqui para ayudar con sus necesidades de autopartes en Africa' },
  contact_form_title:{ zh:'发送询价', en:'Send Us an Inquiry', es:'Envienos una Consulta' },
  label_name:     { zh:'姓名 *',     en:'Full Name *', es:'Nombre Completo *' },
  label_company:  { zh:'公司名称',   en:'Company Name', es:'Empresa' },
  label_email:    { zh:'邮箱 *',     en:'Email Address *', es:'Correo Electronico *' },
  label_phone:    { zh:'电话/WhatsApp *', en:'Phone / WhatsApp *', es:'Telefono / WhatsApp *' },
  label_country:  { zh:'所在国家 *', en:'Your Country *', es:'Su Pais *' },
  label_brand:    { zh:'感兴趣品牌', en:'Interested Brand', es:'Marca de Interes' },
  label_inquiry:  { zh:'询价类型 *', en:'Inquiry Type *', es:'Tipo de Consulta *' },
  label_message:  { zh:'留言/配件清单 *', en:'Your Message / Parts List *', es:'Su Mensaje / Lista de Piezas *' },
  send_btn:       { zh:'发送询价',   en:'Send Inquiry', es:'Enviar Consulta' },
  faq_title:      { zh:'常见问题',   en:'Frequently Asked Questions', es:'Preguntas Frecuentes' },
  faq_desc:       { zh:'非洲客户常见问题解答', en:'Common questions from our African clients', es:'Preguntas comunes de nuestros clientes africanos' },
  breadcrumb_home:{ zh:'首页',       en:'Home',        es:'Inicio' },
  breadcrumb_prod:{ zh:'产品',       en:'Products',    es:'Productos' },
  breadcrumb_about:{ zh:'关于我们',  en:'About Us',    es:'Sobre Nosotros' },
  breadcrumb_contact:{ zh:'联系我们', en:'Contact',    es:'Contacto' },
  select_country:{ zh:'选择国家', en:'Select country', es:'Seleccionar pais' },
  select_brand:{ zh:'选择品牌 (可选)', en:'Select brand (optional)', es:'Seleccionar marca (opcional)' },
  select_inquiry:{ zh:'选择询价类型', en:'Select inquiry type', es:'Seleccionar tipo de consulta' },
  inquiry_quote:{ zh:'询价请求', en:'Request for Quotation', es:'Solicitud de Cotizacion' },
  inquiry_catalog:{ zh:'产品目录请求', en:'Product Catalog Request', es:'Solicitud de Catalogo' },
  inquiry_shipping:{ zh:'运输物流咨询', en:'Shipping & Logistics Inquiry', es:'Consulta de Envio y Logistica' },
  inquiry_partner:{ zh:'合作机会', en:'Partnership Opportunity', es:'Oportunidad de Asociacion' },
  other_country:{ zh:'其他非洲国家', en:'Other African Country', es:'Otro Pais Africano' },
  multiple_brands:{ zh:'多个品牌', en:'Multiple Brands', es:'Multiples Marcas' },
  label_name_ph:{ zh:'您的姓名', en:'Your full name', es:'Su nombre completo' },
  label_company_ph:{ zh:'您的公司名称', en:'Your company name', es:'Nombre de su empresa' },
  label_email_ph:{ zh:'your@email.com', en:'your@email.com', es:'su@email.com' },
  label_phone_ph:{ zh:'您的电话号码含国家代码', en:'Your phone number with country code', es:'Su numero de telefono con codigo de pais' },
  label_message_ph:{ zh:'请描述您需要的配件：车型/年份/零件名称/数量/运输方式', en:'Please describe the parts you need: vehicle make/model/year, part names, quantities, and preferred shipping method', es:'Describa las piezas que necesita: marca/modelo/ano del vehiculo, nombres de piezas, cantidades y metodo de envio preferido' },
  lang_label:     { zh:'中文',       en:'English',     es:'Espanol' },
  },
  t(key) {
    const s = this.strings[key];
    return (s && s[this.current]) ? s[this.current] : (s && s['en']) ? s['en'] : key;
  },
  switchTo(lang) {
    this.current = lang;
    localStorage.setItem('lang', lang);
    this.translatePage();
  },
  translatePage() {
    document.documentElement.lang = this.current === 'zh' ? 'zh-CN' : this.current === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = text; }
      else if (el.tagName === 'META') { el.content = text; }
      else { el.textContent = text; }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: this.current } }));
  }
};
document.addEventListener('DOMContentLoaded', () => { i18n.translatePage(); });
