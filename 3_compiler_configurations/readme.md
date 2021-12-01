=> in order to change your file on editing, you can enter into watch mode
=> tsc filename.ts -w
=> now typescript will automatically compile the file for you whenever you will change it and compile it


What if we have more than one files which we want to compile?
What if we wanted to add another js file into script of Html document and have an eye on result of each file?

Well, we could do it by using the following command in our project 

=> tsc --init

---> Running this command will make typescript automatically compile the ts files for us

=> now all you have to do is that type and enter tsc and typesript will compile all files for your

The next step you have got to do is the following

=> tsc --watch / tsc -w


/////////////////////////
//////// NOTE //////////
///////////////////////

You could tell typescript to exclude specific file while compilation during watch mode
All you have to do is to go into tsconfig.json and add exclude in the end
you could ignore any file e.g app.ts and typecript will ignore it

you could use wild cards like "*.dev.ts" => this tells tsc to ignore all the files which end with .dev.ts 
you could use "**/*.dev.ts" => tells the tsc to ignore all files ending with .dev.ts in any folder

however we will prefer to ignore, node_modules usually inside it
Since node_modules contains third party libraries and we want to make sure that we don't touch those 
We certainly don't want to compile those. Moreover it would slow down our compilation process


On other hand if you'll add the include attribute.
then you will have to include all the files which you want to compile.
adding one file in include won't force the recompilation on other files

So basically it becomes Include - exclude = files to be compiled

there is another option files which works like include but you can't specify whole folders in here



////////////////////////////////////
//////// COMPILER OPTIONS /////////
//////////////////////////////////

One of the most interesting options in tsconfig is compilerOptions
We can set our javascript version in target based on the version of javascript which we want to use

==> There is another Option of lib : []
==> If we keep it as it is then everything that target: "es6", javascript targetted version has will be accessible in our project
==> Even dom and everything will become available
==> if enable the lib: [] and use it then we will get error on using dom and now we will have to specifically mention that we want to use dom


SUMMARY =====> if lib is not not set then some defaults are set that are typically needed to be run on browser

Following are set as by default if you set your target: "ES6"

"lib": [
  "DOM",
  "DOM.Iterable",
  "ES6",
  "ScriptHost"
], 


////////////////////////////////////
///////// Source Maps /////////////
//////////////////////////////////

What if we wanted to debug our typescript code instead of our compiled js code in chromes' sources tab that exists in inspect
=> We could turn on sourceMap Option in compiler Options
=> Turning it on makes Typescript files visible in that specific tab
=> Turning it on makes .js.maps files appear in our directory what these files do is act as a bridge which is understood by modern      browsers' dev tools
=> We can now see .ts files in sources section of browser and we could debug our ts files from there by applying breakpoints

////////////////////////////////////
/////// outDir & rootDir //////////
//////////////////////////////////

=> outDir declares where you js files will be placed after compilation
=> If you want to only include files in your src file then you could use rootDir
=> You could use include for this purpose as well but using rootDir will also maintain your project folder structure as well
=> If you want to make files shorter then you could use removeComments: true 
=> If you wanted to check if your all typescript files are correct, then you could use noEmit: true to save time


//////////////////////////////////
/////////// noEmitOnError ///////
////////////////////////////////

=> Setting noEmitOnError: true will not generate js files if any error occurs and vice versa
=> Setting to true will make problematic files not be generated
=> If any of file has error, then nothing will be compiled to js 


//////////////////////////////////
/////////// Code Quality ////////
////////////////////////////////

=> noUnusedLocals, noUnusedparameters, noImplicitReturns, noFallthroughCasesInSwitch


////////////////////////////
/////// DEBUGGER //////////
//////////////////////////

=> install Chrome Debugger 
=> Start Debugging from vscode and set the localhost
=> Now Turn on the sourceMap: true in tsConfig