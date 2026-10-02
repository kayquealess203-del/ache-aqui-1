# Preços oficiais — estado da integração

A integração está preparada, mas não está ativada: nenhum dos 21 links possui vínculo de anúncio verificado e não há token configurado.

1. Obter autorização para uma aplicação Mercado Livre e token válido pelo fluxo OAuth oficial. Configurar `MERCADO_LIVRE_ACCESS_TOKEN` somente no servidor (nunca NEXT_PUBLIC). Renovação do token deve ser configurada no ambiente de produção antes de ativar.
2. Confirmar no destino de cada link o anúncio MLB específico, vendedor e variação. Preencher `data/mercado-livre-bindings.ts` pela chave ID interna, junto com o link de afiliado original. Não usar ID de catálogo como ID de anúncio. Links que levam a vitrine/oferta variável não devem ser vinculados por aproximação.
3. Validar autorização do token para cada anúncio. O adaptador consulta `/items/{id}` e `/items/{id}/sale_price?context=channel_marketplace`. Não há garantia de autorização para anúncios de terceiros. 401/403, expiração, indisponibilidade ou erro resultam em ausência de preço.
4. Variações são bloqueadas conservadoramente até existir validação específica do preço da variação. Não mostrar estoque ou desconto inferido. `regular_amount` é exibido somente quando maior que `amount`, em BRL.
5. Com configuração válida, o navegador consulta ao abrir, ao voltar à aba e a cada cinco minutos enquanto visível. Não é tempo real, webhook ou garantia de preço final; cupom, Pix e condições individuais podem diferir. Sem scraping e sem substituição por valores fictícios.

Referências: https://developers.mercadolivre.com.br/devcenter/api-de-precos e https://developers.mercadolivre.com.br/pt_br/autenticacao-e-autorizacao
