import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
    const style = window.getComputedStyle(document.body);
    const lightBlue = style.getPropertyValue('--bh-light-blue');
    const primaryBlue = style.getPropertyValue('--bh-primary-blue');
    const darkBlue = style.getPropertyValue('--bh-dark-blue');
    return {
        pie: {
        },
        sequence: {
        },
        themeVariables: {
            /* common */
            background: lightBlue,

            primaryColor: primaryBlue,
            primaryTextColor: primaryBlue,
            primaryBorderColor: primaryBlue,

            secondaryColor: darkBlue,
            secondaryTextColor: darkBlue,
            secondaryBorderColor: darkBlue,

            tertiaryColor: lightBlue,
            tertiaryTextColor: lightBlue,
            tertiaryBorderColor: lightBlue,

            noteBkgColor: lightBlue,
            noteTextColor: primaryBlue,
            noteBorderColor: primaryBlue,

            lineColor: primaryBlue,
            textColor: darkBlue,
            mainBkg: lightBlue,

            /* sequence */
            actorBkg: lightBlue,
            actorBorder: primaryBlue,
            actorTextColor: darkBlue,
            actorLineColor: primaryBlue,
            signalColor: darkBlue,
            signalTextColor: darkBlue,
            labelBoxBkgColor: lightBlue,
            labelBoxBorderColor: primaryBlue,
            activationBorderColor: darkBlue,
            activationBkgColor: lightBlue,

            /* pie */
            pie1: darkBlue,
            pie2: primaryBlue,

            /* stateDiagram-v2 */
            innerEndBackground: primaryBlue,
            specialStateColor: primaryBlue
        },
        themeCSS: `
          g rect.rect {
            stroke: var(--bh-primary-blue);
          }

          .node rect {
            stroke: var(--bh-primary-blue);
            fill: var(--bh-light-blue);
          }

          .statediagram-cluster rect {
            stroke: var(--bh-primary-blue);
            fill: var(--bh-light-blue);
          }

          g.outer-path > g > path {
            stroke: var(--bh-primary-blue);
            fill: var(--bh-primary-blue);
          }
        `
    }
});