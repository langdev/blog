declare module '*.css' {
    const styles: { [className: string]: string };
    export = styles;
}

declare module '*.scss' {
    const styles: { [className: string]: string };
    export = styles;
}
