mixins.highlight = {
    data() {
        return { copying: false };
    },
    created() {
        // Hexo has already rendered Markdown fences into static code blocks.
        // Keep them plain and avoid wrapping each block with theme labels/buttons.
    },
};
