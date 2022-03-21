import posthtml from "posthtml";
import include from "posthtml-include";

const htmlPartialiser = () => {
    return {
        name: "htmlPartialiser",
        transformIndexHtml: async (html) => {

            const response = posthtml([include({ encoding: "utf8" })])
                .process(html)
                .then((result) => {
                    return result.html;
                });

            let newhtml = await response;
            return html.replace(html, newhtml);
        },
    };
};

export default htmlPartialiser;
