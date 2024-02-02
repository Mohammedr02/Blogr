
import laptop1 from '../images/illustration-laptop-mobile.svg'
import phone1 from '../images/illustration-editor-mobile.svg'
const Sections=()=> {
    return (

<div className="Sections">
    
   

<div className="Section2">
<div className="S2_part1">
    <h1>Designed for the future</h1>
</div>

<div className="S2_content">
<div className="laptop_S2">
<img className='phone1' src={phone1}/>
</div>
<div>
<div className="S2_part2">
<h1>Introducing an extensible editor</h1> 
<p className="S2_part2_p">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>   
</div>

<div className="S2_part2">
    <h1>Robust content management</h1>
    <p className="S2_part2_p">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
</div> </div>
<div className="S2_image">

</div>
</div>



</div>

<div className="Section3">

<div className="S3_part1">
<div className="Phone" >
    
</div>
<div className="S3_part1_text">
    <div className="S3_p1_t"><h1>State of the Art Infrastructure </h1></div>
    <div className="S3_p1_p"><p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p></div>
</div>
</div>

</div>
<div className="Section4">
<div className="laptop1">
    <img src={laptop1}  alt="" />
</div>

<div className="Section4_text">
<div >
 <h1> Free, open, simple</h1> 
<p className="S4_p" >Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>   
</div>

<div >
    <h1>Powerful tooling</h1>
    <p className="S4_p" >Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
</div>
</div>    





</div>



</div>
    );
}


export default Sections;