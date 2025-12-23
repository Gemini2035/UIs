/**
 * 合并 CSS 类名
 */
function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default cn