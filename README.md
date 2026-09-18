# flugel.biz Qwik City Version

稼働している自分自身の SolidStart 製屋号サイトを、Qwik へリプレイスした実験リポジトリです。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- Qwik City 1.20.0 (SSG)
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Replaced Features

- SolidStart から Qwik への翻訳（Solid JSX → Qwik JSX、Solid Signal → Qwik Signal、関数の QRL 化）
- グローバルストアから Context へ変更
- Meta 情報用共通コンポーネントを共通関数へ変更
- Shiki コードの色付け実行をビルド時に生成、クライアント時の実行なし

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [SvelteKit 版](https://github.com/wings1685/flugel-website-sveltekit)
- [Next.js 版](https://github.com/wings1685/flugel-website-next)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)

## Folder Map

```
src/
├─ _global/
│ ├─ contexts/
│ ├─ lib/
│ ├─ styles/
│ ├─ types/
├─ _test/
├─ components/
│ ├─ features/
│ │ ├─ Highlight/
│ ├─ router-head/
│ ├─ routes/
│ │ ├─ _models/
│ │ ├─ _parts/
│ │ ├─ archives/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ ├─ types/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ ├─ shared/
│ │ ├─ Sections/
│ │ ├─ Typography/
│ │ ├─ Utils/
├─ routes/
│ ├─ archives/
│ ├─ types/
```
