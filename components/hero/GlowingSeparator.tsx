export function GlowingSeparator() {
  return (
    <div className="relative w-2 h-full hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 dark:via-blue-600 to-transparent blur-sm opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-600 to-transparent blur-md opacity-50" />
      <div className="relative bg-gradient-to-b from-transparent via-blue-400 dark:via-blue-600 to-transparent w-px h-full" />
    </div>
  );
}
