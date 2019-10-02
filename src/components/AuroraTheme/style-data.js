/**
 * DS brand. See:
 * https://projects.invisionapp.com/dsm/aurora-ux-d/brand-guidelines/applications/data-export/json
 *
 * then API call top get the below:
 * https://projects.invisionapp.com/dsm-export/aurora-ux-d/brand-guidelines/style-data.json?exportFormat=lookup&key=BkUPhquFV
 */

const styleData = {
  lookup: {
    colors: {
      vibrantBlue: {
        name: "Vibrant Blue",
        value: "#27a0f2"
      },
      vibrantTeal: {
        name: "Vibrant Teal",
        value: "#1ae2c0"
      },
      vibrantGreen: {
        name: "Vibrant Green",
        value: "#6ce85b"
      },
      vibrantYellow: {
        name: "Vibrant Yellow",
        value: "#f2e953"
      },
      vibrantOrange: {
        name: "Vibrant Orange",
        value: "#fc8f1a"
      },
      vibrantRed: {
        name: "Vibrant Red",
        value: "#f43b22"
      },
      vibrantPink: {
        name: "Vibrant Pink",
        value: "#e23bb7"
      },
      vibrantViolet: {
        name: "Vibrant Violet",
        value: "#7a5aff"
      },
      auroraBlueDarker: {
        name: "Aurora Blue Darker",
        value: "#1a648f"
      },
      auroraBlueDark: {
        name: "Aurora Blue Dark",
        value: "#2386be"
      },
      auroraBlue: {
        name: "Aurora Blue",
        value: "#2ca7ee"
      },
      auroraBlueLight: {
        name: "Aurora Blue Light",
        value: "#56b9f1"
      },
      auroraBlueLighter: {
        name: "Aurora Blue Lighter",
        value: "#80caf5"
      },
      auroraTealDarker: {
        name: "Aurora Teal Darker",
        value: "#2f766a"
      },
      auroraTealDark: {
        name: "Aurora Teal Dark",
        value: "#3e9d8d"
      },
      auroraTeal: {
        name: "Aurora Teal",
        value: "#4ec4b0"
      },
      auroraTealLight: {
        name: "Aurora Teal Light",
        value: "#71d0c0"
      },
      auroraTealLighter: {
        name: "Aurora Teal Lighter",
        value: "#95dcd0"
      },
      auroraGreenDarker: {
        name: "Aurora Green Darker",
        value: "#3d844a"
      },
      auroraGreenDark: {
        name: "Aurora Green Dark",
        value: "#51b063"
      },
      auroraGreen: {
        name: "Aurora Green",
        value: "#65dc7c"
      },
      auroraGreenLight: {
        name: "Aurora Green Light",
        value: "#84e396"
      },
      auroraGreenLighter: {
        name: "Aurora Green Lighter",
        value: "#a3eab0"
      },
      auroraYellowDarker: {
        name: "Aurora Yellow Darker",
        value: "#989959"
      },
      auroraYellowDark: {
        name: "Aurora Yellow Dark",
        value: "#cacc77"
      },
      auroraYellow: {
        name: "Aurora Yellow",
        value: "#fdff95"
      },
      auroraYellowLight: {
        name: "Aurora Yellow Light",
        value: "#fdffaa"
      },
      auroraYellowLighter: {
        name: "Aurora Yellow Lighter",
        value: "#feffbf"
      },
      auroraOrangeDarker: {
        name: "Aurora Orange Darker",
        value: "#996b1d"
      },
      auroraOrangeDark: {
        name: "Aurora Orange Dark",
        value: "#cc8e27"
      },
      auroraOrange: {
        name: "Aurora Orange",
        value: "#ffb231"
      },
      auroraOrangeLight: {
        name: "Aurora Orange Light",
        value: "#ffc15a"
      },
      auroraOrangeLighter: {
        name: "Aurora Orange Lighter",
        value: "#ffd183"
      },
      auroraRedDarker: {
        name: "Aurora Red Darker",
        value: "#99261b"
      },
      auroraRedDark: {
        name: "Aurora Red Dark",
        value: "#cc3224"
      },
      auroraRed: {
        name: "Aurora Red",
        value: "#ff3f2d"
      },
      auroraRedLight: {
        name: "Aurora Red Light",
        value: "#ff6557"
      },
      auroraRedLighter: {
        name: "Aurora Red Lighter",
        value: "#ff8c81"
      },
      auroraPinkDarker: {
        name: "Aurora Pink Darker",
        value: "#7a1a59"
      },
      auroraPinkDark: {
        name: "Aurora Pink Dark",
        value: "#a22276"
      },
      auroraPink: {
        name: "Aurora Pink",
        value: "#cb2b94"
      },
      auroraPinkLight: {
        name: "Aurora Pink Light",
        value: "#d555a9"
      },
      auroraPinkLighter: {
        name: "Aurora Pink Lighter",
        value: "#e080bf"
      },
      auroraVioletDarker: {
        name: "Aurora Violet Darker",
        value: "#4a466e"
      },
      auroraVioletDark: {
        name: "Aurora Violet Dark",
        value: "#635d93"
      },
      auroraViolet: {
        name: "Aurora Violet",
        value: "#7c74b8"
      },
      auroraVioletLight: {
        name: "Aurora Violet Light",
        value: "#9690c6"
      },
      auroraVioletLighter: {
        name: "Aurora Violet Lighter",
        value: "#b0acd4"
      },
      neutralBlack: {
        name: "Neutral Black",
        value: "#000000"
      },
      neutralAbyss: {
        name: "Neutral Abyss",
        value: "#140f1e"
      },
      neutralNight: {
        name: "Neutral Night",
        value: "#1a142b"
      },
      neutralDeepPurple: {
        name: "Neutral Deep Purple",
        value: "#271d3e"
      },
      neutralStorm: {
        name: "Neutral Storm",
        value: "#524b65"
      },
      neutralSteel: {
        name: "Neutral Steel",
        value: "#7d788c"
      },
      neutralCloud: {
        name: "Neutral Cloud",
        value: "#a9a5b2"
      },
      neutralSilverfox: {
        name: "Neutral Silverfox",
        value: "#d3d2d7"
      },
      neutralGhost: {
        name: "Neutral Ghost",
        value: "#e9e9ec"
      },
      neutralWhite: {
        name: "Neutral White",
        value: "#ffffff"
      }
    },
    fonts: {
      montserrat: {
        name: "Montserrat",
        family: "Montserrat",
        fallback: "Ariel",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 300
          },
          {
            fontStyle: "italic",
            fontWeight: 300
          },
          {
            fontStyle: "normal",
            fontWeight: 600
          },
          {
            fontStyle: "italic",
            fontWeight: 600
          }
        ]
      },
      openSansCondensed: {
        name: "Open Sans Condensed",
        family: "Open Sans Condensed",
        fallback: "Ariel",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 300
          },
          {
            fontStyle: "italic",
            fontWeight: 300
          },
          {
            fontStyle: "normal",
            fontWeight: "bold"
          }
        ]
      },
      openSans: {
        name: "Open Sans",
        family: "Open Sans",
        fallback: "Ariel",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 400
          },
          {
            fontStyle: "italic",
            fontWeight: 400
          },
          {
            fontStyle: "normal",
            fontWeight: "bold"
          },
          {
            fontStyle: "italic",
            fontWeight: "bold"
          }
        ]
      },
      arial: {
        name: "Arial",
        family: "Arial",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 400
          },
          {
            fontStyle: "italic",
            fontWeight: 400
          },
          {
            fontStyle: "normal",
            fontWeight: "bold"
          },
          {
            fontStyle: "italic",
            fontWeight: "bold"
          }
        ]
      },
      openSansSemiBold: {
        name: "Open Sans SemiBold",
        family: "Open Sans SemiBold",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 600
          },
          {
            fontStyle: "italic",
            fontWeight: 600
          }
        ]
      },
      helvetica: {
        name: "Helvetica",
        family: "Helvetica",
        variants: [
          {
            fontStyle: "normal",
            fontWeight: 400
          },
          {
            fontStyle: "italic",
            fontWeight: 400
          },
          {
            fontStyle: "normal",
            fontWeight: 300
          },
          {
            fontStyle: "italic",
            fontWeight: 300
          },
          {
            fontStyle: "normal",
            fontWeight: "bold"
          },
          {
            fontStyle: "italic",
            fontWeight: "bold"
          }
        ]
      }
    },
    typeStyles: {
      body: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "left",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "400",
        fontFamily: "Open Sans, Ariel",
        name: "Body",
        backgroundColor: null
      },
      bodyBold: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "start",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: "Open Sans SemiBold",
        name: "Body Bold",
        backgroundColor: null
      },
      bodyCondensed: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "start",
        color: "#271e3e",
        letterSpacing: "1.8px",
        textTransform: "uppercase",
        fontStyle: "normal",
        fontWeight: "400",
        fontFamily: "Open Sans, Ariel",
        name: "Body Condensed",
        backgroundColor: null
      },
      bodyCondensedBold: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "start",
        color: "#271e3e",
        letterSpacing: "1.8px",
        textTransform: "uppercase",
        fontStyle: "normal",
        fontWeight: "bold",
        fontFamily: "Open Sans, Ariel",
        name: "Body Condensed Bold",
        backgroundColor: null
      },
      heading: {
        fontSize: "36px",
        lineHeight: "normal",
        textAlign: "start",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: "Montserrat, Ariel",
        name: "Heading",
        backgroundColor: null
      },
      subHeading: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "start",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "300",
        fontFamily: "Montserrat, Ariel",
        name: "Sub Heading",
        backgroundColor: null
      },
      fallbackBody: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "left",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "400",
        fontFamily: "Arial",
        name: "Fallback Body",
        backgroundColor: null
      },
      fallbackBold: {
        fontSize: "24px",
        lineHeight: "normal",
        textAlign: "left",
        color: "#271e3e",
        fontStyle: "normal",
        fontWeight: "bold",
        fontFamily: "Arial",
        name: "Fallback Bold",
        backgroundColor: null
      }
    }
  }
};

module.exports = styleData.lookup;
