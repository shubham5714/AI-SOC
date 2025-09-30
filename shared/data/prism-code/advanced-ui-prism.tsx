/*------ accordion(prism-code for showcode purpose) start ------*/

export const accordion1 = `
<Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the <code>.accordion-body</code>, though the
          transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about  any HTML can go within the <code>.accordion-body</code>, though the
        transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion1 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} defaultActiveKey="1" />`

export const accordion2 = `
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
       default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
          just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
         <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
        </Accordion.Item>
      </Accordion>`;

export const reusableaccordion2 = ` 
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} defaultActiveKey="1" />`


export const accordion3 = `
<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
           which isintended to demonstrate the <code>.accordion-flush</code> class.
           This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
           This is thesecond item's accordion body. Let's imagine this being filled
           with some actual content.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
            which is intended to demonstrate the <code>.accordion-flush</code> class.
            This is the third item's accordion body. Nothing more exciting happening
            here in  terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would look in a
            real-world application.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion> `;

export const reusableaccordion3 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Flushdata} flush={true} closeAll={true} accordionClass="accordion-flush" />
`
export const accordion4 = `
<Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion4 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-solid-primary" defaultActiveKey="1" />`

export const accordion5 = `
<Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
       <Accordion.Header>Accordion Item #3</Accordion.Header>
       <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion5 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

  <SpkAccordions items={Basicdata} accordionClass="accordion-solid-secondary" defaultActiveKey="1" />`

export const accordion6 = `
<Accordion defaultActiveKey="0" className="accordion accordion-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
       </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion6 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-primary" defaultActiveKey="1" />`

export const accordion7 = `
<Accordion defaultActiveKey="0" className="accordion accordion-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion7 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-secondary" defaultActiveKey="1" />`

export const accordion8 = `
<Accordion defaultActiveKey="0" 
      className="accordion accordion-customicon1 accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion8 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-customicon1 accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion9 = `
<Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
      <Accordion.Item eventKey="0" className="custom-accordion-primary">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
         default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just  about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
       <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
      by default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
       by default, until the collapse plugin adds the appropriate classes that we
       use to style each element. These classes control the overall appearance, as
       well as the showing and hiding via CSS transitions. You can modify any of this with
       custom CSS or overriding our default variables. It's also worth noting that
       just about  any HTML can go within the <code>.accordion-body</code>, though the
       transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion9 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Customdata} accordionClass="customized-accordion accordions-items-seperate" defaultActiveKey="1" />`


export const accordion10 = `
<Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion10 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-border-primary accordions-items-seperate" defaultActiveKey="1" />`

export const accordion11 = `
<Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion11 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-border-success accordions-items-seperate" defaultActiveKey="1" />`

export const accordion12 = `
<Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion12 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-left accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion13 = `
<Accordion defaultActiveKey="0" 
      className="accordion accordionicon-none accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

export const reusableaccordion13 = `
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-none accordions-items-seperate" defaultActiveKey="1" />
`

export const accordion14 = `
<p className="mb-0">
      <Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
        href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
          Link with href</Button>
      <Button  onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
        variant='' className="btn btn-secondary collapsed mb-2" type="button">
          Button with data-bs-target</Button>
      </p> 
      <Collapse in={openb}>
      <div className="card card-body mb-0">
          Some placeholder content for the collapse component. This panel
          is
          hidden by default but revealed when the user activates the
          relevant
          trigger.
      </div>
      </Collapse>`;

export const accordion15 = `
<p className="mb-0">
      <Button className="btn btn-primary mb-2 me-1"  onClick={() => { first() }}>Toggle first element</Button>
      <Button variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second() }}>Toggle second element</Button>
      <Button variant='' className="btn btn-danger mb-2" type="button"  onClick={() => { both() }}>Toggle both elements</Button>
                                      </p>
      <Row>
          <div className="col m-1">
      {isFirstCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body mb-0">
                      Some placeholder content for the first collapse
                      component of
                      this multi-collapse example. This panel is hidden by
                      default
                      but revealed when the user activates the relevant
                      trigger.
                  </div>
              </div>
          ) : null}
          </div>
          <div className="col m-1">
          {isSecondCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body mb-0">
                      Some placeholder content for the second collapse
                      component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the
                      relevant
                      trigger.
                  </div>
              </div>
           ) : null}
          </div>
      </Row>`;

export const accordion16 = `
<p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
      Toggle width collapse</Button>                   
      </p><div style={{ minHeight: '120px' }}>
      <Collapse in={open} dimension="width">
      <div id="example-collapse-text">
          <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
           hidden by default and shown when triggered.
          </Card>
      </div>
      </Collapse>
      </div>`;

export const accordion17 = `
<Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the <code>.accordion-body</code>, though the
          transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about  any HTML can go within the <code>.accordion-body</code>, though the
        transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`;

// carousel

export const carousel1 = `
<Carousel id="carouselExampleControls" 
      className="carousel slide" data-bs-ride="carousel" indicators={false}>
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-28.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-31.jpg"
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-29.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel1 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
<SpkCarouselComponent items={Carouseldata} />`

export const carousel2 = `
<Carousel id="carouselExampleIndicators" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-25.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-29.jpg" 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-30.jpg"
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel2 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Indicatorcarousel} mainClass="carousel slide" indicators={true} />`


export const carousel3 = `
<Carousel id="carouselExampleSlidesOnly" 
      className="carousel slide carousel-icons" indicators={false}>
      <Carousel.Item className="active">
          <Image fill src="../../../assets/images/media/media-26.jpg"
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-27.jpg"
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-33.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel3 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Slidecarousel} />`

export const carousel4 = `
<Carousel id="carouselExampleCaptions" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <Image fill src="../../../assets/images/media/media-59.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-60.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-61.jpg" 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel4 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Captioncarousel} mainClass="carousel slide" indicators={true} />`

export const carousel6 = `
Carousel fade id="carouselExampleFade" 
      className="carousel slide carousel-fade" indicators={false}>
      <Carousel.Item className="active">
         <Image fill src="../../../assets/images/media/media-43.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <Image fill src="../../../assets/images/media/media-44.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <Image fill src="../../../assets/images/media/media-45.jpg" 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel6 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Crosscarousel} fade={true} mainClass="carousel slide carousel-fade" indicators={false} />`


export const carousel5 = `
<Carousel id="carouselExampleInterval" 
      className="carousel slide" data-bs-ride="carousel" indicators={false}>
      <Carousel.Item interval={1000} className="active" >
          <Image fill src="../../../assets/images/media/media-40.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <Image fill src="../../../assets/images/media/media-41.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item >
          <Image fill src="../../../assets/images/media/media-42.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel5 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent interval1={1000} items={Individualcarousel} mainClass="carousel slide" indicators={false} />`

export const carousel7 = `
<Carousel touch={false} id="carouselExampleControlsNoTouching" 
      className="carousel slide" data-bs-touch="false" indicators={false}
      data-bs-interval="false">
      <Carousel.Item className="carousel-item active">
          <Image fill src="../../../assets/images/media/media-63.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-64.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <Image fill src="../../../assets/images/media/media-62.jpg" 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel7 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Disablecarousel} mainClass="carousel slide" indicators={false}
data-bs-interval="false"/>`

export const carousel8 = `
<Carousel id="carouselExampleDark"
      className="carousel slide">
      <Carousel.Item className="active" data-bs-interval="10000">
      <Image fill src="../../../assets/images/media/media-13.jpg"
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item data-bs-interval="2000">
      <Image fill src="../../../assets/images/media/media-14.jpg"
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image fill src="../../../assets/images/media/media-18.jpg" 
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p className="op-7">Some representative placeholder
      content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `;

export const reusablecarousel8 = `
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Darkcarousel} mainClass="carousel slide" indicators={true} />`

//

//Modals & closes
export const modal1 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={() => handleModalOpen('demoModal')}>
            Launch demo modal
          </SpkButton>
          <Modal show={modals["demoModal"] || false} onHide={() => handleModalClose('demoModal')} className="fade" id="exampleModal" aria-labelledby="exampleModalLabel" >
            <Modal.Header closeButton>
              <h6 className="modal-title" id="exampleModalLabel1">Modal title</h6>
            </Modal.Header>
            <Modal.Body className="">
              ...
            </Modal.Body>
            <Modal.Footer className="">
              <SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={() => handleModalClose('demoModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button">Save
                changes</SpkButton>
            </Modal.Footer>
          </Modal>
      )}`;

export const modal2 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={() => handleModalOpen('staticModal')}>
            Launch static backdrop modal
          </SpkButton>
          <Modal show={modals["staticModal"] || false} onHide={() => handleModalClose('staticModal')} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <h6 className="modal-title" id="staticBackdropLabel">Modal title
              </h6>
            </Modal.Header>
            <Modal.Body>
              <p className="mb-0">I will not close if you click outside me. Don't even try to
                press
                escape key.</p>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('staticModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button" >Understood</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal3 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={() => handleModalOpen('scrollModal')}>
							Scrolling long content
						</SpkButton>
						<Modal show={modals['scrollModal'] || false} onHide={() => handleModalClose('scrollModal')} keyboard={false}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="staticBackdropLabel1">Modal title
								</h6>
							</Modal.Header>
							<Modal.Body>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Libero
									ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
									nisi
									ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									voluptatibus, ipsam quo est rerum modi quos expedita facere,
									ex
									tempore fuga similique ipsa blanditiis et accusamus
									temporibus
									commodi voluptas! Nobis veniam illo architecto expedita quam
									ratione quaerat omnis. In, recusandae eos! Pariatur,
									deleniti
									quis ad nemo ipsam officia temporibus, doloribus fuga
									asperiores
									ratione distinctio velit alias hic modi praesentium aperiam
									officiis eaque, accusamus aut. Accusantium assumenda,
									commodi
									nulla provident asperiores fugit inventore iste amet aut
									placeat
									consequatur reprehenderit. Ratione tenetur eligendi, quis
									aperiam dolores magni iusto distinctio voluptatibus minus a
									unde
									at! Consequatur voluptatum in eaque obcaecati, impedit
									accusantium ea soluta, excepturi, quasi quia commodi
									blanditiis?
									Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
									consequuntur quod quo veniam? Labore dignissimos reiciendis
									accusamus recusandae est consequuntur iure.</p>
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<p>Lorem ipsum dolor sit amet.</p>
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('scrollModal')}>Close</SpkButton>
								<SpkButton Buttonvariant='primary' Buttontype="button">Save
									Changes</SpkButton>
							</Modal.Footer>
						</Modal>
          )}`;

export const modal8 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('verticalcenterModal')}
            Buttontarget="#exampleModalScrollable2">
            Vertically centered modal
          </SpkButton>
          <Modal centered show={modals['verticalcenterModal']} onHide={() => handleModalClose('verticalcenterModal')} keyboard={false} className="modal fade">
            <Modal.Header closeButton>
              <h6 className="modal-title" id="staticBackdropLabel2">Modal title
              </h6>
            </Modal.Header>
            <Modal.Body>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero
                ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                nisi
                ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('verticalcenterModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button">Save
                Changes</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal5 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('verticalModal')}
            Buttontarget="#exampleModalScrollable3">
            Vertically centered scrollable modal
          </SpkButton>
          <Modal centered show={modals['verticalModal'] || false} onHide={() => handleModalClose('verticalModal')}
            keyboard={false} className="modal fade">
            <Modal.Header closeButton>
              <h6 className="modal-title" id="staticBackdropLabel3">Modal title
              </h6>
            </Modal.Header>
            <Modal.Body>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                voluptatibus, ipsam quo est rerum modi quos expedita facere,
                ex
                tempore fuga similique ipsa blanditiis et accusamus
                temporibus
                commodi voluptas! Nobis veniam illo architecto expedita quam
                ratione quaerat omnis. In, recusandae eos! Pariatur,
                deleniti
                quis ad nemo ipsam officia temporibus, doloribus fuga
                asperiores
                ratione distinctio velit alias hic modi praesentium aperiam
                officiis eaque, accusamus aut. Accusantium assumenda,
                commodi
                nulla provident asperiores fugit inventore iste amet aut
                placeat
                consequatur reprehenderit. Ratione tenetur eligendi, quis
                aperiam dolores magni iusto distinctio voluptatibus minus a
                unde
                at! Consequatur voluptatum in eaque obcaecati, impedit
                accusantium ea soluta, excepturi, quasi quia commodi
                blanditiis?
                Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                consequuntur quod quo veniam? Labore dignissimos reiciendis
                accusamus recusandae est consequuntur iure.</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>Lorem ipsum dolor sit amet.</p>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('verticalModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button">Save
                Changes</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal4 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('tooltipModal')}>
            Launch demo modal
          </SpkButton>
          <Modal show={modals['tooltipModal'] || false} onHide={() => handleModalClose('tooltipModal')} centered className='popover-modal' id="exampleModalScrollable4" aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
            >
            <Modal.Header closeButton>
              <h6 className="modal-title" id="staticBackdropLabel4">Modal title
              </h6>
            </Modal.Header>
            <Modal.Body>
              <h5>Tooltips in a modal</h5>
              <p className="mb-0">
                <SpkTooltips placement="top" title="tooltip">
                  <Link href="#!"  className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link </Link>
                </SpkTooltips>
                and 
                <SpkTooltips placement="top" title="tooltip">
                  <Link href="#!"  className="text-primary ms-1" data-bs-toggle="tooltip" title="Tooltip"> that link </Link>
                </SpkTooltips> have tooltips on hover.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={() => handleModalClose('tooltipModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button" >Save
                Changes</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal7 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('gridModal')}
            Buttontarget="#exampleModalScrollable5">
            Launch demo modal
          </SpkButton>
          <Modal show={modals['gridModal'] || false} onHide={() => handleModalClose('gridModal')} centered>
            <Modal.Header closeButton>
              <h6 className="modal-title" id="staticBackdropLabel5">Modal title
              </h6>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <Col md={4} className=" bg-light border">.col-md-4</Col>
                  <Col md={4} className=" ms-auto bg-light border">.col-md-4
                    .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                  <Col md={3} className=" ms-auto bg-light border">.col-md-3
                    .ms-auto</Col>
                  <Col md={2} className=" ms-auto bg-light border">.col-md-2
                    .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                  <Col md={6} className=" ms-auto bg-light border">.col-md-6
                    .ms-auto</Col>
                </Row>
                <Row className="row mt-3">
                  <Col sm={9} className=" bg-light border">
                    Level 1: .col-sm-9
                    <Row>
                      <Col sm={6} className="col-8 bg-light border">
                        Level 2: .col-8 .col-sm-6
                      </Col>
                      <Col sm={6} className="col-4 bg-light border">
                        Level 2: .col-4 .col-sm-6
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant='outline-secondary' Buttontype="button" onClickfunc={() => handleModalClose('gridModal')}
                Buttondismiss="modal">Close</SpkButton>
              <SpkButton Buttonvariant='primary' Buttontype="button">Save
                Changes</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal6 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant="primary" Buttontoggle="modal" onClickfunc={() => handleModalOpen('firstModal')}
						>Open first modal
						</SpkButton>
						<Modal id="m1" className="fade" 
							aria-labelledby="contained-modal-title-vcenter" centered show={modals['firstModal']} onHide={() => handleModalClose('firstModal')}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
								</h6>
							</Modal.Header>
							<Modal.Body>
								Show a second modal and hide this one with the button below.
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='primary'
									Buttontarget="#exampleModalToggle2" onClickfunc={() => handleModalOpen('secondModal')}
									Buttontoggle="modal">Open second modal</SpkButton>
							</Modal.Footer>
						</Modal>
						<Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
							centered show={modals['secondModal']} onHide={() => handleModalClose('secondModal')}>
							<Modal.Header closeButton>
								<h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
								</h6>
							</Modal.Header>
							<Modal.Body>
								Hide this modal and show the first with the button below.
							</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant='primary' Buttontarget="#exampleModalToggle" onClickfunc={() => handleModalClose('secondModal')}
									Buttontoggle="modal">Back to first</SpkButton>
							</Modal.Footer>
						</Modal>
          )}`;

export const modal10 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('extraLargeModal')}
            Buttontarget="#exampleModalXl">Extra large modal</SpkButton>
          <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('largeModal')}
            Buttontarget="#exampleModalLg">Large modal</SpkButton>
          <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('smallModal')}
            Buttontarget="#exampleModalSm">Small modal</SpkButton>
          <Modal size="xl" show={modals['extraLargeModal']} onHide={() => handleModalClose('extraLargeModal')}
            aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Header closeButton>
              <h6 className="modal-title" id="exampleModalXlLabel">Extra large
                modal</h6>
            </Modal.Header>
            <Modal.Body>
              ...
            </Modal.Body>
          </Modal>
          <Modal size="lg" show={modals['largeModal']} onHide={() => handleModalClose('largeModal')} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
              <h6 className="modal-title" id="exampleModalLgLabel">Large modal
              </h6>
            </Modal.Header>
            <Modal.Body>
              ...
            </Modal.Body>
          </Modal>
          <Modal size="sm" show={modals['smallModal']} onHide={() => handleModalClose('smallModal')}
            aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Header closeButton>
              <h6 className="modal-title" id="exampleModalSmLabel">Small modal
              </h6>
            </Modal.Header>
            <Modal.Body>
              ...
            </Modal.Body>
          </Modal>
          )}`;

export const modal9 = `
export default function BasicModal () {   
          //fullscreen modals
          const values =  [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
          const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
          const [fullscreen, setFullscreen] = useState(true);
          const [showf, setShowf] = useState(false);
        
          function handleShowf(breakpoint, color) {
            setFullscreen(breakpoint);
            setShowf(true);
          }
        return(
          {values.map((v, idx) => (
            <SpkButton Buttonvariant=""
              key={idx}
              Customclass={"me-2 mb-2 btn-#{colors[idx % colors.length]}"}
              onClickfunc={() => handleFullscreenShow(v, colors[idx % colors.length])}
            >
              Full screen {typeof v === "string" && below #{v.split("-")[0]}"}
            </SpkButton>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header className="me-2" closeButton>
              <Modal.Title as="h6">
                Full screen {typeof fullscreen === "string" ? "below #{fullscreen?.split("-")[0]}" : ''}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant="secondary" onClickfunc={() => setShow(false)}>
                Close
              </SpkButton>
            </Modal.Footer>
          </Modal>
        )}`;

export const modal11 = `
export default function BasicModal () {   
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
          return(
            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="btn  mb-1 me-2" onClickfunc={() => handleModalOpen('@mdoModal')}>Open modal for
            @mdo</SpkButton>
          <Modal show={modals['@mdoModal']} onHide={() => handleModalClose('@mdoModal')}>
            <Modal.Header closeButton>
              <Modal.Title as="h6">New message to @mdo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Recipient:</Form.Label>
                  <Form.Control type="email" defaultValue="@mdo" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@mdoModal')}>
                Close
              </SpkButton>
              <SpkButton Buttonvariant="primary">Send message</SpkButton>
            </Modal.Footer>
          </Modal>
          <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="mb-1 me-2" onClickfunc={() => handleModalOpen('@fatModal')}>Open modal for
            @fat</SpkButton>
          <Modal show={modals['@fatModal'] || false} onHide={() => handleModalClose('@fatModal')}>
            <Modal.Header closeButton>
              <Modal.Title as="h6">New message to @fat
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Recipient:</Form.Label>
                  <Form.Control type="email" defaultValue="@fat" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@fatModal')}>
                Close
              </SpkButton>
              <SpkButton Buttonvariant="primary">Send message</SpkButton>
            </Modal.Footer>
          </Modal>
          <SpkButton Buttonvariant='light' Buttontype="button" Customclass="mb-1" onClickfunc={() => handleModalOpen('@getModal')}>Open modal for
            @getbootstrap</SpkButton>
          <Modal show={modals['@getModal'] || false} onHide={() => handleModalClose('@getModal')}>
            <Modal.Header closeButton >
              <Modal.Title as="h6">New message to @getbootstrap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Recipient:</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue=" @getbootstrap"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@getModal')}>
                Close
              </SpkButton>
              <SpkButton Buttonvariant="primary">Send message</SpkButton>
            </Modal.Footer>
          </Modal>
          )}`;

export const modal12 = `
<SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" aria-label="Close"></SpkButton>
`;

export const modal13 = `
<SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Disabled={true} aria-label="Close"></SpkButton>
`;

export const modal14 = `
<CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
<CloseButton type="button" className="btn-close btn-close-white" disabled aria-label="Close"></CloseButton>`;

export const modal15 = `
export const Modal = ()= {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});
	const handleModalOpen = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
	};
	const handleModalClose = (modalName: string) => {
	  setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
	};
      
        
        return(
          <Row className="row-sm">
							<Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("zoomModal")}>Zoom</Link>
								<Rodal onClose={() => handleModalClose("zoomModal")} visible={modals['zoomModal'] || false} animation='Scale' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("zoomModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("fadeModal")}>Fade</Link>
								<Rodal onClose={() => handleModalClose("fadeModal")} visible={modals['fadeModal'] || false} animation='fade' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalOpen("fadeModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("flipModal")}>Flip</Link>
								<Rodal onClose={() => handleModalClose("flipModal")} visible={modals['flipModal'] || false} animation='flip' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("flipModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("doorModal")}>Door</Link>
								<Rodal onClose={() => handleModalClose("doorModal")} visible={modals['doorModal'] || false} animation='door' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("doorModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("rotateModal")}>Rotate</Link>
								<Rodal onClose={() => handleModalClose("rotateModal")} visible={modals['rotateModal'] || false} animation='rotate' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("rotateModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("slideupModal")}>Slide-Up</Link>
								<Rodal onClose={() => handleModalClose("slideupModal")} visible={modals['slideupModal'] || false} animation='slideUp' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("slideupModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("slidedownModal")}>slide-Down</Link>
								<Rodal onClose={() => handleModalClose("slidedownModal")} visible={modals['slidedownModal'] || false} animation='slideDown' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("slidedownModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("slideleftModal")}>slide-Left</Link>
								<Rodal onClose={() => handleModalClose("slideleftModal")} visible={modals['slideleftModal'] || false} animation='slideLeft' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("slideleftModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
							<Col sm={6} md={4} xl={3} className="mg-t-20">
								<Link href="#!"  className="modal-effect btn btn-primary w-100 btn-block mb-3" onClick={() => handleModalOpen("sliderightModal")}>slide-Right</Link>
								<Rodal onClose={() => handleModalClose("sliderightModal")} visible={modals['sliderightModal']} animation='slideRight' height={323}>
									<h6 className='modal-header'>Message Preview
									</h6>
									<div className='modal-body'>
										<h6>Why We Use Electoral College, Not Popular Vote</h6>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
									<div className='modal-footer'>
										<SpkButton Customclass="me-2" Buttonvariant="primary">Save Changes</SpkButton>
										<SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose("sliderightModal")}>Close</SpkButton>
									</div>
								</Rodal>
							</Col>
						</Row>
         )
        };`
//

//placeholders

export const placeholder2 = `
<p className="placeholder-glow mb-0">
      <span className="placeholder col-12"></span>
       </p>
      <p className="placeholder-wave mb-0">
      <span className="placeholder col-12"></span>
       </p>`;

export const placeholder1 = `
<span className="placeholder col-12 placeholder-xl mb-1"></span>
      <span className="placeholder col-12 placeholder-lg"></span>
      <span className="placeholder col-12"></span>
      <span className="placeholder col-12 placeholder-sm"></span>
      <span className="placeholder col-12 placeholder-xs"></span>`;

export const placeholder3 = `
<span className="placeholder col-12"></span>
      <span className="placeholder col-12 bg-primary"></span>
      <span className="placeholder col-12 bg-secondary"></span>
      <span className="placeholder col-12 bg-success"></span>
      <span className="placeholder col-12 bg-danger"></span>
      <span className="placeholder col-12 bg-warning"></span>
      <span className="placeholder col-12 bg-info"></span>
      <span className="placeholder col-12 bg-light"></span>
      <span className="placeholder col-12 bg-dark"></span>`;

export const placeholder4 = `
<span className="placeholder bg-primary col-6"></span>
      <span className="placeholder bg-primary w-75"></span>
      <span className="placeholder bg-primary" style={{width: 25}}></span>`;
//

//offcanvas

export const offcanvas2 = `
export function Defaultlink() {
  const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
	const handleOffcanvasOpen = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
	};
	const handleOffcanvasClose = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
	};
        
          return (
            <>
            <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="me-2  my-1" Buttontoggle="offcanvas" Navigate="#offcanvasExample" onClickfunc={() => handleOffcanvasOpen('liveOffcanvas')}
            Buttoncontrols="offcanvasExample">Link with href</SpkButton>
        <SpkButton Buttonvariant='primary' Customclass=" my-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('liveOffcanvas')}
            Buttontarget="#offcanvasExample" Buttoncontrols="offcanvasExample">Button with data-bs-target</SpkButton>
        <Offcanvas show={offcanvas['liveOffcanvas'] || false} onHide={() => handleOffcanvasClose('liveOffcanvas')} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => handleOffcanvasClose('liveOffcanvas')}></SpkButton>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body p-0">
                <div>
                    <SpkListgroup Variant="flush" CustomClass="mb-0">
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                        NW
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                        CH
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                        S
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                        RC
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                        M
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                        OL
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                        A
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <Image fill src="../../../assets/images/faces/6.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                        CH
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                        S
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <Image fill src="../../../assets/images/faces/14.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                        RC
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </SpkListgroup>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
            </>
          );
        }`;

export const offcanvas3 = `
export function Defaultlink() {
  const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
	const handleOffcanvasOpen = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
	};
	const handleOffcanvasClose = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
	};
        
          return (
            <>
            <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('bodyOffcanvas')}
            Buttontarget="#offcanvasScrolling" Buttoncontrols="offcanvasScrolling">Enable
            body scrolling
        </SpkButton>
        <Offcanvas show={offcanvas['bodyOffcanvas']} onHide={() => handleOffcanvasClose('bodyOffcanvas')} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasExampleLabel">
            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => handleOffcanvasClose('bodyOffcanvas')}></SpkButton>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body p-0">
                <div>
                    <ul className="list-group list-group-flush mb-0">
                        <ul className="list-group list-group-flush mb-0">
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                            NW
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                            CH
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            S
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                            RC
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                            M
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            OL
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                            A
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/6.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                            CH
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            S
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/14.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                            RC
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ul>
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
            </>
          );
        }`;

export const offcanvas1 = `
export function Defaultlink() {
          //static
          const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
          const handleOffcanvasOpen = (offcanvasName: string) => {
            setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
          };
          const handleOffcanvasClose = (offcanvasName: string) => {
            setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
          };
          
            return (
              <>
              <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('staticOffcanvas')}
              Buttontarget="#staticBackdrop" Buttoncontrols="staticBackdrop">Toggle static offcanvas</SpkButton>

          <Offcanvas show={offcanvas['staticOffcanvas'] || false} onHide={() => handleOffcanvasClose('staticOffcanvas')} backdrop="static" id="staticBackdrop" className="offcanvas offcanvas-start" tabIndex="-1" aria-labelledby="offcanvasExampleLabel">
              <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                  <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => handleOffcanvasClose('staticOffcanvas')}></SpkButton>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                  <div>
                      <SpkListgroup Variant="flush" CustomClass="mb-0">
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-primary avatar-rounded">
                                          NW
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-danger avatar-rounded">
                                          CH
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-info avatar-rounded">
                                          S
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md avatar-rounded">
                                          <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-success avatar-rounded">
                                          RC
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md avatar-rounded">
                                          <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-secondary avatar-rounded">
                                          M
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-info avatar-rounded">
                                          OL
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-warning avatar-rounded">
                                          A
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md avatar-rounded">
                                          <Image fill src="../../../assets/images/faces/6.jpg" alt="" />
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-danger avatar-rounded">
                                          CH
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-info avatar-rounded">
                                          S
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md avatar-rounded">
                                          <Image fill src="../../../assets/images/faces/14.jpg" alt="" />
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <div className="d-flex align-items-center">
                                  <div className="me-2">
                                      <span className="avatar avatar-md bg-success avatar-rounded">
                                          RC
                                      </span>
                                  </div>
                                  <div className="flex-fill">
                                      <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                      <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                  </div>
                              </div>
                          </ListGroup.Item>
                      </SpkListgroup>
                  </div>
              </Offcanvas.Body>
          </Offcanvas>
              </>
            );
          }`;

export const offcanvas4 = `
export function Defaultlink() {
  const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
	const handleOffcanvasOpen = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
	};
	const handleOffcanvasClose = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
	};
        
          return (
            <>
            <SpkButton Customclass="btn btn-primary" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('backdropOffcanvas')}
            Buttontarget="#offcanvasWithBothOptions" Buttoncontrols="offcanvasWithBothOptions">Enable both scrolling &amp;
            backdrop</SpkButton>
        <Offcanvas show={offcanvas['backdropOffcanvas'] || false} onHide={() => handleOffcanvasClose('backdropOffcanvas')} backdrop={true} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasExampleLabel">
            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => handleOffcanvasClose('backdropOffcanvas')}></SpkButton>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body p-0">
                <div>
                    <ul className="list-group list-group-flush mb-0">
                        <ul className="list-group list-group-flush mb-0">
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                            NW
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                            CH
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            S
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                            RC
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                            M
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            OL
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                            A
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/6.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                            CH
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                            S
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <Image fill src="../../../assets/images/faces/14.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                            RC
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ul>
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
            </>
          );
        }`;

export const offcanvas5 = `
export function Defaultlink() {
  const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
	const handleOffcanvasOpen = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
	};
	const handleOffcanvasClose = (offcanvasName: string) => {
	  setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
	};
          
            return (
              <>
              <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('placementOffcanvas')}
                            Buttontarget="#offcanvasTop" Buttoncontrols="offcanvasTop">Toggle top
                            offcanvas</SpkButton>
                        <Offcanvas placement='top' show={offcanvas['placementOffcanvas'] || false} onHide={() => handleOffcanvasClose('placementOffcanvas')} className="offcanvas-top" tabIndex="-1" id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                            </Offcanvas.Header>
                            <div className="px-4">
                                ...
                            </div>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('rightOffcanvas')}
                            Buttontarget="#offcanvasRight" Buttoncontrols="offcanvasRight">Toggle right
                            offcanvas</SpkButton>
                        <Offcanvas placement='end' show={offcanvas['rightOffcanvas'] || false} onHide={() => handleOffcanvasClose('rightOffcanvas')} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => handleOffcanvasClose('rightOffcanvas')}></SpkButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body p-0">
                                <div>
                                    <SpkListgroup Variant="flush" CustomClass="mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Mar 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Alexia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src="../../../assets/images/faces/6.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src="../../../assets/images/faces/14.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 May 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('bottomOffcanvas')}
                            Buttontarget="#offcanvasBottom" Buttoncontrols="offcanvasBottom">Toggle
                            bottom
                            offcanvas</SpkButton>
                        <Offcanvas placement='bottom' show={offcanvas['bottomOffcanvas'] || false} onHide={() => handleOffcanvasClose('bottomOffcanvas')} className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" small">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
              </>
            );
          }`;

