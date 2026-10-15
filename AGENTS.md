<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the main portfolio as one scrolling index route with anchored navigation; use a separate /dokumentasi gallery because the user requested a dedicated documentation page.
- Keep portfolio content browser-safe and static, with a bundled downloadable CV; no account or persistence is needed.
- Keep documentation albums in a browser-safe data module, with empty galleries until the owner supplies real photos through chat; do not invent documentation images or add upload infrastructure.
- Centralize contact destinations in a browser-safe module to keep navbar and contact actions consistent and testable.
- Put presentation styles and semantic palette tokens in src/styles.css and use the shared Button for actions.
