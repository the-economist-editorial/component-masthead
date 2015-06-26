import Page from './index';
import TopMastHead from './../component-topmasthead';
import StickyMastHead from './../component-stickymasthead';
import ArticleTemplate from './../component-articletemplate';
import TabView from './../component-tabview';
import ImageCaption from './../component-imagecaption';
import ShareBar from './../component-sharebar';

var child = {
  caption: "First caption",
  src: "http://lorempixel.com/g/300/169/food",
  href: "http://www.google.com"
};

import React from 'react';

export default (
  <Page>
    <TopMastHead></TopMastHead>
     <StickyMastHead>
      <h1 className="wif-title sticky-hidden">The World</h1>
      <ShareBar customClass="sticky-show"></ShareBar>
      <div className="wif-button">
        <a href="/theWorldIf">
          <svg className="home sticky-show" viewBox="0 0 30 30">
            <path display="inline" fill="#FFFFFF" d="M22.9,15.5h-2v7.6h-5.4v-4.7h-3v4.7H7.1v-7.6h-2l3.4-3.8V6.7h2.5v2l3-3.5l4.5,5.1L22.9,15.5z"></path>
          </svg>
          <svg className="if sticky-hidden" viewBox="0 0 70 70"><path fill="#2DBDEB" d="M0 0h70v70H0z"/><g fill="#FFF"><path d="M15.5 16.4h4.6v37.9h-4.6V16.4zm5.6 37.9V16.4h4.6v37.9h-4.6zM30.5 16.4h25.8v3.8H35.1v34.1h-4.6V16.4zm23.9 20H36.1V21.2h20.2v3.7H40.7v7.7h13.8v3.8zM36.1 54.3V37.4h18.4v3.7H40.7v13.2h-4.6z"/></g></svg>
        </a>
      </div>
    </StickyMastHead>
    <ArticleTemplate section="This is the section" title="this is the title">
      <p>This is the body with <b>rich text</b> Lorem ipsum dolor sit amet, id erat in, nec id et molestie, tortor donec fusce ultrices odio cum id, fusce donec tempus, porttitor inceptos proin. Praesent amet, quis nascetur non in. Duis amet faucibus porta vulputate molestie, augue elit urna, adipiscing  metus interdum vitae vivamus voluptatem taciti, id nulla proin a, sociis est felis massa. Eleifend lectus, nec amet vestibulum pede. Risus justo praesent dolor quis elementum et, ipsum dui, platea ligula urna et bibendum leo, sapien bibendum fermentum, eros in adipiscing non facilis curabitur. Tristique molestie eget nonummy vestibulum. Dui nibh duis pellentesque volutpat ultricies, erat semper duis mi corporis suspendisse dolor. Viverra nunc vel turpis ligula sed proin. Tellus mauris vel morbi elit mauris, iaculis leo corporis vestibulum tincidunt tellus, lobortis nunc, sit sed at, in eu sem enim. Egestas et sollicitudin tellus, quam dolor etiam. Ut turpis ac, ut felis augue id risus, vitae libero fusce, at ornare sed vel vulputate.</p><blockquote className="article-blockqoute-image">This is an example of a qoute, in this case it has an image <img src="http://lorempixel.com/g/290/163/people" /></blockquote><p>Diam massa proin libero vestibulum, faucibus sollicitudin diam a aliquet, turpis magna, orci facilisis lorem, porttitor in sit gravida. Varius vivamus congue porta, leo dolor lorem ullamcorper, id nostra tempus condimentum quam. Sit ligula in, phasellus enim pede in in, doloremque fuga felis id ut venenatis, diam nonummy nam varius, risus lacus ultricies condimentum magna nec viverra. Non justo vestibulum, lectus mollis mi et. Nulla hac, nostra augue risus sit litora amet donec. Quisque magna, urna nostra lacus id, pulvinar wisi, nulla consequat a, a mattis mi ac amet suspendisse. Nisl felis labore eu, convallis ac montes dictum at eget quam, lectus euismod velit eget nec ultricies tempor. Vel sem feugiat eu et consectetuer, quam aenean, in vitae eu elit eu, eget sed, proin augue vestibulum luctus vitae laoreet nec.</p><p>Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.</p><p>Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.</p><blockquote className="article-blockqoute">This is an example of a qoute, lets add a few more lines here to pad it out a bit</blockquote><p>Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.</p><p>Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.</p><figure className="article-image-caption"><img src="http://lorempixel.com/g/290/163/cats" /><figcaption>This is an example of a image with a caption, lets add a few more lines here to pad it out a bit</figcaption></figure><p>Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.</p><p>Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.</p>
    </ArticleTemplate>
    <footer>
      <TabView>
        <div title="Politics">
        <div className="TabView--Views--Tint"></div>
        <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
        </div>
        <div title="Business & Economics">
        <div className="TabView--Views--Tint"></div>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
        </div>
        <div title="Science & technology">
        <div className="TabView--Views--Tint"></div>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
        </div>
        <div title="History">
        <div className="TabView--Views--Tint"></div>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
         <a href={child.href}>
             <ImageCaption caption={child.caption} src={child.src}></ImageCaption>
        </a>
        </div>
      </TabView>
    </footer>
  </Page>
);