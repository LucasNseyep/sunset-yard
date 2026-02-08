"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = getStaticProps;
exports.default = Home;
var head_1 = require("next/head");
var link_1 = require("next/link");
var layout_1 = require("../components/layout");
var utils_module_css_1 = require("../styles/utils.module.css");
var posts_1 = require("../lib/posts");
var date_1 = require("../components/date");
function getStaticProps() {
    return __awaiter(this, void 0, void 0, function () {
        var allPostsData;
        return __generator(this, function (_a) {
            allPostsData = (0, posts_1.getSortedPostsData)();
            return [2 /*return*/, {
                    props: {
                        allPostsData: allPostsData,
                    },
                }];
        });
    });
}
function Home(_a) {
    var allPostsData = _a.allPostsData;
    return (<layout_1.default home>
      <head_1.default>
        <title>{layout_1.siteTitle}</title>
      </head_1.default>
      <section className={utils_module_css_1.default.headingMd}>
        <p>Hello there! I'm Lucas (put a little french on that) and I build things.</p>
        <p>A bit about me:</p>
        <ul class="nav justify-content-center  ">
          <li>I was born and grew up in Beijing, China</li>
          <li>I studied materials science at Imperial College London</li>
          <li>Early professional experiences at Google and Shopify</li>
          <li>Now I'm <link_1.default href="https://www.joinodin.com/">democratising private market investing</link_1.default> by writing code, and designing and automating processes</li>
        </ul>

        <p>Personal Projects and Learning:</p>
        <ul class="nav justify-content-center  ">
          <li>I'm building a cloud identification computer vision model while teaching myself machine learning. Learn more <link_1.default href="https://github.com/LucasNseyep/belle-weder">here</link_1.default>.</li>
          <li>I'm teaching myself TypeScript, React, and Next - hence the blog :)</li>
          <li>One more project that's in stealth - stay tuned . . .</li>
        </ul>

        <p>Books:</p>
        <ul class="nav justify-content-center  ">
          <li>Reading: <em>1984</em>,<em>Flash Crash</em>, <em>Will it make the boat go faster?</em></li>
          <li>The one I revisit: <em>Who moved my cheese?</em>, <em>Steal like an artist</em>, <em>Show your work</em>, <em>Tools of Titans</em>, <em>Build</em>, <em>Steve Jobs</em></li>
          <li>Past reads: <em>Born a crime</em>, <em>The man who solved the market</em>, <em>Surely you're joking, Mr. Feyneman!</em>, <em>The Code</em>, <em>A man for all Markets</em></li>
        </ul>

                <p>Quotes I'm pondering and beliefs I'm building:</p>
        <ul class="nav justify-content-center  ">
          <li>Belief comes before ability</li>
          <li>Those at the edge come to control the center</li>
          <li>There is no speed limit apart from the speed of light</li>
          <li>Action expresses priority</li>
          <li>Do things differently for the sake of being different</li>
          <li>Bad boys move in silence</li>
          <li>You can't necessarily be the smartest, but you can always be the most knowledgeable</li>
          <li>Tell me how you spend your time and I'll tell you what you'll amount to</li>
          <li>Other people just around the corner are on this shit every single day. Are you?</li>
          <li>Make friends with the imminent dead.</li>
          <li>Intensity is the price of excellence.</li>
        </ul>

        <p>
          Oh and if you've scrolled down this far: first of all thank you very much, second of all this is actually a <b>blog where I talk about interesting companies and products</b> I've come accross that were saddly sunsetted.
        </p>
      </section>
      <section className={"".concat(utils_module_css_1.default.headingMd, " ").concat(utils_module_css_1.default.padding1px)}>
        <h2 className={utils_module_css_1.default.headingLg}>Posts</h2>
        <ul className={utils_module_css_1.default.list}>
          {allPostsData.map(function (_a) {
            var id = _a.id, date = _a.date, title = _a.title;
            return (<li className={utils_module_css_1.default.listItem} key={id}>
              <link_1.default href={"/posts/".concat(id)}>{title}</link_1.default>
              <br />
              <small className={utils_module_css_1.default.lightText}>
                <date_1.default dateString={date}/>
              </small>
            </li>);
        })}
        </ul>
      </section>
    </layout_1.default>);
}
