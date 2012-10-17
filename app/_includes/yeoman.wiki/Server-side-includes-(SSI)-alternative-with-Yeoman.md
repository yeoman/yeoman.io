Easy way to work with server side includes when your development server doesn't support them. Uses a simple javascript library to pull in included files via ajax. 

Use a standard server side include statement at your page HTML source eg: <!--#include file="myfooter.html" --> and the corresponding file will be included just as in your production server.

This is a script that can be used when working on a project that requires server side includes (SSI) and that will be hosted on an (apache, nginx etc.) type of server.

By Including the script on your project, you can then break your HTML pages to contain common areas like Headers & Footers via SSI and see them while on "dev mode on Yeoman"  [ $yeoman server ]. After you finish your work your final production files will simply use the SSI provided by your production server since it will use the same html code required to pull in those includes. This makes this script a good non-invasive choice.

https://github.com/EurekaSoftware/client-side-includes

Enjoy :-)