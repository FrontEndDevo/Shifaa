export const styles = {
  section: `relative h-fit lg:h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-pink-50 
           dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 lg:overflow-hidden`,

  mainContainer: `relative flex flex-col items-center justify-center h-full w-full 
                 pt-[14dvh] lg:pb-0 lg:pt-0 lg:px-[10%] z-40 gap-8`,

  testimonialsContainer: `flex items-center justify-center lg:justify-start space-x-4`,

  avatarContainer: `flex -space-x-2`,

  starIcon: `w-3 h-3 xl:w-4 xl:h-4 fill-yellow-400 text-yellow-400`,

  reviewText: `text-xs lg:text-xs xl:text-sm text-slate-600 dark:text-slate-400`,
};

export const backgroundPattern = {
  backgroundImage: `
    repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
    radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
    radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
  `,
  backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
};
