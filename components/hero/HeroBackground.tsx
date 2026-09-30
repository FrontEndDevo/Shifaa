const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-200/30 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default HeroBackground;
