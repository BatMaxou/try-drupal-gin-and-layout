const layouts = [
    'custom-onecol',
    'custom-twocol-50-50',
    'fourcol',
    'special',
]

const giveClass = (className) => {
    const layout = document.querySelector(`.layout--${className}`)
    layout.classList.add('first-of-layout-type')
}

layouts.forEach((layout) => {
    giveClass(layout)
})
