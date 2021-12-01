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
