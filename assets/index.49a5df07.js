(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function W(){}function he(e){return e()}function oe(){return Object.create(null)}function G(e){e.forEach(he)}function be(e){return typeof e=="function"}function Z(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}function f(e,n){e.appendChild(n)}function S(e,n,t){e.insertBefore(n,t||null)}function k(e){e.parentNode.removeChild(e)}function ye(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function g(e){return document.createElement(e)}function we(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function H(e){return document.createTextNode(e)}function A(){return H(" ")}function ue(){return H("")}function fe(e,n,t,o){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t,o)}function D(e,n,t){t==null?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function pe(e){return Array.from(e.childNodes)}function F(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function ge(e,n,t,o){t===null?e.style.removeProperty(n):e.style.setProperty(n,t,o?"important":"")}function Xe(e,n,{bubbles:t=!1,cancelable:o=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t,o,n),a}class ke{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,t,o=null){this.e||(this.is_svg?this.e=we(t.nodeName):this.e=g(t.nodeName),this.t=t,this.c(n)),this.i(o)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let t=0;t<this.n.length;t+=1)S(this.t,this.n[t],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(k)}}let R;function z(e){R=e}function Q(){if(!R)throw new Error("Function called outside component initialization");return R}function Ie(e){Q().$$.on_mount.push(e)}function ve(e){Q().$$.on_destroy.push(e)}function Se(){const e=Q();return(n,t,{cancelable:o=!1}={})=>{const a=e.$$.callbacks[n];if(a){const i=Xe(n,t,{cancelable:o});return a.slice().forEach(d=>{d.call(e,i)}),!i.defaultPrevented}return!0}}const Y=[],V=[],_=[],ae=[],Te=Promise.resolve();let P=!1;function De(){P||(P=!0,Te.then(ce))}function j(e){_.push(e)}const U=new Set;let B=0;function ce(){const e=R;do{for(;B<Y.length;){const n=Y[B];B++,z(n),Ae(n.$$)}for(z(null),Y.length=0,B=0;V.length;)V.pop()();for(let n=0;n<_.length;n+=1){const t=_[n];U.has(t)||(U.add(t),t())}_.length=0}while(Y.length);for(;ae.length;)ae.pop()();P=!1,U.clear(),z(e)}function Ae(e){if(e.fragment!==null){e.update(),G(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(j)}}const x=new Set;let He;function q(e,n){e&&e.i&&(x.delete(e),e.i(n))}function re(e,n,t,o){if(e&&e.o){if(x.has(e))return;x.add(e),He.c.push(()=>{x.delete(e),o&&(t&&e.d(1),o())}),e.o(n)}else o&&o()}function ie(e){e&&e.c()}function K(e,n,t,o){const{fragment:a,on_mount:i,on_destroy:d,after_update:w}=e.$$;a&&a.m(n,t),o||j(()=>{const l=i.map(he).filter(be);d?d.push(...l):G(l),e.$$.on_mount=[]}),w.forEach(j)}function J(e,n){const t=e.$$;t.fragment!==null&&(G(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function Ee(e,n){e.$$.dirty[0]===-1&&(Y.push(e),De(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function $(e,n,t,o,a,i,d,w=[-1]){const l=R;z(e);const r=e.$$={fragment:null,ctx:null,props:i,update:W,not_equal:a,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:oe(),dirty:w,skip_bound:!1,root:n.target||l.$$.root};d&&d(r.root);let c=!1;if(r.ctx=t?t(e,n.props||{},(b,s,...y)=>{const m=y.length?y[0]:s;return r.ctx&&a(r.ctx[b],r.ctx[b]=m)&&(!r.skip_bound&&r.bound[b]&&r.bound[b](m),c&&Ee(e,b)),s}):[],r.update(),c=!0,G(r.before_update),r.fragment=o?o(r.ctx):!1,n.target){if(n.hydrate){const b=pe(n.target);r.fragment&&r.fragment.l(b),b.forEach(k)}else r.fragment&&r.fragment.c();n.intro&&q(e.$$.fragment),K(e,n.target,n.anchor,n.customElement),ce()}z(l)}class ee{$destroy(){J(this,1),this.$destroy=W}$on(n,t){const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(t),()=>{const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}$set(n){this.$$set&&!me(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function Oe(e){let n,t,o,a,i=e[0]+Math.ceil(Math.log(e[0]))+1+"",d,w,l;return{c(){n=g("p"),t=H("You must read all of the terms and conditions in order to proceed. Page "),o=H(e[0]),a=H(`
    of `),d=H(i),w=A(),l=g("div"),l.innerHTML=`<input disabled="" placeholder="Your Legal Name"/> 
    <button class="accept-button svelte-1s47goy" disabled="">Accept</button>`,D(n,"class","warning svelte-1s47goy")},m(r,c){S(r,n,c),f(n,t),f(n,o),f(n,a),f(n,d),S(r,w,c),S(r,l,c)},p(r,[c]){c&1&&F(o,r[0]),c&1&&i!==(i=r[0]+Math.ceil(Math.log(r[0]))+1+"")&&F(d,i)},i:W,o:W,d(r){r&&k(n),r&&k(w),r&&k(l)}}}function We(e,n,t){let{page:o}=n;return e.$$set=a=>{"page"in a&&t(0,o=a.page)},[o]}class Ne extends ee{constructor(n){super(),$(this,n,We,Oe,Z,{page:0})}}const Ce=`<h1>Copyright Clause</h1>
<p>Any and all forms of creative and artistic expression, whether in physical, metaphysical, spiritual, tangible, astral
    plane or any and all other plane of existence or non-existence are subject to SYZYGY copyright laws.</p>
<h2>Interpretation and Definitions</h2>
<h3>Interpretation</h3>
<p>
    The words of which the initial letter is capitalized have meanings defined
    under the following conditions. The following definitions shall have the
    same meaning regardless of whether they appear in singular or in plural.
</p>
<h3>Definitions</h3>
<p>For the purposes of these Terms and Conditions:</p>
<ul>
    <li>
        <p>
            <strong>Affiliate</strong> means an entity that controls, is controlled
            by or is under common control with a party, where &quot;control&quot;
            means ownership of 50% or more of the shares, equity interest or other
            securities entitled to vote for election of directors or other managing
            authority.
        </p>
    </li>
    <li>
        <p><strong>Country</strong> refers to: California, United States</p>
    </li>
    <li>
        <p>
            <strong>Company</strong> (referred to as either &quot;the Company&quot;,
            &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement)
            refers to SyzygyCorp.
        </p>
    </li>
    <li>
        <p>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
        </p>
    </li>
    <li>
        <p><strong>Service</strong> refers to the Website.</p>
    </li>
    <li>
        <p>
            <strong>Terms and Conditions</strong> (also referred as
            &quot;Terms&quot;) mean these Terms and Conditions that form the
            entire agreement between You and the Company regarding the use of
            the Service. This Terms and Conditions agreement has been created
            with the help of the
            <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">TermsFeed Terms and
                Conditions Generator</a>.
        </p>
    </li>
    <li>
        <p>
            <strong>Third-party Social Media Service</strong> means any services
            or content (including data, information, products or services) provided
            by a third-party that may be displayed, included or made available by
            the Service.
        </p>
    </li>
    <li>
        <p>
            <strong>Website</strong> refers to SyzygyCorp, accessible from
            <a href="https://syzygysf.com" rel="external nofollow noopener" target="_blank">https://syzygysf.com</a>
        </p>
    </li>
    <li>
        <p>
            <strong>You</strong> means the individual accessing or using the Service,
            or the company, or other legal entity on behalf of which such individual
            is accessing or using the Service, as applicable.
        </p>
    </li>
</ul>
<h2>Acknowledgment</h2>
<p>
    These are the Terms and Conditions governing the use of this Service and the
    agreement that operates between You and the Company. These Terms and
    Conditions set out the rights and obligations of all users regarding the use
    of the Service.
</p>
<p>
    Your access to and use of the Service is conditioned on Your acceptance of
    and compliance with these Terms and Conditions. These Terms and Conditions
    apply to all visitors, users and others who access or use the Service.
</p>
<p>
    By accessing or using the Service You agree to be bound by these Terms and
    Conditions. If You disagree with any part of these Terms and Conditions then
    You may not access the Service.
</p>
<p>
    You represent that you are over the age of 18. The Company does not permit
    those under 18 to use the Service.
</p>
<p>
    Your access to and use of the Service is also conditioned on Your acceptance
    of and compliance with the Privacy Policy of the Company. Our Privacy Policy
    describes Our policies and procedures on the collection, use and disclosure
    of Your personal information when You use the Application or the Website and
    tells You about Your privacy rights and how the law protects You. Please
    read Our Privacy Policy carefully before using Our Service.
</p>
<h2>Links to Other Websites</h2>
<p>
    Our Service may contain links to third-party web sites or services that are
    not owned or controlled by the Company.
</p>
<p>
    The Company has no control over, and assumes no responsibility for, the
    content, privacy policies, or practices of any third party web sites or
    services. You further acknowledge and agree that the Company shall not be
    responsible or liable, directly or indirectly, for any damage or loss caused
    or alleged to be caused by or in connection with the use of or reliance on
    any such content, goods or services available on or through any such web
    sites or services.
</p>
<p>
    We strongly advise You to read the terms and conditions and privacy policies
    of any third-party web sites or services that You visit.
</p>
<h2>Termination</h2>
<p>
    We may terminate or suspend Your access immediately, without prior notice or
    liability, for any reason whatsoever, including without limitation if You
    breach these Terms and Conditions.
</p>
<p>Upon termination, Your right to use the Service will cease immediately.</p>
<h2>Limitation of Liability</h2>
<p>
    Notwithstanding any damages that You might incur, the entire liability of
    the Company and any of its suppliers under any provision of this Terms and
    Your exclusive remedy for all of the foregoing shall be limited to the
    amount actually paid by You through the Service or 100 USD if You haven't
    purchased anything through the Service.
</p>
<p>
    To the maximum extent permitted by applicable law, in no event shall the
    Company or its suppliers be liable for any special, incidental, indirect, or
    consequential damages whatsoever (including, but not limited to, damages for
    loss of profits, loss of data or other information, for business
    interruption, for personal injury, loss of privacy arising out of or in any
    way related to the use of or inability to use the Service, third-party
    software and/or third-party hardware used with the Service, or otherwise in
    connection with any provision of this Terms), even if the Company or any
    supplier has been advised of the possibility of such damages and even if the
    remedy fails of its essential purpose.
</p>
<p>
    Some states do not allow the exclusion of implied warranties or limitation
    of liability for incidental or consequential damages, which means that some
    of the above limitations may not apply. In these states, each party's
    liability will be limited to the greatest extent permitted by law.
</p>
<h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
<p>
    The Service is provided to You &quot;AS IS&quot; and &quot;AS
    AVAILABLE&quot; and with all faults and defects without warranty of any
    kind. To the maximum extent permitted under applicable law, the Company, on
    its own behalf and on behalf of its Affiliates and its and their respective
    licensors and service providers, expressly disclaims all warranties, whether
    express, implied, statutory or otherwise, with respect to the Service,
    including all implied warranties of merchantability, fitness for a
    particular purpose, title and non-infringement, and warranties that may
    arise out of course of dealing, course of performance, usage or trade
    practice. Without limitation to the foregoing, the Company provides no
    warranty or undertaking, and makes no representation of any kind that the
    Service will meet Your requirements, achieve any intended results, be
    compatible or work with any other software, applications, systems or
    services, operate without interruption, meet any performance or reliability
    standards or be error free or that any errors or defects can or will be
    corrected.
</p>
<p>
    Without limiting the foregoing, neither the Company nor any of the company's
    provider makes any representation or warranty of any kind, express or
    implied: (i) as to the operation or availability of the Service, or the
    information, content, and materials or products included thereon; (ii) that
    the Service will be uninterrupted or error-free; (iii) as to the accuracy,
    reliability, or currency of any information or content provided through the
    Service; or (iv) that the Service, its servers, the content, or e-mails sent
    from or on behalf of the Company are free of viruses, scripts, trojan
    horses, worms, malware, timebombs or other harmful components.
</p>
<p>
    Some jurisdictions do not allow the exclusion of certain types of warranties
    or limitations on applicable statutory rights of a consumer, so some or all
    of the above exclusions and limitations may not apply to You. But in such a
    case the exclusions and limitations set forth in this section shall be
    applied to the greatest extent enforceable under applicable law.
</p>
<h2>Governing Law</h2>
<p>
    The laws of the Country, excluding its conflicts of law rules, shall govern
    this Terms and Your use of the Service. Your use of the Application may also
    be subject to other local, state, national, or international laws.
</p>
<h2>Disputes Resolution</h2>
<p>
    If You have any concern or dispute about the Service, You agree to first try
    to resolve the dispute informally by contacting the Company.
</p>
<h2>For European Union (EU) Users</h2>
<p>
    If You are a European Union consumer, you will benefit from any mandatory
    provisions of the law of the country in which you are resident in.
</p>
<h2>United States Legal Compliance</h2>
<p>
    You represent and warrant that (i) You are not located in a country that is
    subject to the United States government embargo, or that has been designated
    by the United States government as a &quot;terrorist supporting&quot;
    country, and (ii) You are not listed on any United States government list of
    prohibited or restricted parties.
</p>
<h2>Severability and Waiver</h2>
<h3>Severability</h3>
<p>
    If any provision of these Terms is held to be unenforceable or invalid, such
    provision will be changed and interpreted to accomplish the objectives of
    such provision to the greatest extent possible under applicable law and the
    remaining provisions will continue in full force and effect.
</p>
<h3>Waiver</h3>
<p>
    Except as provided herein, the failure to exercise a right or to require
    performance of an obligation under these Terms shall not effect a party's
    ability to exercise such right or require such performance at any time
    thereafter nor shall the waiver of a breach constitute a waiver of any
    subsequent breach.
</p>
<h2>Translation Interpretation</h2>
<p>
    These Terms and Conditions may have been translated if We have made them
    available to You on our Service. You agree that the original English text
    shall prevail in the case of a dispute.
</p>
<h2>Changes to These Terms and Conditions</h2>
<p>
    We reserve the right, at Our sole discretion, to modify or replace these
    Terms at any time. If a revision is material We will make reasonable efforts
    to provide at least 30 days' notice prior to any new terms taking effect.
    What constitutes a material change will be determined at Our sole
    discretion.
</p>
<p>
    By continuing to access or use Our Service after those revisions become
    effective, You agree to be bound by the revised terms. If You do not agree
    to the new terms, in whole or in part, please stop using the website and the
    Service.
</p>
<h2>Contact Us</h2>
<p>
    If you have any questions about these Terms and Conditions, You can contact
    us:
</p>
<ul>
    <li>By mail: 395 S Van Ness, San Francisco, CA, United States</li>
</ul>`,Me=`Chapter 1.<br><br>AN: Special fangz (get it, coz Im goffik) 2 my gf (ew not in that way) raven, bloodytearz666 4 helpin
me wif da story and spelling. U rok! Justin ur da luv of my deprzzing life u rok 2! MCR
ROX!<br><br>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br><br>Hi my name is Ebony Dark\u2019ness Dementia Raven Way and I have
long ebony black hair (that\u2019s how I got my name) with purple streaks and red tips that reaches my mid-back and icy blue
eyes like limpid tears and a lot of people tell me I look like Amy Lee (AN: if u don\u2019t know who she is get da hell out
of here!). I\u2019m not related to Gerard Way but I wish I was because he\u2019s a major fucking hottie. I\u2019m a vampire but my
teeth are straight and white. I have pale white skin. I\u2019m also a witch, and I go to a magic school called Hogwarts in
England where I\u2019m in the seventh year (I\u2019m seventeen). I\u2019m a goth (in case you couldn\u2019t tell) and I wear mostly black. I
love Hot Topic and I buy all my clothes from there. For example today I was wearing a black corset with matching lace
around it and a black leather miniskirt, pink fishnets and black combat boots. I was wearing black lipstick, white
foundation, black eyeliner and red eye shadow. I was walking outside Hogwarts. It was snowing and raining so there was
no sun, which I was very happy about. A lot of preps stared at me. I put up my middle finger at them.<br><br>\u201CHey
Ebony!\u201D shouted a voice. I looked up. It was\u2026. Draco Malfoy!<br><br>\u201CWhat\u2019s up Draco?\u201D I asked.<br><br>\u201CNothing.\u201D he
said shyly.<br><br>But then, I heard my friends call me and I had to go
away.<br><br>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br><br>AN: IS it good? PLZ tell me fangz!<br><br>Chapter
2.<br><br>AN: Fangz 2 bloodytearz666 4 helpin me wif da chapta! BTW preps stop flaming ma story
ok!<br><br>XXXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXXXXXXXX<br><br>The next day I woke up in my bedroom. It was snowing
and raining again. I opened the door of my coffin and drank some blood from a bottle I had. My coffin was black ebony
and inside it was hot pink velvet with black lace on the ends. I got out of my coffin and took of my giant MCR t-shirt
which I used for pajamas. Instead, I put on a black leather dress, a pentagram necklace, combat boots and black fishnets
on. I put on four pairs of earrings in my pierced ears, and put my hair in a kind of messy bun.<br><br>My friend, Willow
(AN: Raven dis is u!) woke up then and grinned at me. She flipped her long waist-length raven black hair with pink
streaks and opened her forest-green eyes. She put on her Marilyn Manson t-shirt with a black mini, fishnets and pointy
high-heeled boots. We put on our makeup (black lipstick white foundation and black eyeliner.)<br><br>\u201COMFG, I saw you
talking to Draco Malfoy yesterday!\u201D she said excitedly.<br><br>\u201CYeah? So?\u201D I said, blushing.<br><br>\u201CDo you like Draco?\u201D
she asked as we went out of the Slytherin common room and into the Great Hall.<br><br>\u201CNo I so fucking don\u2019t!\u201D I
shouted.<br><br>\u201CYeah right!\u201D she exclaimed. Just then, Draco walked up to me.<br><br>\u201CHi.\u201D he said.<br><br>\u201CHi.\u201D I
replied flirtily.<br><br>\u201CGuess what.\u201D he said.<br><br>\u201CWhat?\u201D I asked.<br><br>\u201CWell, Good Charlotte are having a
concert in Hogsmeade.\u201D he told me.<br><br>\u201COh. My. Fucking. God!\u201D I screamed. I love GC. They are my favorite band,
besides MCR.<br><br>\u201CWell\u2026. do you want to go with me?\u201D he asked.<br><br>I gasped.<br><br>Chapter 3.<br><br>AN: STOP
FLAMMING DA STORY PREPZ OK! odderwize fangs 2 da goffik ppl 4 da good reveiws! FANGS AGEN RAVEN! oh yeah, BTW I don\u2019t
own dis or da lyrics 4 Good Chralotte.<br><br>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br><br>On the night of
the concert I put on my black lace-up boots with high heels. Underneath them were ripped red fishnets. Then I put on a
black leather minidress with all this corset stuff on the back and front. I put on matching fishnet on my arms. I
straightened my hair and made it look all spiky. I felt a little depressed then, so I slit one of my wrists. I read a
depressing book while I waited for it to stop bleeding and I listened to some GC. I painted my nails black and put on
TONS of black eyeliner. Then I put on some black lipstick. I didn\u2019t put on foundation because I was pale anyway. I drank
some human blood so I was ready to go to the concert.<br><br>I went outside. Draco was waiting there in front of his
flying car. He was wearing a Simple Plan t-shirt (they would play at the show too), baggy black skater pants, black nail
polish and a little eyeliner (AN: A lot fo kewl boiz wer it ok!).<br><br>\u201CHi Draco!\u201D I said in a depressed
voice.<br><br>\u201CHi Ebony.\u201D he said back. We walked into his flying black Mercedes-Benz (the license plate said 666) and
flew to the place with the concert. On the way we listened excitedly to Good Charlotte and Marilyn Manson. We both
smoked cigarettes and drugs. When we got there, we both hopped out of the car. We went to the mosh pit at the front of
the stage and jumped up and down as we listened to Good Charlotte.<br><br>\u201CYou come in cold, you're covered in
blood<br>They're all so happy you've arrived<br>The doctor cuts your cord, hands you to your mom<br>She sets you free
into this life.\u201D sang Joel (I don\u2019t own da lyrics 2 dat song).<br><br>\u201CJoel is so fucking hot.\u201D I said to Draco,
pointing to him as he sung, filling the club with his amazing voice.<br><br>Suddenly Draco looked sad.<br><br>\u201CWhat\u2019s
wrong?\u201D I asked as we moshed to the music. Then I caught on.<br><br>\u201CHey, it\u2019s ok I don\u2019t like him better than YOU!\u201D I
said.<br><br>\u201CReally?\u201D asked Draco sensitively and he put his arm around me all protective.<br><br>\u201CReally.\u201D I said.
\u201CBesides I don\u2019t even know Joel and he\u2019s going out with Hilary fucking Duff. I fucking hate that little bitch.\u201D I said
disgustedly, thinking of her ugly blonde face.<br><br>The night went on really well, and I had a great time. So did
Draco. After the concert, we drank some beer and asked Benji and Joel for their autographs and photos with them. We got
GC concert tees. Draco and I crawled back into the Mercedes-Benz, but Draco didn\u2019t go back into Hogwarts, instead he
drove the car into\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026 the Forbidden Forest!<br><br>Chapter 4.<br><br>AN: I sed stup flaming ok ebony\u2019s name is
ENOBY nut mary su OK! DRACO IS SOO IN LUV wif her dat he is acting defrent! dey nu eechodder b4
ok!<br><br>XXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXXXX<br><br>\u201CDRACO!\u201D I shouted. \u201CWhat the fuck do you think you are
doing?\u201D<br><br>Draco didn\u2019t answer but he stopped the flying car and he walked out of it. I walked out of it too,
curiously.<br><br>\u201CWhat the fucking hell?\u201D I asked angrily.<br><br>\u201CEbony?\u201D he asked.<br><br>\u201CWhat?\u201D I
snapped.<br><br>Draco leaned in extra-close and I looked into his gothic red eyes (he was wearing color contacts) which
revealed so much depressing sorrow and evilness and then suddenly I didn\u2019t feel mad anymore.<br><br>And then\u2026\u2026\u2026\u2026\u2026
suddenly just as I Draco kissed me passionately. Draco climbed on top of me and we started to make out keenly against a
tree. He took of my top and I took of his clothes. I even took of my bra. Then he put his thingie into my you-know-what
and we did it for the first time.<br><br>\u201COh! Oh! Oh! \u201D I screamed. I was beginning to get an orgasm. We started to kiss
everywhere and my pale body became all warm. And then\u2026.<br><br>\u201CWHAT THE HELL ARE YOU DOING YOU MOTHERFUKERS!\u201D<br><br>It
was\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.Dumbledore!<br><br>Chapter 5.<br><br>AN: STOP flaming! if u flam it menz ur a prep or a posr! Da
only reson Dumbledeor swor is coz he had a hedache ok an on tup of dat he wuz mad at dem 4 having sexx! PS im nut
updating umtil I get five good revoiws!<br><br>XXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXXXX<br><br>Dumbledore made and
Draco and I follow him. He kept shouting at us angrily.<br><br>\u201CYou ludacris fools!\u201D he shouted.<br><br>I started to cry
tears of blood down my pallid face. Draco comforted me. When we went back to the castle Dumbledore took us to Professor
Snape and Professor McGonagall who were both looking very angry.<br><br>\u201CThey were having sexual intercourse in the
Forbidden Forest!\u201D he yelled in a furious voice.<br><br>\u201CWhy did you do such a thing, you mediocre dunces?\u201D asked
Professor McGonagall.<br><br>\u201CHow dare you?\u201D demanded Professor Snape.<br><br>And then Draco shrieked. \u201CBECAUSE I LOVE
HER!\u201D<br><br>Everyone was quiet. Dumbledore and Professor McGonagall still looked mad but Professor Snape said. \u201CFine.
Very well. You may go up to your rooms.\u201D<br><br>Draco and I went upstairs while the teachers glared at us.<br><br>\u201CAre
you okay, Ebony?\u201D Draco asked me gently.<br><br>\u201CYeah I guess.\u201D I lied. I went to the girl\u2019s dorm and brushed my teeth
and my hair and changed into a low-cut black floor-length dress with red lace all around it and black high heels. When I
came out\u2026.<br><br>Draco was standing in front of the bathroom, and he started to sing \u2018I just wanna live\u2019 by Good
Charlotte. I was so flattered, even though he wasn\u2019t supposed to be there. We hugged and kissed. After that, we said
goodnight and he reluctantly went back into his room.<br><br>Chapter 6.<br><br>AN: shjt up prepz ok! PS I wnot update
ubtil u give me goood revows!<br><br>XXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXX<br><br>The next day I woke up in my coffin. I
put on a black miniskirt that was all ripped around the end and a matching top with red skulls all over it and high
heeled boots that were black. I put on two pairs of skull earrings, and two crosses in my ears. I spray-painted my hair
with purple.<br><br>In the Great Hall, I ate some Count Chocula cereal with blood instead of milk, and a glass of red
blood. Suddenly someone bumped into me. All the blood spilled over my top.<br><br>\u201CBastard!\u201D I shouted angrily. I
regretted saying it when I looked up cause I was looking into the pale white face of a gothic boy with spiky black hair
with red streaks in it. He was wearing so much eyeliner that I was going down his face and he was wearing black
lipstick. He didn\u2019t have glasses anymore and now he was wearing red contact lenses just like Draco\u2019s and there was no
scar on his forhead anymore. He had a manly stubble on his chin. He had a sexy English accent. He looked exactly like
Joel Madden. He was so sexy that my body went all hot when I saw him kind of like an erection only I\u2019m a girl so I
didn\u2019t get one you sicko.<br><br>\u201CI\u2019m so sorry.\u201D he said in a shy voice.<br><br>\u201CThat\u2019s all right. What\u2019s your name?\u201D I
questioned.<br><br>\u201CMy name\u2019s Harry Potter, although most people call me Vampire these days.\u201D he grumbled.<br><br>\u201CWhy?\u201D
I exclaimed.<br><br>\u201CBecause I love the taste of human blood.\u201D he giggled.<br><br>\u201CWell, I am a vampire.\u201D I
confessed.<br><br>\u201CReally?\u201D he whimpered.<br><br>\u201CYeah.\u201D I roared.<br><br>We sat down to talk for a while. Then Draco
came up behind me and told me he had a surprise for me so I went away with him.<br><br>Chapter 7. Bring me 2
life<br><br>AN: wel ok u guyz im only writting dis cuz I got 5 god reviuws. n BTW I wont rite da nxt chapter til I git
TIN god vons! STO FLAMING OR ILL REPORT U! Evony isn\u2019t a Marie Sue ok she isn\u2019t perfect SHES A SATANITS! n she has
problemz shes depressed 4 godz sake!<br><br>XXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXZXXXXXXXXXXXXX<br><br>Draco and I held our
pale white hands with black nail polish as we went upstairs. I was wearing red Satanist sings on my nails in red nail
polish (AN: c doez dat sound lik a Maru Sue 2 u?). I waved to Vampire. Dark misery was in his depressed eyes. I guess he
was jealous of me that I was going out with Draco. Anyway, I went upstairs excitedly with Draco. We went into his room
and locked the door. Then\u2026\u2026\u2026\u2026<br><br>We started frenching passively and we took off each others clothes
enthusiastically. He felt me up before I took of my top. Then I took off my black leather bra and he took off his pants.
We went on the bed and started making out naked and then he put his boy\u2019s thingy in mine and we HAD SEX. (c is dat
stupid?)<br><br>\u201COh Draco, Draco!\u201D I screamed while getting an orgasm when all of a sudden I saw a tattoo I had never
seen before on Draco\u2019s arm. It was a black heart with an arrow through it. On it in bloody gothic writing were the
words\u2026\u2026\u2026\u2026 Vampire!<br><br>I was so angry.<br><br>\u201CYou bastard!\u201D I shouted angrily, jumping out of the bed.<br><br>\u201CNo!
No! But you don\u2019t understand!\u201D Draco pleaded. But I knew too much.<br><br>\u201CNo, you fucking idiot!\u201D I shouted. \u201CYou
probably have AIDs anyway!\u201D<br><br>I put on my clothes all huffily and then stomped out. Draco ran out even though he
was naked. He had a really big you-know-what but I was too mad to care. I stomped out and did so until I was in
Vampire\u2019s classroom where he was having a lesson with Professor Snape and some other people.<br><br>\u201CVAMPIRE POTTER, YOU
MOTHERFUCKER!\u201D I yelled.<br><br>Chapter 8.<br><br>AN: stop flassing ok! if u do den u r a
prep!<br><br>XXXXXXXXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXX<br><br>Everyone in the class stared at me and then Draco came
into the room even though he was naked and started begging me to take him back.<br><br>\u201CEbony, it\u2019s not what you think!\u201D
Draco screamed sadly.<br><br>My friend B\u2019loody Mary Smith smiled at me understatedly. She flipped her long waste-length
gothic black hair and opened her crimson eyes like blood that she was wearing contact lenses on. She had pale white skin
that she was wearing white makeup on. Hermione was kidnapped when she was born. Her real parents are vampires and one of
them is a witch but Voldemort killed her mother and her father committed suicide because he was depressed about it. She
still has nightmares about it and she is very haunted and depressed. It also turns out her real last name is Smith and
not Granger. (Since she has converted to Satanism she is in Slytherin now not Griffindoor. )<br><br>\u201CWhat is it that you
desire, you ridiculous dimwit!\u201D Snape demeaned angrily in his cold voice but I ignored him.<br><br>\u201CVampire, I can\u2019t
believe you cheated on me with Draco!\u201D I shouted at him.<br><br>Everyone gasped.<br><br>I don\u2019t know why Ebony was so
mad at me. I had went out with Vampire (I\u2019m bi and so is Ebony) for a while but then he broke my heart. He dumped me
because he liked Britney, a stupid preppy fucker. We were just good friends now. He had gone through horrible problems,
and now he was gothic. (Haha, like I would hang out with a prep.)<br><br>\u201CBut I\u2019m not going out with Draco anymore!\u201D
said Vampire.<br><br>\u201CYeah fucking right! Fuck off, you bastard!\u201D I screamed. I ran out of the room and into the
Forbidden Forest where I had lost my virility to Draco and then I started to bust into tears.<br><br>Chapter
9.<br><br>AN: stop flaming ok! I dntn red all da boox! dis is frum da movie ok so itz nut my folt if dumbeldor swers!
besuizds I SED HE HAD A HEDACHE! and da reson snap dosent lik harry now is coz hes christian and vampire is a satanist!
MCR ROX!<br><br>XXXXXXXXXXXXXXXXXX666XXXXXXXXXXX<br><br>I was so mad and sad. I couldn\u2019t believe Draco for cheating on
me. I began to cry against the tree where I did it with Draco.<br><br>Then all of a suddenly, an horrible man with red
eyes and no nose and everything started flying towards me on a broomstick! He didn\u2019t have a nose (basically like
Voldemort in the movie) and he was wearing all black but it was obvious he wasn\u2019t gothic. It was\u2026\u2026
Voldemort!<br><br>\u201CNo!\u201D I shouted in a scared voice but then Voldemort shouted \u201CImperius!\u201D and I couldn\u2019t run
away.<br><br>\u201CCrookshanks!\u201D I shouted at him. Voldemort fell of his broom and started to scream. I felt bad for him even
though I\u2019m a sadist so I stopped.<br><br>\u201CEbony.\u201D he yelled. \u201CThou must kill Vampire Potter!\u201D<br><br>I thought about
Vampire and his sexah eyes and his gothic black hair and how his face looks just like Joel Madden. I remembered that
Draco had said I didn\u2019t understand, so I thought, what if Draco went out with Vampire before I went out with him and
they broke up?<br><br>\u201CNo, Voldemort!\u201D I shouted back.<br><br>Voldemort gave me a gun. \u201CNo! Please!\u201D I
begged.<br><br>\u201CThou must!\u201D he yelled. \u201CIf thou does not, then I shall kill thy beloved Draco!\u201D<br><br>\u201CHow did you
know?\u201D I asked in a surprised way.<br><br>Voldemort got a dude-ur-so-retarded look on his face. \u201CI hath telekinesis.\u201D he
answered cruelly. \u201CAnd if you doth not kill Vampire, then thou know what will happen to Draco!\u201D he shouted. Then he flew
away angrily on his broomstick.<br><br>I was so scared and mad I didn\u2019t know what to do. Suddenly Draco came into the
woods.<br><br>\u201CDraco!\u201D I said. \u201CHi!\u201D<br><br>\u201CHi.\u201D he said back but his face was all sad. He was wearing white foundation
and messy eyeliner kind of like a pentagram (geddit) between Joel Madden and Gerard Way.<br><br>\u201CAre you okay?\u201D I
asked.<br><br>\u201CNo.\u201D he answered.<br><br>\u201CI\u2019m sorry I got all mad at you but I thought you cheated on me.\u201D I
expelled.<br><br>\u201CThat\u2019s okay.\u201D he said all depressed and we went back into Hogwarts together making out.<br><br>Chapter
10.<br><br>AN: stup it u gay fags if u donot lik ma story den fukk off! ps it turnz out b\u2019loody mary isn\u2019t a muggle
afert al n she n vampire r evil datz y dey movd houses ok!<br><br>XXXXXXXXXXXXX666XXXXXXXXXXXXXXX<br><br>I was really
scared about Vlodemort all day. I was even upset went to rehearsals with my gothic metal band Bloody Gothic Rose 666. I
am the lead singer of it and I play guitar. People say that we sound like a cross between GC, Slipknot and MCR. The
other people in the band are B\u2019loody Mary, Vampire, Draco, Ron (although we call him Diabolo now. He has black hair now
with blue streaks in it.) and Hargrid. Only today Draco and Vampire were depressed so they weren\u2019t coming and we wrote
songs instead. I knew Draco was probably slitting his wrists (he wouldn\u2019t die because he was a vampire too and the only
way you can kill a vampire is with a c-r-o-s-s (there\u2019s no way I\u2019m writing that) or a steak) and Vampire was probably
watching a depressing movie like The Corpse Bride. I put on a black leather shirt that showed off my boobs and tiny
matching miniskirt that said Simple Plan on the butt. You might think I\u2019m a slut but I\u2019m really not.<br><br>We were
singing a cover of \u2018Helena\u2019 and at the end of the song I suddenly bust into tears.<br><br>\u201CEbony! Are you OK?\u201D B\u2019loody
Mary asked in a concerted voice.<br><br>\u201CWhat the fuck do you think?\u201D I asked angrily. And then I said. \u201CWell, Voldemort
came and the fucking bastard told me to fucking kill Harry! But I don\u2019t want to kill him, because, he\u2019s really nice,
even if he did go out with Draco. But if I don\u2019t kill Harry, then Voldemort, will fucking kill Draco!\u201D I burst into
tears.<br>Suddenly Draco jumped out from behind a wall.<br><br>\u201CWhy didn\u2019t you fucking tell me!\u201D he shouted. \u201CHow could
you- you- you fucking poser muggle bitch!\u201D (c is dat out of character?)<br><br>I started to cry and cry. Draco started
to cry too all sensitive. Then he ran out crying.<br><br>We practiced for one more hour. Then suddenly Dumbeldore walked
in angrily! His eyes were all fiery and I knew this time it wasn\u2019t cause he had a headache.<br><br>\u201CWhat have you done!\u201D
He started to cry wisely. (c dats basically nut swering and dis time he wuz relly upset n u wil c y) \u201CEbony Draco has
been found in his room. He committed suicide by slitting his wrists.\u201D<br><br>Chapter 11.<br><br>AN: i sed stup flaming
up prepz! c if dis chaptr is srupid!1111 it delz wit rly sris issus! sp c 4 urself if itz ztupid brw fangz 2 ma frend
raven 4 hleping me!<br><br>XXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXXXXX<br><br>\u201CNO!\u201D I screamed. I was horrorfied! B\u2019loody
Mary tried to comfort me but I told her fuck off and I ran to my room crying myself. Dumbledore chased after me shouting
but he had to stop when I went into my room cause he would look like a perv that way.<br><br>Anyway, I started crying
tears of blood and then I slit both of my wrists. They got all over my clothes so I took them off and jumped into the
bath angrily while I put on a Linkin Park song at full volume. I grabbed a steak and almost stuck it into my heart to
commit suicide. I was so fucking depressed! I got out of the bathtub and put on a black low-cut dress with lace all over
it sandly. I put on black high heels with pink metal stuff on the ends and six pairs of skull earrings. I couldn\u2019t
fucking believe it. Then I looked out the window and screamed\u2026 Snap was spying on me and he was taking a video tape of
me! And Loopin was masticating to it! They were sitting on their broomsticks.<br><br>\u201CEW, YOU FUCKING PERVS, STOP
LOOKING AT ME NAKED! ARE YOU PEDOS OR WHAT!\u201D I screamed putting on a black towel with a picture of Marilyn Mason on it.
Suddenly Vampire ran in.<br><br>\u201CAbra Kedavra!\u201D he yelled at Snape and Loopin pointing his womb. I took my gun and shot
Snape and Loopin a gazillion times and they both started screaming and the camera broke. Suddenly, Dumblydore ran in.
\u201CEbony, it has been revealed that someone has - NOOOOOOOOOOOOO!\u201D he shouted looking at Snape and Loopin and then he
waved his wand and suddenly\u2026<br><br>Hargrid ran outside on his broom and said everyone we need to talk.<br><br>\u201CWhat do
you know, Hargrid? You\u2019re just a little Hogwarts student!\u201D<br><br>\u201CI MAY BE A HOGWARTS STUDENT\u2026.\u201D Hargirid paused
angrily. \u201CBUT I AM ALSO A SATANIST!\u201D<br><br>\u201CThis cannot be.\u201D Snap said in a crisp voice as blood dripped from his hand
where Dumblydore\u2019s wand had shot him. \u201CThere must be other factors.\u201D<br><br>\u201CYOU DON\u2019T HAVE ANY!\u201D I yelled in
madly.<br><br>Loopin held up the camera triumelephantly. \u201CThe lens may be ruined but the tape is still there!\u201D<br><br>I
felt faint, more than I normally do like how it feels when you do not drink enough blood.<br><br>\u201CWhy are you doing
this?\u201D Loopin said angrily while he rubbed his dirty hands on his clook.<br><br>And then I heard the words that I had
heard before but not from him. I did not know whether to feel shocked and happy or to bite him and drink his blood
because I felt faint.<br><br>\u201CBECAUSE\u2026BECAUSE\u2026.\u201D Hargid said and he paused in the air dramitaclly, waving his wand in
the air. Then swooped he in singing to the tune of a gothic version of a song by 50 Cent.<br><br>\u201CBecause you\u2019re
goffic?\u201D Snap asked in a little afraid voice cause he was afraind it meant he was connected with Satan.<br><br>\u201CBecause
I LOVE HER!\u201D<br><br>Chapter 12.<br><br>AN: stop f,aing ok hargrid is a pedo 2 a lot of ppl in amerikan skoolz r lik dat
I wunted 2 adres da ishu! how du u no snap iant kristian plus hargrid isn\u2019t really in luv wif ebony dat was sedric
ok!<br><br>XXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXX<br><br>I was about to slit my wrists again with the silver knife that
Drago had given me in case anything happened to him. He had told me to use it valiantly against an enemy but I knew that
we must both go together.<br><br>\u201CNO!\u201D I THOUGHT IT WAS HAIRgrid but it was Vampire. He started to scream. \u201COMFG!
NOOOOO! MY SCAR HURTS!\u201D and then\u2026.. his eyes rolled up! You could only see his red whites.<br><br>I stopped. \u201CHow did u
know?\u201D<br><br>\u201CI saw it! And my scar turned back into the lightning bolt!\u201D<br><br>\u201CNO!\u201D I ran up closer. \u201CI thought you
didn\u2019t have a scar anymore!\u201D I shouted.<br><br>\u201CI do but Diabolo changed it into a pentagram for me and I always cover
it up with foundation.\u201D he said back. \u201CAnyway my scar hurt and it turned back into the lightning bolt! Save me! then I
had a vision of what was happening to Draco\u2026\u2026\u2026\u2026\u2026.Volfemort has him bondage!\u201D<br><br>Anyway I was in the school nurse\u2019s
office now recovering from my slit wrists. Snap and Loopin and HAHRID were there too. They were going to St. Mango\u2019s
after they recovered cause they were pedofiles and you can\u2019t have those fucking pervs teaching in a school with lots of
hot gurlz. Dumbledore had constipated the cideo camera they took of me naked. I put up my middle finger at
them.<br><br>Anyway Hargrid came into my hospital bed holding a bouquet of pink roses.<br><br>\u201CEnoby I need to tell u
somethnig.\u201D he said in a v. serious voice, giving me the roses.<br><br>\u201CFuck off.\u201D I told him. \u201CYou know I fucking hate
the color pink anyway, and I don\u2019t like fucked up preps like you.\u201D I snapped. Hargrid had been mean to me before for
being gottik.<br><br>\u201CNo Enoby.\u201D Hargrid says. \u201CThose are not roses.\u201D<br><br>\u201CWhat, are they goffs too you poser prep?\u201D
I asked cause I was angry that he had brought me pink roses.<br><br>\u201CI saved your life!\u201D He yelled angrily. \u201CNo you
didn\u2019t I replied.\u201D \u201CYou saved me from getting a Paris Hilton p- video made from your shower scene and being vued by Snap
and Loopin.\u201D Who MASTABATED (c is dat speld rong) to it he added silently.<br><br>\u201CWhatever!\u201D I yelled
angirly.<br><br>He pointed his wand at the pink roses. \u201CThese aren\u2019t roses.\u201D He suddenly looked at them with an evil
look in his eye and muttered Well If you wanted Honesty that\u2019s all you haD TO SAY! .<br><br>\u201CThat\u2019s not a spell that\u2019s
an MCR song.\u201D I corrected him wisely.<br><br>\u201CI know, I was just warming up my vocal cordes.\u201D Then he screamed. \u201CPetulus
merengo mi kremicli romacio(4 all u cool goffic mcr fans out, there, that is a tribute! specially for raven I love you
girl!)imo noto okayo!\u201D<br><br>And then the roses turned into a huge black flame floating in the middle of the air. And
it was black. Now I knew he wasn\u2019t a prep.<br><br>\u201COK I believe you now wtf is Drako?\u201D<br><br>Hairgrid rolled his eyes.
I looked into the balls of flame but I could c nothing.<br><br>\u201CU c, Enobby,\u201D Dumblydore said, watching the two of us
watching the flame. \u201C2 c wht iz n da flmes(HAHA U REVIEWRS FLAMES GEDDIT) u mst find urslf 1st, k?\u201D<br><br>\u201CI HAVE FOUND
MYSELF OK YOU MEAN OLD MAN!\u201D Hargrid yelled. dUMBLydore lookd shockd. I guess he didn\u2019t have a headache or else he would
have said something back.<br><br>Hairgrid stormed off back into his bed. \u201CU r a liar, prof dumbledoree!\u201D<br><br>Anyway
when I got better I went upstairs and put on a black leather minidress that was all ripped on the ends with lace on it.
There was some corset stuff on the front. Then I put on black fishnets and black high-heeled boots with pictures of
Billie Joe Armstrong on them. I put my hair all out around me so I looked like Samara from the Ring (if u don\u2019t know who
she iz ur a prep so fuk off!) and I put on blood-red lipstick, black eyeliner and black lip gloss.<br><br>\u201CYou look
kawai, girl.\u201D B\u2019loody Mary said sadly. \u201CFangs (geddit) you do too.\u201D I said sadly too, but I was still upset. I slit both
of my wrists feeling totally depressed and I sucked all the blood. I cried again in my bathroom and put the shades on so
Snap and Loopin couldn\u2019t spy on me this time. I went to some classes. Vampire was in the Hair of Magical Magic
Creatures. He looked all depressed because Draco had disappeared and he had used to be in love with Draco. He was
sucking some blood from a Hufflepuff.<br><br>\u201CHi.\u201D he said in a depressed way. \u201CHi back.\u201D I said in an wqually said
way.<br><br>We both looked at each other for some time. Harry had beautiful red gothic eyes so much like Dracos. Then\u2026\u2026\u2026
we jumped on each other and started screwing each other.<br><br>\u201CSTOP IT NOW YOU HORNY SIMPLETONS!\u201D shouted Professor
McGoggle who was watching us and so was everyone else.<br><br>\u201CVampire you fucker!\u201D I said slapping him. \u201CStop trying to
screw me. You know I loved Draco!\u201D I shouted and then I ran away angrily.<br><br>Just then he started to scream. \u201COMFG!
NOOOOO! MY SCAR HURTS!\u201D and then\u2026.. his eyes rolled up! You could only see his red whites.<br><br>\u201CNO!\u201D I ran up
closer.<br><br>\u201CI thought you didn\u2019t have a scar anymore!\u201D I shouted.<br><br>\u201CI do but Diabolo changed it into a
pentagram for me and I always cover it up with foundation.\u201D he said back. \u201CAnyway my scar hurt and then I had a vision
of what was happening to Draco\u2026\u2026\u2026\u2026\u2026.Volfemort has him bondage!\u201D<br><br>XXXXXXXXXXXXXXXXXX666XXXXXXXXXXX<br><br>SPECIAL
FANGZ 2 RAVEN MY GOFFIX BLOOD SISTA WTF UR SUPPOZD 2 RIT DIS!11111111<br><br>HEY RAVEN DO U KNOW WHERE MY SWEATER
I<br><br>Chapter 13.<br><br>AN: raven fangz 4 gelpin me agen im sory ah tok ur postr of gerard but dat guy is such a
fokin sexbom! PREPZ STOP FLAMIGNG!<br><br>XXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXX<br><br>Vampire and I ran up the stairs
looking for Dumbledore. We were so scared.<br><br>\u201CDumbledore Dumblydore!\u201D we both yelled. Dumbledore came
there.<br><br>\u201CWhat is it that you want now you despicable snobs?\u201D he asked angrily.<br><br>\u201CVolsemort has Draco!\u201D we
shouted at the same time.<br><br>He laughed in an evil voice.<br><br>\u201CNo! Don\u2019t! We need to save Draco!\u201D we
begged.<br><br>\u201CNo.\u201D he said meanly. \u201CI don\u2019t give a darn what Voldemort does to Draco. Not after how much he misbehaved
in school especially with YOU Ebony.\u201D he said while he frowned looking at me. \u201CBesides I never liked him that much
anyway.\u201D then he walked away. Vampire started crying. \u201CMy Draco!\u201D he moaned. (AN: don\u2019t u fik gay guyz r lik so
hot!)<br><br>\u201CIts okay!\u201D I tried to tell him but that didn\u2019t stop him. He started to cry tears of blood. Then he had a
brainstorm. \u201CI had an idea!\u201D he exclaimed.<br><br>\u201CWhat?\u201D I asked him.<br><br>\u201CYou\u2019ll see.\u201D he said. He took out his
wand and did a spell. Then\u2026\u2026 suddenly we were in Voldemprt\u2019s lair!<br><br>We ran in with our wands out just as we heard
a croon voice say. \u201CAllah Kedavra!\u201D<br>It was\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. Voldemort!<br><br>Chapter 14.<br><br>AN: fuk off PREPZ ok!
Raven fangz 4 helpin agen. im sory ah kudnt update but I wuz derperessd n I had 2 go 2 da hospital kuz I slit muh rists.
PS im nut updating til u giv me 10 god revoiws!<br><br>XXXXXXXXXXXXXXXXXXX666XXXXXXXXXX<br><br>WARNING: SUM OF DIS
CHAPTA IS XTREMLY SCRAY. VIOWER EXCRETION ADVISD.<br><br>We ran to where Volcemort was. It turned out that Voldemort
wasn\u2019t there. Instead the fat guy who killed Cedric was. Draco was there crying tears of blood. Snaketail was torturing
him. Vampire and I ran in front of Snaketail.<br><br>\u201CRid my sight you despicable preps!\u201D he shouted as we started
shooting him with the gun he Then suddenly he looked at me and he fell down with a lovey-dovey look in his eyes.
\u201CEbonyIloveyouwiluhavesexwithme.\u201D he said. (in dis he is sixteen yrs old so hes not a pedofile ok)<br><br>\u201CHuh?\u201D I
asked.<br>\u201DEnoby I love you will you have sex with me?\u201D asked Snaketail. I started laughing crudely. \u201CWhat the fuck? You
torture my bf and then you expect me to fuck you? God, you are so fucked up you fucking bastard.\u201D I said angrily. Then I
stabbed him in the heart. Blood pored out of it like a fountain.<br><br>\u201CNooooooooooooo!\u201D he screamed. He started
screaming and running around. Then he fell down and died. I brust into tears sadly.<br><br>\u201CSnaketail what art thou
doing?\u201D called Voldemort. Then\u2026\u2026 he started coming! We could hear his high heels clacking to us. So we got on our
broomsticks and we flew to Hogwarts. We went to my room. Vampire went away. There I started crying.<br><br>\u201CWhat\u2019s wrong
honey?\u201D asked Draco taking off his clothes so we could screw. He had a sex-pack (geddit cuz hes so sexah) and a really
huge you-know-what and everything.<br><br>\u201CIts so unfair!\u201D I yielded. \u201CWhy can\u2019t I just be ugly or plain like all da
other girls and preps here except for B\u2019loody Mary, because she\u2019s not ugly or anything.\u201D<br><br>\u201CWhy would you wanna be
ugly? I don\u2019t like the preps anyway. They are such fucking sluts.\u201D answered Draco.<br><br>\u201CYeah but everyone is in love
with me! Like Snape and Loopin took a video of me naked. Hargrid says he\u2019s in love with me. Vampire likes me and now
even Snaketail is in love with me! I just wanna be with you ok Draco! Why couldn\u2019t Satan have made me less beautiful?\u201D I
shouted angrily. (an\u201D don\u2019t wory enoby isn\u2019t a snob or anyfing but a lot of ppl hav told her shes pretty) \u201CIm good at
too many things! WHY CAN\u2019T I JUST BE NORMAL? IT\u2019S A FUCKING CURSE!\u201D I shouted and then I ran away.<br><br>Chapter
15.<br><br>AN: stup flaming ok! btw u suk frum no on evry tim sum1 flams me im gona slit muh ristsz! fangz 2 raven 4
hlpein!<br><br>XXXXXXXXXXXXX666XXXXXXXXXXXXXXX<br><br>\u201CEbony Ebony!\u201D shouted Draco sadly. \u201CNo, please, come
back!\u201D<br><br>But I was too mad.<br><br>\u201CWhatever! Now u can go anh have sex with Vampire!\u201D I shouted. I stormed into my
room and closed my black door with my blood-red key. It had a picture of Marylin Manson on it. He looked so sexy in a
way that reminded me of Draco and Vampire. I started to cry and weep. I took a razor and started to slit my wrists. I
drank the blood all depressed. Then I looked at my black GC watch and noticed it was time to go to Biology
class.<br><br>I put on a short ripped black gothic dress that said Anarchy on the front in blood red letters and was all
ripped and a spiky belt. Under that I put on ripped black fishnets and boots that said Joel all over them with blood red
letters. I put my ebony black hair out. Anyway I went downstairs feeling all sad and depressed as usual. I did sum
advanced Biology work. I was turning a bloody pentagram into a black guitar. Suddenly the guitar turned to
Draco!<br><br>\u201CEnoby I love you!\u201D he shouted sadly. \u201CI dnot care what those fucker preps and posers fink. Ur da most
beautiful girl in the world. Before I met you I used to want to commit suicide all the time. Now I just wanna fucking be
with you. I fucking love you!.\u201D Then\u2026\u2026\u2026\u2026\u2026. he started to sing \u201CDa Chronicles of Life and Death\u201D (we considered it our
song now cuz we fell in love when Joel was singing it) right in front of the entire class! His singing voice was so
amazing and gothic and sexxy like a cross between Gerard, Joel, Chester, Pierre and Marilyn Manson (AN: don\u2019t u fink dos
guyz r so hot. if u dnot no who dey r get da fuk out od hr!) .<br><br>\u201COMFG.\u201D I said after he was finished. Some fucking
preps stared at us but I just stuck up my middle fingers (that were covered in black nail polish and were entwined with
Draco\u2019s now) at them. \u201CI love you!\u201D I said and then we started to kiss just like Hilary Duff (i fukin h8 dat bitch) and
CMM in a Cinderella Story. Then we went away holding hands. Loopin shouted at us but he stopped cuz everyone was
clapping by how sexy we looked 2gether. Then I saw a poster saying that MCR would have a concert in Hogsmede right then.
We looked at each other all shocked and then we went 2gether.<br><br>Chapter 16.<br><br>AN: u no wut! sut up ok! proov 2
me ur nut prepz! raven u suk u fuken bich gimme bak mah fukijn swteet ur supsd 2 rit dis! Raven wtf u bich ur suposd to
dodis! BTW fangz 2 britney5655 4 techin muh japnese!<br><br>XXXXXXXXXXXXX666XXXXXXXXXXXXXXX<br><br>We ran happily to
Hogsmede. There we saw the stage where GC had played. We ran in happly. MCR were there playing \u2018Helena\u2019. I was so
fucking happy! Gerard looked even sexier than he did in da pictures. Even Draco thought so, I could totally see him
getting an erection but it didn\u2019t matter cuz I knew know that we were da only true ones for eachother. I was wearing a
black leather minidress and black leather platinum boots with red ripped fishnets. Draco was wearing a black baggy MCR
t-shirt and black baggy pants. Anyway, we stated moshing to Helena. We frenched. We ran up 2 the front of the band to
stage-dive. Suddenly, Gerard pulled off his mask. So did the others. We gasped. It wasn\u2019t them at all. It
was.,\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. Volsemort and da Death Dealers!<br><br>\u201CWtf Draco im not going to a concert wid u!\u201D I shouted angrily.
\u201CNot after what happened to me last time? Even if its MCR n u no how much I lik them\u201D<br><br>\u201CWhat cause we\u2026you know\u2026\u201D
he gadgetted uncomfortbli cause guys don\u2019t like to talk a bout you-know-what.<br><br>\u201CYeah cause we you know!\u201D I yielded
in an angry voice.<br><br>\u201CWe won\u2019t do that again.\u201D Draco promised. \u201CThis time, we\u2019re going with an
ESCORT.\u201D<br><br>\u201COMFG wtf/ Are you giving into the mainstream?\u201D I asked. \u201CSo I guess ur a prep or a Christina or what
now?\u201D<br><br>\u201CNO.\u201D he muttered loudly.<br><br>\u201CR u becoming a prep or what?\u201D I shootd angrily.<br><br>\u201CEnoby! I\u2019m not!
Pls come with me!\u201D He fell down to his knees and started singing \u2018Da world is black\u2019 by GC to me.<br><br>I was flattened
cause that\u2019s not even a single, he had memorized da lyrks just 4 me!<br><br>\u201COK then I guess I will have to.\u201D I said and
then we frenched 4 a while and I went up 2 my room.<br><br>B\u2019loody Mary was standing there. \u201CHajimemashite gurl.\u201D she
said happily (she spex Japanese so do i. dat menz \u2018how do u do\u2019 in japanese). \u201CBTW Willow that fucking poser got expuld.
she failed al her klasses and she skepped math.\u201D (an: RAVEN U FUKIN SUK! FUK U!)<br><br>\u201CIt serves that fuking bich
right.\u201D I laughed angrily.<br><br>Well anyway we where felling all deprezzed. We wutsched some goffic movies like Das
niteMARE b4 xmas. \u201CMaybe Willow will die too.\u201D I said.<br><br>\u201CKawai.\u201D B\u2019loody Mair shook her head enrgtically
lethrigcly. \u201COh yeah o have a confession after she got expuld I murdered her and den loopin did it with her cause he\u2019s a
necphilak.\u201D<br><br>\u201CKawai.\u201D I commnted happily . We talked to each other in silence for da rest uv da movie.<br><br>\u201COH
HEY BTw, im going to a concert with drako tonight in Hogsmeade with mcr.\u201D I sed. \u201C I need to wear like da hotset outfit
EVA.\u201D<br><br>B\u2019Loody Mairy Nodded ENREGeticALLlY. \u201COmfg totally lets go shopping.\u201D<br><br>\u201CIn Hot Topic, right?\u201D I
asked, already getting out my spshcial Hot Topic Loiyalty carde.<br><br>\u201CNo.\u201D My head snaped up.<br><br>\u2018WHAT?\u201D my head
spuin. I could not believe it. \u201CB\u2019Loody Mary are u a PREP?\u201D<br><br>\u201CNOOOO!NOOOO!\u201D She laughed. \u201CI found some cool goffic
stores near Hogwarts that\u2019s all.\u201D<br><br>\u201CHu told u abut them\u201D I askd sure it would be Drako or Diabolo or Vampire(don\u2019t
even SAY that nam to me!). Or me.<br><br>\u201CDumblydore.\u201D She sed. \u201CLet me just call our broms.\u201D<br><br>\u201COMFFG DUMBLYDORE?\u201D
I asked quietly.<br><br>\u201CYah I saw the map for Hogsmeade on his desk.\u201D She told me. \u201CCome on let\u2019s go.\u201D<br><br>We were
going in a few punkgoff stores SPECIALLY for the concerts in Hogsmeade. The salesperson was OMG HOTTER THAN GERARD
EXCEPT NOT CAUSE THAT\u2019S IMPOSSIBLE and he gave me a few dresses. \u201CWe only have these for da real goffs.\u201D<br><br>\u201CDa real
goffs?\u201D Me and B\u2019Loody Mary asked.<br><br>\u201CYah u wouldn\u2019t believe how many posers ther are in this town man! Yesterday
loopin and snap tried to buy a goffic camera pouch.\u201D He shook his head. \u201CI dint even no they had a camera.\u201D<br><br>\u201COMFG
NO THEIR GONNA SPY ON ME AGAIN!\u201D I cried, running out of the changing room wearing a long black dress with lots of red
tulle coming out and very low-cut with a huge slit.<br><br>\u201COh my satan you have to buy that outfit\u201D The salesperson
said.<br><br>\u201CYeah it looks totlly hot.\u201D said B\u2019Loody Mary.<br><br>\u201CYou know what I am gona give it to you free cause u
look really hot in that utfit. Hey are you gonna be at the concert tonight?\u201D he asked.<br><br>\u201CYeah I am actually.\u201D I
looked back at him. \u201CHey BTW my name\u2019s ebondy dark\u2019ness dementia TARA way what\u2019s yours?\u201D<br><br>\u201CTom Rid.\u201D He said and
ran a hand through his black-dyed hair. \u201Cmaybe I\u2019ll see you there tonight.\u201D<br><br>\u201CYeah I don\u2019t think so cause I am
going there with my bf drako you sick perv!\u201D I yelled angrily, but before he could beg me to go with him, Hargrid flew
in on his black broom looking worried. \u201COMFG EBONDY U NEED OT GET BACK INTO THE CASTLE NOW!\u201D<br><br>Chapter
17.<br><br>AN: I sed stup flming da stryo! if ur a prep den dnot red it! u kin tel weder ur a prep or not by ma quiz itz
on ma hompage. if ur not den u rok. if u r den FOOOOOK UFFFFFFFFFF! pz willo isn\u2019t rely a prep. Raven plz do dis il
promis 2 giv u bak ur postr!<br><br>XXXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXX<br><br>Tom Riddle gave us some clothes n
stuff 4 free. He said he wud help us wif makeup if he wunted koz he was relly in2 fashin n stuff. (hes bisezual).
Hargird kept shooting at us to cum back 2 Hogwarts. \u201CWTF Hargrid?\u201D I shouted angrily. \u201CFuck off you fjucking bastard.\u201D
Well anyway Willow came. Hargird went away angrily.<br><br>\u201CHey bitch you look kawaii.\u201D she said.<br><br>\u201CYah but not as
kawaii as you.\u201D I answered sadly cause Willow\u2019s really pretty and everything. She was wearing a short black
corset-thingy with blood red lace on it and a blak blood-red miniskirt, leather fish-nets and black poiny boots that
showed off how pale she wuz. She had a really nice body wif big bobs and everything. She was thin enouff 2 be
anorexic.<br><br>\u201CSo r u going 2 da concert wif Draco?\u201D she asked.<br><br>\u201CYah.\u201D I said happily.<br><br>\u201CI\u2019m gong with
Diabolo.\u201D she anserred happily. Well anyway Draco and Diabolo came. They were both loking extremely hot and sexy and u
could tell they thoufht we were ot 2. Diabolo was wearing a black t-shirt that said \u2018666\u2019 on it. He was wearing tons off
makeup jus like Marylin Manson. Draco was wearing black leather pants, a gothic black GC t-shirt and black Vans he got
from da Warped tower. B\u2019loody Mart was going 2 da concert wif Dracola. Dracola used to be called Navel but it tuned out
dat he was kidnapped at birth and his real family were vampires. They dyed in a car crash. Navel converted to Satanism
and he went goth. He was in Slitherin now. He was wearing a black Wurped t-shirt, black jeans and shoes and black hair
wif red streekz in it. We kall him Dracula now. Well anyway we al went 2 Draco\u2019s black Mercy-Bens (geddit cuz wer
gpffik) that his dad Lucian gave him. We did pot, coke and crak. Draco and I made out. We made fun of dose stupid fuking
preps. We soon got there\u2026\u2026.I gapsed.<br><br>Gerard was da sexiest guy eva! He locked even sexier den he did in pix. He
had long raven blak hair n piercing blue eyes. He wuz really skinny and he had n amazing ethnic voice. We moshed 2
Helena and sum odder songz. Sudenly Gerard polled of his mask. So did the other membez. I gasped. It wasn\u2019t Gerard at
all! It was an ugly preppy man wif no nose and red eyes... Every1 ran away but me and Draco. Draco and I came. It
was\u2026\u2026.Vlodemort and da Death Deelers!<br><br>\u201CU moronic idiots!\u201D he shooted angstily. \u201CEnoby, I told u to kill Vampire.
Thou have failed. And now\u2026\u2026\u2026.I shall kill thou and Draco!\u201D<br><br>\u201CNo no please!\u201D We begged sadly but he took out his
knife.<br><br>Sudenly a gothic old man flu in on his broomstick. He had lung black hair and a looong black bread. He wus
werring a blak robe dat sed \u2018avril lavigne\u2019 on da back. He shotted a spel and Vlodemort ran away. It
was\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026DUMBLYDORE!<br><br>Chapter 18.<br><br>AN: I SED STUP FLAMMING! if u do den ur a fuken prep! fangz 2
raven 4 da help n stuf. u rok! n ur nut a prep. fangz for muh sewter! ps da oder eson dumbeldor swor is koz he trin 2 be
gofik so der!<br><br>XXXXXXXXXXXX666XXXXXXXXXXXXXXXXX<br><br>I woke up the next day in my coffin. I walked out of it and
put on some black eyeliner, black eyesharrow, blood-bed lipstick and a black really low-cut leather dress that was all
ripped and in stripes so you could see my belly. I was wearing a skull belly ring with black and red diamonds inside
it.<br><br>(Da night before Draco and I rent back to the skull (geddit skull koz im goffik n I like deth). Dumbeldore
chased Vlodemort away. We flew there on our brooms. Mine was black and the broom-stuff was blood-red. There was lace all
over it. Draco had a black MCR boom. We went back to our rooms and we had you-know-what to a Linkin Park
song.)<br><br>Well anyway I went down to the Grate Hall. There all da walls were painted black and da tables were black
too. But you fould see that there was pink pant underneath the black pant. And there were pastors of poser bands
everywhere, like Ashlee Simpson and the Backstreet Boys.<br><br>\u201CWTF!\u201D I shouted going to sit next to B\u2019loody Mary and
Willow. B\u2019loody Mary was wearing a black leather mini with a Good Chraloote t-shirt, black fishnets and black pointy
boots. Willow was wearing a long gothic blak dress with blood red writing that was all lacy and came up to your thighs
and black boots and fishnets. Vampire, Dracula and Draco came. We started to talk about who was sexier, Mikey or Gerard
Way or Billie Joe Armstrong. The boys joined in cause they were bi.<br><br>\u201CThose guys are so fucking hot.\u201D Navel was
saying as suddenly a gothic old man with a black beard and everything came. He was the same one who had chassed away
Vlodemort yesterday. He had normal tan skin but he was wearing white foundation and he had died his hare
black.<br><br>\u201C\u2026\u2026\u2026\u2026\u2026\u2026.DUMBLEDORE?1!\u201D we all gasped.<br><br>\u201CWTF?\u201D I shouted angrily. \u201CI thought he was just wearing that
to scare Volsemort!\u201D<br><br>\u201CHello everyone.\u201D he said happily. \u201CAs u can see I gave the room a makeover. Whjat do u fink
about it?\u201D<br><br>Everyone from the poser table in Gryiffindoor started to cheer. Well we goths just looked at each
other all disfusted and shook our heads. We couldn\u2019t believe what a poser he was!1.<br><br>\u201CBTW you can call me Albert.\u201D
HE CALLED AS WE LEFT to our classes.<br><br>\u201CWhat a fucking poser!\u201D Draco shouted angrily as we we to Transfomation. We
were holding hands. Vampire looked really jealous. I could see him crying blood in a gothic way (geddit, way lik Gerard)
but I didn\u2019t say anything. \u201CI bet he\u2019s havin a mid-life crisis!\u201D Willow shouted.<br><br>I was so fucking
angry.<br><br>Chapter 19. im nut ok i promise<br><br>AN: plz stup flaming da story if u do ur a foken prep n ur jelous
ok!11 frum noq un im gong 2 delt ur men reviowz!111 BTW evonyd a poorblod so der!1 fangz 2 raven 4m da
help!11<br><br>XXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXX<br><br>All day we sat angerly finking about Dumbelldore. We were
so fucking pissed off. Well, I had one thing to look forward too- da MCR concert. It had been postphoned, so we could
all go.<br><br>Anyway, I went to the common room sadly to cut classes. Draco was being all secretive.<br><br>I asked
what it was and he got all mad me and started crying all hot and angsty (rnt sensitve bi guyz so hot).<br><br>\u201CNo one
fucking understands me!1\u201D he shouted angrily as his black hare went in his big blue eyes like Billie Joe in Boulevard of
Borken Dreamz. He was wearing black baggy paints, a black MCR t-shirt and a black die. (geddit insted of tie koz im
goffik) I was wearing a blak leather low cut top with chains all over it all over it a blak leather mini, black high
held boots and a cross belly fing. My hair was al up in a messy relly high bun like Amy Lee in Gong Under. (email me if
u wana see da pik)<br><br>\u201CAccuse me? What about me!\u201D I growled.<br><br>\u201CBuy-but-but-\u201D he grunted.<br><br>\u201CYou fucking
bastard!\u201D I moaned.<br><br>\u201CNo! Wait! It\u2019s not what it fucking looks like!\u201D he shouted.<br><br>But it was to late. I
knew what I herd. I ran to the bathroom angrily, cring. Draco banged on the door. I whipped and whepped as my blody
eyeliner streammed down my cheeks and made cool tears down my feces like Benji in the video for Girls and Bois (raven
that is soo our video!). I TOOOK OUT A CIGARETE END STARTED TO smoke pot.<br><br>Suddenly Hargrid came. He had
appearated.<br><br>\u201CYou gave me a fucking shock!\u201D I shouted angrily dropping my pot. \u201CWtf do you fink you\u2019re doing in da
gurl\u2019s room?\u201D<br><br>Only it wasn\u2019t just Hargrid. Someone else was with him too! For a second I wanted it 2 b Tom Rid or
maybe Draco but it was Dumblydore.<br><br>\u201CHey I need to ask you a question.\u201D he said, pulling out his black
wanabe-goffik purse. \u201CWhat are u wearing to the concert?\u201D<br><br>\u201CU no who MCR r!\u201D I gasped.<br><br>\u201CNo I just saw there
was a concert dat a lot of gothz and punx were going 2.\u201D He said. \u201CAnyway Draco has a surprise for u.\u201D<br><br>Chapter
20.<br><br>AN: I sed I dnoty ker wut u fink! stof pflamin ok prepz!1 fangz 2 raven 4 da help!1 oh yah btw ill be un
vacation in transilvania 4 da nex 3 dayz so dnot expect
updatz.<br><br>XXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXX<br><br>All day I wondered what the surprise was. Meanwhile, I pot
on a blak ledder mini, a blak corset with urple lace stuff all over it, an black gothic compact boots. MCR were gong 2
do the concert again, since Volxemort had taken over the last one. I slit my wrists while I moshed 2 MCR in my bedroom
all night, feeling excited. Suddenly someone knocked on the door while I was trying on sum black clothes and moshing to
Fang u 4 da Venom. I gut all mad and turned it of, but sacredly I hopped inside dat it was Draco so we could do it
again.<br><br>\u201CWut de fucking hell r u doing!\u201D I shouted angrily. It was Loopin! \u201CR u gonna cum rape me or what.\u201D I
yelled. I was allowed to say dat because Dumblydore had told us all 2 be careful around hem and Snap since he was a
pedo.<br><br>\u201CNo, actshelly (geddit, hell) kan I plz burrow sum condemns.\u201D he growld angrily.<br><br>\u201CYah, so u can fuk
ur six-yr-old gurlfriend, huh?\u201D I shouted sarkastikally.<br><br>\u201CFuker.\u201D He said, gong away.<br><br>Well anyway, I put
on some black eyesharow, black eyeliner, and some black lipstick and white foundation. Then I went. Den I
gasped\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.Snake and Loopin were in da middle of da empty hall, doin it, and Dobby was
watching!1<br><br>\u201COh my god you ludacris idiot!\u201D they both shooted angrily when they saw me. Dobby ran away crying. Dey
got up, though. Normally I wood have ben turned on (I luv cing guyz do it) but both of them were fuking preps. (btw
snake is movd 2 griffindoor now)<br><br>\u201CWTF is that why u wanted condoms?\u201D I asked sadistically. (c I speld
dat)<br><br>\u201COnly you wouldn\u2019t give them to me!\u201D Lumpkin shouted angrily.<br><br>\u201CWell you shoulda told me.\u201D I
replayed.<br><br>\u201CYou dimwit!.\u201D Snake began 2 shoot angrily. And then\u2026\u2026\u2026I took out my black camera and took a pic of
them. U could see that they were naked and everything.<br><br>\u201CWell xcuse me!\u201D they both shouted angrily. \u201CWhat was dat
al about?\u201D<br><br>\u201CIt wuz to blackmail u.\u201D I snarked. \u201CSo now next time you see me doing it with my boyfriend you cant
fuking rat me out or I\u2019ll show dis to Dumbledork. So fuck off, u bastards!\u201D I started to run. They chased me but I threw
my wound at them and dey tripped over it. Well anyway, I went outside and there was Vampire, looking extremely fucking
hot.<br><br>\u201CWTF where\u2019d Draco?\u201D I asked him.<br><br>\u201COh he\u2019s bein a fucking bastard. He told me he wouldn\u2019t cum.\u201D
Vampire said shaking his hed. \u201CU wanna cum with me? 2 the concert?\u201D<br><br>Then\u2026.. he showed me his flying car. I
gasped. It was a black car. He said his dogfather Serious Blak had given it 2 him. The license plate on the front sed
MCR666 on it. The one on da back said \u2018ENOBY\u2019 on it.<br><br>\u2026\u2026\u2026.I gasped.<br><br>We flew to the concert hall. MCR were
there, playing.<br><br>Vampire and I began 2 make out, moshing to the muzik. I gapsed, looking at da band.<br><br>I
almost had an orgasim. Gerard was so fucking hot! He begin 2 sing \u2018Helena\u2019 and his sexah beautiful voice began 2 fill
the hall. \u2026\u2026\u2026.And den, I heard some crrying. I turned and saw Draco, cryin in a corner.<br><br>Chapter 21.<br><br>AN:
fuk u ok! u fokng suk. itz nut ma fult if itz speld rong ok koz dat bich ravern cuz it fok u prepz!1 woopz soz raven
fangz 4 da help. btw transilvana rox hrad!1 I even gut 2 go 2 da kasel wer drkola was
flimed!<br><br>XXXXXXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXX<br><br>Later we all went in the skull. Draco was crying in da
common room. \u201CDraco are u okay?\u201D I asked in a gothic voice.<br><br>\u201CNo I\u2019m not u fuking bitch!\u201D he shouted angrily. He
stated to run out of the place in a suicidal way. I stated to cry cuz I was afraid he would commit suicide.<br><br>\u201CIts
ok Enoby.\u201D said Vampire comfortly. \u201CIll make him feel better.\u201D<br><br>\u201CU mean you\u2019ll go fuck him wont you!\u201D I shouted
angrily. Then I ran 2 get Draco. Vampire came too.<br><br>\u201CDraco please come!\u201D he began to cry. Tears of blood came down
his pail face. I wuz so turned on cuz I love sensitive bi guyz. (if ur a homophone den fuk of!)<br><br>And
then\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. we herd sum footsteps! Vampire got out his blak invincibility coke. We both gut under it. We saw the
janitor Mr. Norris there, shouting angrily with a flashlight in his hand.<br><br>\u201CWHOSE THERE!\u201D he shouted angrily. We
saw Filth come. He went unda da invisibility cloke and started to meow loudly.<br><br>\u201CIS ANY1 THERE!\u201D yelled Mr.
Norris.<br><br>\u201CNo fuck u you preppy little poser sun of a fukcing bich!\u201D Vampire said under his breast in a disgusted
way.<br><br>\u201CEXCUS ME! EXCUS ME WHO SED DAT!\u201D yelled Mr. Norris. Den he heard Filch meow. \u201CFilth is der any1 unda da
cloak!\u201D he asked. Filth nodded. And then\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.Vampir frenched me! He did it jus as\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026.. Mr. Norris was taking
of da cloak!1<br><br>\u201CWHAT DA-\u201D he yelled but it was 2 late cuz now we were ruining away frum him. And den we saw Draco
crying n bustin in2 tearz and slitting his rists outside of da school.<br><br>\u201CDraco!\u201D I cried. \u201CR u okay?\u201D<br><br>\u201CI
guess though.\u201D Draco weeped. We went back to our coffins frenching each other. Draco and I decided to watch Lake Placid
(c isnt da deprezzin) on the gothic red bed together. As I wuz about 2 put in the video, my eyes rolled up and suddenly
I had a vision of something that was happening now. There was a knok on the door and Fug and da Mystery of Magic walked
into the school!1<br><br>Chapter 22.<br><br>AN: stfu! prepz stup flaming ok if u dnot lik it fuk of I no itz mr. noris
itz raven\u2019s folt ok!11 u suk!1 no jus kidding raven u fokieng rok prepz
suk!1<br><br>XXXXXXXXXXXXXXXXX666XXXXXXXXXXXXXXXXXXXXXXXXX<br><br>All day everyone talked about the Misery of Magic.
Well anyway, I woke up the next day. I was in my coffin so I opened the door. I was wearing blak lacey leather pajamas.
Then I gasped.<br><br>Standing in front of me where\u2026\u2026\u2026\u2026\u2026\u2026. B;loody Mary, Vampire, Diabolo, Draco, Dracula and
Willow!<br><br>I opened my crimson eyes. Willow was wearing a tight black leather top with pictures of bloody roses all
over it. Under that she wart a black poofy skirt wit lace on it and black gothic boots that was attached to the top.
Vampire was wearing a baggy Simple Plan t-shirt and baggy black pants and Vans. Draco was wearing a black MCR t-shirt
and blak jeans and a leather jacket. He looked just likee Gerard Way, and almost as fucking sexy. Vampire looked like
Joel Madden. B\u2019loody Mary was wearing a tight black poofy gothic dress that she had ripped so it showed of all her
clearage with a white apron that said \u2018bich\u2019 and other swear words and MCR lyrics on it kind of like one dress I had
seen Amy Lee wear once. Darkness (who is Jenny) was there too. She was weaving a ripped gothic black dress with ripped
stuff all over it and a lace-up top thing and black pointy boots. So were Crab and Goyle. It turns out that Darkness,
Diabolo, Crab and Goyle\u2019s dad was a vampire. He committed suicide by slitting his wrists with a razor. He had raped them
and stuff before too. They all got so depressed that they became goffik and converted to Stanism.<br><br>\u201COMFG\u201D I
yielded as I jumped up. \u201CWhy the fuck are u all here?\u201D<br><br>\u201CEnoby something is really fucked up.\u201D Draco
said.<br><br>\u201COK but I need to put my fucking clothes on first.\u201D I shouted angrily.<br><br>\u201CIt\u2019s all right. We have to
go now and you look kawaii anyway. Your so fucking beautiful.\u201D Draco said in a sexy voice.<br><br>\u201COh all right.\u201D I said
smiling. \u201CBut you have to tell me why your being all erective.\u201D<br><br>\u201CI will I will.\u201D he said.<br><br>So I just put on
some black eyeliner, black lipstick and red eyeshadow and white foundation. Then I came. We all went outside the Great
Hal and looked in from a widow. A fucking prep called Britney from Griffindoor was standing next to us. She was wearing
a pink mini and a Hilary Duff t-shirt so we put up our middle fingers at her. Inside the Great Hall we could see
Dumbledork. Cornelia Fudged was there shouting at Dumbledore. Doris Rumbridge was there too.<br><br>\u201CTHIS CANNOT BE!\u201D
she shouted angrily. \u201CTHE SCHOOL MUST BE CLOSED!\u201D<br><br>\u201CTHE BARK LORD IS PLANNING TO KILL THE STUDENTS!\u201D yelled
Cornelia Fudge.<br><br>\u201CYOU ARE NOT FIT TO BE THE PRINCIPAL ANY LONGER!\u201D yelled Rumbridge. \u201CYOU ARE TOO OLD AND YOUR
ALZHEIMERS IS DANGEROUS! YOU MUST RETRY OR VOLDEMORT WILL KILL YOUR STUDENTS!\u201D<br><br>\u201CVery well.\u201D Dumbledore said
angrily. \u201CButt we cannot do this. We can\u2019t close the school. There is only one person who is capable of killing
Voldemort and she is in the school. And her name is\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026..Enony Dark\u2019ness Dementia Raven
Way.\u201D<br><br>Draco, Crab, Goyle, Darkness, Willow, Vampire and B\u2019loody Mary looked at each other\u2026\u2026\u2026I gasped.`,Ye=`<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>
<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>
<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>
<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>
<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>
<h1>Don't\u{1F44F} pretend\u{1F44F} to \u{1F44F}be \u{1F44F}entitled\u{1F44F} to\u{1F44F} financial\u{1F44F} compensation\u{1F44F} if \u{1F44F}you \u{1F44F}or\u{1F44F} a\u{1F44F} loved \u{1F44F}one \u{1F44F}hasn't\u{1F44F}
    even
    \u{1F44F}been \u{1F44F}diagnosed\u{1F44F} with \u{1F44F}mesothelioma</h1>`,ze=`<h3>What the fuck did you just fucking say about me, you little bitch? I\u2019ll have you know I graduated top of my class in
    the
    Navy Seals, and I\u2019ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am
    trained in gorilla warfare and I\u2019m the top sniper in the entire US armed forces. You are nothing to me but just
    another
    target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth,
    mark my
    fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we
    speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better
    prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\u2019re fucking
    dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\u2019s just with my bare
    hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United
    States
    Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you
    little
    shit. If only you could have known what unholy retribution your little \u201Cclever\u201D comment was about to bring down upon
    you, maybe you would have held your fucking tongue. But you couldn\u2019t, you didn\u2019t, and now you\u2019re paying the price,
    you
    goddamn idiot. I will shit fury all over you and you will drown in it. You\u2019re fucking dead, kiddo.</h3>`;function se(e){let n;return{c(){n=g("div"),D(n,"id","svelte-infinite-scroll"),ge(n,"width","0")},m(t,o){S(t,n,o),e[11](n)},p:W,d(t){t&&k(n),e[11](null)}}}function Re(e){let n,t=!e[1]&&!e[0]&&se(e);return{c(){t&&t.c(),n=ue()},m(o,a){t&&t.m(o,a),S(o,n,a)},p(o,[a]){!o[1]&&!o[0]?t?t.p(o,a):(t=se(o),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i:W,o:W,d(o){t&&t.d(o),o&&k(n)}}}function Le(e,n,t){let{threshold:o=0}=n,{horizontal:a=!1}=n,{elementScroll:i=null}=n,{hasMore:d=!0}=n,{reverse:w=!1}=n,{window:l=!1}=n;const r=Se();let c=!1,b,s,y,m;const p=h=>{if(!d)return;const I=h.target;L(I,w,a)<=o?(!c&&d&&(r("loadMore"),t(8,s=I.scrollHeight),t(9,y=I.scrollTop)),t(7,c=!0)):t(7,c=!1)},L=(h,I,O)=>{const T=h.documentElement?h.documentElement:h;return I?O?T.scrollLeft:T.scrollTop:O?T.scrollWidth-T.clientWidth-T.scrollLeft:T.scrollHeight-T.clientHeight-T.scrollTop};Ie(()=>{l?t(10,m=document):i?t(10,m=i):t(10,m=b.parentNode)}),ve(()=>{m&&(m.removeEventListener("scroll",p),m.removeEventListener("resize",p))});function N(h){V[h?"unshift":"push"](()=>{b=h,t(2,b)})}return e.$$set=h=>{"threshold"in h&&t(3,o=h.threshold),"horizontal"in h&&t(4,a=h.horizontal),"elementScroll"in h&&t(0,i=h.elementScroll),"hasMore"in h&&t(5,d=h.hasMore),"reverse"in h&&t(6,w=h.reverse),"window"in h&&t(1,l=h.window)},e.$$.update=()=>{e.$$.dirty&1088&&m&&(w&&t(10,m.scrollTop=m.scrollHeight,m),m.addEventListener("scroll",p),m.addEventListener("resize",p)),e.$$.dirty&1984&&c&&w&&t(10,m.scrollTop=m.scrollHeight-s+y,m)},[i,l,b,o,a,d,w,c,s,y,m,N]}class Be extends ee{constructor(n){super(),$(this,n,Le,Re,Z,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function de(e,n,t){const o=e.slice();return o[9]=n[t],o[1]=t,o}function le(e){let n,t,o,a,i,d=e[1]+1+"",w,l,r,c=e[9].text+"",b;return{c(){n=g("hr"),t=A(),o=g("div"),a=g("p"),i=H("Page "),w=H(d),l=A(),r=new ke(!1),b=ue(),D(n,"class","svelte-1528o5p"),D(o,"class","abstract"),r.a=b},m(s,y){S(s,n,y),S(s,t,y),S(s,o,y),f(o,a),f(a,i),f(a,w),S(s,l,y),r.m(c,s,y),S(s,b,y)},p(s,y){y&1&&c!==(c=s[9].text+"")&&r.p(c)},d(s){s&&k(n),s&&k(t),s&&k(o),s&&k(l),s&&k(b),s&&r.d()}}}function _e(e){let n,t,o,a,i,d,w,l,r,c,b=e[2]?"NSFW":"SFW",s,y,m,p,L,N,h,I,O,T,C=e[0],X=[];for(let u=0;u<C.length;u+=1)X[u]=le(de(e,C,u));return p=new Be({props:{elementScroll:e[3],threshold:100}}),p.$on("loadMore",e[5]),h=new Ne({props:{page:e[1]+1}}),{c(){n=g("main"),t=g("div"),o=g("div"),a=g("h1"),a.textContent="Terms and Conditions",i=A(),d=g("p"),d.innerHTML="SYZYGY CORPORATION <br/> Last updated: November 8, 2022",w=A(),l=g("small"),r=g("input"),c=A(),s=H(b),y=A();for(let u=0;u<X.length;u+=1)X[u].c();m=A(),ie(p.$$.fragment),L=A(),N=g("div"),ie(h.$$.fragment),D(d,"class","author"),D(r,"type","checkbox"),r.checked=e[2],D(o,"class","terms-container svelte-1528o5p"),D(t,"class","container"),D(N,"class","controls-container svelte-1528o5p"),D(n,"class","svelte-1528o5p")},m(u,E){S(u,n,E),f(n,t),f(t,o),f(o,a),f(o,i),f(o,d),f(o,w),f(o,l),f(l,r),f(l,c),f(l,s),f(o,y);for(let M=0;M<X.length;M+=1)X[M].m(o,null);f(t,m),K(p,t,null),e[6](t),f(n,L),f(n,N),K(h,N,null),I=!0,O||(T=fe(r,"change",e[4]),O=!0)},p(u,[E]){if((!I||E&4)&&(r.checked=u[2]),(!I||E&4)&&b!==(b=u[2]?"NSFW":"SFW")&&F(s,b),E&1){C=u[0];let v;for(v=0;v<C.length;v+=1){const te=de(u,C,v);X[v]?X[v].p(te,E):(X[v]=le(te),X[v].c(),X[v].m(o,null))}for(;v<X.length;v+=1)X[v].d(1);X.length=C.length}const M={};E&8&&(M.elementScroll=u[3]),p.$set(M);const ne={};E&2&&(ne.page=u[1]+1),h.$set(ne)},i(u){I||(q(p.$$.fragment,u),q(h.$$.fragment,u),I=!0)},o(u){re(p.$$.fragment,u),re(h.$$.fragment,u),I=!1},d(u){u&&k(n),ye(X,u),J(p),e[6](null),J(h),O=!1,T()}}}function xe(e,n,t){let o=!0,a=0,i=[];const d=[{text:Ce,nsfw:!1},{text:Ye,nsfw:!0},{text:Me,nsfw:!0},{text:ze,nsfw:!0}];let w=s=>{if(o){let y=s%d.length;return d[y]}else{const y=d.filter(p=>!p.nsfw);let m=s%y.length;return y[m]}},l;const r=()=>t(2,o=!o),c=()=>t(1,a++,a);function b(s){V[s?"unshift":"push"](()=>{l=s,t(3,l)})}return e.$$.update=()=>{e.$$.dirty&3&&t(0,i=[...i,w(a)])},[i,a,o,l,r,c,b]}class Ve extends ee{constructor(n){super(),$(this,n,xe,_e,Z,{})}}new Ve({target:document.getElementById("app")});
