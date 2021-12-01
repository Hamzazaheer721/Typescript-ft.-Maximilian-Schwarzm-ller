// You could tell typescript to exclude specific file while compilation during watch mode
// All you have to do is to go into tsconfig.json and add exclude in the end
// you could ignore any file e.g app.ts and typecript will ignore it

// you could use wild cards like "*.dev.ts" => this tells tsc to ignore all the files which end with .dev.ts 
// you could use "**/*.dev.ts" => tells the tsc to ignore all files ending with .dev.ts in any folder

// however we will prefer to ignore, node_modules usually inside it
// Since node_modules contains third party libraries and we want to make sure that we don't touch those 
// We certainly don't want to compile those. Moreover it would slow down our compilation process


// On other hand if you'll add the include attribute.
// then you will have to include all the files which you want to compile.
// adding one file in include won't force the recompilation on other files

// So basically it becomes Include - exclude = files to be compiled

// there is another option files which works like include but you can't specify whole folders in here
// in order to be compiled so it works well for smaller projects, where you don't wanna touch other types of files
