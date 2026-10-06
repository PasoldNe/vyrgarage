# VYR Garage — AutoGestor

Projeto independente de gestão de oficina em React, TypeScript, Vite e Tailwind CSS. O visual, os textos, os dados de demonstração e os fluxos da versão enviada foram preservados.

## Rodar no computador

Requisitos: Node.js 22.12 ou superior e pnpm 11.25.0.

Se o pnpm ainda não estiver instalado:

```sh
npm install -g pnpm@11.25.0
```

Na pasta do projeto:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra o endereço informado no terminal, normalmente `http://localhost:5173`.

Também é possível usar `npm install` e `npm run dev`; o arquivo de versões reproduzíveis fornecido é o `pnpm-lock.yaml`.

## Compilar e verificar

```sh
pnpm typecheck
pnpm build
pnpm preview
```

`pnpm build` verifica os tipos e gera a pasta `dist/`. A pasta `dist/` incluída no ZIP já contém uma compilação pronta. Sirva seu conteúdo por HTTP em uma hospedagem estática. Para testar essa compilação localmente sem instalar as dependências do projeto, entre em `dist/` e use um servidor HTTP; por exemplo, se tiver Python instalado:

```sh
python -m http.server 8080
```

Nesse caso, acesse `http://localhost:8080`. Abrir o HTML diretamente com um duplo clique não substitui o servidor HTTP.

Formatação:

```sh
pnpm format
pnpm format:check
```

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` instala as dependências, executa
`pnpm build` e publica somente o conteúdo de `dist/`. A pasta continua no
`.gitignore`; não é necessário versionar os arquivos compilados.

1. No repositório do GitHub, abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie o workflow para a branch `main`. Cada push nessa branch gera uma nova
   publicação. Também é possível executá-lo em **Actions → Deploy to GitHub Pages
   → Run workflow**.

O site fica disponível em `https://pasoldne.github.io/vyrgarage/` após a conclusão
do workflow. A configuração `base: "./"` do Vite mantém os arquivos compilados
acessíveis nessa subpasta.

## Organização

| Caminho               | Responsabilidade                                                 |
| --------------------- | ---------------------------------------------------------------- |
| `src/App.tsx`         | Alternância entre cliente e mecânico, navegação e menu móvel     |
| `src/pages/cliente/`  | Agendamento, acompanhamento, orçamento, manutenção e faturamento |
| `src/pages/mecanico/` | Fila de serviços, diagnóstico, prazos e notificações             |
| `src/components/`     | Sidebar, cabeçalho, cartões e indicadores compartilhados         |
| `src/data/`           | Dados de demonstração separados por assunto                      |
| `src/config/`         | Menus e configuração de status                                   |
| `src/types/`          | Tipos de domínio compartilhados                                  |
| `src/index.css`       | Fontes, paleta, estilos globais e animações originais            |
| `vite.config.ts`      | Configuração independente de desenvolvimento e compilação        |
| `public/robots.txt`   | Mantém a orientação original de não indexação                    |

## O que foi refatorado

- O arquivo que concentrava a aplicação foi dividido em nove telas e cinco componentes compartilhados.
- Os tipos, menus, dados e configuração dos status foram separados do código das telas.
- Foram removidos os arquivos `.figma/`, comandos de publicação, plugins de integração, variáveis específicas da plataforma e marcadores do HTML.
- O HTML agora tem idioma `pt-BR`, título e descrição próprios.
- A configuração de compilação usa caminhos relativos para permitir servir a aplicação em subpastas.
- Foram removidos o arquivo de código duplicado em texto e os arquivos auxiliares do ambiente de geração.
- A formatação foi padronizada com Prettier e a compilação inclui a checagem de TypeScript.

Os textos visíveis “AutoGestor”, os perfis, os nomes, os valores e as datas de demonstração foram mantidos para preservar a interface enviada.

## Escopo funcional original

A aplicação enviada é uma demonstração de frontend. As confirmações de agendamento e orçamento usam alertas; as notificações são registradas no estado local da tela. Alguns botões, como pagamento, NFe e salvar prazos, não tinham integração implementada no original. Esses comportamentos foram preservados, sem acrescentar autenticação, banco de dados, pagamentos ou envio real de mensagens.

As fontes Outfit e DM Mono continuam sendo carregadas pelo Google Fonts, como na versão original.

Não havia um elemento de marca-d'água nas telas do código enviado. A versão independente não usa o ambiente nem os scripts de publicação do Figma. Para usar esta versão, rode ou hospede o projeto entregue; a publicação antiga na plataforma continua sendo um ambiente separado.

## Validação desta entrega

- Instalação com as versões registradas, checagem de TypeScript e compilação de produção concluídas.
- Formatação verificada com Prettier.
- As nove telas e os estados interativos foram comparados com o projeto original em desktop de 1440 × 1000 e celular de 390 × 844, em 33 capturas.
- Os estilos calculados e as posições e dimensões de todos os elementos comparados coincidiram. As imagens tiveram apenas 39 pixels de variação de renderização ao todo, dentro da tolerância definida para o teste.
- Foram exercitados o preenchimento e retorno das etapas do agendamento, confirmação por alerta, seleção e cálculo de orçamento, alternância entre Kanban e tabela, inclusão e remoção de peças, cálculo de mão de obra, alteração de datas, registro local de notificações e navegação pelo menu móvel.
- Nenhum erro JavaScript foi registrado durante esses fluxos.
- A comparação visual foi executada no mesmo navegador e com o carregamento externo de fontes desativado nas duas versões; as declarações das fontes originais foram preservadas no projeto.
- O código das telas, a configuração de compilação e os arquivos compilados foram verificados sem referências ou scripts de integração com a plataforma de origem.
