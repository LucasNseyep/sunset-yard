"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteTitle = void 0;
exports.default = Layout;
var head_1 = require("next/head");
var image_1 = require("next/image");
var layout_module_css_1 = require("./layout.module.css");
var utils_module_css_1 = require("../styles/utils.module.css");
var link_1 = require("next/link");
var name = 'Lucas Nseyep';
exports.siteTitle = 'Sunset Yard by Lucas Nseyep';
function Layout(_a) {
    var children = _a.children, home = _a.home;
    return (<div className={layout_module_css_1.default.container}>
      <head_1.default>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="Learn how to build a personal website using Next.js"/>
        <meta property="og:image" content={"https://og-image.vercel.app/".concat(encodeURI(exports.siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}/>
        <meta name="og:title" content={exports.siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </head_1.default>
      <header className={layout_module_css_1.default.header}>
        {home ? (<>
            <image_1.default priority src="/images/profile.jpg" className={utils_module_css_1.default.borderCircle} height={144} width={144} alt=""/>
            <h1 className={utils_module_css_1.default.heading2Xl}>{name}</h1>
          </>) : (<>
            <link_1.default href="/">
              <image_1.default priority src="/images/profile.jpg" className={utils_module_css_1.default.borderCircle} height={108} width={108} alt=""/>
            </link_1.default>
            <h2 className={utils_module_css_1.default.headingLg}>
              <link_1.default href="/" className={utils_module_css_1.default.colorInherit}>
                {name}
              </link_1.default>
            </h2>
          </>)}
      </header>
      <main>{children}</main>
      {!home && (<div className={layout_module_css_1.default.backToHome}>
          <link_1.default href="/">← Back to home</link_1.default>
        </div>)}
    </div>);
}
