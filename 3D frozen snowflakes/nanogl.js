(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nanogl = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var BufferUtils = require( './bufferutils' );

/*
 * GL_ARRAY_BUFFER */
var TGT = 0x8892;



/**
 * @class
 * @implements {Drawable}
 * @param {WebGLRenderingContext} gl      then webgl context this ArrayBuffer belongs to
 * @param {TypedArray|uint} [data]   optional data to copy to buffer, or the size (in bytes)
 * @param {GLenum} [usage=GL_STATIC_DRAW] the usage hint for this buffer.
 *
 */
function ArrayBuffer( gl, data, usage ){
  this.gl         = gl;
  this.usage      = usage || gl.STATIC_DRAW;
  this.buffer     = gl.createBuffer();
  this.attribs    = [];
  this.stride     = 0;
  this.byteLength = 0;
  this.length     = 0;

  if( data ){
    this.data( data );
  }
}


ArrayBuffer.prototype = {

  /**
   * Bind the underlying webgl buffer.
   */
  bind: function(){
    this.gl.bindBuffer( TGT, this.buffer );
  },

  /**
   * Add attribute declaration for this buffer. Once attributes declared, the buffer can be linked to
   * programs attributes using {@link ArrayBuffer#attribPointer}
   *  @param {string} name the name of the program's attribute
   *  @param {uint} size the size of the attribute (3 for a vec3)
   *  @param {GLenum} type the type of data (GL_FLOAT, GL_SHORT etc)
   *  @param {boolean} [normalize=false] indicate if the data must be normalized
   */
  attrib: function( name, size, type, normalize ){
    this.attribs.push({
      name      : name       ,
      type      : 0|type     ,
      size      : 0|size     ,
      normalize : !!normalize,
      offset    : this.stride
    });
    this.stride += BufferUtils.getComponentSize( type ) * size;
    this._computeLength();
    return this;
  },

  /**
   * Fill webgl buffer with the given data. You can also pass a uint  to allocate the buffer to the given size.
   *   @param {TypedArray|uint} array the data to send to the buffer, or a size.
   */
  data: function( array ){
    var gl = this.gl;
    gl.bindBuffer( TGT, this.buffer );
    gl.bufferData( TGT, array, this.usage );
    gl.bindBuffer( TGT, null );

    this.byteLength = ( array.byteLength === undefined ) ? array : array.byteLength;
    this._computeLength();
  },

  /**
   * Set a part of the buffer with the given data, starting a offset (in bytes)
   *  @param {typedArray} array the data to send to buffer
   *  @param {uint} offset the offset in byte where the data will be written
   */
  subData: function( array, offset ){
    var gl = this.gl;
    gl.bindBuffer(    TGT, this.buffer );
    gl.bufferSubData( TGT, offset, array );
    gl.bindBuffer(    TGT, null );
  },

  /**
   * Link given program attributes to this buffer. You should first declare attributes using {@link ArrayBuffer#attrib}
   * before calling this method.
   *   @param {Program} program the nanogl Program
   */
  attribPointer: function( program ){
    var gl = this.gl;
    gl.bindBuffer( TGT, this.buffer );

    for (var i = 0; i < this.attribs.length; i++) {
      var attrib = this.attribs[i];

      if( program[attrib.name] !== undefined ){
        var aLocation = program[attrib.name]();
        gl.enableVertexAttribArray( aLocation );
        gl.vertexAttribPointer( aLocation,
                                attrib.size,
                                attrib.type,
                                attrib.normalize,
                                this.stride,
                                attrib.offset
                              );
      }

    }
  },

  /**
   * Shortcut to gl.drawArrays
   *   @param {GLenum} mode the type of primitive to draw (GL_TRIANGLE, GL_POINTS etc)
   *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
   *   @param {uint} [offset=0] the position of the first vertex to draw
   */
  draw: function( mode, count, offset ){
    count  = ( count === undefined  ) ? this.length : count;
    this.gl.drawArrays( mode, offset, 0|count );
  },

  /**
   * Delete underlying webgl objects
   */
  dispose: function(){
    this.gl.deleteBuffer( this.buffer );
    this.buffer = null;
    this.gl = null;
  },


  _computeLength: function(){
    if( this.stride > 0 ) {
      this.length = this.byteLength / this.stride;
    }
  }

};

/*
 * Implement Drawable
 */
BufferUtils.Drawable( ArrayBuffer.prototype );


module.exports = ArrayBuffer;

},{"./bufferutils":2}],2:[function(require,module,exports){
module.exports = {

  getComponentSize : function( type ){
    switch( type ){
      case 0x1400 : //gl.BYTE:
      case 0x1401 : //gl.UNSIGNED_BYTE:
        return 1;
      case 0x1402 : //gl.SHORT:
      case 0x1403 : //gl.UNSIGNED_SHORT:
        return 2;
      case 0x1404 : //gl.INT:
      case 0x1405 : //gl.UNSIGNED_INT:
      case 0x1406 : //gl.FLOAT:
        return 4;
      default :
        return 0;
    }
  },

  Drawable: function( proto ){
    proto.drawPoints         = function(count, offset){ this.draw( 0 /* POINTS         */ , count, offset ); };
    proto.drawLines          = function(count, offset){ this.draw( 1 /* LINES          */ , count, offset ); };
    proto.drawLineLoop       = function(count, offset){ this.draw( 2 /* LINE_LOOP      */ , count, offset ); };
    proto.drawLineStrip      = function(count, offset){ this.draw( 3 /* LINE_STRIP     */ , count, offset ); };
    proto.drawTriangles      = function(count, offset){ this.draw( 4 /* TRIANGLES      */ , count, offset ); };
    proto.drawTriangleStrip  = function(count, offset){ this.draw( 5 /* TRIANGLE_STRIP */ , count, offset ); };
    proto.drawTriangleFan    = function(count, offset){ this.draw( 6 /* TRIANGLE_FAN   */ , count, offset ); };
  }

};


/**
 * Interface for buffer that can be drawn.
 *
 * @interface Drawable
 */

/**
 * Shortcut to gl.drawArrays( gl.POINTS, offset, count )
 * @function
 * @name Drawable#drawPoints
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINE_STRIP, offset, count )
 * @function
 * @name Drawable#drawLineStrip
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINE_LOOP, offset, count )
 * @function
 * @name Drawable#drawLineLoop
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINES, offset, count )
 * @function
 * @name Drawable#drawLines
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLE_STRIP, offset, count )
 * @function
 * @name Drawable#drawTriangleStrip
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLE_FAN, offset, count )
 * @function
 * @name Drawable#drawTriangleFan
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLES, offset, count )
 * @function
 * @name Drawable#drawTriangles
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

},{}],3:[function(require,module,exports){

var Texture      = require( './texture'      ),
    RenderBuffer = require( './renderbuffer' );


function Attachment( target ){

  this.target       = target;
  this.level        = 0;
  
  this._isTexture    = (target.id instanceof WebGLTexture);

}

Attachment.prototype = {


  isTexture : function(){
    return this._isTexture;
  },


  _resize : function( w, h ){
    if( w > 0 && h > 0 ){
      if( this._isTexture ){
        this.target.fromData( w, h, null );
      } else {
        this.target.resize( w, h );
        this.target.allocate();
      }
    }

  },


  _attach : function( bindingPoint ){
    var gl = this.target.gl;
    if( this._isTexture ){
      gl.framebufferTexture2D(    gl.FRAMEBUFFER, bindingPoint, gl.TEXTURE_2D,   this.target.id, this.level );
    } else {
      gl.framebufferRenderbuffer( gl.FRAMEBUFFER, bindingPoint, gl.RENDERBUFFER, this.target.id );
    }
  },


  _detach : function( bindingPoint ){
    var gl = this.target.gl;
    if( this._isTexture ){
      gl.framebufferTexture2D(    gl.FRAMEBUFFER, bindingPoint, gl.TEXTURE_2D,   null, this.level );
    } else {
      gl.framebufferRenderbuffer( gl.FRAMEBUFFER, bindingPoint, gl.RENDERBUFFER, null );
    }
  },


  dispose : function(){
    this.target.dispose();
    this.target = null;
  }

};



/**
 * @class
 * @param {WebGLRenderingContext} gl      the webgl context this Fbo belongs to
 * @param {Object} [opts]
 * @param {boolean} [opts.depth=false] if true, a depth renderbuffer is attached
 * @param {boolean} [opts.stencil=false] if true, a stencil renderbuffer is attached
 * @param {GLenum|GLenum[]} [opts.type=GL_UNSIGNED_BYTE] the pixel type of the Fbo, can be gl.UNSIGNED_BYTE, gl.FLOAT, half.HALF_FLOAT_OES etc. you can also provide an array of types used as cascaded fallbacks
 * @param {GLenum} [opts.format=GL_RGB]   the color attachment pixel format.
 * @param {GLenum} [opts.internal=GL_RGB] the internal color attachment pixel format.
 *
 */
function Fbo( gl )
{
  this.gl = gl;
  this.width  = 0;
  this.height = 0;

  this.fbo = gl.createFramebuffer();
  this.bind();

  this.attachments     = {};
  this.attachmentsList = [];
}



Fbo.prototype = {

  

  // The Fbo must be explicitely bound before calling this method
  attach : function( bindingPoint, res ){
    var attachment = new Attachment( res );
    bindingPoint = 0|bindingPoint;

    this.detach( bindingPoint );

    this.attachments[bindingPoint.toString()] = attachment;
    this.attachmentsList.push( attachment );

    attachment._resize( this.width, this.height );
    attachment._attach( bindingPoint );
    return attachment;
  },


  // The Fbo must be explicitely bound before calling this method
  detach : function( bindingPoint ){
    var att = this.attachments[bindingPoint.toString()];
    if( att !== undefined ){
      var index = this.attachmentsList.indexOf( att );
      this.attachmentsList.splice( index, 1 );
      att._detach( bindingPoint );
    }
    delete this.attachments[bindingPoint.toString()];
  },


  getAttachment : function( bindingPoint ){
    var att = this.attachments[bindingPoint.toString()];
    if( att !== undefined ){
      return att;
    }
    return null;
  },


  getColor : function(index){
    index = index|0; 
    var att = this.getAttachment( 0x8CE0 + index ); // COLOR_ATTACHMENT<index>
    return att ? att.target : null;
  },


  getDepth : function(){ 
    var att = this.getAttachment( 0x8D00 )|| // DEPTH_ATTACHMENT
              this.getAttachment( 0x8D20 )|| // STENCIL_ATTACHMENT;
              this.getAttachment( 0x821A );  // DEPTH_STENCIL_ATTACHMENT;
    return att ? att.target : null;
  },

  /**
  * Shortcut to attach texture to color attachment 0
  */
  attachColor : function( format, type, internal ){
    var t = new Texture( this.gl, format, type, internal );
    return this.attach( 0x8CE0, t );
  },

  /**
   * shortcut to attach depth/stencil renderbuffer/texture to this FBO
   *  @param {bool} [depth      =true ] add depth component to depth/stencil buffer
   *  @param {bool} [stencil    =false] add stencil components to depth/stencil buffer
   *  @param {bool} [useTexture =false] if true, use Texture instead of RenderBuffer, depth param must also be true. You must ensure Depth Texture capability is available on your context, no test are made here
   */
  attachDepth : function( depth, stencil, useTexture ){
    depth      = (depth !== undefined ) ? !!depth : true;
    stencil    = !!stencil;
    useTexture = !!useTexture && depth;

    var attachment;

    if( useTexture ){
      var cfg = dsTextureConfig( this.gl, stencil );
      attachment  = new Texture( this.gl, cfg.format, cfg.type, cfg.internal );
    } else {
      attachment  = new RenderBuffer( this.gl, dsRenderbufferStorage( depth, stencil ) );
    }

    return this.attach( dsAttachmentPoint( depth, stencil ), attachment );

  },



  /**
   * Resize FBO attachments
   *  @param {uint} w new width
   *  @param {uint} h new height
   */
  resize : function( w, h ){
    if( this.width !== w || this.height !== h ) {
      this.width  = w|0;
      this.height = h|0;
      this._allocate();
    }
  },


  /**
   * Bind the Fbo ( simple shortcut for gl.bindFramebuffer(...) )
   */
  bind : function() {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
  },

  /*
   * Clear all buffers
   */
  clear : function(){
    // COLOR | DEPTH | STENCIL
    this.gl.clear( 0x4500 );
  },


  defaultViewport : function(){
    this.gl.viewport( 0, 0, this.width, this.height );
  },


  /**
   * Check if the Fbo is valid,
   * The Fbo must be explicitely bound before calling this method
   */
  isValid : function(){
    var gl = this.gl;
    return ( gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE );
  },


  /**
   * Delete all webgl objects related to this Fbo (fbo, and all attachments )
   */
  dispose : function(){
    var gl = this.gl;
    gl.deleteFramebuffer( this.fbo );
    
    for (var i = 0; i < this.attachmentsList.length; i++) {
      this.attachmentsList[i].dispose();
    }
    this.attachmentsList = null;
    this.attachments     = null;

    this.valid = false;
    this.fbo   = null;
    this.gl    = null;
  },



  // (re)allocate render buffers to size
  _allocate : function(){
    
    for (var i = 0; i < this.attachmentsList.length; i++) {
      this.attachmentsList[i]._resize( this.width, this.height );
    }

  }


};


// ============================================
// DEPTH AND STENCIL ENUMS HELPERS
// ============================================

function dsFlag( depth, stencil ){
  return  depth | ( stencil <<1 );
}

function dsAttachmentPoint( depth, stencil ){
  switch( dsFlag( depth, stencil ) ){
    case 1: return 0x8D00;  // DEPTH_ATTACHMENT
    case 2: return 0x8D20;  // STENCIL_ATTACHMENT;
    case 3: return 0x821A;  // DEPTH_STENCIL_ATTACHMENT;
    default : return 0;
  }
}



// 
function dsRenderbufferStorage( depth, stencil ){
  switch( dsFlag( depth, stencil ) ){
    case 1: return 0x81A5;  // DEPTH_COMPONENT16;
    case 2: return 0x8D48;  // STENCIL_INDEX8;
    case 3: return 0x84F9;  // DEPTH_STENCIL;
    default : return 0;
  }
}


// depth texture internal format
// must return internal:undefined in webgl 1, so "internal" will match "format"
function dsTextureConfig( gl , stencil ){
  if( stencil ){
    // DEPTH_STENCIL | DEPTH24_STENCIL8 | UNSIGNED_INT_24_8_WEBGL
    return {format: 0x84F9, type : 0x84FA, internal : gl.DEPTH24_STENCIL8 };
  } 
  // DEPTH_COMPONENT | DEPTH_COMPONENT24 | UNSIGNED_INT
  return {format: 0x1902, type : 0x1405, internal : gl.DEPTH_COMPONENT24 };
}





module.exports = Fbo;

},{"./renderbuffer":7,"./texture":9}],4:[function(require,module,exports){
var BufferUtils = require( './bufferutils' );

/* GL_ELEMENT_ARRAY_BUFFER */
var TGT = 0x8893;

/**
 * @class
 * @implements {Drawable}
 * @param {WebGLRenderingContext} gl      then webgl context this ArrayBuffer belongs to
 * @param {GLenum} [type=GL_UNSIGNED_SHORT]  the inetger type of the indices (GL_UNSIGNED_BYTE, GL_UNSIGNED_INT etc)
 * @param {TypedArray|uint} [data]   optional data to copy to buffer, or the size (in bytes)
 * @param {GLenum} [usage=GL_STATIC_DRAW] the usage hint for this buffer.
 *
 */
function IndexBuffer( gl, type, data, usage ){
  this.gl       = gl;
  this.buffer   = gl.createBuffer();
  this.usage    = usage || gl.STATIC_DRAW;
  this.type     = 0;
  this.typeSize = 0;
  this.size     = 0;

  this.setType( type || gl.UNSIGNED_SHORT );

  if( data ){
    this.data( data );
  }
}


IndexBuffer.prototype = {


  /**
   * Bind the underlying webgl buffer.
   */
  bind: function(){
    this.gl.bindBuffer( TGT, this.buffer );
  },

  /**
   *  Change the type of internal type of the IndexBuffer
   *  @param {GLenum} type  the integer type of the indices (GL_UNSIGNED_BYTE, GL_UNSIGNED_INT etc)
   */
  setType: function( type ){
    this.type = type;
    this.typeSize = BufferUtils.getComponentSize( type );
  },

  /**
   * Fill webgl buffer with the given data. You can also pass a uint  to allocate the buffer to the given size.
   *   @param {TypedArray|uint} array the data to send to the buffer, or a size.
   */
  data: function( array ){
    var gl = this.gl;
    gl.bindBuffer( TGT, this.buffer );
    gl.bufferData( TGT, array, this.usage );
    gl.bindBuffer( TGT, null );
    this.size = ( array.byteLength === undefined ) ? array : array.byteLength;
  },

  /**
   * Set a part of the buffer with the given data, starting a offset (in bytes)
   *  @param {typedArray} array the data to send to buffer
   *  @param {uint} offset the offset in byte where the data will be written
   */
  subData: function( array, offset ){
    var gl = this.gl;
    gl.bindBuffer(    TGT, this.buffer );
    gl.bufferSubData( TGT, offset, array );
    gl.bindBuffer(    TGT, null );
  },


  /**
   * Delete underlying webgl objects
   */
  dispose: function(){
    this.gl.deleteBuffer( this.buffer );
    this.buffer = null;
    this.gl = null;
  },

  /**
   * Shortcut to gl.drawArrays
   *   @param {GLenum} mode the type of primitive to draw (GL_TRIANGLE, GL_POINTS etc)
   *   @param {uint} [count] the number of indices to draw (full buffer is used if omited)
   *   @param {uint} [offset=0] the position of the first index to draw
   */
  draw: function( mode, count, offset ){
    count  = ( count === undefined  ) ? this.size/this.typeSize : count;
    this.gl.drawElements( mode, count, this.type, 0|offset );
  }


};


/*
 * Implement Drawable
 */
BufferUtils.Drawable( IndexBuffer.prototype );


module.exports = IndexBuffer;
},{"./bufferutils":2}],5:[function(require,module,exports){

module.exports = {
  Program     :   require( './program' ),
  Texture     :   require( './texture' ),
  Fbo         :   require( './fbo' ),
  ArrayBuffer :   require( './arraybuffer' ),
  IndexBuffer :   require( './indexbuffer' ),
  RenderBuffer:   require( './renderbuffer' ),
  Sampler     :   require( './sampler' )
};

},{"./arraybuffer":1,"./fbo":3,"./indexbuffer":4,"./program":6,"./renderbuffer":7,"./sampler":8,"./texture":9}],6:[function(require,module,exports){

var _UID = 0;

/**
 * Program constructor. Create gl program and shaders. You can pass optional shader code to immediatly compile shaders
 *   @param {WebGLRenderingContext} gl webgl context this program belongs to
 *   @param {String} [vert=undefined] an optional vertex shader code. See {@link Program#compile}
 *   @param {String} [frag=undefined] an optional fragment shader code See {@link Program#compile}
 *   @param {String} [defs=undefined] an optional string prepend to both fragment and vertex shader code. See {@link Program#compile}.
 *   @see {@link Program#compile}
 *
 * @example <caption>For the given vertex shader</caption>
 * attribute vec3 aPosition;
 * uniform mat4 uMVP;
 * uniform vec3 uCameraPosition;
 *
 * @class
 * @classdesc Program class provide shader compilation and linking functionality.
 *              It also give you convenient access to active uniforms and attributes.
 *              Once compiled, the Program object list all used uniforms/attributes and provide getter/setter function for each one. See {@link Program} constructor.
 *
 */
function Program( gl, vert, frag, defs  ){
  this.gl = gl;
  this.program = gl.createProgram();
  this.vShader = gl.createShader( gl.VERTEX_SHADER );
  this.fShader = gl.createShader( gl.FRAGMENT_SHADER );
  this.dyns    = [];
  this.ready   = false;
  gl.attachShader(this.program, this.vShader);
  gl.attachShader(this.program, this.fShader);

  this._uid    = (_UID++)|0; 
  this._cuid   = (_UID++)|0; 

  if( vert !== undefined && frag !== undefined ){
    this.compile( vert, frag, defs );
  }
}

/**
 * Program.debug
 *   can be set to true to check and log compilation and linking errors (default to false)
 */
Program.debug = false;



Program.prototype = {

  /**
   * Shortcut for gl.useProgram()
   * alias program.bind()
   */
  use : function(){
    if( !this.ready ){
      this._grabParameters();
    }
    this.gl.useProgram( this.program );
  },

  /**
   * Compile vertex and fragment shader then link gl program
   * This method can be safely called several times.
   *  @param {String} vert vertex shader code
   *  @param {String} frag fragment shader code
   *  @param {String} [prefix=''] an optional string append to both fragment and vertex code
   */
  compile : function( vert, frag, prefix ){
    this.ready   = false;

    prefix = ( prefix === undefined ) ? '' : prefix+'\n';

    var gl = this.gl;

    if( !( compileShader( gl, this.fShader, prefix + frag ) &&
           compileShader( gl, this.vShader, prefix + vert ) ) ) {
      return false;
    }

    gl.linkProgram(this.program);

    if ( Program.debug && !gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      warn(gl.getProgramInfoLog(this.program));
      return false;
    }

    // delete old accessors
    while (this.dyns.length>0) {
      delete this[this.dyns.pop()];
    }

    this._cuid   = (_UID++)|0; 

    return true;
  },

  /**
    * Delete program and shaders
    */
  dispose : function() {
    if( this.gl !== null ){
      this.gl.deleteProgram( this.program );
      this.gl.deleteShader(  this.fShader  );
      this.gl.deleteShader(  this.vShader  );
      this.gl = null;
    }
  },

  /*
   *  List all uniforms and attributes and create helper function on Program instance
   *  eg :
   *     for a uniform vec3 uDirection;
   *     create a method
   *        program.uDirection( 1, 0, 0 );
   */
  _grabParameters : function(){

    var gl = this.gl,
        prg = this.program;

    var context = {
      texIndex    : 0,
      ublockIndex : 0
    };

    // Uniforms
    // ========

    var numUniforms = gl.getProgramParameter( prg, gl.ACTIVE_UNIFORMS );

    for ( var uniformIndex = 0; uniformIndex < numUniforms; ++uniformIndex )
    {
      var uniform = gl.getActiveUniform( prg, uniformIndex );

      // safari 8.0 issue,
      // when recompiling shader and link the progam again, old uniforms are kept in ACTIVE_UNIFORMS count but return null here
      if( uniform === null ){
        gl.getError(); // also flush error
        continue;
      }

      var uName   = uniform.name,
          n       = uName.indexOf('[');

      if( n >= 0 ){
        uName = uName.substring(0, n);
      }

      var uLocation = gl.getUniformLocation( prg, uniform.name );
      
      // in Webgl2 location can be null here if uniform is member of a uniform block
      if( uLocation !== null ) 
      {
        this[uName] = getUniformSetter( uniform.type, uLocation, gl, context );
        this.dyns.push( uName );
      }
    }

    // Attributes
    // ==========

    var numAttribs = gl.getProgramParameter( prg, gl.ACTIVE_ATTRIBUTES );

    for (var aIndex = 0; aIndex < numAttribs; ++aIndex )
    {
      var attribName = gl.getActiveAttrib( prg, aIndex ).name;
      var aLocation  = gl.getAttribLocation( prg, attribName );
      this[attribName] = getAttribAccess( aLocation );
      this.dyns.push( attribName );
    }


    // UniformBlock
    // ============

    if( gl.ACTIVE_UNIFORM_BLOCKS !== undefined ) {

      var numBlocks = gl.getProgramParameter( prg, gl.ACTIVE_UNIFORM_BLOCKS );

      for ( var blockIndex = 0; blockIndex < numBlocks; ++blockIndex )
      {
        var blockName = gl.getActiveUniformBlockName( prg, blockIndex );
        this[blockName] = getUniformBufferSetFunction( blockIndex, gl, context );
        this.dyns.push( blockName );
      }

    }

    this.ready   = true;
  }


};

/**
 * alias to Program.use()
 */
Program.prototype.bind = Program.prototype.use;



/*
 * internal logs
 */
function warn(str){
  console.warn(str);
}



// -------------------------------------------------
//                    UTILITIES
// -------------------------------------------------

/*
 * Shader logging utilities
 */

var __pads = ['','   ','  ',' ',''];

function appendLine( l, i ){
  return __pads[String(i+1).length] + ( i+1 ) + ': ' + l;
}

/*
 * Format shader code
 * add padded lines number
 */
function formatCode( shader ) {
  return shader.split( '\n' ).map( appendLine ).join( '\n' );
}

/*
 * Shader compilation utility
 */
function compileShader( gl, shader, code ){
  gl.shaderSource( shader, code );
  gl.compileShader( shader );

  if (Program.debug && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    warn( gl.getShaderInfoLog(shader) );
    warn( formatCode( code ) );
    return false;
  }

  return true;
}



var USetFMap = {};
USetFMap[ 5126  /*FLOAT       */ ] = '1f';
USetFMap[ 35664 /*FLOAT_VEC2  */ ] = '2f';
USetFMap[ 35665 /*FLOAT_VEC3  */ ] = '3f';
USetFMap[ 35666 /*FLOAT_VEC4  */ ] = '4f';
USetFMap[ 35670 /*BOOL        */ ] =
USetFMap[ 5124  /*INT         */ ] =
USetFMap[ 35678 /*SAMPLER_2D  */ ] =
USetFMap[ 35680 /*SAMPLER_CUBE*/ ] = '1i';
USetFMap[ 35671 /*BOOL_VEC2   */ ] =
USetFMap[ 35667 /*INT_VEC2    */ ] = '2i';
USetFMap[ 35672 /*BOOL_VEC3   */ ] =
USetFMap[ 35668 /*INT_VEC3    */ ] = '3i';
USetFMap[ 35673 /*BOOL_VEC4   */ ] =
USetFMap[ 35669 /*INT_VEC4    */ ] = '4i';
USetFMap[ 35674 /*FLOAT_MAT2  */ ] = 'Matrix2f';
USetFMap[ 35675 /*FLOAT_MAT3  */ ] = 'Matrix3f';
USetFMap[ 35676 /*FLOAT_MAT4  */ ] = 'Matrix4f';

/*
 * Uniform upload utilities
 */

function getUniformSetFunctionName( type ){
  type = String(type);
  return 'uniform' + USetFMap[type];
}

/*
 * For a given uniform's type, return the proper setter function
 */
function getUniformSetter( type, location, gl, context ){
  switch( type ){
    case gl.FLOAT_MAT2  :
    case gl.FLOAT_MAT3  :
    case gl.FLOAT_MAT4  :
      return getMatrixSetFunction( type, location, gl, context );

    case gl.SAMPLER_2D  :
    case gl.SAMPLER_CUBE:
    case 0x8B62 : //gl.SAMPLER_2D_SHADOW:
    case 0x8B5F : //gl.SAMPLER_3D:
      return getSamplerSetFunction( type, location, gl, context );

    default  :
      return getUniformSetFunction( type, location, gl, context );
  }
}


/*
 * setter factory for vector uniforms
 * return a function wich take both array or arguments
 */
function getUniformSetFunction( type, location, gl, context ){
  context;
  var fname = getUniformSetFunctionName( type );
  return function(){
    if( arguments.length === 1 && arguments[0].length !== undefined ){
      gl[fname+'v']( location, arguments[0] );
    } else if( arguments.length > 0) {
      gl[fname].apply( gl, Array.prototype.concat.apply( location, arguments) );
    }
    return location;
  };
}

/*
 * setter factory for matrix uniforms
 */
function getMatrixSetFunction( type, location, gl, context ){
  context;
  var fname = getUniformSetFunctionName( type );
  return function(){
    if( arguments.length > 0 && arguments[0].length !== undefined ){
      var transpose = (arguments.length > 1) ? !!arguments[1] : false;
      gl[fname+'v']( location, transpose, arguments[0] );
    }
    return location;
  };
}

/*
 * setter factory for sampler uniforms
 */
function getSamplerSetFunction( type, location, gl, context ){
  var unit = context.texIndex++;
  return function(){
    if( arguments.length === 1 ) {
      if( arguments[0].bind !== undefined ){ // is texture
        arguments[0].bind( unit );
        gl.uniform1i( location, unit );
      } else {
        gl.uniform1i( location, arguments[0] );
      }
    }
    return location;
  };
}


/*
 * setter factory for uniform buffers
 * can be 
 *   f( buffer ) 
 *     buffer is bound to auto increment binding point unit and block binding reset to this point
 *   f( unit )
 *     only set the block binding point to given unit
 */
function getUniformBufferSetFunction( index, gl, context ){
  var unit = context.ublockIndex++;
  return function(){
    if( arguments.length === 1 ) {
      if( arguments[0] instanceof WebGLBuffer ){ // is buffer
        gl.uniformBlockBinding(this.program, index, unit);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, unit, arguments[0] );
      } else {
        gl.uniformBlockBinding(this.program, index, arguments[0]);
      }
    }
    return index;
  };
}

/*
 * getter factory for attributes
 */
function getAttribAccess( attrib ){
  return function(){
    return attrib;
  };
}



module.exports = Program;
},{}],7:[function(require,module,exports){
var _UID = 0;

var RENDERBUFFER = 0x8D41;


/**
 * @class
 * @classdesc RenderBuffer class manage renderbuffers
 *
 *  @param {WebGLRenderingContext} gl webgl context the texture belongs to
 *  @param {GLenum} [format=DEPTH_COMPONENT16] the pixel internal format, default to gl.DEPTH_COMPONENT16
 */
function RenderBuffer( gl, format ){
  this._uid = _UID++;
  this.gl = gl;
  this.id = gl.createRenderbuffer();

  this.width  = 0;
  this.height = 0;
  this.format = format || gl.DEPTH_COMPONENT16;

  this._valid = false;

  // Dummy allocation needed
  // on some platform (chrome 57, osx, nvidia), gl.framebufferRenderbuffer raise 
  // an INVALID_OPERATION if a RB is attached before it storage is set.
  this._storage();

}


RenderBuffer.prototype = {


  /**
   * 
   *  
   */
  resize : function( w, h ){
    if( this.width !== w || this.height !== h ){
      this.width  = w;
      this.height = h;
      this._valid = false;
    }
  },


  /**
   * check renderbuffer for  validity and allocate it if invalid.
   * this method may leave RENDERBUFFER binding point empty
   */
  allocate : function(){
    if( !this._valid && this.width > 0 && this.height > 0 ){
      this._storage();
      this._valid = true;
    }
  },




  /**
   * Bind the renderbuffer
   */
  bind : function(){
    var gl = this.gl;
    gl.bindRenderbuffer(    RENDERBUFFER,  this.id );
  },

  /**
   * delete the webgl renderbuffer
   *
   */
  dispose : function( ){
    this.gl.deleteRenderbuffer( this.id );
    this.id = null;
    this.gl = null;
  },

  /*
   * actual RB gl allocation
   */
  _storage : function(){

    var gl = this.gl;
    gl.bindRenderbuffer(    RENDERBUFFER,  this.id );
    gl.renderbufferStorage( RENDERBUFFER,  this.format , this.width, this.height );
    gl.bindRenderbuffer(    RENDERBUFFER,  null );

  }


};

module.exports = RenderBuffer;
},{}],8:[function(require,module,exports){


var _UID = 0;

/*
 * compute filtering enum, return one of the following :
 *  NEAREST
 *  LINEAR
 *  NEAREST_MIPMAP_NEAREST
 *  LINEAR_MIPMAP_NEAREST
 *  NEAREST_MIPMAP_LINEAR
 *  LINEAR_MIPMAP_LINEAR
 */
function getFilter( smooth, mipmap, miplinear ){
  return 0x2600 | (+smooth) | (+mipmap<<8) | ( +( mipmap && miplinear )<<1 );
}


/**
 * @class
 * @classdesc Sampler class wrapper for GLES3 Samplers
 *
 *  @param {WebGLRenderingContext} gl webgl context the sampler belongs to
 */
function Sampler( gl ){
  this._uid = _UID++;
  this.gl = gl;
  this.id = gl.createSampler();
  this.setFilter( true );
}


Sampler.prototype = {


  /**
   * Bind the sampler
   *   @param {uint} [unit] texture unit to on which bind the sampler
   */
  bind : function( unit ){
    this.gl.bindSampler( unit, this.id );
  },

  /**
   * delete the webgl sampler
   *
   */
  dispose : function( ){
    this.gl.deleteSampler( this.id );
    this.id = null;
    this.gl = null;
  },

  /**
   * Change the filtering parameters
   *   @param {boolean} [smooth=false]    if true, use LINEAR filtering
   *   @param {boolean} [mipmap=false]    if true, enable mipmaping
   *   @param {boolean} [miplinear=false] if true, use linear Mipmapping
   */
  setFilter : function( smooth, mipmap, miplinear ){
    var gl = this.gl;
    var filter = getFilter( !!smooth, !!mipmap, !!miplinear);
    gl.samplerParameteri( this.id, gl.TEXTURE_MAG_FILTER, getFilter( !!smooth, false, false ) );
    gl.samplerParameteri( this.id, gl.TEXTURE_MIN_FILTER, filter );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.REPEAT
   */
  repeat : function( ){
    this.wrap( this.gl.REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.CLAMP_TO_EDGE
   */
  clamp : function( ){
    this.wrap( this.gl.CLAMP_TO_EDGE );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.MIRRORED_REPEAT
   */
  mirror : function( ){
    this.wrap( this.gl.MIRRORED_REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to the given value
   *  @param {GLenum} wrap the wrap enum
   */
  wrap : function( wrap ) {
    var gl = this.gl;
    gl.samplerParameteri( this.id, gl.TEXTURE_WRAP_S, wrap );
    gl.samplerParameteri( this.id, gl.TEXTURE_WRAP_T, wrap );
  }

};

module.exports = Sampler;
},{}],9:[function(require,module,exports){
var _UID = 0;
var T2D = 0x0DE1;

/*
 * compute filtering enum, return one of the following :
 *  NEAREST
 *  LINEAR
 *  NEAREST_MIPMAP_NEAREST
 *  LINEAR_MIPMAP_NEAREST
 *  NEAREST_MIPMAP_LINEAR
 *  LINEAR_MIPMAP_LINEAR
 */
function getFilter( smooth, mipmap, miplinear ){
  return 0x2600 | (+smooth) | (+mipmap<<8) | ( +( mipmap && miplinear )<<1 );
}


/**
 * @class
 * @classdesc Texture class manage TEXTURE_2D types textures
 *
 *  @param {WebGLRenderingContext} gl webgl context the texture belongs to
 *  @param {GLenum} [format  =GL_RGB] the pixel format, default to gl.RGB (can be gl.RGB, gl.RGBA, gl.LUMINANCE...)
 *  @param {GLenum} [type    =GL_UNSIGNED_BYTE] the pixel data type, default to gl.UNSIGNED_BYTE
 *  @param {GLenum} [internal=format] the pixel internal format, default to the same value than 'format' parameter (which must be in webgl 1)
 */
function Texture( gl, format, type, internal ){
  this._uid = _UID++;
  this.gl = gl;
  this.id = gl.createTexture();
  this.width  = 0;
  this.height = 0;

  this.setFormat( format, type, internal );

  gl.bindTexture( T2D, this.id );
  this.setFilter( true );

}


Texture.prototype = {

  /**
   * define underlying format, internal format and data type of texture
   *  @param {GLenum} [format  =GL_RGB] the pixel format, default to gl.RGB (can be gl.RGB, gl.RGBA, gl.LUMINANCE...)
   *  @param {GLenum} [type    =GL_UNSIGNED_BYTE] the pixel data type, default to gl.UNSIGNED_BYTE
   *  @param {GLenum} [internal=format] the pixel internal format, default to the same value than 'format' parameter (which must be in webgl 1)
   */
  setFormat : function( format, type, internal ){
    this.format   = format   || this.gl.RGB;
    this.internal = internal || this.format;
    this.type     = type     || this.gl.UNSIGNED_BYTE;
  },

  /**
   * set texture data from html source
   *   @param {TexImageSource} img the source. Can be ImageBitmap, ImageData, HTMLImageElement, HTMLCanvasElement, HTMLVideoElement
   */
  fromImage : function( img ){
    var gl = this.gl;

    this.width  = img.width;
    this.height = img.height;

    gl.bindTexture( T2D, this.id );
    gl.texImage2D(  T2D, 0, this.internal, this.format, this.type, img );
  },

  /**
   * Allocate texture to the given size, with optional data (TypedArray) and data type
   *  @param {number} width     the new texture's width
   *  @param {number} height    the new texture's height
   *  @param {TypedArray} [data=null]  TypedArray of texture data, can be null
   *  @param {GLenum} [dataType=GL_UNSIGNED_BYTE] can be gl.UNSIGNED_BYTE, gl.FLOAT, half.HALF_FLOAT_OES etc depending on available extensions
   */
  fromData : function( width, height, data ){
    var gl = this.gl;

    this.width  = width;
    this.height = height;

    data = data || null;

    gl.bindTexture( T2D, this.id );
    gl.texImage2D( T2D, 0, this.internal, width, height, 0, this.format, this.type, data );
  },

  /**
   * Bind the texture
   *   @param {uint} [unit=undefined] optional texture unit to make active before binding
   */
  bind : function( unit ){
    var gl = this.gl;
    if( unit !== undefined ){
      gl.activeTexture( gl.TEXTURE0 + (0|unit) );
    }
    gl.bindTexture( T2D, this.id );
  },

  /**
   * delete the webgl texture
   *
   */
  dispose : function( ){
    this.gl.deleteTexture( this.id );
    this.id = null;
    this.gl = null;
  },

  /**
   * Change the filtering parameters
   *   @param {boolean} [smooth=false]    if true, use LINEAR filtering
   *   @param {boolean} [mipmap=false]    if true, enable mipmaping
   *   @param {boolean} [miplinear=false] if true, use linear Mipmapping
   */
  setFilter : function( smooth, mipmap, miplinear ){
    var gl = this.gl;
    var filter = getFilter( !!smooth, !!mipmap, !!miplinear);
    gl.texParameteri( T2D, gl.TEXTURE_MAG_FILTER, getFilter( !!smooth, false, false ) );
    gl.texParameteri( T2D, gl.TEXTURE_MIN_FILTER, filter );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.REPEAT
   */
  repeat : function( ){
    this.wrap( this.gl.REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.CLAMP_TO_EDGE
   */
  clamp : function( ){
    this.wrap( this.gl.CLAMP_TO_EDGE );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.MIRRORED_REPEAT
   */
  mirror : function( ){
    this.wrap( this.gl.MIRRORED_REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to the given value
   *  @param {GLenum} wrap the wrap enum
   */
  wrap : function( wrap ) {
    var gl = this.gl;
    gl.texParameteri( T2D, gl.TEXTURE_WRAP_S, wrap );
    gl.texParameteri( T2D, gl.TEXTURE_WRAP_T, wrap );
  }

};

module.exports = Texture;
},{}]},{},[5])(5)
});