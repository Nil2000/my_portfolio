<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:package-manager-rules -->

# Use Bun for all operations

Always use `bun` as the package manager for this project. Do not use npm, yarn, or pnpm.

- Install packages: `bun add <package>`
- Run scripts: `bun run <script>`
- Execute commands: `bunx <command>`
<!-- END:package-manager-rules -->

<!-- BEGIN:ui-component-rules -->

# Use shadcn/ui components only

When creating or adding new UI components, always use shadcn/ui components.

- Add components via: `bunx shadcn add <component>`
- Use the shadcn registry as the source of truth for UI components
- Do not create custom UI components from scratch when a shadcn equivalent exists
- Customize shadcn components via props and styling, not by rebuilding them
<!-- END:ui-component-rules -->

<!-- BEGIN:animation-rules -->

# Use motion package for animations

When adding animations to the app, use the motion package.

- Install via: `bun add motion`
- Use motion components for all UI animations and transitions
- Do not use CSS animations or other animation libraries unless motion cannot achieve the desired effect
<!-- END:animation-rules -->

<!-- BEGIN:component-naming-rules -->

# Component naming conventions

When creating React components, follow these naming conventions:

- **File names**: Use kebab-case (e.g., `my-component.tsx`, `user-profile.tsx`)
- **Component names**: Use PascalCase (e.g., `MyComponent`, `UserProfile`)

Example:

```tsx
// File: components/user-profile.tsx
export default function UserProfile() {
  return <div>Profile</div>;
}
```

<!-- END:component-naming-rules -->
