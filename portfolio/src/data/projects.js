// src/data/projects.js
import Calculadora from "../assets/Calculadora.png";
import Pagina      from "../assets/Pagina.png";
import Valorant    from "../assets/Val.png";
import Help        from "../assets/Help.png";
import WH          from "../assets/WH.png";

export const projects = [
  {
    id: 1,
    title:       "Calculadora",
    image:       Calculadora,
    demoUrl:     "https://proyecto01-web-f6o4.vercel.app/",
    description: "Proyecto de calculadora como primeros pasos en React",
    tech:        ["React.js", "Node.js", "Jest"],
  },
  {
    id: 2,
    title:       "Página de deportes",
    image:       Pagina,
    demoUrl:     "https://uvgdeportes.wixstudio.com/my-site-1",
    description: "Página de deportes versión 1…",
    tech:        ["HTML", "CSS"],
  },
  {
    id: 3,
    title:       "Rediseño Valorant",
    image:       Valorant,
    demoUrl:     "https://www.figma.com/proto/SS5UPhli1d6uI0gI3Eya2v/Prototipos-valorant?node-id=5-13&starting-point-node-id=5%3A13&t=6Uf2Sbdd1Y2nNOuT-1",
    description: "Rediseño de UI…",
    tech:        ["Figma"],
  },
  {
    id: 4,
    title:       "Nueva feature WhatsApp",
    image:       WH,
    demoUrl:     "https://www.figma.com/proto/s422TT5RnNTZC3XyBnEyEu/WhatsApp-UI-Screens--Community-?node-id=120-544&t=o3CXiG67LwKi9cXe-1",
    description: "Prototipo de feature…",
    tech:        ["Figma"],
  },
  {
    id: 5,
    title:       "App Móvil: Help Quest",
    image:       Help,
    demoUrl:     "https://www.figma.com/proto/zz4OklXYEdrYhxfI3Uf2vP/Aspen-Travel-App-Exploration--Mobile-App-Design--Community-?node-id=0-1&t=XLIYXtpbqB3hqSLE-1",
    description: "Prototipo de App móvil…",
    tech:        ["Figma"],
  },
];