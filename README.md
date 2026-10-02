# Vitta

Interface de rede social responsiva construída com Next.js, React, TypeScript, Tailwind CSS e Lucide.

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Recursos incluídos

- Feed responsivo com cards de publicações e stories
- Busca de conteúdo no feed
- Curtir/descurtir, comentar e salvar publicações
- Criador de publicação com atualização imediata do feed
- Sugestões de pessoas com seguir/deixar de seguir
- Navegação desktop e barra inferior mobile
- Estados de notificações e perfil resumido

## Próxima camada de produção

O projeto atual é uma base de experiência funcional no cliente. Para persistência real, configure PostgreSQL/Prisma, um provedor de autenticação e armazenamento de mídia antes do deploy. As variáveis previstas são `DATABASE_URL`, `AUTH_SECRET`, `NEXT_PUBLIC_APP_URL`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET`.
