!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.THREE = e.THREE || {})
}(this, function(e) {
  function t() {}
  function i(e, t) {
      this.x = e || 0,
      this.y = t || 0
  }
  function n(e, t, r, o, a, s, c, h, l, u) {
      Object.defineProperty(this, "id", {
          value: lo++
      }),
      this.uuid = ho.generateUUID(),
      this.name = "",
      this.image = void 0 !== e ? e : n.DEFAULT_IMAGE,
      this.mipmaps = [],
      this.mapping = void 0 !== t ? t : n.DEFAULT_MAPPING,
      this.wrapS = void 0 !== r ? r : 1001,
      this.wrapT = void 0 !== o ? o : 1001,
      this.magFilter = void 0 !== a ? a : 1006,
      this.minFilter = void 0 !== s ? s : 1008,
      this.anisotropy = void 0 !== l ? l : 1,
      this.format = void 0 !== c ? c : 1023,
      this.type = void 0 !== h ? h : 1009,
      this.offset = new i(0,0),
      this.repeat = new i(1,1),
      this.generateMipmaps = !0,
      this.premultiplyAlpha = !1,
      this.flipY = !0,
      this.unpackAlignment = 4,
      this.encoding = void 0 !== u ? u : 3e3,
      this.version = 0,
      this.onUpdate = null
  }
  function r(e, t, i, n) {
      this.x = e || 0,
      this.y = t || 0,
      this.z = i || 0,
      this.w = void 0 !== n ? n : 1
  }
  function o(e, t, i) {
      this.uuid = ho.generateUUID(),
      this.width = e,
      this.height = t,
      this.scissor = new r(0,0,e,t),
      this.scissorTest = !1,
      this.viewport = new r(0,0,e,t),
      i = i || {},
      void 0 === i.minFilter && (i.minFilter = 1006),
      this.texture = new n(void 0,void 0,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
      this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0,
      this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0,
      this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
  }
  function a(e, t, i) {
      o.call(this, e, t, i),
      this.activeMipMapLevel = this.activeCubeFace = 0
  }
  function s(e, t, i, n) {
      this._x = e || 0,
      this._y = t || 0,
      this._z = i || 0,
      this._w = void 0 !== n ? n : 1
  }
  function c(e, t, i) {
      this.x = e || 0,
      this.y = t || 0,
      this.z = i || 0
  }
  function h() {
      this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
  }
  function l(e, t, i, r, o, a, s, c, h, l) {
      e = void 0 !== e ? e : [],
      n.call(this, e, void 0 !== t ? t : 301, i, r, o, a, s, c, h, l),
      this.flipY = !1
  }
  function u(e, t, i) {
      var n = e[0];
      if (0 >= n || n > 0)
          return e;
      var r = t * i
        , o = fo[r];
      if (void 0 === o && (o = new Float32Array(r),
      fo[r] = o),
      0 !== t)
          for (n.toArray(o, 0),
          n = 1,
          r = 0; n !== t; ++n)
              r += i,
              e[n].toArray(o, r);
      return o
  }
  function p(e, t) {
      var i = mo[t];
      void 0 === i && (i = new Int32Array(t),
      mo[t] = i);
      for (var n = 0; n !== t; ++n)
          i[n] = e.allocTextureUnit();
      return i
  }
  function d(e, t) {
      e.uniform1f(this.addr, t)
  }
  function f(e, t) {
      e.uniform1i(this.addr, t)
  }
  function m(e, t) {
      void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
  }
  function g(e, t) {
      void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
  }
  function v(e, t) {
      void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
  }
  function y(e, t) {
      e.uniformMatrix2fv(this.addr, !1, t.elements || t)
  }
  function x(e, t) {
      e.uniformMatrix3fv(this.addr, !1, t.elements || t)
  }
  function b(e, t) {
      e.uniformMatrix4fv(this.addr, !1, t.elements || t)
  }
  function _(e, t, i) {
      var n = i.allocTextureUnit();
      e.uniform1i(this.addr, n),
      i.setTexture2D(t || uo, n)
  }
  function w(e, t, i) {
      var n = i.allocTextureUnit();
      e.uniform1i(this.addr, n),
      i.setTextureCube(t || po, n)
  }
  function E(e, t) {
      e.uniform2iv(this.addr, t)
  }
  function M(e, t) {
      e.uniform3iv(this.addr, t)
  }
  function T(e, t) {
      e.uniform4iv(this.addr, t)
  }
  function S(e) {
      switch (e) {
      case 5126:
          return d;
      case 35664:
          return m;
      case 35665:
          return g;
      case 35666:
          return v;
      case 35674:
          return y;
      case 35675:
          return x;
      case 35676:
          return b;
      case 35678:
          return _;
      case 35680:
          return w;
      case 5124:
      case 35670:
          return f;
      case 35667:
      case 35671:
          return E;
      case 35668:
      case 35672:
          return M;
      case 35669:
      case 35673:
          return T
      }
  }
  function A(e, t) {
      e.uniform1fv(this.addr, t)
  }
  function R(e, t) {
      e.uniform1iv(this.addr, t)
  }
  function L(e, t) {
      e.uniform2fv(this.addr, u(t, this.size, 2))
  }
  function P(e, t) {
      e.uniform3fv(this.addr, u(t, this.size, 3))
  }
  function C(e, t) {
      e.uniform4fv(this.addr, u(t, this.size, 4))
  }
  function I(e, t) {
      e.uniformMatrix2fv(this.addr, !1, u(t, this.size, 4))
  }
  function U(e, t) {
      e.uniformMatrix3fv(this.addr, !1, u(t, this.size, 9))
  }
  function N(e, t) {
      e.uniformMatrix4fv(this.addr, !1, u(t, this.size, 16))
  }
  function D(e, t, i) {
      var n = t.length
        , r = p(i, n);
      for (e.uniform1iv(this.addr, r),
      e = 0; e !== n; ++e)
          i.setTexture2D(t[e] || uo, r[e])
  }
  function O(e, t, i) {
      var n = t.length
        , r = p(i, n);
      for (e.uniform1iv(this.addr, r),
      e = 0; e !== n; ++e)
          i.setTextureCube(t[e] || po, r[e])
  }
  function B(e) {
      switch (e) {
      case 5126:
          return A;
      case 35664:
          return L;
      case 35665:
          return P;
      case 35666:
          return C;
      case 35674:
          return I;
      case 35675:
          return U;
      case 35676:
          return N;
      case 35678:
          return D;
      case 35680:
          return O;
      case 5124:
      case 35670:
          return R;
      case 35667:
      case 35671:
          return E;
      case 35668:
      case 35672:
          return M;
      case 35669:
      case 35673:
          return T
      }
  }
  function F(e, t, i) {
      this.id = e,
      this.addr = i,
      this.setValue = S(t.type)
  }
  function z(e, t, i) {
      this.id = e,
      this.addr = i,
      this.size = t.size,
      this.setValue = B(t.type)
  }
  function H(e) {
      this.id = e,
      this.seq = [],
      this.map = {}
  }
  function G(e, t, i) {
      this.seq = [],
      this.map = {},
      this.renderer = i,
      i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
      for (var n = 0; i > n; ++n) {
          var r = e.getActiveUniform(t, n)
            , o = e.getUniformLocation(t, r.name)
            , a = this
            , s = r.name
            , c = s.length;
          for (go.lastIndex = 0; ; ) {
              var h = go.exec(s)
                , l = go.lastIndex
                , u = h[1]
                , p = h[3];
              if ("]" === h[2] && (u |= 0),
              void 0 === p || "[" === p && l + 2 === c) {
                  s = a,
                  r = void 0 === p ? new F(u,r,o) : new z(u,r,o),
                  s.seq.push(r),
                  s.map[r.id] = r;
                  break
              }
              p = a.map[u],
              void 0 === p && (p = new H(u),
              u = a,
              a = p,
              u.seq.push(a),
              u.map[a.id] = a),
              a = p
          }
      }
  }
  function V(e, t, i) {
      return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
  }
  function k(e, t, i, r, o, a, s, c, h, l, u, p) {
      n.call(this, null, a, s, c, h, l, r, o, u, p),
      this.image = {
          data: e,
          width: t,
          height: i
      },
      this.magFilter = void 0 !== h ? h : 1003,
      this.minFilter = void 0 !== l ? l : 1003,
      this.flipY = this.generateMipmaps = !1,
      this.unpackAlignment = 1
  }
  function j(e, t) {
      this.min = void 0 !== e ? e : new i(1 / 0,1 / 0),
      this.max = void 0 !== t ? t : new i(-1 / 0,-1 / 0)
  }
  function W(e, t) {
      var n, r, o, a, s, h, l, u, p, d, f, m, g, v, y, x, b = e.context, _ = e.state;
      this.render = function(w, E, M) {
          if (0 !== t.length) {
              w = new c;
              var T = M.w / M.z
                , S = .5 * M.z
                , A = .5 * M.w
                , R = 16 / M.w
                , L = new i(R * T,R)
                , P = new c(1,1,0)
                , C = new i(1,1)
                , I = new j;
              if (I.min.set(M.x, M.y),
              I.max.set(M.x + (M.z - 16), M.y + (M.w - 16)),
              void 0 === v) {
                  var R = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
                    , U = new Uint16Array([0, 1, 2, 0, 2, 3]);
                  f = b.createBuffer(),
                  m = b.createBuffer(),
                  b.bindBuffer(b.ARRAY_BUFFER, f),
                  b.bufferData(b.ARRAY_BUFFER, R, b.STATIC_DRAW),
                  b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, m),
                  b.bufferData(b.ELEMENT_ARRAY_BUFFER, U, b.STATIC_DRAW),
                  y = b.createTexture(),
                  x = b.createTexture(),
                  _.bindTexture(b.TEXTURE_2D, y),
                  b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16, 0, b.RGB, b.UNSIGNED_BYTE, null),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST),
                  _.bindTexture(b.TEXTURE_2D, x),
                  b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST),
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                  var R = g = {
                      vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                      fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                  }
                    , U = b.createProgram()
                    , N = b.createShader(b.FRAGMENT_SHADER)
                    , D = b.createShader(b.VERTEX_SHADER)
                    , O = "precision " + e.getPrecision() + " float;\n";
                  b.shaderSource(N, O + R.fragmentShader),
                  b.shaderSource(D, O + R.vertexShader),
                  b.compileShader(N),
                  b.compileShader(D),
                  b.attachShader(U, N),
                  b.attachShader(U, D),
                  b.linkProgram(U),
                  v = U,
                  p = b.getAttribLocation(v, "position"),
                  d = b.getAttribLocation(v, "uv"),
                  n = b.getUniformLocation(v, "renderType"),
                  r = b.getUniformLocation(v, "map"),
                  o = b.getUniformLocation(v, "occlusionMap"),
                  a = b.getUniformLocation(v, "opacity"),
                  s = b.getUniformLocation(v, "color"),
                  h = b.getUniformLocation(v, "scale"),
                  l = b.getUniformLocation(v, "rotation"),
                  u = b.getUniformLocation(v, "screenPosition")
              }
              for (b.useProgram(v),
              _.initAttributes(),
              _.enableAttribute(p),
              _.enableAttribute(d),
              _.disableUnusedAttributes(),
              b.uniform1i(o, 0),
              b.uniform1i(r, 1),
              b.bindBuffer(b.ARRAY_BUFFER, f),
              b.vertexAttribPointer(p, 2, b.FLOAT, !1, 16, 0),
              b.vertexAttribPointer(d, 2, b.FLOAT, !1, 16, 8),
              b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, m),
              _.disable(b.CULL_FACE),
              _.setDepthWrite(!1),
              U = 0,
              N = t.length; N > U; U++)
                  if (R = 16 / M.w,
                  L.set(R * T, R),
                  D = t[U],
                  w.set(D.matrixWorld.elements[12], D.matrixWorld.elements[13], D.matrixWorld.elements[14]),
                  w.applyMatrix4(E.matrixWorldInverse),
                  w.applyMatrix4(E.projectionMatrix),
                  P.copy(w),
                  C.x = M.x + P.x * S + S - 8,
                  C.y = M.y + P.y * A + A - 8,
                  !0 === I.containsPoint(C)) {
                      _.activeTexture(b.TEXTURE0),
                      _.bindTexture(b.TEXTURE_2D, null),
                      _.activeTexture(b.TEXTURE1),
                      _.bindTexture(b.TEXTURE_2D, y),
                      b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, C.x, C.y, 16, 16, 0),
                      b.uniform1i(n, 0),
                      b.uniform2f(h, L.x, L.y),
                      b.uniform3f(u, P.x, P.y, P.z),
                      _.disable(b.BLEND),
                      _.enable(b.DEPTH_TEST),
                      b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0),
                      _.activeTexture(b.TEXTURE0),
                      _.bindTexture(b.TEXTURE_2D, x),
                      b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, C.x, C.y, 16, 16, 0),
                      b.uniform1i(n, 1),
                      _.disable(b.DEPTH_TEST),
                      _.activeTexture(b.TEXTURE1),
                      _.bindTexture(b.TEXTURE_2D, y),
                      b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0),
                      D.positionScreen.copy(P),
                      D.customUpdateCallback ? D.customUpdateCallback(D) : D.updateLensFlares(),
                      b.uniform1i(n, 2),
                      _.enable(b.BLEND);
                      for (var O = 0, B = D.lensFlares.length; B > O; O++) {
                          var F = D.lensFlares[O];
                          .001 < F.opacity && .001 < F.scale && (P.x = F.x,
                          P.y = F.y,
                          P.z = F.z,
                          R = F.size * F.scale / M.w,
                          L.x = R * T,
                          L.y = R,
                          b.uniform3f(u, P.x, P.y, P.z),
                          b.uniform2f(h, L.x, L.y),
                          b.uniform1f(l, F.rotation),
                          b.uniform1f(a, F.opacity),
                          b.uniform3f(s, F.color.r, F.color.g, F.color.b),
                          _.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst),
                          e.setTexture2D(F.texture, 1),
                          b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0))
                      }
                  }
              _.enable(b.CULL_FACE),
              _.enable(b.DEPTH_TEST),
              _.setDepthWrite(!0),
              e.resetGLState()
          }
      }
  }
  function X(e, t) {
      function i(e, t) {
          return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
      }
      var r, o, a, h, l, u, p, d, f, m, g, v, y, x, b, _, w, E, M, T, S, A = e.context, R = e.state, L = new c, P = new s, C = new c;
      this.render = function(s, c) {
          if (0 !== t.length) {
              if (void 0 === T) {
                  var I = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
                    , U = new Uint16Array([0, 1, 2, 0, 2, 3]);
                  E = A.createBuffer(),
                  M = A.createBuffer(),
                  A.bindBuffer(A.ARRAY_BUFFER, E),
                  A.bufferData(A.ARRAY_BUFFER, I, A.STATIC_DRAW),
                  A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, M),
                  A.bufferData(A.ELEMENT_ARRAY_BUFFER, U, A.STATIC_DRAW);
                  var I = A.createProgram()
                    , U = A.createShader(A.VERTEX_SHADER)
                    , N = A.createShader(A.FRAGMENT_SHADER);
                  A.shaderSource(U, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")),
                  A.shaderSource(N, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")),
                  A.compileShader(U),
                  A.compileShader(N),
                  A.attachShader(I, U),
                  A.attachShader(I, N),
                  A.linkProgram(I),
                  T = I,
                  _ = A.getAttribLocation(T, "position"),
                  w = A.getAttribLocation(T, "uv"),
                  r = A.getUniformLocation(T, "uvOffset"),
                  o = A.getUniformLocation(T, "uvScale"),
                  a = A.getUniformLocation(T, "rotation"),
                  h = A.getUniformLocation(T, "scale"),
                  l = A.getUniformLocation(T, "color"),
                  u = A.getUniformLocation(T, "map"),
                  p = A.getUniformLocation(T, "opacity"),
                  d = A.getUniformLocation(T, "modelViewMatrix"),
                  f = A.getUniformLocation(T, "projectionMatrix"),
                  m = A.getUniformLocation(T, "fogType"),
                  g = A.getUniformLocation(T, "fogDensity"),
                  v = A.getUniformLocation(T, "fogNear"),
                  y = A.getUniformLocation(T, "fogFar"),
                  x = A.getUniformLocation(T, "fogColor"),
                  b = A.getUniformLocation(T, "alphaTest"),
                  I = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                  I.width = 8,
                  I.height = 8,
                  U = I.getContext("2d"),
                  U.fillStyle = "white",
                  U.fillRect(0, 0, 8, 8),
                  S = new n(I),
                  S.needsUpdate = !0
              }
              A.useProgram(T),
              R.initAttributes(),
              R.enableAttribute(_),
              R.enableAttribute(w),
              R.disableUnusedAttributes(),
              R.disable(A.CULL_FACE),
              R.enable(A.BLEND),
              A.bindBuffer(A.ARRAY_BUFFER, E),
              A.vertexAttribPointer(_, 2, A.FLOAT, !1, 16, 0),
              A.vertexAttribPointer(w, 2, A.FLOAT, !1, 16, 8),
              A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, M),
              A.uniformMatrix4fv(f, !1, c.projectionMatrix.elements),
              R.activeTexture(A.TEXTURE0),
              A.uniform1i(u, 0),
              U = I = 0,
              (N = s.fog) ? (A.uniform3f(x, N.color.r, N.color.g, N.color.b),
              N.isFog ? (A.uniform1f(v, N.near),
              A.uniform1f(y, N.far),
              A.uniform1i(m, 1),
              U = I = 1) : N.isFogExp2 && (A.uniform1f(g, N.density),
              A.uniform1i(m, 2),
              U = I = 2)) : (A.uniform1i(m, 0),
              U = I = 0);
              for (var N = 0, D = t.length; D > N; N++) {
                  var O = t[N];
                  O.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, O.matrixWorld),
                  O.z = -O.modelViewMatrix.elements[14]
              }
              t.sort(i);
              for (var B = [], N = 0, D = t.length; D > N; N++) {
                  var O = t[N]
                    , F = O.material;
                  !1 !== F.visible && (A.uniform1f(b, F.alphaTest),
                  A.uniformMatrix4fv(d, !1, O.modelViewMatrix.elements),
                  O.matrixWorld.decompose(L, P, C),
                  B[0] = C.x,
                  B[1] = C.y,
                  O = 0,
                  s.fog && F.fog && (O = U),
                  I !== O && (A.uniform1i(m, O),
                  I = O),
                  null !== F.map ? (A.uniform2f(r, F.map.offset.x, F.map.offset.y),
                  A.uniform2f(o, F.map.repeat.x, F.map.repeat.y)) : (A.uniform2f(r, 0, 0),
                  A.uniform2f(o, 1, 1)),
                  A.uniform1f(p, F.opacity),
                  A.uniform3f(l, F.color.r, F.color.g, F.color.b),
                  A.uniform1f(a, F.rotation),
                  A.uniform2fv(h, B),
                  R.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst),
                  R.setDepthTest(F.depthTest),
                  R.setDepthWrite(F.depthWrite),
                  F.map ? e.setTexture2D(F.map, 0) : e.setTexture2D(S, 0),
                  A.drawElements(A.TRIANGLES, 6, A.UNSIGNED_SHORT, 0))
              }
              R.enable(A.CULL_FACE),
              e.resetGLState()
          }
      }
  }
  function q() {
      Object.defineProperty(this, "id", {
          value: wo++
      }),
      this.uuid = ho.generateUUID(),
      this.name = "",
      this.type = "Material",
      this.lights = this.fog = !0,
      this.blending = 1,
      this.side = 0,
      this.shading = 2,
      this.vertexColors = 0,
      this.opacity = 1,
      this.transparent = !1,
      this.blendSrc = 204,
      this.blendDst = 205,
      this.blendEquation = 100,
      this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null,
      this.depthFunc = 3,
      this.depthWrite = this.depthTest = !0,
      this.clippingPlanes = null,
      this.clipShadows = this.clipIntersection = !1,
      this.colorWrite = !0,
      this.precision = null,
      this.polygonOffset = !1,
      this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0,
      this.premultipliedAlpha = !1,
      this.overdraw = 0,
      this._needsUpdate = this.visible = !0
  }
  function Y(e) {
      q.call(this),
      this.type = "ShaderMaterial",
      this.defines = {},
      this.uniforms = {},
      this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
      this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
      this.linewidth = 1,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1,
      this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1
      },
      this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0]
      },
      this.index0AttributeName = void 0,
      void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
      this.setValues(e))
  }
  function Z(e) {
      q.call(this),
      this.type = "MeshDepthMaterial",
      this.depthPacking = 3200,
      this.morphTargets = this.skinning = !1,
      this.displacementMap = this.alphaMap = this.map = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.lights = this.fog = !1,
      this.setValues(e)
  }
  function J(e, t) {
      this.min = void 0 !== e ? e : new c(1 / 0,1 / 0,1 / 0),
      this.max = void 0 !== t ? t : new c(-1 / 0,-1 / 0,-1 / 0)
  }
  function Q(e, t) {
      this.center = void 0 !== e ? e : new c,
      this.radius = void 0 !== t ? t : 0
  }
  function K() {
      this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
      0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
  }
  function $(e, t) {
      this.normal = void 0 !== e ? e : new c(1,0,0),
      this.constant = void 0 !== t ? t : 0
  }
  function et(e, t, i, n, r, o) {
      this.planes = [void 0 !== e ? e : new $, void 0 !== t ? t : new $, void 0 !== i ? i : new $, void 0 !== n ? n : new $, void 0 !== r ? r : new $, void 0 !== o ? o : new $]
  }
  function tt(e, t, n, a) {
      function s(t, i, n, r) {
          var o, a = t.geometry;
          o = _;
          var s = t.customDepthMaterial;
          return n && (o = w,
          s = t.customDistanceMaterial),
          s ? o = s : (s = !1,
          i.morphTargets && (a && a.isBufferGeometry ? s = a.morphAttributes && a.morphAttributes.position && 0 < a.morphAttributes.position.length : a && a.isGeometry && (s = a.morphTargets && 0 < a.morphTargets.length)),
          t = t.isSkinnedMesh && i.skinning,
          a = 0,
          s && (a |= 1),
          t && (a |= 2),
          o = o[a]),
          e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length && (a = o.uuid,
          s = i.uuid,
          t = E[a],
          void 0 === t && (t = {},
          E[a] = t),
          a = t[s],
          void 0 === a && (a = o.clone(),
          t[s] = a),
          o = a),
          o.visible = i.visible,
          o.wireframe = i.wireframe,
          s = i.side,
          I.renderSingleSided && 2 == s && (s = 0),
          I.renderReverseSided && (0 === s ? s = 1 : 1 === s && (s = 0)),
          o.side = s,
          o.clipShadows = i.clipShadows,
          o.clippingPlanes = i.clippingPlanes,
          o.wireframeLinewidth = i.wireframeLinewidth,
          o.linewidth = i.linewidth,
          n && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(r),
          o
      }
      function l(e, t, i) {
          if (!1 !== e.visible) {
              0 !== (e.layers.mask & t.layers.mask) && (e.isMesh || e.isLine || e.isPoints) && e.castShadow && (!1 === e.frustumCulled || !0 === d.intersectsObject(e)) && !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld),
              b.push(e)),
              e = e.children;
              for (var n = 0, r = e.length; r > n; n++)
                  l(e[n], t, i)
          }
      }
      var u = e.context
        , p = e.state
        , d = new et
        , f = new h
        , m = t.shadows
        , g = new i
        , v = new i(a.maxTextureSize,a.maxTextureSize)
        , y = new c
        , x = new c
        , b = []
        , _ = Array(4)
        , w = Array(4)
        , E = {}
        , M = [new c(1,0,0), new c(-1,0,0), new c(0,0,1), new c(0,0,-1), new c(0,1,0), new c(0,-1,0)]
        , T = [new c(0,1,0), new c(0,1,0), new c(0,1,0), new c(0,1,0), new c(0,0,1), new c(0,0,-1)]
        , S = [new r, new r, new r, new r, new r, new r];
      t = new Z,
      t.depthPacking = 3201,
      t.clipping = !0,
      a = _o.distanceRGBA;
      for (var A = vo.clone(a.uniforms), R = 0; 4 !== R; ++R) {
          var L = 0 !== (1 & R)
            , P = 0 !== (2 & R)
            , C = t.clone();
          C.morphTargets = L,
          C.skinning = P,
          _[R] = C,
          L = new Y({
              defines: {
                  USE_SHADOWMAP: ""
              },
              uniforms: A,
              vertexShader: a.vertexShader,
              fragmentShader: a.fragmentShader,
              morphTargets: L,
              skinning: P,
              clipping: !0
          }),
          w[R] = L
      }
      var I = this;
      this.enabled = !1,
      this.autoUpdate = !0,
      this.needsUpdate = !1,
      this.type = 1,
      this.renderSingleSided = this.renderReverseSided = !0,
      this.render = function(t, i) {
          if (!1 !== I.enabled && (!1 !== I.autoUpdate || !1 !== I.needsUpdate) && 0 !== m.length) {
              p.buffers.color.setClear(1, 1, 1, 1),
              p.disable(u.BLEND),
              p.setDepthTest(!0),
              p.setScissorTest(!1);
              for (var r, a, c = 0, h = m.length; h > c; c++) {
                  var _ = m[c]
                    , w = _.shadow;
                  if (void 0 === w)
                      console.warn("THREE.WebGLShadowMap:", _, "has no shadow.");
                  else {
                      var E = w.camera;
                      if (g.copy(w.mapSize),
                      g.min(v),
                      _ && _.isPointLight) {
                          r = 6,
                          a = !0;
                          var A = g.x
                            , R = g.y;
                          S[0].set(2 * A, R, A, R),
                          S[1].set(0, R, A, R),
                          S[2].set(3 * A, R, A, R),
                          S[3].set(A, R, A, R),
                          S[4].set(3 * A, 0, A, R),
                          S[5].set(A, 0, A, R),
                          g.x *= 4,
                          g.y *= 2
                      } else
                          r = 1,
                          a = !1;
                      for (null === w.map && (w.map = new o(g.x,g.y,{
                          minFilter: 1003,
                          magFilter: 1003,
                          format: 1023
                      }),
                      E.updateProjectionMatrix()),
                      w.isSpotLightShadow && w.update(_),
                      w && w.isRectAreaLightShadow && w.update(_),
                      A = w.map,
                      w = w.matrix,
                      x.setFromMatrixPosition(_.matrixWorld),
                      E.position.copy(x),
                      e.setRenderTarget(A),
                      e.clear(),
                      A = 0; r > A; A++) {
                          a ? (y.copy(E.position),
                          y.add(M[A]),
                          E.up.copy(T[A]),
                          E.lookAt(y),
                          p.viewport(S[A])) : (y.setFromMatrixPosition(_.target.matrixWorld),
                          E.lookAt(y)),
                          E.updateMatrixWorld(),
                          E.matrixWorldInverse.getInverse(E.matrixWorld),
                          w.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                          w.multiply(E.projectionMatrix),
                          w.multiply(E.matrixWorldInverse),
                          f.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse),
                          d.setFromMatrix(f),
                          b.length = 0,
                          l(t, i, E);
                          for (var R = 0, L = b.length; L > R; R++) {
                              var P = b[R]
                                , C = n.update(P)
                                , U = P.material;
                              if (U && U.isMultiMaterial)
                                  for (var N = C.groups, U = U.materials, D = 0, O = N.length; O > D; D++) {
                                      var B = N[D]
                                        , F = U[B.materialIndex];
                                      !0 === F.visible && (F = s(P, F, a, x),
                                      e.renderBufferDirect(E, null, C, F, P, B))
                                  }
                              else
                                  F = s(P, U, a, x),
                                  e.renderBufferDirect(E, null, C, F, P, null)
                          }
                      }
                  }
              }
              r = e.getClearColor(),
              a = e.getClearAlpha(),
              e.setClearColor(r, a),
              I.needsUpdate = !1
          }
      }
  }
  function it(e, t) {
      this.origin = void 0 !== e ? e : new c,
      this.direction = void 0 !== t ? t : new c
  }
  function nt(e, t, i, n) {
      this._x = e || 0,
      this._y = t || 0,
      this._z = i || 0,
      this._order = n || nt.DefaultOrder
  }
  function rt() {
      this.mask = 1
  }
  function ot() {
      Object.defineProperty(this, "id", {
          value: Eo++
      }),
      this.uuid = ho.generateUUID(),
      this.name = "",
      this.type = "Object3D",
      this.parent = null,
      this.children = [],
      this.up = ot.DefaultUp.clone();
      var e = new c
        , t = new nt
        , i = new s
        , n = new c(1,1,1);
      t.onChange(function() {
          i.setFromEuler(t, !1)
      }),
      i.onChange(function() {
          t.setFromQuaternion(i, void 0, !1)
      }),
      Object.defineProperties(this, {
          position: {
              enumerable: !0,
              value: e
          },
          rotation: {
              enumerable: !0,
              value: t
          },
          quaternion: {
              enumerable: !0,
              value: i
          },
          scale: {
              enumerable: !0,
              value: n
          },
          modelViewMatrix: {
              value: new h
          },
          normalMatrix: {
              value: new K
          }
      }),
      this.matrix = new h,
      this.matrixWorld = new h,
      this.matrixAutoUpdate = ot.DefaultMatrixAutoUpdate,
      this.matrixWorldNeedsUpdate = !1,
      this.layers = new rt,
      this.visible = !0,
      this.receiveShadow = this.castShadow = !1,
      this.frustumCulled = !0,
      this.renderOrder = 0,
      this.userData = {},
      this.onBeforeRender = function() {}
      ,
      this.onAfterRender = function() {}
  }
  function at(e, t) {
      this.start = void 0 !== e ? e : new c,
      this.end = void 0 !== t ? t : new c
  }
  function st(e, t, i) {
      this.a = void 0 !== e ? e : new c,
      this.b = void 0 !== t ? t : new c,
      this.c = void 0 !== i ? i : new c
  }
  function ct(e, t, i, n, r, o) {
      this.a = e,
      this.b = t,
      this.c = i,
      this.normal = n && n.isVector3 ? n : new c,
      this.vertexNormals = Array.isArray(n) ? n : [],
      this.color = r && r.isColor ? r : new V,
      this.vertexColors = Array.isArray(r) ? r : [],
      this.materialIndex = void 0 !== o ? o : 0
  }
  function ht(e) {
      q.call(this),
      this.type = "MeshBasicMaterial",
      this.color = new V(16777215),
      this.lightMap = this.map = null,
      this.lightMapIntensity = 1,
      this.aoMap = null,
      this.aoMapIntensity = 1,
      this.envMap = this.alphaMap = this.specularMap = null,
      this.combine = 0,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinejoin = this.wireframeLinecap = "round",
      this.lights = this.morphTargets = this.skinning = !1,
      this.setValues(e)
  }
  function lt(e, t, i) {
      if (Array.isArray(e))
          throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.uuid = ho.generateUUID(),
      this.array = e,
      this.itemSize = t,
      this.count = void 0 !== e ? e.length / t : 0,
      this.normalized = !0 === i,
      this.dynamic = !1,
      this.updateRange = {
          offset: 0,
          count: -1
      },
      this.onUploadCallback = function() {}
      ,
      this.version = 0
  }
  function ut(e, t) {
      lt.call(this, new Int8Array(e), t)
  }
  function pt(e, t) {
      lt.call(this, new Uint8Array(e), t)
  }
  function dt(e, t) {
      lt.call(this, new Uint8ClampedArray(e), t)
  }
  function ft(e, t) {
      lt.call(this, new Int16Array(e), t)
  }
  function mt(e, t) {
      lt.call(this, new Uint16Array(e), t)
  }
  function gt(e, t) {
      lt.call(this, new Int32Array(e), t)
  }
  function vt(e, t) {
      lt.call(this, new Uint32Array(e), t)
  }
  function yt(e, t) {
      lt.call(this, new Float32Array(e), t)
  }
  function xt(e, t) {
      lt.call(this, new Float64Array(e), t)
  }
  function bt() {
      this.indices = [],
      this.vertices = [],
      this.normals = [],
      this.colors = [],
      this.uvs = [],
      this.uvs2 = [],
      this.groups = [],
      this.morphTargets = {},
      this.skinWeights = [],
      this.skinIndices = [],
      this.boundingSphere = this.boundingBox = null,
      this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
  }
  function _t(e) {
      for (var t = e.length, i = -1 / 0; t--; )
          e[t] > i && (i = e[t]);
      return i
  }
  function wt() {
      Object.defineProperty(this, "id", {
          value: Mo++
      }),
      this.uuid = ho.generateUUID(),
      this.name = "",
      this.type = "Geometry",
      this.vertices = [],
      this.colors = [],
      this.faces = [],
      this.faceVertexUvs = [[]],
      this.morphTargets = [],
      this.morphNormals = [],
      this.skinWeights = [],
      this.skinIndices = [],
      this.lineDistances = [],
      this.boundingSphere = this.boundingBox = null,
      this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
  }
  function Et() {
      Object.defineProperty(this, "id", {
          value: Mo++
      }),
      this.uuid = ho.generateUUID(),
      this.name = "",
      this.type = "BufferGeometry",
      this.index = null,
      this.attributes = {},
      this.morphAttributes = {},
      this.groups = [],
      this.boundingSphere = this.boundingBox = null,
      this.drawRange = {
          start: 0,
          count: 1 / 0
      }
  }
  function Mt(e, t) {
      ot.call(this),
      this.type = "Mesh",
      this.geometry = void 0 !== e ? e : new Et,
      this.material = void 0 !== t ? t : new ht({
          color: 16777215 * Math.random()
      }),
      this.drawMode = 0,
      this.updateMorphTargets()
  }
  function Tt(e, t, i, n, r, o) {
      wt.call(this),
      this.type = "BoxGeometry",
      this.parameters = {
          width: e,
          height: t,
          depth: i,
          widthSegments: n,
          heightSegments: r,
          depthSegments: o
      },
      this.fromBufferGeometry(new St(e,t,i,n,r,o)),
      this.mergeVertices()
  }
  function St(e, t, i, n, r, o) {
      function a(e, t, i, n, r, o, a, m, g, v, y) {
          var x = o / g
            , b = a / v
            , _ = o / 2
            , w = a / 2
            , E = m / 2;
          a = g + 1;
          var M, T, S = v + 1, A = o = 0, R = new c;
          for (T = 0; S > T; T++) {
              var L = T * b - w;
              for (M = 0; a > M; M++)
                  R[e] = (M * x - _) * n,
                  R[t] = L * r,
                  R[i] = E,
                  l.push(R.x, R.y, R.z),
                  R[e] = 0,
                  R[t] = 0,
                  R[i] = m > 0 ? 1 : -1,
                  u.push(R.x, R.y, R.z),
                  p.push(M / g),
                  p.push(1 - T / v),
                  o += 1
          }
          for (T = 0; v > T; T++)
              for (M = 0; g > M; M++)
                  e = d + M + a * (T + 1),
                  t = d + (M + 1) + a * (T + 1),
                  i = d + (M + 1) + a * T,
                  h.push(d + M + a * T, e, i),
                  h.push(e, t, i),
                  A += 6;
          s.addGroup(f, A, y),
          f += A,
          d += o
      }
      Et.call(this),
      this.type = "BoxBufferGeometry",
      this.parameters = {
          width: e,
          height: t,
          depth: i,
          widthSegments: n,
          heightSegments: r,
          depthSegments: o
      };
      var s = this;
      n = Math.floor(n) || 1,
      r = Math.floor(r) || 1,
      o = Math.floor(o) || 1;
      var h = []
        , l = []
        , u = []
        , p = []
        , d = 0
        , f = 0;
      a("z", "y", "x", -1, -1, i, t, e, o, r, 0),
      a("z", "y", "x", 1, -1, i, t, -e, o, r, 1),
      a("x", "z", "y", 1, 1, e, i, t, n, o, 2),
      a("x", "z", "y", 1, -1, e, i, -t, n, o, 3),
      a("x", "y", "z", 1, -1, e, t, i, n, r, 4),
      a("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
      this.setIndex(h),
      this.addAttribute("position", new yt(l,3)),
      this.addAttribute("normal", new yt(u,3)),
      this.addAttribute("uv", new yt(p,2))
  }
  function At(e, t, i, n) {
      wt.call(this),
      this.type = "PlaneGeometry",
      this.parameters = {
          width: e,
          height: t,
          widthSegments: i,
          heightSegments: n
      },
      this.fromBufferGeometry(new Rt(e,t,i,n))
  }
  function Rt(e, t, i, n) {
      Et.call(this),
      this.type = "PlaneBufferGeometry",
      this.parameters = {
          width: e,
          height: t,
          widthSegments: i,
          heightSegments: n
      };
      var r = e / 2
        , o = t / 2;
      i = Math.floor(i) || 1,
      n = Math.floor(n) || 1;
      var a = i + 1
        , s = n + 1
        , c = e / i
        , h = t / n
        , l = []
        , u = []
        , p = []
        , d = [];
      for (e = 0; s > e; e++) {
          var f = e * h - o;
          for (t = 0; a > t; t++)
              u.push(t * c - r, -f, 0),
              p.push(0, 0, 1),
              d.push(t / i),
              d.push(1 - e / n)
      }
      for (e = 0; n > e; e++)
          for (t = 0; i > t; t++)
              r = t + a * (e + 1),
              o = t + 1 + a * (e + 1),
              s = t + 1 + a * e,
              l.push(t + a * e, r, s),
              l.push(r, o, s);
      this.setIndex(l),
      this.addAttribute("position", new yt(u,3)),
      this.addAttribute("normal", new yt(p,3)),
      this.addAttribute("uv", new yt(d,2))
  }
  function Lt() {
      ot.call(this),
      this.type = "Camera",
      this.matrixWorldInverse = new h,
      this.projectionMatrix = new h
  }
  function Pt(e, t, i, n) {
      Lt.call(this),
      this.type = "PerspectiveCamera",
      this.fov = void 0 !== e ? e : 50,
      this.zoom = 1,
      this.near = void 0 !== i ? i : .1,
      this.far = void 0 !== n ? n : 2e3,
      this.focus = 10,
      this.aspect = void 0 !== t ? t : 1,
      this.view = null,
      this.filmGauge = 35,
      this.filmOffset = 0,
      this.updateProjectionMatrix()
  }
  function Ct(e, t, i, n, r, o) {
      Lt.call(this),
      this.type = "OrthographicCamera",
      this.zoom = 1,
      this.view = null,
      this.left = e,
      this.right = t,
      this.top = i,
      this.bottom = n,
      this.near = void 0 !== r ? r : .1,
      this.far = void 0 !== o ? o : 2e3,
      this.updateProjectionMatrix()
  }
  function It(e, t, i) {
      var n, r, o;
      return {
          setMode: function(e) {
              n = e
          },
          setIndex: function(i) {
              i.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (r = e.UNSIGNED_INT,
              o = 4) : i.array instanceof Uint16Array ? (r = e.UNSIGNED_SHORT,
              o = 2) : (r = e.UNSIGNED_BYTE,
              o = 1)
          },
          render: function(t, a) {
              e.drawElements(n, a, r, t * o),
              i.calls++,
              i.vertices += a,
              n === e.TRIANGLES && (i.faces += a / 3)
          },
          renderInstances: function(a, s, c) {
              var h = t.get("ANGLE_instanced_arrays");
              null === h ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (h.drawElementsInstancedANGLE(n, c, r, s * o, a.maxInstancedCount),
              i.calls++,
              i.vertices += c * a.maxInstancedCount,
              n === e.TRIANGLES && (i.faces += a.maxInstancedCount * c / 3))
          }
      }
  }
  function Ut(e, t, i) {
      var n;
      return {
          setMode: function(e) {
              n = e
          },
          render: function(t, r) {
              e.drawArrays(n, t, r),
              i.calls++,
              i.vertices += r,
              n === e.TRIANGLES && (i.faces += r / 3)
          },
          renderInstances: function(r) {
              var o = t.get("ANGLE_instanced_arrays");
              if (null === o)
                  console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
              else {
                  var a = r.attributes.position
                    , a = a.isInterleavedBufferAttribute ? a.data.count : a.count;
                  o.drawArraysInstancedANGLE(n, 0, a, r.maxInstancedCount),
                  i.calls++,
                  i.vertices += a * r.maxInstancedCount,
                  n === e.TRIANGLES && (i.faces += r.maxInstancedCount * a / 3)
              }
          }
      }
  }
  function Nt() {
      var e = {};
      return {
          get: function(t) {
              if (void 0 !== e[t.id])
                  return e[t.id];
              var n;
              switch (t.type) {
              case "DirectionalLight":
                  n = {
                      direction: new c,
                      color: new V,
                      shadow: !1,
                      shadowBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new i
                  };
                  break;
              case "SpotLight":
                  n = {
                      position: new c,
                      direction: new c,
                      color: new V,
                      distance: 0,
                      coneCos: 0,
                      penumbraCos: 0,
                      decay: 0,
                      shadow: !1,
                      shadowBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new i
                  };
                  break;
              case "PointLight":
                  n = {
                      position: new c,
                      color: new V,
                      distance: 0,
                      decay: 0,
                      shadow: !1,
                      shadowBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new i
                  };
                  break;
              case "HemisphereLight":
                  n = {
                      direction: new c,
                      skyColor: new V,
                      groundColor: new V
                  };
                  break;
              case "RectAreaLight":
                  n = {
                      color: new V,
                      position: new c,
                      halfWidth: new c,
                      halfHeight: new c
                  }
              }
              return e[t.id] = n
          }
      }
  }
  function Dt(e) {
      e = e.split("\n");
      for (var t = 0; t < e.length; t++)
          e[t] = t + 1 + ": " + e[t];
      return e.join("\n")
  }
  function Ot(e, t, i) {
      var n = e.createShader(t);
      return e.shaderSource(n, i),
      e.compileShader(n),
      !1 === e.getShaderParameter(n, e.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."),
      "" !== e.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(n), Dt(i)),
      n
  }
  function Bt(e) {
      switch (e) {
      case 3e3:
          return ["Linear", "( value )"];
      case 3001:
          return ["sRGB", "( value )"];
      case 3002:
          return ["RGBE", "( value )"];
      case 3004:
          return ["RGBM", "( value, 7.0 )"];
      case 3005:
          return ["RGBM", "( value, 16.0 )"];
      case 3006:
          return ["RGBD", "( value, 256.0 )"];
      case 3007:
          return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
          throw Error("unsupported encoding: " + e)
      }
  }
  function Ft(e, t) {
      var i = Bt(t);
      return "vec4 " + e + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
  }
  function zt(e, t) {
      var i = Bt(t);
      return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
  }
  function Ht(e, t) {
      var i;
      switch (t) {
      case 1:
          i = "Linear";
          break;
      case 2:
          i = "Reinhard";
          break;
      case 3:
          i = "Uncharted2";
          break;
      case 4:
          i = "OptimizedCineon";
          break;
      default:
          throw Error("unsupported toneMapping: " + t)
      }
      return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
  }
  function Gt(e, t, i) {
      return e = e || {},
      [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(kt).join("\n")
  }
  function Vt(e) {
      var t, i = [];
      for (t in e) {
          var n = e[t];
          !1 !== n && i.push("#define " + t + " " + n)
      }
      return i.join("\n")
  }
  function kt(e) {
      return "" !== e
  }
  function jt(e, t) {
      return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
  }
  function Wt(e) {
      return e.replace(/#include +<([\w\d.]+)>/g, function(e, t) {
          var i = yo[t];
          if (void 0 === i)
              throw Error("Can not resolve #include <" + t + ">");
          return Wt(i)
      })
  }
  function Xt(e) {
      return e.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(e, t, i, n) {
          for (e = "",
          t = parseInt(t); t < parseInt(i); t++)
              e += n.replace(/\[ i \]/g, "[ " + t + " ]");
          return e
      })
  }
  function qt(e, t, i, n) {
      var r = e.context
        , o = i.extensions
        , a = i.defines
        , s = i.__webglShader.vertexShader
        , c = i.__webglShader.fragmentShader
        , h = "SHADOWMAP_TYPE_BASIC";
      1 === n.shadowMapType ? h = "SHADOWMAP_TYPE_PCF" : 2 === n.shadowMapType && (h = "SHADOWMAP_TYPE_PCF_SOFT");
      var l = "ENVMAP_TYPE_CUBE"
        , u = "ENVMAP_MODE_REFLECTION"
        , p = "ENVMAP_BLENDING_MULTIPLY";
      if (n.envMap) {
          switch (i.envMap.mapping) {
          case 301:
          case 302:
              l = "ENVMAP_TYPE_CUBE";
              break;
          case 306:
          case 307:
              l = "ENVMAP_TYPE_CUBE_UV";
              break;
          case 303:
          case 304:
              l = "ENVMAP_TYPE_EQUIREC";
              break;
          case 305:
              l = "ENVMAP_TYPE_SPHERE"
          }
          switch (i.envMap.mapping) {
          case 302:
          case 304:
              u = "ENVMAP_MODE_REFRACTION"
          }
          switch (i.combine) {
          case 0:
              p = "ENVMAP_BLENDING_MULTIPLY";
              break;
          case 1:
              p = "ENVMAP_BLENDING_MIX";
              break;
          case 2:
              p = "ENVMAP_BLENDING_ADD"
          }
      }
      var d = 0 < e.gammaFactor ? e.gammaFactor : 1
        , o = Gt(o, n, e.extensions)
        , f = Vt(a)
        , m = r.createProgram();
      i.isRawShaderMaterial ? (a = [f, "\n"].filter(kt).join("\n"),
      h = [o, f, "\n"].filter(kt).join("\n")) : (a = ["precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, f, n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(kt).join("\n"),
      h = [o, "precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (n.numClippingPlanes - n.numClipIntersection), n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", n.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? yo.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Ht("toneMapping", n.toneMapping) : "", n.outputEncoding || n.mapEncoding || n.envMapEncoding || n.emissiveMapEncoding ? yo.encodings_pars_fragment : "", n.mapEncoding ? Ft("mapTexelToLinear", n.mapEncoding) : "", n.envMapEncoding ? Ft("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? Ft("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.outputEncoding ? zt("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(kt).join("\n")),
      s = Wt(s, n),
      s = jt(s, n),
      c = Wt(c, n),
      c = jt(c, n),
      i.isShaderMaterial || (s = Xt(s),
      c = Xt(c)),
      c = h + c,
      s = Ot(r, r.VERTEX_SHADER, a + s),
      c = Ot(r, r.FRAGMENT_SHADER, c),
      r.attachShader(m, s),
      r.attachShader(m, c),
      void 0 !== i.index0AttributeName ? r.bindAttribLocation(m, 0, i.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
      r.linkProgram(m),
      n = r.getProgramInfoLog(m),
      l = r.getShaderInfoLog(s),
      u = r.getShaderInfoLog(c),
      d = p = !0,
      !1 === r.getProgramParameter(m, r.LINK_STATUS) ? (p = !1,
      console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(m, r.VALIDATE_STATUS), "gl.getProgramInfoLog", n, l, u)) : "" !== n ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", n) : ("" === l || "" === u) && (d = !1),
      d && (this.diagnostics = {
          runnable: p,
          material: i,
          programLog: n,
          vertexShader: {
              log: l,
              prefix: a
          },
          fragmentShader: {
              log: u,
              prefix: h
          }
      }),
      r.deleteShader(s),
      r.deleteShader(c);
      var g;
      this.getUniforms = function() {
          return void 0 === g && (g = new G(r,m,e)),
          g
      }
      ;
      var v;
      return this.getAttributes = function() {
          if (void 0 === v) {
              for (var e = {}, t = r.getProgramParameter(m, r.ACTIVE_ATTRIBUTES), i = 0; t > i; i++) {
                  var n = r.getActiveAttrib(m, i).name;
                  e[n] = r.getAttribLocation(m, n)
              }
              v = e
          }
          return v
      }
      ,
      this.destroy = function() {
          r.deleteProgram(m),
          this.program = void 0
      }
      ,
      Object.defineProperties(this, {
          uniforms: {
              get: function() {
                  return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                  this.getUniforms()
              }
          },
          attributes: {
              get: function() {
                  return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                  this.getAttributes()
              }
          }
      }),
      this.id = To++,
      this.code = t,
      this.usedTimes = 1,
      this.program = m,
      this.vertexShader = s,
      this.fragmentShader = c,
      this
  }
  function Yt(e, t) {
      function i(e, t) {
          var i;
          return e ? e.isTexture ? i = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
          i = e.texture.encoding) : i = 3e3,
          3e3 === i && t && (i = 3007),
          i
      }
      var n = []
        , r = {
          MeshDepthMaterial: "depth",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "phong",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points"
      }
        , o = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
      this.getParameters = function(n, o, a, s, c, h) {
          var l, u = r[n.type];
          t.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture ? l = 1024 : (l = Math.floor((t.maxVertexUniforms - 20) / 4),
          void 0 !== h && h && h.isSkinnedMesh && (l = Math.min(h.skeleton.bones.length, l),
          l < h.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + h.skeleton.bones.length + ", this GPU supports just " + l + " (try OpenGL instead of ANGLE)")));
          var p = e.getPrecision();
          null !== n.precision && (p = t.getMaxPrecision(n.precision),
          p !== n.precision && console.warn("THREE.WebGLProgram.getParameters:", n.precision, "not supported, using", p, "instead."));
          var d = e.getCurrentRenderTarget();
          return {
              shaderID: u,
              precision: p,
              supportsVertexTextures: t.vertexTextures,
              outputEncoding: i(d ? d.texture : null, e.gammaOutput),
              map: !!n.map,
              mapEncoding: i(n.map, e.gammaInput),
              envMap: !!n.envMap,
              envMapMode: n.envMap && n.envMap.mapping,
              envMapEncoding: i(n.envMap, e.gammaInput),
              envMapCubeUV: !!n.envMap && (306 === n.envMap.mapping || 307 === n.envMap.mapping),
              lightMap: !!n.lightMap,
              aoMap: !!n.aoMap,
              emissiveMap: !!n.emissiveMap,
              emissiveMapEncoding: i(n.emissiveMap, e.gammaInput),
              bumpMap: !!n.bumpMap,
              normalMap: !!n.normalMap,
              displacementMap: !!n.displacementMap,
              roughnessMap: !!n.roughnessMap,
              metalnessMap: !!n.metalnessMap,
              specularMap: !!n.specularMap,
              alphaMap: !!n.alphaMap,
              gradientMap: !!n.gradientMap,
              combine: n.combine,
              vertexColors: n.vertexColors,
              fog: !!a,
              useFog: n.fog,
              fogExp: a && a.isFogExp2,
              flatShading: 1 === n.shading,
              sizeAttenuation: n.sizeAttenuation,
              logarithmicDepthBuffer: t.logarithmicDepthBuffer,
              skinning: n.skinning,
              maxBones: l,
              useVertexTexture: t.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
              morphTargets: n.morphTargets,
              morphNormals: n.morphNormals,
              maxMorphTargets: e.maxMorphTargets,
              maxMorphNormals: e.maxMorphNormals,
              numDirLights: o.directional.length,
              numPointLights: o.point.length,
              numSpotLights: o.spot.length,
              numRectAreaLights: o.rectArea.length,
              numHemiLights: o.hemi.length,
              numClippingPlanes: s,
              numClipIntersection: c,
              shadowMapEnabled: e.shadowMap.enabled && h.receiveShadow && 0 < o.shadows.length,
              shadowMapType: e.shadowMap.type,
              toneMapping: e.toneMapping,
              physicallyCorrectLights: e.physicallyCorrectLights,
              premultipliedAlpha: n.premultipliedAlpha,
              alphaTest: n.alphaTest,
              doubleSided: 2 === n.side,
              flipSided: 1 === n.side,
              depthPacking: void 0 !== n.depthPacking ? n.depthPacking : !1
          }
      }
      ,
      this.getProgramCode = function(e, t) {
          var i = [];
          if (t.shaderID ? i.push(t.shaderID) : (i.push(e.fragmentShader),
          i.push(e.vertexShader)),
          void 0 !== e.defines)
              for (var n in e.defines)
                  i.push(n),
                  i.push(e.defines[n]);
          for (n = 0; n < o.length; n++)
              i.push(t[o[n]]);
          return i.join()
      }
      ,
      this.acquireProgram = function(t, i, r) {
          for (var o, a = 0, s = n.length; s > a; a++) {
              var c = n[a];
              if (c.code === r) {
                  o = c,
                  ++o.usedTimes;
                  break
              }
          }
          return void 0 === o && (o = new qt(e,r,t,i),
          n.push(o)),
          o
      }
      ,
      this.releaseProgram = function(e) {
          if (0 === --e.usedTimes) {
              var t = n.indexOf(e);
              n[t] = n[n.length - 1],
              n.pop(),
              e.destroy()
          }
      }
      ,
      this.programs = n
  }
  function Zt(e, t, i) {
      function n(e) {
          var a = e.target;
          e = o[a.id],
          null !== e.index && r(e.index);
          var s, c = e.attributes;
          for (s in c)
              r(c[s]);
          a.removeEventListener("dispose", n),
          delete o[a.id],
          s = t.get(a),
          s.wireframe && r(s.wireframe),
          t["delete"](a),
          a = t.get(e),
          a.wireframe && r(a.wireframe),
          t["delete"](e),
          i.memory.geometries--
      }
      function r(i) {
          var n;
          n = i.isInterleavedBufferAttribute ? t.get(i.data).__webglBuffer : t.get(i).__webglBuffer,
          void 0 !== n && (e.deleteBuffer(n),
          t["delete"](i.isInterleavedBufferAttribute ? i.data : i))
      }
      var o = {};
      return {
          get: function(e) {
              var t = e.geometry;
              if (void 0 !== o[t.id])
                  return o[t.id];
              t.addEventListener("dispose", n);
              var r;
              return t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new Et).setFromObject(e)),
              r = t._bufferGeometry),
              o[t.id] = r,
              i.memory.geometries++,
              r
          }
      }
  }
  function Jt(e, t, i) {
      function n(i, n) {
          var r = i.isInterleavedBufferAttribute ? i.data : i
            , o = t.get(r);
          if (void 0 === o.__webglBuffer) {
              o.__webglBuffer = e.createBuffer(),
              e.bindBuffer(n, o.__webglBuffer),
              e.bufferData(n, r.array, r.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW);
              var a = e.FLOAT
                , s = r.array;
              s instanceof Float32Array ? a = e.FLOAT : s instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : s instanceof Uint16Array ? a = e.UNSIGNED_SHORT : s instanceof Int16Array ? a = e.SHORT : s instanceof Uint32Array ? a = e.UNSIGNED_INT : s instanceof Int32Array ? a = e.INT : s instanceof Int8Array ? a = e.BYTE : s instanceof Uint8Array && (a = e.UNSIGNED_BYTE),
              o.bytesPerElement = s.BYTES_PER_ELEMENT,
              o.type = a,
              o.version = r.version,
              r.onUploadCallback()
          } else
              o.version !== r.version && (e.bindBuffer(n, o.__webglBuffer),
              !1 === r.dynamic ? e.bufferData(n, r.array, e.STATIC_DRAW) : -1 === r.updateRange.count ? e.bufferSubData(n, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)),
              r.updateRange.count = 0),
              o.version = r.version)
      }
      var r = new Zt(e,t,i);
      return {
          getAttributeBuffer: function(e) {
              return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
          },
          getAttributeProperties: function(e) {
              return t.get(e.isInterleavedBufferAttribute ? e.data : e)
          },
          getWireframeAttribute: function(i) {
              var r = t.get(i);
              if (void 0 !== r.wireframe)
                  return r.wireframe;
              var o = []
                , a = i.index;
              if (i = i.attributes,
              null !== a) {
                  a = a.array,
                  i = 0;
                  for (var s = a.length; s > i; i += 3) {
                      var c = a[i + 0]
                        , h = a[i + 1]
                        , l = a[i + 2];
                      o.push(c, h, h, l, l, c)
                  }
              } else
                  for (a = i.position.array,
                  i = 0,
                  s = a.length / 3 - 1; s > i; i += 3)
                      c = i + 0,
                      h = i + 1,
                      l = i + 2,
                      o.push(c, h, h, l, l, c);
              return o = new (65535 < _t(o) ? vt : mt)(o,1),
              n(o, e.ELEMENT_ARRAY_BUFFER),
              r.wireframe = o
          },
          update: function(t) {
              var i = r.get(t);
              t.geometry.isGeometry && i.updateFromObject(t),
              t = i.index;
              var o = i.attributes;
              null !== t && n(t, e.ELEMENT_ARRAY_BUFFER);
              for (var a in o)
                  n(o[a], e.ARRAY_BUFFER);
              t = i.morphAttributes;
              for (a in t)
                  for (var o = t[a], s = 0, c = o.length; c > s; s++)
                      n(o[s], e.ARRAY_BUFFER);
              return i
          }
      }
  }
  function Qt(e, t, i, n, r, o, a) {
      function s(e, t) {
          if (e.width > t || e.height > t) {
              var i = t / Math.max(e.width, e.height)
                , n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
              return n.width = Math.floor(e.width * i),
              n.height = Math.floor(e.height * i),
              n.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height),
              console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height, e),
              n
          }
          return e
      }
      function c(e) {
          return ho.isPowerOfTwo(e.width) && ho.isPowerOfTwo(e.height)
      }
      function h(t) {
          return 1003 === t || 1004 === t || 1005 === t ? e.NEAREST : e.LINEAR
      }
      function l(t) {
          t = t.target,
          t.removeEventListener("dispose", l);
          e: {
              var i = n.get(t);
              if (t.image && i.__image__webglTextureCube)
                  e.deleteTexture(i.__image__webglTextureCube);
              else {
                  if (void 0 === i.__webglInit)
                      break e;
                  e.deleteTexture(i.__webglTexture)
              }
              n["delete"](t)
          }
          g.textures--
      }
      function u(t) {
          t = t.target,
          t.removeEventListener("dispose", u);
          var i = n.get(t)
            , r = n.get(t.texture);
          if (t) {
              if (void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture),
              t.depthTexture && t.depthTexture.dispose(),
              t.isWebGLRenderTargetCube)
                  for (r = 0; 6 > r; r++)
                      e.deleteFramebuffer(i.__webglFramebuffer[r]),
                      i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[r]);
              else
                  e.deleteFramebuffer(i.__webglFramebuffer),
                  i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
              n["delete"](t.texture),
              n["delete"](t)
          }
          g.textures--
      }
      function p(t, a) {
          var h = n.get(t);
          if (0 < t.version && h.__version !== t.version) {
              var u = t.image;
              if (void 0 === u)
                  console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
              else {
                  if (!1 !== u.complete) {
                      void 0 === h.__webglInit && (h.__webglInit = !0,
                      t.addEventListener("dispose", l),
                      h.__webglTexture = e.createTexture(),
                      g.textures++),
                      i.activeTexture(e.TEXTURE0 + a),
                      i.bindTexture(e.TEXTURE_2D, h.__webglTexture),
                      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY),
                      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
                      e.pixelStorei(e.UNPACK_ALIGNMENT, t.unpackAlignment);
                      var p = s(t.image, r.maxTextureSize);
                      if ((1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter) && !1 === c(p))
                          if (u = p,
                          u instanceof HTMLImageElement || u instanceof HTMLCanvasElement) {
                              var f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                              f.width = ho.nearestPowerOfTwo(u.width),
                              f.height = ho.nearestPowerOfTwo(u.height),
                              f.getContext("2d").drawImage(u, 0, 0, f.width, f.height),
                              console.warn("THREE.WebGLRenderer: image is not power of two (" + u.width + "x" + u.height + "). Resized to " + f.width + "x" + f.height, u),
                              p = f
                          } else
                              p = u;
                      var u = c(p)
                        , f = o(t.format)
                        , m = o(t.type);
                      d(e.TEXTURE_2D, t, u);
                      var y = t.mipmaps;
                      if (t.isDepthTexture) {
                          if (y = e.DEPTH_COMPONENT,
                          1015 === t.type) {
                              if (!v)
                                  throw Error("Float Depth Texture only supported in WebGL2.0");
                              y = e.DEPTH_COMPONENT32F
                          } else
                              v && (y = e.DEPTH_COMPONENT16);
                          1026 === t.format && y === e.DEPTH_COMPONENT && 1012 !== t.type && 1014 !== t.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                          t.type = 1012,
                          m = o(t.type)),
                          1027 === t.format && (y = e.DEPTH_STENCIL,
                          1020 !== t.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                          t.type = 1020,
                          m = o(t.type))),
                          i.texImage2D(e.TEXTURE_2D, 0, y, p.width, p.height, 0, f, m, null)
                      } else if (t.isDataTexture)
                          if (0 < y.length && u) {
                              for (var x = 0, b = y.length; b > x; x++)
                                  p = y[x],
                                  i.texImage2D(e.TEXTURE_2D, x, f, p.width, p.height, 0, f, m, p.data);
                              t.generateMipmaps = !1
                          } else
                              i.texImage2D(e.TEXTURE_2D, 0, f, p.width, p.height, 0, f, m, p.data);
                      else if (t.isCompressedTexture)
                          for (x = 0,
                          b = y.length; b > x; x++)
                              p = y[x],
                              1023 !== t.format && 1022 !== t.format ? -1 < i.getCompressedTextureFormats().indexOf(f) ? i.compressedTexImage2D(e.TEXTURE_2D, x, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(e.TEXTURE_2D, x, f, p.width, p.height, 0, f, m, p.data);
                      else if (0 < y.length && u) {
                          for (x = 0,
                          b = y.length; b > x; x++)
                              p = y[x],
                              i.texImage2D(e.TEXTURE_2D, x, f, f, m, p);
                          t.generateMipmaps = !1
                      } else
                          i.texImage2D(e.TEXTURE_2D, 0, f, f, m, p);
                      return t.generateMipmaps && u && e.generateMipmap(e.TEXTURE_2D),
                      h.__version = t.version,
                      void (t.onUpdate && t.onUpdate(t))
                  }
                  console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
              }
          }
          i.activeTexture(e.TEXTURE0 + a),
          i.bindTexture(e.TEXTURE_2D, h.__webglTexture)
      }
      function d(i, a, s) {
          s ? (e.texParameteri(i, e.TEXTURE_WRAP_S, o(a.wrapS)),
          e.texParameteri(i, e.TEXTURE_WRAP_T, o(a.wrapT)),
          e.texParameteri(i, e.TEXTURE_MAG_FILTER, o(a.magFilter)),
          e.texParameteri(i, e.TEXTURE_MIN_FILTER, o(a.minFilter))) : (e.texParameteri(i, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(i, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
          1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", a),
          e.texParameteri(i, e.TEXTURE_MAG_FILTER, h(a.magFilter)),
          e.texParameteri(i, e.TEXTURE_MIN_FILTER, h(a.minFilter)),
          1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", a)),
          !(s = t.get("EXT_texture_filter_anisotropic")) || 1015 === a.type && null === t.get("OES_texture_float_linear") || 1016 === a.type && null === t.get("OES_texture_half_float_linear") || !(1 < a.anisotropy || n.get(a).__currentAnisotropy) || (e.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())),
          n.get(a).__currentAnisotropy = a.anisotropy)
      }
      function f(t, r, a, s) {
          var c = o(r.texture.format)
            , h = o(r.texture.type);
          i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null),
          e.bindFramebuffer(e.FRAMEBUFFER, t),
          e.framebufferTexture2D(e.FRAMEBUFFER, a, s, n.get(r.texture).__webglTexture, 0),
          e.bindFramebuffer(e.FRAMEBUFFER, null)
      }
      function m(t, i) {
          e.bindRenderbuffer(e.RENDERBUFFER, t),
          i.depthBuffer && !i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, i.width, i.height),
          e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : i.depthBuffer && i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, i.width, i.height),
          e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, i.width, i.height),
          e.bindRenderbuffer(e.RENDERBUFFER, null)
      }
      var g = a.memory
        , v = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
      this.setTexture2D = p,
      this.setTextureCube = function(t, a) {
          var h = n.get(t);
          if (6 === t.image.length)
              if (0 < t.version && h.__version !== t.version) {
                  h.__image__webglTextureCube || (t.addEventListener("dispose", l),
                  h.__image__webglTextureCube = e.createTexture(),
                  g.textures++),
                  i.activeTexture(e.TEXTURE0 + a),
                  i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube),
                  e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                  for (var u = t && t.isCompressedTexture, p = t.image[0] && t.image[0].isDataTexture, f = [], m = 0; 6 > m; m++)
                      f[m] = u || p ? p ? t.image[m].image : t.image[m] : s(t.image[m], r.maxCubemapSize);
                  var v = c(f[0])
                    , y = o(t.format)
                    , x = o(t.type);
                  for (d(e.TEXTURE_CUBE_MAP, t, v),
                  m = 0; 6 > m; m++)
                      if (u)
                          for (var b, _ = f[m].mipmaps, w = 0, E = _.length; E > w; w++)
                              b = _[w],
                              1023 !== t.format && 1022 !== t.format ? -1 < i.getCompressedTextureFormats().indexOf(y) ? i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, b.width, b.height, 0, y, x, b.data);
                      else
                          p ? i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, f[m].width, f[m].height, 0, y, x, f[m].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, y, x, f[m]);
                  t.generateMipmaps && v && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                  h.__version = t.version,
                  t.onUpdate && t.onUpdate(t)
              } else
                  i.activeTexture(e.TEXTURE0 + a),
                  i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
      }
      ,
      this.setTextureCubeDynamic = function(t, r) {
          i.activeTexture(e.TEXTURE0 + r),
          i.bindTexture(e.TEXTURE_CUBE_MAP, n.get(t).__webglTexture)
      }
      ,
      this.setupRenderTarget = function(t) {
          var r = n.get(t)
            , o = n.get(t.texture);
          t.addEventListener("dispose", u),
          o.__webglTexture = e.createTexture(),
          g.textures++;
          var a = !0 === t.isWebGLRenderTargetCube
            , s = c(t);
          if (a) {
              r.__webglFramebuffer = [];
              for (var h = 0; 6 > h; h++)
                  r.__webglFramebuffer[h] = e.createFramebuffer()
          } else
              r.__webglFramebuffer = e.createFramebuffer();
          if (a) {
              for (i.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture),
              d(e.TEXTURE_CUBE_MAP, t.texture, s),
              h = 0; 6 > h; h++)
                  f(r.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
              t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP),
              i.bindTexture(e.TEXTURE_CUBE_MAP, null)
          } else
              i.bindTexture(e.TEXTURE_2D, o.__webglTexture),
              d(e.TEXTURE_2D, t.texture, s),
              f(r.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
              t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D),
              i.bindTexture(e.TEXTURE_2D, null);
          if (t.depthBuffer) {
              if (r = n.get(t),
              o = !0 === t.isWebGLRenderTargetCube,
              t.depthTexture) {
                  if (o)
                      throw Error("target.depthTexture not supported in Cube render targets");
                  if (t && t.isWebGLRenderTargetCube)
                      throw Error("Depth Texture with cube render targets is not supported!");
                  if (e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
                  !t.depthTexture || !t.depthTexture.isDepthTexture)
                      throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                  if (n.get(t.depthTexture).__webglTexture && t.depthTexture.image.width === t.width && t.depthTexture.image.height === t.height || (t.depthTexture.image.width = t.width,
                  t.depthTexture.image.height = t.height,
                  t.depthTexture.needsUpdate = !0),
                  p(t.depthTexture, 0),
                  r = n.get(t.depthTexture).__webglTexture,
                  1026 === t.depthTexture.format)
                      e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, r, 0);
                  else {
                      if (1027 !== t.depthTexture.format)
                          throw Error("Unknown depthTexture format");
                      e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, r, 0)
                  }
              } else if (o)
                  for (r.__webglDepthbuffer = [],
                  o = 0; 6 > o; o++)
                      e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[o]),
                      r.__webglDepthbuffer[o] = e.createRenderbuffer(),
                      m(r.__webglDepthbuffer[o], t);
              else
                  e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
                  r.__webglDepthbuffer = e.createRenderbuffer(),
                  m(r.__webglDepthbuffer, t);
              e.bindFramebuffer(e.FRAMEBUFFER, null)
          }
      }
      ,
      this.updateRenderTargetMipmap = function(t) {
          var r = t.texture;
          r.generateMipmaps && c(t) && 1003 !== r.minFilter && 1006 !== r.minFilter && (t = t && t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D,
          r = n.get(r).__webglTexture,
          i.bindTexture(t, r),
          e.generateMipmap(t),
          i.bindTexture(t, null))
      }
  }
  function Kt() {
      var e = {};
      return {
          get: function(t) {
              t = t.uuid;
              var i = e[t];
              return void 0 === i && (i = {},
              e[t] = i),
              i
          },
          "delete": function(t) {
              delete e[t.uuid]
          },
          clear: function() {
              e = {}
          }
      }
  }
  function $t(e, t, i) {
      function n(t, i, n) {
          var r = new Uint8Array(4)
            , o = e.createTexture();
          for (e.bindTexture(t, o),
          e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
          e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST),
          t = 0; n > t; t++)
              e.texImage2D(i + t, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
          return o
      }
      function o(t) {
          !0 !== x[t] && (e.enable(t),
          x[t] = !0)
      }
      function a(t) {
          !1 !== x[t] && (e.disable(t),
          x[t] = !1)
      }
      function s(t, n, r, s, c, h, l, u) {
          0 !== t ? o(e.BLEND) : a(e.BLEND),
          (t !== _ || u !== R) && (2 === t ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
          e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD),
          e.blendFunc(e.SRC_ALPHA, e.ONE)) : 3 === t ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
          e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
          e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : 4 === t ? u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
          e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
          e.blendFunc(e.ZERO, e.SRC_COLOR)) : u ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
          e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
          e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)),
          _ = t,
          R = u),
          5 === t ? (c = c || n,
          h = h || r,
          l = l || s,
          (n !== w || c !== T) && (e.blendEquationSeparate(i(n), i(c)),
          w = n,
          T = c),
          (r !== E || s !== M || h !== S || l !== A) && (e.blendFuncSeparate(i(r), i(s), i(h), i(l)),
          E = r,
          M = s,
          S = h,
          A = l)) : A = S = T = M = E = w = null
      }
      function c(e) {
          d.setFunc(e)
      }
      function h(t) {
          L !== t && (e.frontFace(t ? e.CW : e.CCW),
          L = t)
      }
      function l(t) {
          0 !== t ? (o(e.CULL_FACE),
          t !== P && e.cullFace(1 === t ? e.BACK : 2 === t ? e.FRONT : e.FRONT_AND_BACK)) : a(e.CULL_FACE),
          P = t
      }
      function u(t) {
          void 0 === t && (t = e.TEXTURE0 + D - 1),
          B !== t && (e.activeTexture(t),
          B = t)
      }
      var p = new function() {
          var t = !1
            , i = new r
            , n = null
            , o = new r;
          return {
              setMask: function(i) {
                  n === i || t || (e.colorMask(i, i, i, i),
                  n = i)
              },
              setLocked: function(e) {
                  t = e
              },
              setClear: function(t, n, r, a, s) {
                  !0 === s && (t *= a,
                  n *= a,
                  r *= a),
                  i.set(t, n, r, a),
                  !1 === o.equals(i) && (e.clearColor(t, n, r, a),
                  o.copy(i))
              },
              reset: function() {
                  t = !1,
                  n = null,
                  o.set(0, 0, 0, 1)
              }
          }
      }
        , d = new function() {
          var t = !1
            , i = null
            , n = null
            , r = null;
          return {
              setTest: function(t) {
                  t ? o(e.DEPTH_TEST) : a(e.DEPTH_TEST)
              },
              setMask: function(n) {
                  i === n || t || (e.depthMask(n),
                  i = n)
              },
              setFunc: function(t) {
                  if (n !== t) {
                      if (t)
                          switch (t) {
                          case 0:
                              e.depthFunc(e.NEVER);
                              break;
                          case 1:
                              e.depthFunc(e.ALWAYS);
                              break;
                          case 2:
                              e.depthFunc(e.LESS);
                              break;
                          case 3:
                              e.depthFunc(e.LEQUAL);
                              break;
                          case 4:
                              e.depthFunc(e.EQUAL);
                              break;
                          case 5:
                              e.depthFunc(e.GEQUAL);
                              break;
                          case 6:
                              e.depthFunc(e.GREATER);
                              break;
                          case 7:
                              e.depthFunc(e.NOTEQUAL);
                              break;
                          default:
                              e.depthFunc(e.LEQUAL)
                          }
                      else
                          e.depthFunc(e.LEQUAL);
                      n = t
                  }
              },
              setLocked: function(e) {
                  t = e
              },
              setClear: function(t) {
                  r !== t && (e.clearDepth(t),
                  r = t)
              },
              reset: function() {
                  t = !1,
                  r = n = i = null
              }
          }
      }
        , f = new function() {
          var t = !1
            , i = null
            , n = null
            , r = null
            , s = null
            , c = null
            , h = null
            , l = null
            , u = null;
          return {
              setTest: function(t) {
                  t ? o(e.STENCIL_TEST) : a(e.STENCIL_TEST)
              },
              setMask: function(n) {
                  i === n || t || (e.stencilMask(n),
                  i = n)
              },
              setFunc: function(t, i, o) {
                  (n !== t || r !== i || s !== o) && (e.stencilFunc(t, i, o),
                  n = t,
                  r = i,
                  s = o)
              },
              setOp: function(t, i, n) {
                  (c !== t || h !== i || l !== n) && (e.stencilOp(t, i, n),
                  c = t,
                  h = i,
                  l = n)
              },
              setLocked: function(e) {
                  t = e
              },
              setClear: function(t) {
                  u !== t && (e.clearStencil(t),
                  u = t)
              },
              reset: function() {
                  t = !1,
                  u = l = h = c = s = r = n = i = null
              }
          }
      }
        , m = e.getParameter(e.MAX_VERTEX_ATTRIBS)
        , g = new Uint8Array(m)
        , v = new Uint8Array(m)
        , y = new Uint8Array(m)
        , x = {}
        , b = null
        , _ = null
        , w = null
        , E = null
        , M = null
        , T = null
        , S = null
        , A = null
        , R = !1
        , L = null
        , P = null
        , C = null
        , I = null
        , U = null
        , N = null
        , D = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
        , m = parseFloat(/^WebGL\ ([0-9])/.exec(e.getParameter(e.VERSION))[1])
        , O = 1 <= parseFloat(m)
        , B = null
        , F = {}
        , z = new r
        , H = new r
        , G = {};
      return G[e.TEXTURE_2D] = n(e.TEXTURE_2D, e.TEXTURE_2D, 1),
      G[e.TEXTURE_CUBE_MAP] = n(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
      {
          buffers: {
              color: p,
              depth: d,
              stencil: f
          },
          init: function() {
              p.setClear(0, 0, 0, 1),
              d.setClear(1),
              f.setClear(0),
              o(e.DEPTH_TEST),
              c(3),
              h(!1),
              l(1),
              o(e.CULL_FACE),
              o(e.BLEND),
              s(1)
          },
          initAttributes: function() {
              for (var e = 0, t = g.length; t > e; e++)
                  g[e] = 0
          },
          enableAttribute: function(i) {
              g[i] = 1,
              0 === v[i] && (e.enableVertexAttribArray(i),
              v[i] = 1),
              0 !== y[i] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0),
              y[i] = 0)
          },
          enableAttributeAndDivisor: function(t, i, n) {
              g[t] = 1,
              0 === v[t] && (e.enableVertexAttribArray(t),
              v[t] = 1),
              y[t] !== i && (n.vertexAttribDivisorANGLE(t, i),
              y[t] = i)
          },
          disableUnusedAttributes: function() {
              for (var t = 0, i = v.length; t !== i; ++t)
                  v[t] !== g[t] && (e.disableVertexAttribArray(t),
                  v[t] = 0)
          },
          enable: o,
          disable: a,
          getCompressedTextureFormats: function() {
              if (null === b && (b = [],
              t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
                  for (var i = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++)
                      b.push(i[n]);
              return b
          },
          setBlending: s,
          setColorWrite: function(e) {
              p.setMask(e)
          },
          setDepthTest: function(e) {
              d.setTest(e)
          },
          setDepthWrite: function(e) {
              d.setMask(e)
          },
          setDepthFunc: c,
          setStencilTest: function(e) {
              f.setTest(e)
          },
          setStencilWrite: function(e) {
              f.setMask(e)
          },
          setStencilFunc: function(e, t, i) {
              f.setFunc(e, t, i)
          },
          setStencilOp: function(e, t, i) {
              f.setOp(e, t, i)
          },
          setFlipSided: h,
          setCullFace: l,
          setLineWidth: function(t) {
              t !== C && (O && e.lineWidth(t),
              C = t)
          },
          setPolygonOffset: function(t, i, n) {
              t ? (o(e.POLYGON_OFFSET_FILL),
              (I !== i || U !== n) && (e.polygonOffset(i, n),
              I = i,
              U = n)) : a(e.POLYGON_OFFSET_FILL)
          },
          getScissorTest: function() {
              return N
          },
          setScissorTest: function(t) {
              (N = t) ? o(e.SCISSOR_TEST) : a(e.SCISSOR_TEST)
          },
          activeTexture: u,
          bindTexture: function(t, i) {
              null === B && u();
              var n = F[B];
              void 0 === n && (n = {
                  type: void 0,
                  texture: void 0
              },
              F[B] = n),
              (n.type !== t || n.texture !== i) && (e.bindTexture(t, i || G[t]),
              n.type = t,
              n.texture = i)
          },
          compressedTexImage2D: function() {
              try {
                  e.compressedTexImage2D.apply(e, arguments)
              } catch (t) {
                  console.error(t)
              }
          },
          texImage2D: function() {
              try {
                  e.texImage2D.apply(e, arguments)
              } catch (t) {
                  console.error(t)
              }
          },
          scissor: function(t) {
              !1 === z.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
              z.copy(t))
          },
          viewport: function(t) {
              !1 === H.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
              H.copy(t))
          },
          reset: function() {
              for (var t = 0; t < v.length; t++)
                  1 === v[t] && (e.disableVertexAttribArray(t),
                  v[t] = 0);
              x = {},
              B = b = null,
              F = {},
              P = L = _ = null,
              p.reset(),
              d.reset(),
              f.reset()
          }
      }
  }
  function ei(e, t, i) {
      function n(t) {
          if ("highp" === t) {
              if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision)
                  return "highp";
              t = "mediump"
          }
          return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
      }
      var r, o = void 0 !== i.precision ? i.precision : "highp", a = n(o);
      a !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", a, "instead."),
      o = a),
      i = !0 === i.logarithmicDepthBuffer && !!t.get("EXT_frag_depth");
      var a = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
        , s = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
        , c = e.getParameter(e.MAX_TEXTURE_SIZE)
        , h = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
        , l = e.getParameter(e.MAX_VERTEX_ATTRIBS)
        , u = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
        , p = e.getParameter(e.MAX_VARYING_VECTORS)
        , d = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
        , f = s > 0
        , m = !!t.get("OES_texture_float");
      return {
          getMaxAnisotropy: function() {
              if (void 0 !== r)
                  return r;
              var i = t.get("EXT_texture_filter_anisotropic");
              return r = null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
          },
          getMaxPrecision: n,
          precision: o,
          logarithmicDepthBuffer: i,
          maxTextures: a,
          maxVertexTextures: s,
          maxTextureSize: c,
          maxCubemapSize: h,
          maxAttributes: l,
          maxVertexUniforms: u,
          maxVaryings: p,
          maxFragmentUniforms: d,
          vertexTextures: f,
          floatFragmentTextures: m,
          floatVertexTextures: f && m
      }
  }
  function ti(e) {
      var t = {};
      return {
          get: function(i) {
              if (void 0 !== t[i])
                  return t[i];
              var n;
              switch (i) {
              case "WEBGL_depth_texture":
                  n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                  break;
              case "EXT_texture_filter_anisotropic":
                  n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                  break;
              case "WEBGL_compressed_texture_s3tc":
                  n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                  break;
              case "WEBGL_compressed_texture_pvrtc":
                  n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                  break;
              case "WEBGL_compressed_texture_etc1":
                  n = e.getExtension("WEBGL_compressed_texture_etc1");
                  break;
              default:
                  n = e.getExtension(i)
              }
              return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."),
              t[i] = n
          }
      }
  }
  function ii() {
      function e() {
          h.value !== n && (h.value = n,
          h.needsUpdate = r > 0),
          i.numPlanes = r,
          i.numIntersection = 0
      }
      function t(e, t, n, r) {
          var o = null !== e ? e.length : 0
            , a = null;
          if (0 !== o) {
              if (a = h.value,
              !0 !== r || null === a)
                  for (r = n + 4 * o,
                  t = t.matrixWorldInverse,
                  c.getNormalMatrix(t),
                  (null === a || a.length < r) && (a = new Float32Array(r)),
                  r = 0; r !== o; ++r,
                  n += 4)
                      s.copy(e[r]).applyMatrix4(t, c),
                      s.normal.toArray(a, n),
                      a[n + 3] = s.constant;
              h.value = a,
              h.needsUpdate = !0
          }
          return i.numPlanes = o,
          a
      }
      var i = this
        , n = null
        , r = 0
        , o = !1
        , a = !1
        , s = new $
        , c = new K
        , h = {
          value: null,
          needsUpdate: !1
      };
      this.uniform = h,
      this.numIntersection = this.numPlanes = 0,
      this.init = function(e, i, a) {
          var s = 0 !== e.length || i || 0 !== r || o;
          return o = i,
          n = t(e, a, 0),
          r = e.length,
          s
      }
      ,
      this.beginShadows = function() {
          a = !0,
          t(null)
      }
      ,
      this.endShadows = function() {
          a = !1,
          e()
      }
      ,
      this.setState = function(i, s, c, l, u, p) {
          if (!o || null === i || 0 === i.length || a && !c)
              a ? t(null) : e();
          else {
              c = a ? 0 : r;
              var d = 4 * c
                , f = u.clippingState || null;
              for (h.value = f,
              f = t(i, l, d, p),
              i = 0; i !== d; ++i)
                  f[i] = n[i];
              u.clippingState = f,
              this.numIntersection = s ? this.numPlanes : 0,
              this.numPlanes += c
          }
      }
  }
  function ni(e) {
      function t() {
          Dt.init(),
          Dt.scissor(Z.copy(st).multiplyScalar(at)),
          Dt.viewport(K.copy(lt).multiplyScalar(at)),
          Dt.buffers.color.setClear(it.r, it.g, it.b, nt, A)
      }
      function i() {
          q = F = null,
          j = "",
          k = -1,
          Dt.reset()
      }
      function n(e) {
          e.preventDefault(),
          i(),
          t(),
          Ot.clear()
      }
      function o(e) {
          e = e.target,
          e.removeEventListener("dispose", o),
          a(e),
          Ot["delete"](e)
      }
      function a(e) {
          var t = Ot.get(e).program;
          e.program = void 0,
          void 0 !== t && zt.releaseProgram(t)
      }
      function s(e, t) {
          return Math.abs(t[0]) - Math.abs(e[0])
      }
      function l(e, t) {
          return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
      }
      function u(e, t) {
          return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
      }
      function p(e, t, i, n, r) {
          var o;
          i.transparent ? (n = I,
          o = ++U) : (n = P,
          o = ++C),
          o = n[o],
          void 0 !== o ? (o.id = e.id,
          o.object = e,
          o.geometry = t,
          o.material = i,
          o.z = vt.z,
          o.group = r) : (o = {
              id: e.id,
              object: e,
              geometry: t,
              material: i,
              z: vt.z,
              group: r
          },
          n.push(o))
      }
      function d(e) {
          if (!ut.intersectsSphere(e))
              return !1;
          var t = pt.numPlanes;
          if (0 === t)
              return !0;
          var i = B.clippingPlanes
            , n = e.center;
          e = -e.radius;
          var r = 0;
          do
              if (i[r].distanceToPoint(n) < e)
                  return !1;
          while (++r !== t);
          return !0
      }
      function f(e, t) {
          if (!1 !== e.visible) {
              if (0 !== (e.layers.mask & t.layers.mask))
                  if (e.isLight)
                      L.push(e);
                  else if (e.isSprite) {
                      var i;
                      (i = !1 === e.frustumCulled) || (mt.center.set(0, 0, 0),
                      mt.radius = .7071067811865476,
                      mt.applyMatrix4(e.matrixWorld),
                      i = !0 === d(mt)),
                      i && D.push(e)
                  } else if (e.isLensFlare)
                      O.push(e);
                  else if (e.isImmediateRenderObject)
                      !0 === B.sortObjects && (vt.setFromMatrixPosition(e.matrixWorld),
                      vt.applyMatrix4(gt)),
                      p(e, null, e.material, vt.z, null);
                  else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(),
                  (i = !1 === e.frustumCulled) || (i = e.geometry,
                  null === i.boundingSphere && i.computeBoundingSphere(),
                  mt.copy(i.boundingSphere).applyMatrix4(e.matrixWorld),
                  i = !0 === d(mt)),
                  i)) {
                      var n = e.material;
                      if (!0 === n.visible)
                          if (!0 === B.sortObjects && (vt.setFromMatrixPosition(e.matrixWorld),
                          vt.applyMatrix4(gt)),
                          i = Ft.update(e),
                          n.isMultiMaterial)
                              for (var r = i.groups, o = n.materials, n = 0, a = r.length; a > n; n++) {
                                  var s = r[n]
                                    , c = o[s.materialIndex];
                                  !0 === c.visible && p(e, i, c, vt.z, s)
                              }
                          else
                              p(e, i, n, vt.z, null)
                  }
              for (i = e.children,
              n = 0,
              a = i.length; a > n; n++)
                  f(i[n], t)
          }
      }
      function m(e, t, i, n) {
          for (var r = 0, o = e.length; o > r; r++) {
              var a = e[r]
                , s = a.object
                , c = a.geometry
                , h = void 0 === n ? a.material : n
                , a = a.group;
              if (s.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, s.matrixWorld),
              s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
              s.onBeforeRender(B, t, i, c, h, a),
              s.isImmediateRenderObject) {
                  g(h);
                  var l = v(i, t.fog, h, s);
                  j = "",
                  s.render(function(e) {
                      B.renderBufferImmediate(e, l, h)
                  })
              } else
                  B.renderBufferDirect(i, t.fog, c, h, s, a);
              s.onAfterRender(B, t, i, c, h, a)
          }
      }
      function g(e) {
          2 === e.side ? Dt.disable(wt.CULL_FACE) : Dt.enable(wt.CULL_FACE),
          Dt.setFlipSided(1 === e.side),
          !0 === e.transparent ? Dt.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : Dt.setBlending(0),
          Dt.setDepthFunc(e.depthFunc),
          Dt.setDepthTest(e.depthTest),
          Dt.setDepthWrite(e.depthWrite),
          Dt.setColorWrite(e.colorWrite),
          Dt.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
      }
      function v(e, t, i, n) {
          $ = 0;
          var r = Ot.get(i);
          if (dt && (ft || e !== q) && pt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, e, r, e === q && i.id === k),
          !1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== t ? i.needsUpdate = !0 : i.lights && r.lightsHash !== bt.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === pt.numPlanes && r.numIntersection === pt.numIntersection || (i.needsUpdate = !0)),
          i.needsUpdate) {
              e: {
                  var s = Ot.get(i)
                    , c = zt.getParameters(i, bt, t, pt.numPlanes, pt.numIntersection, n)
                    , h = zt.getProgramCode(i, c)
                    , l = s.program
                    , u = !0;
                  if (void 0 === l)
                      i.addEventListener("dispose", o);
                  else if (l.code !== h)
                      a(i);
                  else {
                      if (void 0 !== c.shaderID)
                          break e;
                      u = !1
                  }
                  if (u && (c.shaderID ? (l = _o[c.shaderID],
                  s.__webglShader = {
                      name: i.type,
                      uniforms: vo.clone(l.uniforms),
                      vertexShader: l.vertexShader,
                      fragmentShader: l.fragmentShader
                  }) : s.__webglShader = {
                      name: i.type,
                      uniforms: i.uniforms,
                      vertexShader: i.vertexShader,
                      fragmentShader: i.fragmentShader
                  },
                  i.__webglShader = s.__webglShader,
                  l = zt.acquireProgram(i, c, h),
                  s.program = l,
                  i.program = l),
                  c = l.getAttributes(),
                  i.morphTargets)
                      for (h = i.numSupportedMorphTargets = 0; h < B.maxMorphTargets; h++)
                          0 <= c["morphTarget" + h] && i.numSupportedMorphTargets++;
                  if (i.morphNormals)
                      for (h = i.numSupportedMorphNormals = 0; h < B.maxMorphNormals; h++)
                          0 <= c["morphNormal" + h] && i.numSupportedMorphNormals++;
                  c = s.__webglShader.uniforms,
                  (!i.isShaderMaterial && !i.isRawShaderMaterial || !0 === i.clipping) && (s.numClippingPlanes = pt.numPlanes,
                  s.numIntersection = pt.numIntersection,
                  c.clippingPlanes = pt.uniform),
                  s.fog = t,
                  s.lightsHash = bt.hash,
                  i.lights && (c.ambientLightColor.value = bt.ambient,
                  c.directionalLights.value = bt.directional,
                  c.spotLights.value = bt.spot,
                  c.rectAreaLights.value = bt.rectArea,
                  c.pointLights.value = bt.point,
                  c.hemisphereLights.value = bt.hemi,
                  c.directionalShadowMap.value = bt.directionalShadowMap,
                  c.directionalShadowMatrix.value = bt.directionalShadowMatrix,
                  c.spotShadowMap.value = bt.spotShadowMap,
                  c.spotShadowMatrix.value = bt.spotShadowMatrix,
                  c.pointShadowMap.value = bt.pointShadowMap,
                  c.pointShadowMatrix.value = bt.pointShadowMatrix),
                  h = s.program.getUniforms(),
                  c = G.seqWithValue(h.seq, c),
                  s.uniformsList = c
              }
              i.needsUpdate = !1
          }
          var p = !1
            , u = l = !1
            , s = r.program
            , c = s.getUniforms()
            , h = r.__webglShader.uniforms;
          if (s.id !== F && (wt.useProgram(s.program),
          F = s.id,
          u = l = p = !0),
          i.id !== k && (k = i.id,
          l = !0),
          (p || e !== q) && (c.set(wt, e, "projectionMatrix"),
          Lt.logarithmicDepthBuffer && c.setValue(wt, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
          e !== q && (q = e,
          u = l = !0),
          (i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) && (p = c.map.cameraPosition,
          void 0 !== p && p.setValue(wt, vt.setFromMatrixPosition(e.matrixWorld))),
          (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && c.setValue(wt, "viewMatrix", e.matrixWorldInverse),
          c.set(wt, B, "toneMappingExposure"),
          c.set(wt, B, "toneMappingWhitePoint")),
          i.skinning && (c.setOptional(wt, n, "bindMatrix"),
          c.setOptional(wt, n, "bindMatrixInverse"),
          e = n.skeleton) && (Lt.floatVertexTextures && e.useVertexTexture ? (c.set(wt, e, "boneTexture"),
          c.set(wt, e, "boneTextureWidth"),
          c.set(wt, e, "boneTextureHeight")) : c.setOptional(wt, e, "boneMatrices")),
          l) {
              if (i.lights && (e = u,
              h.ambientLightColor.needsUpdate = e,
              h.directionalLights.needsUpdate = e,
              h.pointLights.needsUpdate = e,
              h.spotLights.needsUpdate = e,
              h.rectAreaLights.needsUpdate = e,
              h.hemisphereLights.needsUpdate = e),
              t && i.fog && (h.fogColor.value = t.color,
              t.isFog ? (h.fogNear.value = t.near,
              h.fogFar.value = t.far) : t.isFogExp2 && (h.fogDensity.value = t.density)),
              i.isMeshBasicMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshNormalMaterial || i.isMeshDepthMaterial) {
                  h.opacity.value = i.opacity,
                  h.diffuse.value = i.color,
                  i.emissive && h.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
                  h.map.value = i.map,
                  h.specularMap.value = i.specularMap,
                  h.alphaMap.value = i.alphaMap,
                  i.lightMap && (h.lightMap.value = i.lightMap,
                  h.lightMapIntensity.value = i.lightMapIntensity),
                  i.aoMap && (h.aoMap.value = i.aoMap,
                  h.aoMapIntensity.value = i.aoMapIntensity);
                  var d;
                  i.map ? d = i.map : i.specularMap ? d = i.specularMap : i.displacementMap ? d = i.displacementMap : i.normalMap ? d = i.normalMap : i.bumpMap ? d = i.bumpMap : i.roughnessMap ? d = i.roughnessMap : i.metalnessMap ? d = i.metalnessMap : i.alphaMap ? d = i.alphaMap : i.emissiveMap && (d = i.emissiveMap),
                  void 0 !== d && (d.isWebGLRenderTarget && (d = d.texture),
                  t = d.offset,
                  d = d.repeat,
                  h.offsetRepeat.value.set(t.x, t.y, d.x, d.y)),
                  h.envMap.value = i.envMap,
                  h.flipEnvMap.value = i.envMap && i.envMap.isCubeTexture ? -1 : 1,
                  h.reflectivity.value = i.reflectivity,
                  h.refractionRatio.value = i.refractionRatio
              }
              i.isLineBasicMaterial ? (h.diffuse.value = i.color,
              h.opacity.value = i.opacity) : i.isLineDashedMaterial ? (h.diffuse.value = i.color,
              h.opacity.value = i.opacity,
              h.dashSize.value = i.dashSize,
              h.totalSize.value = i.dashSize + i.gapSize,
              h.scale.value = i.scale) : i.isPointsMaterial ? (h.diffuse.value = i.color,
              h.opacity.value = i.opacity,
              h.size.value = i.size * at,
              h.scale.value = .5 * ot,
              h.map.value = i.map,
              null !== i.map && (d = i.map.offset,
              i = i.map.repeat,
              h.offsetRepeat.value.set(d.x, d.y, i.x, i.y))) : i.isMeshLambertMaterial ? i.emissiveMap && (h.emissiveMap.value = i.emissiveMap) : i.isMeshToonMaterial ? (y(h, i),
              i.gradientMap && (h.gradientMap.value = i.gradientMap)) : i.isMeshPhongMaterial ? y(h, i) : i.isMeshPhysicalMaterial ? (h.clearCoat.value = i.clearCoat,
              h.clearCoatRoughness.value = i.clearCoatRoughness,
              x(h, i)) : i.isMeshStandardMaterial ? x(h, i) : i.isMeshDepthMaterial ? i.displacementMap && (h.displacementMap.value = i.displacementMap,
              h.displacementScale.value = i.displacementScale,
              h.displacementBias.value = i.displacementBias) : i.isMeshNormalMaterial && (i.bumpMap && (h.bumpMap.value = i.bumpMap,
              h.bumpScale.value = i.bumpScale),
              i.normalMap && (h.normalMap.value = i.normalMap,
              h.normalScale.value.copy(i.normalScale)),
              i.displacementMap && (h.displacementMap.value = i.displacementMap,
              h.displacementScale.value = i.displacementScale,
              h.displacementBias.value = i.displacementBias)),
              void 0 !== h.ltcMat && (h.ltcMat.value = THREE.UniformsLib.LTC_MAT_TEXTURE),
              void 0 !== h.ltcMag && (h.ltcMag.value = THREE.UniformsLib.LTC_MAG_TEXTURE),
              G.upload(wt, r.uniformsList, h, B)
          }
          return c.set(wt, n, "modelViewMatrix"),
          c.set(wt, n, "normalMatrix"),
          c.setValue(wt, "modelMatrix", n.matrixWorld),
          s
      }
      function y(e, t) {
          e.specular.value = t.specular,
          e.shininess.value = Math.max(t.shininess, 1e-4),
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
          t.bumpMap && (e.bumpMap.value = t.bumpMap,
          e.bumpScale.value = t.bumpScale),
          t.normalMap && (e.normalMap.value = t.normalMap,
          e.normalScale.value.copy(t.normalScale)),
          t.displacementMap && (e.displacementMap.value = t.displacementMap,
          e.displacementScale.value = t.displacementScale,
          e.displacementBias.value = t.displacementBias)
      }
      function x(e, t) {
          e.roughness.value = t.roughness,
          e.metalness.value = t.metalness,
          t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
          t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
          t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
          t.bumpMap && (e.bumpMap.value = t.bumpMap,
          e.bumpScale.value = t.bumpScale),
          t.normalMap && (e.normalMap.value = t.normalMap,
          e.normalScale.value.copy(t.normalScale)),
          t.displacementMap && (e.displacementMap.value = t.displacementMap,
          e.displacementScale.value = t.displacementScale,
          e.displacementBias.value = t.displacementBias),
          t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
      }
      function b(e) {
          var t;
          if (1e3 === e)
              return wt.REPEAT;
          if (1001 === e)
              return wt.CLAMP_TO_EDGE;
          if (1002 === e)
              return wt.MIRRORED_REPEAT;
          if (1003 === e)
              return wt.NEAREST;
          if (1004 === e)
              return wt.NEAREST_MIPMAP_NEAREST;
          if (1005 === e)
              return wt.NEAREST_MIPMAP_LINEAR;
          if (1006 === e)
              return wt.LINEAR;
          if (1007 === e)
              return wt.LINEAR_MIPMAP_NEAREST;
          if (1008 === e)
              return wt.LINEAR_MIPMAP_LINEAR;
          if (1009 === e)
              return wt.UNSIGNED_BYTE;
          if (1017 === e)
              return wt.UNSIGNED_SHORT_4_4_4_4;
          if (1018 === e)
              return wt.UNSIGNED_SHORT_5_5_5_1;
          if (1019 === e)
              return wt.UNSIGNED_SHORT_5_6_5;
          if (1010 === e)
              return wt.BYTE;
          if (1011 === e)
              return wt.SHORT;
          if (1012 === e)
              return wt.UNSIGNED_SHORT;
          if (1013 === e)
              return wt.INT;
          if (1014 === e)
              return wt.UNSIGNED_INT;
          if (1015 === e)
              return wt.FLOAT;
          if (1016 === e && (t = At.get("OES_texture_half_float"),
          null !== t))
              return t.HALF_FLOAT_OES;
          if (1021 === e)
              return wt.ALPHA;
          if (1022 === e)
              return wt.RGB;
          if (1023 === e)
              return wt.RGBA;
          if (1024 === e)
              return wt.LUMINANCE;
          if (1025 === e)
              return wt.LUMINANCE_ALPHA;
          if (1026 === e)
              return wt.DEPTH_COMPONENT;
          if (1027 === e)
              return wt.DEPTH_STENCIL;
          if (100 === e)
              return wt.FUNC_ADD;
          if (101 === e)
              return wt.FUNC_SUBTRACT;
          if (102 === e)
              return wt.FUNC_REVERSE_SUBTRACT;
          if (200 === e)
              return wt.ZERO;
          if (201 === e)
              return wt.ONE;
          if (202 === e)
              return wt.SRC_COLOR;
          if (203 === e)
              return wt.ONE_MINUS_SRC_COLOR;
          if (204 === e)
              return wt.SRC_ALPHA;
          if (205 === e)
              return wt.ONE_MINUS_SRC_ALPHA;
          if (206 === e)
              return wt.DST_ALPHA;
          if (207 === e)
              return wt.ONE_MINUS_DST_ALPHA;
          if (208 === e)
              return wt.DST_COLOR;
          if (209 === e)
              return wt.ONE_MINUS_DST_COLOR;
          if (210 === e)
              return wt.SRC_ALPHA_SATURATE;
          if ((2001 === e || 2002 === e || 2003 === e || 2004 === e) && (t = At.get("WEBGL_compressed_texture_s3tc"),
          null !== t)) {
              if (2001 === e)
                  return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
              if (2002 === e)
                  return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
              if (2003 === e)
                  return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              if (2004 === e)
                  return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
          }
          if ((2100 === e || 2101 === e || 2102 === e || 2103 === e) && (t = At.get("WEBGL_compressed_texture_pvrtc"),
          null !== t)) {
              if (2100 === e)
                  return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (2101 === e)
                  return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (2102 === e)
                  return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (2103 === e)
                  return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
          }
          if (2151 === e && (t = At.get("WEBGL_compressed_texture_etc1"),
          null !== t))
              return t.COMPRESSED_RGB_ETC1_WEBGL;
          if ((103 === e || 104 === e) && (t = At.get("EXT_blend_minmax"),
          null !== t)) {
              if (103 === e)
                  return t.MIN_EXT;
              if (104 === e)
                  return t.MAX_EXT
          }
          return 1020 === e && (t = At.get("WEBGL_depth_texture"),
          null !== t) ? t.UNSIGNED_INT_24_8_WEBGL : 0
      }
      console.log("THREE.WebGLRenderer", "84"),
      e = e || {};
      var _ = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        , w = void 0 !== e.context ? e.context : null
        , E = void 0 !== e.alpha ? e.alpha : !1
        , M = void 0 !== e.depth ? e.depth : !0
        , T = void 0 !== e.stencil ? e.stencil : !0
        , S = void 0 !== e.antialias ? e.antialias : !1
        , A = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0
        , R = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1
        , L = []
        , P = []
        , C = -1
        , I = []
        , U = -1
        , N = new Float32Array(8)
        , D = []
        , O = [];
      this.domElement = _,
      this.context = null,
      this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0,
      this.clippingPlanes = [],
      this.localClippingEnabled = !1,
      this.gammaFactor = 2,
      this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1,
      this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1,
      this.maxMorphTargets = 8,
      this.maxMorphNormals = 4;
      var B = this
        , F = null
        , z = null
        , H = null
        , k = -1
        , j = ""
        , q = null
        , Z = new r
        , J = null
        , K = new r
        , $ = 0
        , it = new V(0)
        , nt = 0
        , rt = _.width
        , ot = _.height
        , at = 1
        , st = new r(0,0,rt,ot)
        , ct = !1
        , lt = new r(0,0,rt,ot)
        , ut = new et
        , pt = new ii
        , dt = !1
        , ft = !1
        , mt = new Q
        , gt = new h
        , vt = new c
        , yt = new h
        , xt = new h
        , bt = {
          hash: "",
          ambient: [0, 0, 0],
          directional: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          point: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          shadows: []
      }
        , _t = {
          calls: 0,
          vertices: 0,
          faces: 0,
          points: 0
      };
      this.info = {
          render: _t,
          memory: {
              geometries: 0,
              textures: 0
          },
          programs: null
      };
      var wt;
      try {
          if (E = {
              alpha: E,
              depth: M,
              stencil: T,
              antialias: S,
              premultipliedAlpha: A,
              preserveDrawingBuffer: R
          },
          wt = w || _.getContext("webgl", E) || _.getContext("experimental-webgl", E),
          null === wt) {
              if (null !== _.getContext("webgl"))
                  throw "Error creating WebGL context with your selected attributes.";
              throw "Error creating WebGL context."
          }
          void 0 === wt.getShaderPrecisionFormat && (wt.getShaderPrecisionFormat = function() {
              return {
                  rangeMin: 1,
                  rangeMax: 1,
                  precision: 1
              }
          }
          ),
          _.addEventListener("webglcontextlost", n, !1)
      } catch (Tt) {
          console.error("THREE.WebGLRenderer: " + Tt)
      }
      var At = new ti(wt);
      At.get("WEBGL_depth_texture"),
      At.get("OES_texture_float"),
      At.get("OES_texture_float_linear"),
      At.get("OES_texture_half_float"),
      At.get("OES_texture_half_float_linear"),
      At.get("OES_standard_derivatives"),
      At.get("ANGLE_instanced_arrays"),
      At.get("OES_element_index_uint") && (Et.MaxIndex = 4294967296);
      var Lt = new ei(wt,At,e)
        , Dt = new $t(wt,At,b)
        , Ot = new Kt
        , Bt = new Qt(wt,At,Dt,Ot,Lt,b,this.info)
        , Ft = new Jt(wt,Ot,this.info)
        , zt = new Yt(this,Lt)
        , Ht = new Nt;
      this.info.programs = zt.programs;
      var Gt, Vt, kt, jt, Wt = new Ut(wt,At,_t), Xt = new It(wt,At,_t);
      t(),
      this.context = wt,
      this.capabilities = Lt,
      this.extensions = At,
      this.properties = Ot,
      this.state = Dt;
      var qt = new tt(this,bt,Ft,Lt);
      this.shadowMap = qt;
      var Zt = new X(this,D)
        , ni = new W(this,O);
      this.getContext = function() {
          return wt
      }
      ,
      this.getContextAttributes = function() {
          return wt.getContextAttributes()
      }
      ,
      this.forceContextLoss = function() {
          At.get("WEBGL_lose_context").loseContext()
      }
      ,
      this.getMaxAnisotropy = function() {
          return Lt.getMaxAnisotropy()
      }
      ,
      this.getPrecision = function() {
          return Lt.precision
      }
      ,
      this.getPixelRatio = function() {
          return at
      }
      ,
      this.setPixelRatio = function(e) {
          void 0 !== e && (at = e,
          this.setSize(lt.z, lt.w, !1))
      }
      ,
      this.getSize = function() {
          return {
              width: rt,
              height: ot
          }
      }
      ,
      this.setSize = function(e, t, i) {
          rt = e,
          ot = t,
          _.width = e * at,
          _.height = t * at,
          !1 !== i && (_.style.width = e + "px",
          _.style.height = t + "px"),
          this.setViewport(0, 0, e, t)
      }
      ,
      this.setViewport = function(e, t, i, n) {
          Dt.viewport(lt.set(e, t, i, n))
      }
      ,
      this.setScissor = function(e, t, i, n) {
          Dt.scissor(st.set(e, t, i, n))
      }
      ,
      this.setScissorTest = function(e) {
          Dt.setScissorTest(ct = e)
      }
      ,
      this.getClearColor = function() {
          return it
      }
      ,
      this.setClearColor = function(e, t) {
          it.set(e),
          nt = void 0 !== t ? t : 1,
          Dt.buffers.color.setClear(it.r, it.g, it.b, nt, A)
      }
      ,
      this.getClearAlpha = function() {
          return nt
      }
      ,
      this.setClearAlpha = function(e) {
          nt = e,
          Dt.buffers.color.setClear(it.r, it.g, it.b, nt, A)
      }
      ,
      this.clear = function(e, t, i) {
          var n = 0;
          (void 0 === e || e) && (n |= wt.COLOR_BUFFER_BIT),
          (void 0 === t || t) && (n |= wt.DEPTH_BUFFER_BIT),
          (void 0 === i || i) && (n |= wt.STENCIL_BUFFER_BIT),
          wt.clear(n)
      }
      ,
      this.clearColor = function() {
          this.clear(!0, !1, !1)
      }
      ,
      this.clearDepth = function() {
          this.clear(!1, !0, !1)
      }
      ,
      this.clearStencil = function() {
          this.clear(!1, !1, !0)
      }
      ,
      this.clearTarget = function(e, t, i, n) {
          this.setRenderTarget(e),
          this.clear(t, i, n)
      }
      ,
      this.resetGLState = i,
      this.dispose = function() {
          I = [],
          U = -1,
          P = [],
          C = -1,
          _.removeEventListener("webglcontextlost", n, !1)
      }
      ,
      this.renderBufferImmediate = function(e, t, i) {
          Dt.initAttributes();
          var n = Ot.get(e);
          if (e.hasPositions && !n.position && (n.position = wt.createBuffer()),
          e.hasNormals && !n.normal && (n.normal = wt.createBuffer()),
          e.hasUvs && !n.uv && (n.uv = wt.createBuffer()),
          e.hasColors && !n.color && (n.color = wt.createBuffer()),
          t = t.getAttributes(),
          e.hasPositions && (wt.bindBuffer(wt.ARRAY_BUFFER, n.position),
          wt.bufferData(wt.ARRAY_BUFFER, e.positionArray, wt.DYNAMIC_DRAW),
          Dt.enableAttribute(t.position),
          wt.vertexAttribPointer(t.position, 3, wt.FLOAT, !1, 0, 0)),
          e.hasNormals) {
              if (wt.bindBuffer(wt.ARRAY_BUFFER, n.normal),
              !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && 1 === i.shading)
                  for (var r = 0, o = 3 * e.count; o > r; r += 9) {
                      var a = e.normalArray
                        , s = (a[r + 0] + a[r + 3] + a[r + 6]) / 3
                        , c = (a[r + 1] + a[r + 4] + a[r + 7]) / 3
                        , h = (a[r + 2] + a[r + 5] + a[r + 8]) / 3;
                      a[r + 0] = s,
                      a[r + 1] = c,
                      a[r + 2] = h,
                      a[r + 3] = s,
                      a[r + 4] = c,
                      a[r + 5] = h,
                      a[r + 6] = s,
                      a[r + 7] = c,
                      a[r + 8] = h
                  }
              wt.bufferData(wt.ARRAY_BUFFER, e.normalArray, wt.DYNAMIC_DRAW),
              Dt.enableAttribute(t.normal),
              wt.vertexAttribPointer(t.normal, 3, wt.FLOAT, !1, 0, 0)
          }
          e.hasUvs && i.map && (wt.bindBuffer(wt.ARRAY_BUFFER, n.uv),
          wt.bufferData(wt.ARRAY_BUFFER, e.uvArray, wt.DYNAMIC_DRAW),
          Dt.enableAttribute(t.uv),
          wt.vertexAttribPointer(t.uv, 2, wt.FLOAT, !1, 0, 0)),
          e.hasColors && 0 !== i.vertexColors && (wt.bindBuffer(wt.ARRAY_BUFFER, n.color),
          wt.bufferData(wt.ARRAY_BUFFER, e.colorArray, wt.DYNAMIC_DRAW),
          Dt.enableAttribute(t.color),
          wt.vertexAttribPointer(t.color, 3, wt.FLOAT, !1, 0, 0)),
          Dt.disableUnusedAttributes(),
          wt.drawArrays(wt.TRIANGLES, 0, e.count),
          e.count = 0
      }
      ,
      this.renderBufferDirect = function(e, t, i, n, r, o) {
          g(n);
          var a = v(e, t, n, r)
            , c = !1;
          if (e = i.id + "_" + a.id + "_" + n.wireframe,
          e !== j && (j = e,
          c = !0),
          t = r.morphTargetInfluences,
          void 0 !== t) {
              var h = [];
              e = 0;
              for (var l = t.length; l > e; e++)
                  c = t[e],
                  h.push([c, e]);
              h.sort(s),
              8 < h.length && (h.length = 8);
              var u = i.morphAttributes;
              for (e = 0,
              l = h.length; l > e; e++)
                  c = h[e],
                  N[e] = c[0],
                  0 !== c[0] ? (t = c[1],
                  !0 === n.morphTargets && u.position && i.addAttribute("morphTarget" + e, u.position[t]),
                  !0 === n.morphNormals && u.normal && i.addAttribute("morphNormal" + e, u.normal[t])) : (!0 === n.morphTargets && i.removeAttribute("morphTarget" + e),
                  !0 === n.morphNormals && i.removeAttribute("morphNormal" + e));
              for (e = h.length,
              t = N.length; t > e; e++)
                  N[e] = 0;
              a.getUniforms().setValue(wt, "morphTargetInfluences", N),
              c = !0
          }
          if (t = i.index,
          l = i.attributes.position,
          h = 1,
          !0 === n.wireframe && (t = Ft.getWireframeAttribute(i),
          h = 2),
          null !== t ? (e = Xt,
          e.setIndex(t)) : e = Wt,
          c) {
              var p, c = void 0;
              if (i && i.isInstancedBufferGeometry && (p = At.get("ANGLE_instanced_arrays"),
              null === p))
                  console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
              else {
                  void 0 === c && (c = 0),
                  Dt.initAttributes();
                  var d, u = i.attributes, a = a.getAttributes(), f = n.defaultAttributeValues;
                  for (d in a) {
                      var m = a[d];
                      if (m >= 0) {
                          var y = u[d];
                          if (void 0 !== y) {
                              var x = y.normalized
                                , b = y.itemSize
                                , _ = Ft.getAttributeProperties(y)
                                , w = _.__webglBuffer
                                , E = _.type
                                , _ = _.bytesPerElement;
                              if (y.isInterleavedBufferAttribute) {
                                  var M = y.data
                                    , T = M.stride
                                    , y = y.offset;
                                  M && M.isInstancedInterleavedBuffer ? (Dt.enableAttributeAndDivisor(m, M.meshPerAttribute, p),
                                  void 0 === i.maxInstancedCount && (i.maxInstancedCount = M.meshPerAttribute * M.count)) : Dt.enableAttribute(m),
                                  wt.bindBuffer(wt.ARRAY_BUFFER, w),
                                  wt.vertexAttribPointer(m, b, E, x, T * _, (c * T + y) * _)
                              } else
                                  y.isInstancedBufferAttribute ? (Dt.enableAttributeAndDivisor(m, y.meshPerAttribute, p),
                                  void 0 === i.maxInstancedCount && (i.maxInstancedCount = y.meshPerAttribute * y.count)) : Dt.enableAttribute(m),
                                  wt.bindBuffer(wt.ARRAY_BUFFER, w),
                                  wt.vertexAttribPointer(m, b, E, x, 0, c * b * _)
                          } else if (void 0 !== f && (x = f[d],
                          void 0 !== x))
                              switch (x.length) {
                              case 2:
                                  wt.vertexAttrib2fv(m, x);
                                  break;
                              case 3:
                                  wt.vertexAttrib3fv(m, x);
                                  break;
                              case 4:
                                  wt.vertexAttrib4fv(m, x);
                                  break;
                              default:
                                  wt.vertexAttrib1fv(m, x)
                              }
                      }
                  }
                  Dt.disableUnusedAttributes()
              }
              null !== t && wt.bindBuffer(wt.ELEMENT_ARRAY_BUFFER, Ft.getAttributeBuffer(t))
          }
          if (p = 0,
          null !== t ? p = t.count : void 0 !== l && (p = l.count),
          t = i.drawRange.start * h,
          l = null !== o ? o.start * h : 0,
          d = Math.max(t, l),
          o = Math.max(0, Math.min(p, t + i.drawRange.count * h, l + (null !== o ? o.count * h : 1 / 0)) - 1 - d + 1),
          0 !== o) {
              if (r.isMesh)
                  if (!0 === n.wireframe)
                      Dt.setLineWidth(n.wireframeLinewidth * (null === z ? at : 1)),
                      e.setMode(wt.LINES);
                  else
                      switch (r.drawMode) {
                      case 0:
                          e.setMode(wt.TRIANGLES);
                          break;
                      case 1:
                          e.setMode(wt.TRIANGLE_STRIP);
                          break;
                      case 2:
                          e.setMode(wt.TRIANGLE_FAN)
                      }
              else
                  r.isLine ? (n = n.linewidth,
                  void 0 === n && (n = 1),
                  Dt.setLineWidth(n * (null === z ? at : 1)),
                  e.setMode(r.isLineSegments ? wt.LINES : wt.LINE_STRIP)) : r.isPoints && e.setMode(wt.POINTS);
              i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && e.renderInstances(i, d, o) : e.render(d, o)
          }
      }
      ,
      this.render = function(e, t, i, n) {
          if (void 0 !== t && !0 !== t.isCamera)
              console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          else {
              j = "",
              k = -1,
              q = null,
              !0 === e.autoUpdate && e.updateMatrixWorld(),
              null === t.parent && t.updateMatrixWorld(),
              t.matrixWorldInverse.getInverse(t.matrixWorld),
              gt.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
              ut.setFromMatrix(gt),
              L.length = 0,
              U = C = -1,
              D.length = 0,
              O.length = 0,
              ft = this.localClippingEnabled,
              dt = pt.init(this.clippingPlanes, ft, t),
              f(e, t),
              P.length = C + 1,
              I.length = U + 1,
              !0 === B.sortObjects && (P.sort(l),
              I.sort(u)),
              dt && pt.beginShadows();
              for (var r = L, o = 0, a = 0, s = r.length; s > a; a++) {
                  var c = r[a];
                  c.castShadow && (bt.shadows[o++] = c)
              }
              bt.shadows.length = o,
              qt.render(e, t);
              for (var p, d, g, v, r = L, y = c = 0, x = 0, b = t.matrixWorldInverse, _ = 0, w = 0, E = 0, M = 0, T = 0, o = 0, a = r.length; a > o; o++)
                  if (s = r[o],
                  p = s.color,
                  d = s.intensity,
                  g = s.distance,
                  v = s.shadow && s.shadow.map ? s.shadow.map.texture : null,
                  s.isAmbientLight)
                      c += p.r * d,
                      y += p.g * d,
                      x += p.b * d;
                  else if (s.isDirectionalLight) {
                      var S = Ht.get(s);
                      S.color.copy(s.color).multiplyScalar(s.intensity),
                      S.direction.setFromMatrixPosition(s.matrixWorld),
                      vt.setFromMatrixPosition(s.target.matrixWorld),
                      S.direction.sub(vt),
                      S.direction.transformDirection(b),
                      (S.shadow = s.castShadow) && (S.shadowBias = s.shadow.bias,
                      S.shadowRadius = s.shadow.radius,
                      S.shadowMapSize = s.shadow.mapSize),
                      bt.directionalShadowMap[_] = v,
                      bt.directionalShadowMatrix[_] = s.shadow.matrix,
                      bt.directional[_++] = S
                  } else
                      s.isSpotLight ? (S = Ht.get(s),
                      S.position.setFromMatrixPosition(s.matrixWorld),
                      S.position.applyMatrix4(b),
                      S.color.copy(p).multiplyScalar(d),
                      S.distance = g,
                      S.direction.setFromMatrixPosition(s.matrixWorld),
                      vt.setFromMatrixPosition(s.target.matrixWorld),
                      S.direction.sub(vt),
                      S.direction.transformDirection(b),
                      S.coneCos = Math.cos(s.angle),
                      S.penumbraCos = Math.cos(s.angle * (1 - s.penumbra)),
                      S.decay = 0 === s.distance ? 0 : s.decay,
                      (S.shadow = s.castShadow) && (S.shadowBias = s.shadow.bias,
                      S.shadowRadius = s.shadow.radius,
                      S.shadowMapSize = s.shadow.mapSize),
                      bt.spotShadowMap[E] = v,
                      bt.spotShadowMatrix[E] = s.shadow.matrix,
                      bt.spot[E++] = S) : s.isRectAreaLight ? (S = Ht.get(s),
                      S.color.copy(p).multiplyScalar(d / (s.width * s.height)),
                      S.position.setFromMatrixPosition(s.matrixWorld),
                      S.position.applyMatrix4(b),
                      xt.identity(),
                      yt.copy(s.matrixWorld),
                      yt.premultiply(b),
                      xt.extractRotation(yt),
                      S.halfWidth.set(.5 * s.width, 0, 0),
                      S.halfHeight.set(0, .5 * s.height, 0),
                      S.halfWidth.applyMatrix4(xt),
                      S.halfHeight.applyMatrix4(xt),
                      bt.rectArea[M++] = S) : s.isPointLight ? (S = Ht.get(s),
                      S.position.setFromMatrixPosition(s.matrixWorld),
                      S.position.applyMatrix4(b),
                      S.color.copy(s.color).multiplyScalar(s.intensity),
                      S.distance = s.distance,
                      S.decay = 0 === s.distance ? 0 : s.decay,
                      (S.shadow = s.castShadow) && (S.shadowBias = s.shadow.bias,
                      S.shadowRadius = s.shadow.radius,
                      S.shadowMapSize = s.shadow.mapSize),
                      bt.pointShadowMap[w] = v,
                      void 0 === bt.pointShadowMatrix[w] && (bt.pointShadowMatrix[w] = new h),
                      vt.setFromMatrixPosition(s.matrixWorld).negate(),
                      bt.pointShadowMatrix[w].identity().setPosition(vt),
                      bt.point[w++] = S) : s.isHemisphereLight && (S = Ht.get(s),
                      S.direction.setFromMatrixPosition(s.matrixWorld),
                      S.direction.transformDirection(b),
                      S.direction.normalize(),
                      S.skyColor.copy(s.color).multiplyScalar(d),
                      S.groundColor.copy(s.groundColor).multiplyScalar(d),
                      bt.hemi[T++] = S);
              bt.ambient[0] = c,
              bt.ambient[1] = y,
              bt.ambient[2] = x,
              bt.directional.length = _,
              bt.spot.length = E,
              bt.rectArea.length = M,
              bt.point.length = w,
              bt.hemi.length = T,
              bt.hash = _ + "," + w + "," + E + "," + M + "," + T + "," + bt.shadows.length,
              dt && pt.endShadows(),
              _t.calls = 0,
              _t.vertices = 0,
              _t.faces = 0,
              _t.points = 0,
              void 0 === i && (i = null),
              this.setRenderTarget(i),
              r = e.background,
              null === r ? Dt.buffers.color.setClear(it.r, it.g, it.b, nt, A) : r && r.isColor && (Dt.buffers.color.setClear(r.r, r.g, r.b, 1, A),
              n = !0),
              (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
              r && r.isCubeTexture ? (void 0 === kt && (kt = new Pt,
              jt = new Mt(new St(5,5,5),new Y({
                  uniforms: _o.cube.uniforms,
                  vertexShader: _o.cube.vertexShader,
                  fragmentShader: _o.cube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
              }))),
              kt.projectionMatrix.copy(t.projectionMatrix),
              kt.matrixWorld.extractRotation(t.matrixWorld),
              kt.matrixWorldInverse.getInverse(kt.matrixWorld),
              jt.material.uniforms.tCube.value = r,
              jt.modelViewMatrix.multiplyMatrices(kt.matrixWorldInverse, jt.matrixWorld),
              Ft.update(jt),
              B.renderBufferDirect(kt, null, jt.geometry, jt.material, jt, null)) : r && r.isTexture && (void 0 === Gt && (Gt = new Ct(-1,1,1,-1,0,1),
              Vt = new Mt(new Rt(2,2),new ht({
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
              }))),
              Vt.material.map = r,
              Ft.update(Vt),
              B.renderBufferDirect(Gt, null, Vt.geometry, Vt.material, Vt, null)),
              e.overrideMaterial ? (n = e.overrideMaterial,
              m(P, e, t, n),
              m(I, e, t, n)) : (Dt.setBlending(0),
              m(P, e, t),
              m(I, e, t)),
              Zt.render(e, t),
              ni.render(e, t, K),
              i && Bt.updateRenderTargetMipmap(i),
              Dt.setDepthTest(!0),
              Dt.setDepthWrite(!0),
              Dt.setColorWrite(!0)
          }
      }
      ,
      this.setFaceCulling = function(e, t) {
          Dt.setCullFace(e),
          Dt.setFlipSided(0 === t)
      }
      ,
      this.allocTextureUnit = function() {
          var e = $;
          return e >= Lt.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + Lt.maxTextures),
          $ += 1,
          e
      }
      ,
      this.setTexture2D = function() {
          var e = !1;
          return function(t, i) {
              t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
              e = !0),
              t = t.texture),
              Bt.setTexture2D(t, i)
          }
      }(),
      this.setTexture = function() {
          var e = !1;
          return function(t, i) {
              e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
              e = !0),
              Bt.setTexture2D(t, i)
          }
      }(),
      this.setTextureCube = function() {
          var e = !1;
          return function(t, i) {
              t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
              e = !0),
              t = t.texture),
              t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? Bt.setTextureCube(t, i) : Bt.setTextureCubeDynamic(t, i)
          }
      }(),
      this.getCurrentRenderTarget = function() {
          return z
      }
      ,
      this.setRenderTarget = function(e) {
          (z = e) && void 0 === Ot.get(e).__webglFramebuffer && Bt.setupRenderTarget(e);
          var t, i = e && e.isWebGLRenderTargetCube;
          e ? (t = Ot.get(e),
          t = i ? t.__webglFramebuffer[e.activeCubeFace] : t.__webglFramebuffer,
          Z.copy(e.scissor),
          J = e.scissorTest,
          K.copy(e.viewport)) : (t = null,
          Z.copy(st).multiplyScalar(at),
          J = ct,
          K.copy(lt).multiplyScalar(at)),
          H !== t && (wt.bindFramebuffer(wt.FRAMEBUFFER, t),
          H = t),
          Dt.scissor(Z),
          Dt.setScissorTest(J),
          Dt.viewport(K),
          i && (i = Ot.get(e.texture),
          wt.framebufferTexture2D(wt.FRAMEBUFFER, wt.COLOR_ATTACHMENT0, wt.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, i.__webglTexture, e.activeMipMapLevel))
      }
      ,
      this.readRenderTargetPixels = function(e, t, i, n, r, o) {
          if (!1 === (e && e.isWebGLRenderTarget))
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          else {
              var a = Ot.get(e).__webglFramebuffer;
              if (a) {
                  var s = !1;
                  a !== H && (wt.bindFramebuffer(wt.FRAMEBUFFER, a),
                  s = !0);
                  try {
                      var c = e.texture
                        , h = c.format
                        , l = c.type;
                      1023 !== h && b(h) !== wt.getParameter(wt.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === l || b(l) === wt.getParameter(wt.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === l && (At.get("OES_texture_float") || At.get("WEBGL_color_buffer_float")) || 1016 === l && At.get("EXT_color_buffer_half_float") ? wt.checkFramebufferStatus(wt.FRAMEBUFFER) === wt.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - n && i >= 0 && i <= e.height - r && wt.readPixels(t, i, n, r, b(h), b(l), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                  } finally {
                      s && wt.bindFramebuffer(wt.FRAMEBUFFER, H)
                  }
              }
          }
      }
  }
  function ri(e, t) {
      this.name = "",
      this.color = new V(e),
      this.density = void 0 !== t ? t : 25e-5
  }
  function oi(e, t, i) {
      this.name = "",
      this.color = new V(e),
      this.near = void 0 !== t ? t : 1,
      this.far = void 0 !== i ? i : 1e3
  }
  function ai() {
      ot.call(this),
      this.type = "Scene",
      this.overrideMaterial = this.fog = this.background = null,
      this.autoUpdate = !0
  }
  function si(e, t, i, n, r) {
      ot.call(this),
      this.lensFlares = [],
      this.positionScreen = new c,
      this.customUpdateCallback = void 0,
      void 0 !== e && this.add(e, t, i, n, r)
  }
  function ci(e) {
      q.call(this),
      this.type = "SpriteMaterial",
      this.color = new V(16777215),
      this.map = null,
      this.rotation = 0,
      this.lights = this.fog = !1,
      this.setValues(e)
  }
  function hi(e) {
      ot.call(this),
      this.type = "Sprite",
      this.material = void 0 !== e ? e : new ci
  }
  function li() {
      ot.call(this),
      this.type = "LOD",
      Object.defineProperties(this, {
          levels: {
              enumerable: !0,
              value: []
          }
      })
  }
  function ui(e, t, i) {
      if (this.useVertexTexture = void 0 !== i ? i : !0,
      this.identityMatrix = new h,
      e = e || [],
      this.bones = e.slice(0),
      this.useVertexTexture ? (e = Math.sqrt(4 * this.bones.length),
      e = ho.nextPowerOfTwo(Math.ceil(e)),
      this.boneTextureHeight = this.boneTextureWidth = e = Math.max(e, 4),
      this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
      this.boneTexture = new k(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,1023,1015)) : this.boneMatrices = new Float32Array(16 * this.bones.length),
      void 0 === t)
          this.calculateInverses();
      else if (this.bones.length === t.length)
          this.boneInverses = t.slice(0);
      else
          for (console.warn("THREE.Skeleton bonInverses is the wrong length."),
          this.boneInverses = [],
          t = 0,
          e = this.bones.length; e > t; t++)
              this.boneInverses.push(new h)
  }
  function pi() {
      ot.call(this),
      this.type = "Bone"
  }
  function di(e, t, i) {
      if (Mt.call(this, e, t),
      this.type = "SkinnedMesh",
      this.bindMode = "attached",
      this.bindMatrix = new h,
      this.bindMatrixInverse = new h,
      e = [],
      this.geometry && void 0 !== this.geometry.bones) {
          for (var n, r = 0, o = this.geometry.bones.length; o > r; ++r)
              n = this.geometry.bones[r],
              t = new pi,
              e.push(t),
              t.name = n.name,
              t.position.fromArray(n.pos),
              t.quaternion.fromArray(n.rotq),
              void 0 !== n.scl && t.scale.fromArray(n.scl);
          for (r = 0,
          o = this.geometry.bones.length; o > r; ++r)
              n = this.geometry.bones[r],
              -1 !== n.parent && null !== n.parent && void 0 !== e[n.parent] ? e[n.parent].add(e[r]) : this.add(e[r])
      }
      this.normalizeSkinWeights(),
      this.updateMatrixWorld(!0),
      this.bind(new ui(e,void 0,i), this.matrixWorld)
  }
  function fi(e) {
      q.call(this),
      this.type = "LineBasicMaterial",
      this.color = new V(16777215),
      this.linewidth = 1,
      this.linejoin = this.linecap = "round",
      this.lights = !1,
      this.setValues(e)
  }
  function mi(e, t, i) {
      return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
      new gi(e,t)) : (ot.call(this),
      this.type = "Line",
      this.geometry = void 0 !== e ? e : new Et,
      void (this.material = void 0 !== t ? t : new fi({
          color: 16777215 * Math.random()
      })))
  }
  function gi(e, t) {
      mi.call(this, e, t),
      this.type = "LineSegments"
  }
  function vi(e) {
      q.call(this),
      this.type = "PointsMaterial",
      this.color = new V(16777215),
      this.map = null,
      this.size = 1,
      this.sizeAttenuation = !0,
      this.lights = !1,
      this.setValues(e)
  }
  function yi(e, t) {
      ot.call(this),
      this.type = "Points",
      this.geometry = void 0 !== e ? e : new Et,
      this.material = void 0 !== t ? t : new vi({
          color: 16777215 * Math.random()
      })
  }
  function xi() {
      ot.call(this),
      this.type = "Group"
  }
  function bi(e, t, i, r, o, a, s, c, h) {
      function l() {
          requestAnimationFrame(l),
          e.readyState >= e.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
      }
      n.call(this, e, t, i, r, o, a, s, c, h),
      this.generateMipmaps = !1;
      var u = this;
      l()
  }
  function _i(e, t, i, r, o, a, s, c, h, l, u, p) {
      n.call(this, null, a, s, c, h, l, r, o, u, p),
      this.image = {
          width: t,
          height: i
      },
      this.mipmaps = e,
      this.generateMipmaps = this.flipY = !1
  }
  function wi(e, t, i, r, o, a, s, c, h) {
      n.call(this, e, t, i, r, o, a, s, c, h),
      this.needsUpdate = !0
  }
  function Ei(e, t, i, r, o, a, s, c, h, l) {
      if (l = void 0 !== l ? l : 1026,
      1026 !== l && 1027 !== l)
          throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === i && 1026 === l && (i = 1012),
      void 0 === i && 1027 === l && (i = 1020),
      n.call(this, null, r, o, a, s, c, l, i, h),
      this.image = {
          width: e,
          height: t
      },
      this.magFilter = void 0 !== s ? s : 1003,
      this.minFilter = void 0 !== c ? c : 1003,
      this.generateMipmaps = this.flipY = !1
  }
  function Mi(e) {
      function t(e, t) {
          return e - t
      }
      Et.call(this),
      this.type = "WireframeGeometry";
      var i, n, r, o, a, s = [], h = [0, 0], l = {}, u = ["a", "b", "c"];
      if (e && e.isGeometry) {
          var p = e.faces;
          for (i = 0,
          r = p.length; r > i; i++) {
              var d = p[i];
              for (n = 0; 3 > n; n++)
                  h[0] = d[u[n]],
                  h[1] = d[u[(n + 1) % 3]],
                  h.sort(t),
                  a = h.toString(),
                  void 0 === l[a] && (l[a] = {
                      index1: h[0],
                      index2: h[1]
                  })
          }
          for (a in l)
              i = l[a],
              u = e.vertices[i.index1],
              s.push(u.x, u.y, u.z),
              u = e.vertices[i.index2],
              s.push(u.x, u.y, u.z)
      } else if (e && e.isBufferGeometry) {
          var f, u = new c;
          if (null !== e.index) {
              for (p = e.attributes.position,
              d = e.index,
              f = e.groups,
              0 === f.length && e.addGroup(0, d.count),
              e = 0,
              o = f.length; o > e; ++e)
                  for (i = f[e],
                  n = i.start,
                  r = i.count,
                  i = n,
                  r = n + r; r > i; i += 3)
                      for (n = 0; 3 > n; n++)
                          h[0] = d.getX(i + n),
                          h[1] = d.getX(i + (n + 1) % 3),
                          h.sort(t),
                          a = h.toString(),
                          void 0 === l[a] && (l[a] = {
                              index1: h[0],
                              index2: h[1]
                          });
              for (a in l)
                  i = l[a],
                  u.fromBufferAttribute(p, i.index1),
                  s.push(u.x, u.y, u.z),
                  u.fromBufferAttribute(p, i.index2),
                  s.push(u.x, u.y, u.z)
          } else
              for (p = e.attributes.position,
              i = 0,
              r = p.count / 3; r > i; i++)
                  for (n = 0; 3 > n; n++)
                      l = 3 * i + n,
                      u.fromBufferAttribute(p, l),
                      s.push(u.x, u.y, u.z),
                      l = 3 * i + (n + 1) % 3,
                      u.fromBufferAttribute(p, l),
                      s.push(u.x, u.y, u.z)
      }
      this.addAttribute("position", new yt(s,3))
  }
  function Ti(e, t, i) {
      wt.call(this),
      this.type = "ParametricGeometry",
      this.parameters = {
          func: e,
          slices: t,
          stacks: i
      },
      this.fromBufferGeometry(new Si(e,t,i)),
      this.mergeVertices()
  }
  function Si(e, t, i) {
      Et.call(this),
      this.type = "ParametricBufferGeometry",
      this.parameters = {
          func: e,
          slices: t,
          stacks: i
      };
      var n, r, o = [], a = [], s = [], c = t + 1;
      for (n = 0; i >= n; n++) {
          var h = n / i;
          for (r = 0; t >= r; r++) {
              var l = r / t
                , u = e(l, h);
              a.push(u.x, u.y, u.z),
              s.push(l, h)
          }
      }
      for (n = 0; i > n; n++)
          for (r = 0; t > r; r++)
              e = n * c + r + 1,
              h = (n + 1) * c + r + 1,
              l = (n + 1) * c + r,
              o.push(n * c + r, e, l),
              o.push(e, h, l);
      this.setIndex(o),
      this.addAttribute("position", new yt(a,3)),
      this.addAttribute("uv", new yt(s,2)),
      this.computeVertexNormals()
  }
  function Ai(e, t, i, n) {
      wt.call(this),
      this.type = "PolyhedronGeometry",
      this.parameters = {
          vertices: e,
          indices: t,
          radius: i,
          detail: n
      },
      this.fromBufferGeometry(new Ri(e,t,i,n)),
      this.mergeVertices()
  }
  function Ri(e, t, n, r) {
      function o(e) {
          h.push(e.x, e.y, e.z)
      }
      function a(t, i) {
          var n = 3 * t;
          i.x = e[n + 0],
          i.y = e[n + 1],
          i.z = e[n + 2]
      }
      function s(e, t, i, n) {
          0 > n && 1 === e.x && (l[t] = e.x - 1),
          0 === i.x && 0 === i.z && (l[t] = n / 2 / Math.PI + .5)
      }
      Et.call(this),
      this.type = "PolyhedronBufferGeometry",
      this.parameters = {
          vertices: e,
          indices: t,
          radius: n,
          detail: r
      },
      n = n || 1;
      var h = []
        , l = [];
      !function(e) {
          for (var i = new c, n = new c, r = new c, s = 0; s < t.length; s += 3) {
              a(t[s + 0], i),
              a(t[s + 1], n),
              a(t[s + 2], r);
              var h, l, u = i, p = n, d = r, f = Math.pow(2, e), m = [];
              for (h = 0; f >= h; h++) {
                  m[h] = [];
                  var g = u.clone().lerp(d, h / f)
                    , v = p.clone().lerp(d, h / f)
                    , y = f - h;
                  for (l = 0; y >= l; l++)
                      m[h][l] = 0 === l && h === f ? g : g.clone().lerp(v, l / y)
              }
              for (h = 0; f > h; h++)
                  for (l = 0; 2 * (f - h) - 1 > l; l++)
                      u = Math.floor(l / 2),
                      0 === l % 2 ? (o(m[h][u + 1]),
                      o(m[h + 1][u]),
                      o(m[h][u])) : (o(m[h][u + 1]),
                      o(m[h + 1][u + 1]),
                      o(m[h + 1][u]))
          }
      }(r || 0),
      function(e) {
          for (var t = new c, i = 0; i < h.length; i += 3)
              t.x = h[i + 0],
              t.y = h[i + 1],
              t.z = h[i + 2],
              t.normalize().multiplyScalar(e),
              h[i + 0] = t.x,
              h[i + 1] = t.y,
              h[i + 2] = t.z
      }(n),
      function() {
          for (var e = new c, t = 0; t < h.length; t += 3)
              e.x = h[t + 0],
              e.y = h[t + 1],
              e.z = h[t + 2],
              l.push(Math.atan2(e.z, -e.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5));
          for (var e = new c, t = new c, n = new c, r = new c, o = new i, a = new i, u = new i, p = 0, d = 0; p < h.length; p += 9,
          d += 6) {
              e.set(h[p + 0], h[p + 1], h[p + 2]),
              t.set(h[p + 3], h[p + 4], h[p + 5]),
              n.set(h[p + 6], h[p + 7], h[p + 8]),
              o.set(l[d + 0], l[d + 1]),
              a.set(l[d + 2], l[d + 3]),
              u.set(l[d + 4], l[d + 5]),
              r.copy(e).add(t).add(n).divideScalar(3);
              var f = Math.atan2(r.z, -r.x);
              s(o, d + 0, e, f),
              s(a, d + 2, t, f),
              s(u, d + 4, n, f)
          }
          for (e = 0; e < l.length; e += 6)
              t = l[e + 0],
              n = l[e + 2],
              r = l[e + 4],
              o = Math.min(t, n, r),
              .9 < Math.max(t, n, r) && .1 > o && (.2 > t && (l[e + 0] += 1),
              .2 > n && (l[e + 2] += 1),
              .2 > r && (l[e + 4] += 1))
      }(),
      this.addAttribute("position", new yt(h,3)),
      this.addAttribute("normal", new yt(h.slice(),3)),
      this.addAttribute("uv", new yt(l,2)),
      this.normalizeNormals()
  }
  function Li(e, t) {
      wt.call(this),
      this.type = "TetrahedronGeometry",
      this.parameters = {
          radius: e,
          detail: t
      },
      this.fromBufferGeometry(new Pi(e,t)),
      this.mergeVertices()
  }
  function Pi(e, t) {
      Ri.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t),
      this.type = "TetrahedronBufferGeometry",
      this.parameters = {
          radius: e,
          detail: t
      }
  }
  function Ci(e, t) {
      wt.call(this),
      this.type = "OctahedronGeometry",
      this.parameters = {
          radius: e,
          detail: t
      },
      this.fromBufferGeometry(new Ii(e,t)),
      this.mergeVertices()
  }
  function Ii(e, t) {
      Ri.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t),
      this.type = "OctahedronBufferGeometry",
      this.parameters = {
          radius: e,
          detail: t
      }
  }
  function Ui(e, t) {
      wt.call(this),
      this.type = "IcosahedronGeometry",
      this.parameters = {
          radius: e,
          detail: t
      },
      this.fromBufferGeometry(new Ni(e,t)),
      this.mergeVertices()
  }
  function Ni(e, t) {
      var i = (1 + Math.sqrt(5)) / 2;
      Ri.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t),
      this.type = "IcosahedronBufferGeometry",
      this.parameters = {
          radius: e,
          detail: t
      }
  }
  function Di(e, t) {
      wt.call(this),
      this.type = "DodecahedronGeometry",
      this.parameters = {
          radius: e,
          detail: t
      },
      this.fromBufferGeometry(new Oi(e,t)),
      this.mergeVertices()
  }
  function Oi(e, t) {
      var i = (1 + Math.sqrt(5)) / 2
        , n = 1 / i;
      Ri.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t),
      this.type = "DodecahedronBufferGeometry",
      this.parameters = {
          radius: e,
          detail: t
      }
  }
  function Bi(e, t, i, n, r, o) {
      wt.call(this),
      this.type = "TubeGeometry",
      this.parameters = {
          path: e,
          tubularSegments: t,
          radius: i,
          radialSegments: n,
          closed: r
      },
      void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed."),
      e = new Fi(e,t,i,n,r),
      this.tangents = e.tangents,
      this.normals = e.normals,
      this.binormals = e.binormals,
      this.fromBufferGeometry(e),
      this.mergeVertices()
  }
  function Fi(e, t, n, r, o) {
      function a(i) {
          var o = e.getPointAt(i / t)
            , a = s.normals[i];
          for (i = s.binormals[i],
          l = 0; r >= l; l++) {
              var c = l / r * Math.PI * 2
                , h = Math.sin(c)
                , c = -Math.cos(c);
              p.x = c * a.x + h * i.x,
              p.y = c * a.y + h * i.y,
              p.z = c * a.z + h * i.z,
              p.normalize(),
              m.push(p.x, p.y, p.z),
              u.x = o.x + n * p.x,
              u.y = o.y + n * p.y,
              u.z = o.z + n * p.z,
              f.push(u.x, u.y, u.z)
          }
      }
      Et.call(this),
      this.type = "TubeBufferGeometry",
      this.parameters = {
          path: e,
          tubularSegments: t,
          radius: n,
          radialSegments: r,
          closed: o
      },
      t = t || 64,
      n = n || 1,
      r = r || 8,
      o = o || !1;
      var s = e.computeFrenetFrames(t, o);
      this.tangents = s.tangents,
      this.normals = s.normals,
      this.binormals = s.binormals;
      var h, l, u = new c, p = new c, d = new i, f = [], m = [], g = [], v = [];
      for (h = 0; t > h; h++)
          a(h);
      for (a(!1 === o ? t : 0),
      h = 0; t >= h; h++)
          for (l = 0; r >= l; l++)
              d.x = h / t,
              d.y = l / r,
              g.push(d.x, d.y);
      !function() {
          for (l = 1; t >= l; l++)
              for (h = 1; r >= h; h++) {
                  var e = (r + 1) * l + (h - 1)
                    , i = (r + 1) * l + h
                    , n = (r + 1) * (l - 1) + h;
                  v.push((r + 1) * (l - 1) + (h - 1), e, n),
                  v.push(e, i, n)
              }
      }(),
      this.setIndex(v),
      this.addAttribute("position", new yt(f,3)),
      this.addAttribute("normal", new yt(m,3)),
      this.addAttribute("uv", new yt(g,2))
  }
  function zi(e, t, i, n, r, o, a) {
      wt.call(this),
      this.type = "TorusKnotGeometry",
      this.parameters = {
          radius: e,
          tube: t,
          tubularSegments: i,
          radialSegments: n,
          p: r,
          q: o
      },
      void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
      this.fromBufferGeometry(new Hi(e,t,i,n,r,o)),
      this.mergeVertices()
  }
  function Hi(e, t, n, r, o, a) {
      function s(e, t, i, n, r) {
          var o = Math.sin(e);
          t = i / t * e,
          i = Math.cos(t),
          r.x = n * (2 + i) * .5 * Math.cos(e),
          r.y = n * (2 + i) * o * .5,
          r.z = n * Math.sin(t) * .5
      }
      Et.call(this),
      this.type = "TorusKnotBufferGeometry",
      this.parameters = {
          radius: e,
          tube: t,
          tubularSegments: n,
          radialSegments: r,
          p: o,
          q: a
      },
      e = e || 100,
      t = t || 40,
      n = Math.floor(n) || 64,
      r = Math.floor(r) || 8,
      o = o || 2,
      a = a || 3;
      var h, l, u = [], p = [], d = [], f = [], m = new c, g = new c;
      new i;
      var v = new c
        , y = new c
        , x = new c
        , b = new c
        , _ = new c;
      for (h = 0; n >= h; ++h)
          for (l = h / n * o * Math.PI * 2,
          s(l, o, a, e, v),
          s(l + .01, o, a, e, y),
          b.subVectors(y, v),
          _.addVectors(y, v),
          x.crossVectors(b, _),
          _.crossVectors(x, b),
          x.normalize(),
          _.normalize(),
          l = 0; r >= l; ++l) {
              var w = l / r * Math.PI * 2
                , E = -t * Math.cos(w)
                , w = t * Math.sin(w);
              m.x = v.x + (E * _.x + w * x.x),
              m.y = v.y + (E * _.y + w * x.y),
              m.z = v.z + (E * _.z + w * x.z),
              p.push(m.x, m.y, m.z),
              g.subVectors(m, v).normalize(),
              d.push(g.x, g.y, g.z),
              f.push(h / n),
              f.push(l / r)
          }
      for (l = 1; n >= l; l++)
          for (h = 1; r >= h; h++)
              e = (r + 1) * l + (h - 1),
              t = (r + 1) * l + h,
              o = (r + 1) * (l - 1) + h,
              u.push((r + 1) * (l - 1) + (h - 1), e, o),
              u.push(e, t, o);
      this.setIndex(u),
      this.addAttribute("position", new yt(p,3)),
      this.addAttribute("normal", new yt(d,3)),
      this.addAttribute("uv", new yt(f,2))
  }
  function Gi(e, t, i, n, r) {
      wt.call(this),
      this.type = "TorusGeometry",
      this.parameters = {
          radius: e,
          tube: t,
          radialSegments: i,
          tubularSegments: n,
          arc: r
      },
      this.fromBufferGeometry(new Vi(e,t,i,n,r))
  }
  function Vi(e, t, i, n, r) {
      Et.call(this),
      this.type = "TorusBufferGeometry",
      this.parameters = {
          radius: e,
          tube: t,
          radialSegments: i,
          tubularSegments: n,
          arc: r
      },
      e = e || 100,
      t = t || 40,
      i = Math.floor(i) || 8,
      n = Math.floor(n) || 6,
      r = r || 2 * Math.PI;
      var o, a, s = [], h = [], l = [], u = [], p = new c, d = new c, f = new c;
      for (o = 0; i >= o; o++)
          for (a = 0; n >= a; a++) {
              var m = a / n * r
                , g = o / i * Math.PI * 2;
              d.x = (e + t * Math.cos(g)) * Math.cos(m),
              d.y = (e + t * Math.cos(g)) * Math.sin(m),
              d.z = t * Math.sin(g),
              h.push(d.x, d.y, d.z),
              p.x = e * Math.cos(m),
              p.y = e * Math.sin(m),
              f.subVectors(d, p).normalize(),
              l.push(f.x, f.y, f.z),
              u.push(a / n),
              u.push(o / i)
          }
      for (o = 1; i >= o; o++)
          for (a = 1; n >= a; a++)
              e = (n + 1) * (o - 1) + a - 1,
              t = (n + 1) * (o - 1) + a,
              r = (n + 1) * o + a,
              s.push((n + 1) * o + a - 1, e, r),
              s.push(e, t, r);
      this.setIndex(s),
      this.addAttribute("position", new yt(h,3)),
      this.addAttribute("normal", new yt(l,3)),
      this.addAttribute("uv", new yt(u,2))
  }
  function ki(e, t) {
      "undefined" != typeof e && (wt.call(this),
      this.type = "ExtrudeGeometry",
      e = Array.isArray(e) ? e : [e],
      this.addShapeList(e, t),
      this.computeFaceNormals())
  }
  function ji(e, t) {
      t = t || {};
      var i = t.font;
      return !1 === (i && i.isFont) ? (console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
      new wt) : (i = i.generateShapes(e, t.size, t.curveSegments),
      t.amount = void 0 !== t.height ? t.height : 50,
      void 0 === t.bevelThickness && (t.bevelThickness = 10),
      void 0 === t.bevelSize && (t.bevelSize = 8),
      void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
      ki.call(this, i, t),
      void (this.type = "TextGeometry"))
  }
  function Wi(e, t, i, n, r, o, a) {
      wt.call(this),
      this.type = "SphereGeometry",
      this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: i,
          phiStart: n,
          phiLength: r,
          thetaStart: o,
          thetaLength: a
      },
      this.fromBufferGeometry(new Xi(e,t,i,n,r,o,a))
  }
  function Xi(e, t, i, n, r, o, a) {
      Et.call(this),
      this.type = "SphereBufferGeometry",
      this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: i,
          phiStart: n,
          phiLength: r,
          thetaStart: o,
          thetaLength: a
      },
      e = e || 50,
      t = Math.max(3, Math.floor(t) || 8),
      i = Math.max(2, Math.floor(i) || 6),
      n = void 0 !== n ? n : 0,
      r = void 0 !== r ? r : 2 * Math.PI,
      o = void 0 !== o ? o : 0,
      a = void 0 !== a ? a : Math.PI;
      var s, h, l = o + a, u = 0, p = [], d = new c, f = new c, m = [], g = [], v = [], y = [];
      for (h = 0; i >= h; h++) {
          var x = []
            , b = h / i;
          for (s = 0; t >= s; s++) {
              var _ = s / t;
              d.x = -e * Math.cos(n + _ * r) * Math.sin(o + b * a),
              d.y = e * Math.cos(o + b * a),
              d.z = e * Math.sin(n + _ * r) * Math.sin(o + b * a),
              g.push(d.x, d.y, d.z),
              f.set(d.x, d.y, d.z).normalize(),
              v.push(f.x, f.y, f.z),
              y.push(_, 1 - b),
              x.push(u++)
          }
          p.push(x)
      }
      for (h = 0; i > h; h++)
          for (s = 0; t > s; s++)
              e = p[h][s + 1],
              n = p[h][s],
              r = p[h + 1][s],
              a = p[h + 1][s + 1],
              (0 !== h || o > 0) && m.push(e, n, a),
              (h !== i - 1 || l < Math.PI) && m.push(n, r, a);
      this.setIndex(m),
      this.addAttribute("position", new yt(g,3)),
      this.addAttribute("normal", new yt(v,3)),
      this.addAttribute("uv", new yt(y,2))
  }
  function qi(e, t, i, n, r, o) {
      wt.call(this),
      this.type = "RingGeometry",
      this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: i,
          phiSegments: n,
          thetaStart: r,
          thetaLength: o
      },
      this.fromBufferGeometry(new Yi(e,t,i,n,r,o))
  }
  function Yi(e, t, n, r, o, a) {
      Et.call(this),
      this.type = "RingBufferGeometry",
      this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: n,
          phiSegments: r,
          thetaStart: o,
          thetaLength: a
      },
      e = e || 20,
      t = t || 50,
      o = void 0 !== o ? o : 0,
      a = void 0 !== a ? a : 2 * Math.PI,
      n = void 0 !== n ? Math.max(3, n) : 8,
      r = void 0 !== r ? Math.max(1, r) : 1;
      var s, h, l = [], u = [], p = [], d = [], f = e, m = (t - e) / r, g = new c, v = new i;
      for (s = 0; r >= s; s++) {
          for (h = 0; n >= h; h++)
              e = o + h / n * a,
              g.x = f * Math.cos(e),
              g.y = f * Math.sin(e),
              u.push(g.x, g.y, g.z),
              p.push(0, 0, 1),
              v.x = (g.x / t + 1) / 2,
              v.y = (g.y / t + 1) / 2,
              d.push(v.x, v.y);
          f += m
      }
      for (s = 0; r > s; s++)
          for (t = s * (n + 1),
          h = 0; n > h; h++)
              e = h + t,
              o = e + n + 1,
              a = e + n + 2,
              f = e + 1,
              l.push(e, o, f),
              l.push(o, a, f);
      this.setIndex(l),
      this.addAttribute("position", new yt(u,3)),
      this.addAttribute("normal", new yt(p,3)),
      this.addAttribute("uv", new yt(d,2))
  }
  function Zi(e, t, i, n) {
      wt.call(this),
      this.type = "LatheGeometry",
      this.parameters = {
          points: e,
          segments: t,
          phiStart: i,
          phiLength: n
      },
      this.fromBufferGeometry(new Ji(e,t,i,n)),
      this.mergeVertices()
  }
  function Ji(e, t, n, r) {
      Et.call(this),
      this.type = "LatheBufferGeometry",
      this.parameters = {
          points: e,
          segments: t,
          phiStart: n,
          phiLength: r
      },
      t = Math.floor(t) || 12,
      n = n || 0,
      r = r || 2 * Math.PI,
      r = ho.clamp(r, 0, 2 * Math.PI);
      var o, a, s = [], h = [], l = [], u = 1 / t, p = new c, d = new i;
      for (o = 0; t >= o; o++) {
          a = n + o * u * r;
          var f = Math.sin(a)
            , m = Math.cos(a);
          for (a = 0; a <= e.length - 1; a++)
              p.x = e[a].x * f,
              p.y = e[a].y,
              p.z = e[a].x * m,
              h.push(p.x, p.y, p.z),
              d.x = o / t,
              d.y = a / (e.length - 1),
              l.push(d.x, d.y)
      }
      for (o = 0; t > o; o++)
          for (a = 0; a < e.length - 1; a++)
              n = a + o * e.length,
              u = n + e.length,
              p = n + e.length + 1,
              d = n + 1,
              s.push(n, u, d),
              s.push(u, p, d);
      if (this.setIndex(s),
      this.addAttribute("position", new yt(h,3)),
      this.addAttribute("uv", new yt(l,2)),
      this.computeVertexNormals(),
      r === 2 * Math.PI)
          for (r = this.attributes.normal.array,
          s = new c,
          h = new c,
          l = new c,
          n = t * e.length * 3,
          a = o = 0; o < e.length; o++,
          a += 3)
              s.x = r[a + 0],
              s.y = r[a + 1],
              s.z = r[a + 2],
              h.x = r[n + a + 0],
              h.y = r[n + a + 1],
              h.z = r[n + a + 2],
              l.addVectors(s, h).normalize(),
              r[a + 0] = r[n + a + 0] = l.x,
              r[a + 1] = r[n + a + 1] = l.y,
              r[a + 2] = r[n + a + 2] = l.z
  }
  function Qi(e, t) {
      wt.call(this),
      this.type = "ShapeGeometry",
      "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
      t = t.curveSegments),
      this.parameters = {
          shapes: e,
          curveSegments: t
      },
      this.fromBufferGeometry(new Ki(e,t)),
      this.mergeVertices()
  }
  function Ki(e, t) {
      function i(e) {
          var i, s, h = r.length / 3;
          e = e.extractPoints(t);
          var l = e.shape
            , u = e.holes;
          if (!1 === So.isClockWise(l))
              for (l = l.reverse(),
              e = 0,
              i = u.length; i > e; e++)
                  s = u[e],
                  !0 === So.isClockWise(s) && (u[e] = s.reverse());
          var p = So.triangulateShape(l, u);
          for (e = 0,
          i = u.length; i > e; e++)
              s = u[e],
              l = l.concat(s);
          for (e = 0,
          i = l.length; i > e; e++)
              s = l[e],
              r.push(s.x, s.y, 0),
              o.push(0, 0, 1),
              a.push(s.x, s.y);
          for (e = 0,
          i = p.length; i > e; e++)
              l = p[e],
              n.push(l[0] + h, l[1] + h, l[2] + h),
              c += 3
      }
      Et.call(this),
      this.type = "ShapeBufferGeometry",
      this.parameters = {
          shapes: e,
          curveSegments: t
      },
      t = t || 12;
      var n = []
        , r = []
        , o = []
        , a = []
        , s = 0
        , c = 0;
      if (!1 === Array.isArray(e))
          i(e);
      else
          for (var h = 0; h < e.length; h++)
              i(e[h]),
              this.addGroup(s, c, h),
              s += c,
              c = 0;
      this.setIndex(n),
      this.addAttribute("position", new yt(r,3)),
      this.addAttribute("normal", new yt(o,3)),
      this.addAttribute("uv", new yt(a,2))
  }
  function $i(e, t) {
      function i(e, t) {
          return e - t
      }
      Et.call(this),
      this.type = "EdgesGeometry",
      this.parameters = {
          thresholdAngle: t
      };
      var n, r, o = [], a = Math.cos(ho.DEG2RAD * (void 0 !== t ? t : 1)), s = [0, 0], c = {}, h = ["a", "b", "c"];
      e.isBufferGeometry ? (r = new wt,
      r.fromBufferGeometry(e)) : r = e.clone(),
      r.mergeVertices(),
      r.computeFaceNormals();
      var l = r.vertices;
      r = r.faces;
      for (var u = 0, p = r.length; p > u; u++)
          for (var d = r[u], f = 0; 3 > f; f++)
              s[0] = d[h[f]],
              s[1] = d[h[(f + 1) % 3]],
              s.sort(i),
              n = s.toString(),
              void 0 === c[n] ? c[n] = {
                  index1: s[0],
                  index2: s[1],
                  face1: u,
                  face2: void 0
              } : c[n].face2 = u;
      for (n in c)
          s = c[n],
          (void 0 === s.face2 || r[s.face1].normal.dot(r[s.face2].normal) <= a) && (h = l[s.index1],
          o.push(h.x, h.y, h.z),
          h = l[s.index2],
          o.push(h.x, h.y, h.z));
      this.addAttribute("position", new yt(o,3))
  }
  function en(e, t, i, n, r, o, a, s) {
      wt.call(this),
      this.type = "CylinderGeometry",
      this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: i,
          radialSegments: n,
          heightSegments: r,
          openEnded: o,
          thetaStart: a,
          thetaLength: s
      },
      this.fromBufferGeometry(new tn(e,t,i,n,r,o,a,s)),
      this.mergeVertices()
  }
  function tn(e, t, n, r, o, a, s, h) {
      function l(n) {
          var o, a, l, v = new i, b = new c, _ = 0, w = !0 === n ? e : t, E = !0 === n ? 1 : -1;
          for (a = g,
          o = 1; r >= o; o++)
              d.push(0, y * E, 0),
              f.push(0, E, 0),
              m.push(.5, .5),
              g++;
          for (l = g,
          o = 0; r >= o; o++) {
              var M = o / r * h + s
                , T = Math.cos(M)
                , M = Math.sin(M);
              b.x = w * M,
              b.y = y * E,
              b.z = w * T,
              d.push(b.x, b.y, b.z),
              f.push(0, E, 0),
              v.x = .5 * T + .5,
              v.y = .5 * M * E + .5,
              m.push(v.x, v.y),
              g++
          }
          for (o = 0; r > o; o++)
              v = a + o,
              b = l + o,
              !0 === n ? p.push(b, b + 1, v) : p.push(b + 1, b, v),
              _ += 3;
          u.addGroup(x, _, !0 === n ? 1 : 2),
          x += _
      }
      Et.call(this),
      this.type = "CylinderBufferGeometry",
      this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: n,
          radialSegments: r,
          heightSegments: o,
          openEnded: a,
          thetaStart: s,
          thetaLength: h
      };
      var u = this;
      e = void 0 !== e ? e : 20,
      t = void 0 !== t ? t : 20,
      n = void 0 !== n ? n : 100,
      r = Math.floor(r) || 8,
      o = Math.floor(o) || 1,
      a = void 0 !== a ? a : !1,
      s = void 0 !== s ? s : 0,
      h = void 0 !== h ? h : 2 * Math.PI;
      var p = []
        , d = []
        , f = []
        , m = []
        , g = 0
        , v = []
        , y = n / 2
        , x = 0;
      !function() {
          var i, a, l = new c, b = new c, _ = 0, w = (t - e) / n;
          for (a = 0; o >= a; a++) {
              var E = []
                , M = a / o
                , T = M * (t - e) + e;
              for (i = 0; r >= i; i++) {
                  var S = i / r
                    , A = S * h + s
                    , R = Math.sin(A)
                    , A = Math.cos(A);
                  b.x = T * R,
                  b.y = -M * n + y,
                  b.z = T * A,
                  d.push(b.x, b.y, b.z),
                  l.set(R, w, A).normalize(),
                  f.push(l.x, l.y, l.z),
                  m.push(S, 1 - M),
                  E.push(g++)
              }
              v.push(E)
          }
          for (i = 0; r > i; i++)
              for (a = 0; o > a; a++)
                  l = v[a + 1][i],
                  b = v[a + 1][i + 1],
                  w = v[a][i + 1],
                  p.push(v[a][i], l, w),
                  p.push(l, b, w),
                  _ += 6;
          u.addGroup(x, _, 0),
          x += _
      }(),
      !1 === a && (e > 0 && l(!0),
      t > 0 && l(!1)),
      this.setIndex(p),
      this.addAttribute("position", new yt(d,3)),
      this.addAttribute("normal", new yt(f,3)),
      this.addAttribute("uv", new yt(m,2))
  }
  function nn(e, t, i, n, r, o, a) {
      en.call(this, 0, e, t, i, n, r, o, a),
      this.type = "ConeGeometry",
      this.parameters = {
          radius: e,
          height: t,
          radialSegments: i,
          heightSegments: n,
          openEnded: r,
          thetaStart: o,
          thetaLength: a
      }
  }
  function rn(e, t, i, n, r, o, a) {
      tn.call(this, 0, e, t, i, n, r, o, a),
      this.type = "ConeBufferGeometry",
      this.parameters = {
          radius: e,
          height: t,
          radialSegments: i,
          heightSegments: n,
          openEnded: r,
          thetaStart: o,
          thetaLength: a
      }
  }
  function on(e, t, i, n) {
      wt.call(this),
      this.type = "CircleGeometry",
      this.parameters = {
          radius: e,
          segments: t,
          thetaStart: i,
          thetaLength: n
      },
      this.fromBufferGeometry(new an(e,t,i,n))
  }
  function an(e, t, n, r) {
      Et.call(this),
      this.type = "CircleBufferGeometry",
      this.parameters = {
          radius: e,
          segments: t,
          thetaStart: n,
          thetaLength: r
      },
      e = e || 50,
      t = void 0 !== t ? Math.max(3, t) : 8,
      n = void 0 !== n ? n : 0,
      r = void 0 !== r ? r : 2 * Math.PI;
      var o, a, s = [], h = [], l = [], u = [], p = new c, d = new i;
      for (h.push(0, 0, 0),
      l.push(0, 0, 1),
      u.push(.5, .5),
      a = 0,
      o = 3; t >= a; a++,
      o += 3) {
          var f = n + a / t * r;
          p.x = e * Math.cos(f),
          p.y = e * Math.sin(f),
          h.push(p.x, p.y, p.z),
          l.push(0, 0, 1),
          d.x = (h[o] / e + 1) / 2,
          d.y = (h[o + 1] / e + 1) / 2,
          u.push(d.x, d.y)
      }
      for (o = 1; t >= o; o++)
          s.push(o, o + 1, 0);
      this.setIndex(s),
      this.addAttribute("position", new yt(h,3)),
      this.addAttribute("normal", new yt(l,3)),
      this.addAttribute("uv", new yt(u,2))
  }
  function sn() {
      Y.call(this, {
          uniforms: vo.merge([bo.lights, {
              opacity: {
                  value: 1
              }
          }]),
          vertexShader: yo.shadow_vert,
          fragmentShader: yo.shadow_frag
      }),
      this.transparent = this.lights = !0,
      Object.defineProperties(this, {
          opacity: {
              enumerable: !0,
              get: function() {
                  return this.uniforms.opacity.value
              },
              set: function(e) {
                  this.uniforms.opacity.value = e
              }
          }
      })
  }
  function cn(e) {
      Y.call(this, e),
      this.type = "RawShaderMaterial"
  }
  function hn(e) {
      this.uuid = ho.generateUUID(),
      this.type = "MultiMaterial",
      this.materials = Array.isArray(e) ? e : [],
      this.visible = !0
  }
  function ln(e) {
      q.call(this),
      this.defines = {
          STANDARD: ""
      },
      this.type = "MeshStandardMaterial",
      this.color = new V(16777215),
      this.metalness = this.roughness = .5,
      this.lightMap = this.map = null,
      this.lightMapIntensity = 1,
      this.aoMap = null,
      this.aoMapIntensity = 1,
      this.emissive = new V(0),
      this.emissiveIntensity = 1,
      this.bumpMap = this.emissiveMap = null,
      this.bumpScale = 1,
      this.normalMap = null,
      this.normalScale = new i(1,1),
      this.displacementMap = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null,
      this.envMapIntensity = 1,
      this.refractionRatio = .98,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinejoin = this.wireframeLinecap = "round",
      this.morphNormals = this.morphTargets = this.skinning = !1,
      this.setValues(e)
  }
  function un(e) {
      ln.call(this),
      this.defines = {
          PHYSICAL: ""
      },
      this.type = "MeshPhysicalMaterial",
      this.reflectivity = .5,
      this.clearCoatRoughness = this.clearCoat = 0,
      this.setValues(e)
  }
  function pn(e) {
      q.call(this),
      this.type = "MeshPhongMaterial",
      this.color = new V(16777215),
      this.specular = new V(1118481),
      this.shininess = 30,
      this.lightMap = this.map = null,
      this.lightMapIntensity = 1,
      this.aoMap = null,
      this.aoMapIntensity = 1,
      this.emissive = new V(0),
      this.emissiveIntensity = 1,
      this.bumpMap = this.emissiveMap = null,
      this.bumpScale = 1,
      this.normalMap = null,
      this.normalScale = new i(1,1),
      this.displacementMap = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.envMap = this.alphaMap = this.specularMap = null,
      this.combine = 0,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinejoin = this.wireframeLinecap = "round",
      this.morphNormals = this.morphTargets = this.skinning = !1,
      this.setValues(e)
  }
  function dn(e) {
      pn.call(this),
      this.defines = {
          TOON: ""
      },
      this.type = "MeshToonMaterial",
      this.gradientMap = null,
      this.setValues(e)
  }
  function fn(e) {
      q.call(this, e),
      this.type = "MeshNormalMaterial",
      this.bumpMap = null,
      this.bumpScale = 1,
      this.normalMap = null,
      this.normalScale = new i(1,1),
      this.displacementMap = null,
      this.displacementScale = 1,
      this.displacementBias = 0,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1,
      this.setValues(e)
  }
  function mn(e) {
      q.call(this),
      this.type = "MeshLambertMaterial",
      this.color = new V(16777215),
      this.lightMap = this.map = null,
      this.lightMapIntensity = 1,
      this.aoMap = null,
      this.aoMapIntensity = 1,
      this.emissive = new V(0),
      this.emissiveIntensity = 1,
      this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null,
      this.combine = 0,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinejoin = this.wireframeLinecap = "round",
      this.morphNormals = this.morphTargets = this.skinning = !1,
      this.setValues(e)
  }
  function gn(e) {
      q.call(this),
      this.type = "LineDashedMaterial",
      this.color = new V(16777215),
      this.scale = this.linewidth = 1,
      this.dashSize = 3,
      this.gapSize = 1,
      this.lights = !1,
      this.setValues(e)
  }
  function vn(e, t, i) {
      var n = this
        , r = !1
        , o = 0
        , a = 0;
      this.onStart = void 0,
      this.onLoad = e,
      this.onProgress = t,
      this.onError = i,
      this.itemStart = function(e) {
          a++,
          !1 === r && void 0 !== n.onStart && n.onStart(e, o, a),
          r = !0
      }
      ,
      this.itemEnd = function(e) {
          o++,
          void 0 !== n.onProgress && n.onProgress(e, o, a),
          o === a && (r = !1,
          void 0 !== n.onLoad) && n.onLoad()
      }
      ,
      this.itemError = function(e) {
          void 0 !== n.onError && n.onError(e)
      }
  }
  function yn(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function xn(e) {
      this.manager = void 0 !== e ? e : Po,
      this._parser = null
  }
  function bn(e) {
      this.manager = void 0 !== e ? e : Po,
      this._parser = null
  }
  function _n(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function wn(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function En(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function Mn(e, t) {
      ot.call(this),
      this.type = "Light",
      this.color = new V(e),
      this.intensity = void 0 !== t ? t : 1,
      this.receiveShadow = void 0
  }
  function Tn(e, t, i) {
      Mn.call(this, e, i),
      this.type = "HemisphereLight",
      this.castShadow = void 0,
      this.position.copy(ot.DefaultUp),
      this.updateMatrix(),
      this.groundColor = new V(t)
  }
  function Sn(e) {
      this.camera = e,
      this.bias = 0,
      this.radius = 1,
      this.mapSize = new i(512,512),
      this.map = null,
      this.matrix = new h
  }
  function An() {
      Sn.call(this, new Pt(50,1,.5,500))
  }
  function Rn(e, t, i, n, r, o) {
      Mn.call(this, e, t),
      this.type = "SpotLight",
      this.position.copy(ot.DefaultUp),
      this.updateMatrix(),
      this.target = new ot,
      Object.defineProperty(this, "power", {
          get: function() {
              return this.intensity * Math.PI
          },
          set: function(e) {
              this.intensity = e / Math.PI
          }
      }),
      this.distance = void 0 !== i ? i : 0,
      this.angle = void 0 !== n ? n : Math.PI / 3,
      this.penumbra = void 0 !== r ? r : 0,
      this.decay = void 0 !== o ? o : 1,
      this.shadow = new An
  }
  function Ln(e, t, i, n) {
      Mn.call(this, e, t),
      this.type = "PointLight",
      Object.defineProperty(this, "power", {
          get: function() {
              return 4 * this.intensity * Math.PI
          },
          set: function(e) {
              this.intensity = e / (4 * Math.PI)
          }
      }),
      this.distance = void 0 !== i ? i : 0,
      this.decay = void 0 !== n ? n : 1,
      this.shadow = new Sn(new Pt(90,1,.5,500))
  }
  function Pn() {
      Sn.call(this, new Ct(-5,5,5,-5,.5,500))
  }
  function Cn(e, t) {
      Mn.call(this, e, t),
      this.type = "DirectionalLight",
      this.position.copy(ot.DefaultUp),
      this.updateMatrix(),
      this.target = new ot,
      this.shadow = new Pn
  }
  function In(e, t) {
      Mn.call(this, e, t),
      this.type = "AmbientLight",
      this.castShadow = void 0
  }
  function Un(e, t, i, n) {
      this.parameterPositions = e,
      this._cachedIndex = 0,
      this.resultBuffer = void 0 !== n ? n : new t.constructor(i),
      this.sampleValues = t,
      this.valueSize = i
  }
  function Nn(e, t, i, n) {
      Un.call(this, e, t, i, n),
      this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
  }
  function Dn(e, t, i, n) {
      Un.call(this, e, t, i, n)
  }
  function On(e, t, i, n) {
      Un.call(this, e, t, i, n)
  }
  function Bn(e, t, i, n) {
      if (void 0 === e)
          throw Error("track name is undefined");
      if (void 0 === t || 0 === t.length)
          throw Error("no keyframes in track named " + e);
      this.name = e,
      this.times = Co.convertArray(t, this.TimeBufferType),
      this.values = Co.convertArray(i, this.ValueBufferType),
      this.setInterpolation(n || this.DefaultInterpolation),
      this.validate(),
      this.optimize()
  }
  function Fn(e, t, i, n) {
      Bn.call(this, e, t, i, n)
  }
  function zn(e, t, i, n) {
      Un.call(this, e, t, i, n)
  }
  function Hn(e, t, i, n) {
      Bn.call(this, e, t, i, n)
  }
  function Gn(e, t, i, n) {
      Bn.call(this, e, t, i, n)
  }
  function Vn(e, t, i, n) {
      Bn.call(this, e, t, i, n)
  }
  function kn(e, t, i) {
      Bn.call(this, e, t, i)
  }
  function jn(e, t, i, n) {
      Bn.call(this, e, t, i, n)
  }
  function Wn() {
      Bn.apply(this, arguments)
  }
  function Xn(e, t, i) {
      this.name = e,
      this.tracks = i,
      this.duration = void 0 !== t ? t : -1,
      this.uuid = ho.generateUUID(),
      0 > this.duration && this.resetDuration(),
      this.optimize()
  }
  function qn(e) {
      this.manager = void 0 !== e ? e : Po,
      this.textures = {}
  }
  function Yn(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function Zn() {
      this.onLoadStart = function() {}
      ,
      this.onLoadProgress = function() {}
      ,
      this.onLoadComplete = function() {}
  }
  function Jn(e) {
      "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
      e = void 0),
      this.manager = void 0 !== e ? e : Po,
      this.withCredentials = !1
  }
  function Qn(e) {
      this.manager = void 0 !== e ? e : Po,
      this.texturePath = ""
  }
  function Kn(e, t, i, n, r) {
      t = .5 * (n - t),
      r = .5 * (r - i);
      var o = e * e;
      return (2 * i - 2 * n + t + r) * e * o + (-3 * i + 3 * n - 2 * t - r) * o + t * e + i
  }
  function $n(e, t, i, n) {
      var r = 1 - e;
      return r * r * t + 2 * (1 - e) * e * i + e * e * n
  }
  function er(e, t, i, n, r) {
      var o = 1 - e
        , a = 1 - e;
      return o * o * o * t + 3 * a * a * e * i + 3 * (1 - e) * e * e * n + e * e * e * r
  }
  function tr() {}
  function ir(e, t) {
      this.v1 = e,
      this.v2 = t
  }
  function nr() {
      this.curves = [],
      this.autoClose = !1
  }
  function rr(e, t, i, n, r, o, a, s) {
      this.aX = e,
      this.aY = t,
      this.xRadius = i,
      this.yRadius = n,
      this.aStartAngle = r,
      this.aEndAngle = o,
      this.aClockwise = a,
      this.aRotation = s || 0
  }
  function or(e) {
      this.points = void 0 === e ? [] : e
  }
  function ar(e, t, i, n) {
      this.v0 = e,
      this.v1 = t,
      this.v2 = i,
      this.v3 = n
  }
  function sr(e, t, i) {
      this.v0 = e,
      this.v1 = t,
      this.v2 = i
  }
  function cr(e) {
      nr.call(this),
      this.currentPoint = new i,
      e && this.fromPoints(e)
  }
  function hr() {
      cr.apply(this, arguments),
      this.holes = []
  }
  function lr() {
      this.subPaths = [],
      this.currentPath = null
  }
  function ur(e) {
      this.data = e
  }
  function pr(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function dr(e) {
      this.manager = void 0 !== e ? e : Po
  }
  function fr(e, t, i, n) {
      Mn.call(this, e, t),
      this.type = "RectAreaLight",
      this.position.set(0, 1, 0),
      this.updateMatrix(),
      this.width = void 0 !== i ? i : 10,
      this.height = void 0 !== n ? n : 10
  }
  function mr() {
      this.type = "StereoCamera",
      this.aspect = 1,
      this.eyeSep = .064,
      this.cameraL = new Pt,
      this.cameraL.layers.enable(1),
      this.cameraL.matrixAutoUpdate = !1,
      this.cameraR = new Pt,
      this.cameraR.layers.enable(2),
      this.cameraR.matrixAutoUpdate = !1
  }
  function gr(e, t, i) {
      ot.call(this),
      this.type = "CubeCamera";
      var n = new Pt(90,1,e,t);
      n.up.set(0, -1, 0),
      n.lookAt(new c(1,0,0)),
      this.add(n);
      var r = new Pt(90,1,e,t);
      r.up.set(0, -1, 0),
      r.lookAt(new c(-1,0,0)),
      this.add(r);
      var o = new Pt(90,1,e,t);
      o.up.set(0, 0, 1),
      o.lookAt(new c(0,1,0)),
      this.add(o);
      var s = new Pt(90,1,e,t);
      s.up.set(0, 0, -1),
      s.lookAt(new c(0,-1,0)),
      this.add(s);
      var h = new Pt(90,1,e,t);
      h.up.set(0, -1, 0),
      h.lookAt(new c(0,0,1)),
      this.add(h);
      var l = new Pt(90,1,e,t);
      l.up.set(0, -1, 0),
      l.lookAt(new c(0,0,-1)),
      this.add(l),
      this.renderTarget = new a(i,i,{
          format: 1022,
          magFilter: 1006,
          minFilter: 1006
      }),
      this.updateCubeMap = function(e, t) {
          null === this.parent && this.updateMatrixWorld();
          var i = this.renderTarget
            , a = i.texture.generateMipmaps;
          i.texture.generateMipmaps = !1,
          i.activeCubeFace = 0,
          e.render(t, n, i),
          i.activeCubeFace = 1,
          e.render(t, r, i),
          i.activeCubeFace = 2,
          e.render(t, o, i),
          i.activeCubeFace = 3,
          e.render(t, s, i),
          i.activeCubeFace = 4,
          e.render(t, h, i),
          i.texture.generateMipmaps = a,
          i.activeCubeFace = 5,
          e.render(t, l, i),
          e.setRenderTarget(null)
      }
  }
  function vr() {
      ot.call(this),
      this.type = "AudioListener",
      this.context = Do.getContext(),
      this.gain = this.context.createGain(),
      this.gain.connect(this.context.destination),
      this.filter = null
  }
  function yr(e) {
      ot.call(this),
      this.type = "Audio",
      this.context = e.context,
      this.gain = this.context.createGain(),
      this.gain.connect(e.getInput()),
      this.autoplay = !1,
      this.buffer = null,
      this.loop = !1,
      this.startTime = 0,
      this.playbackRate = 1,
      this.isPlaying = !1,
      this.hasPlaybackControl = !0,
      this.sourceType = "empty",
      this.filters = []
  }
  function xr(e) {
      yr.call(this, e),
      this.panner = this.context.createPanner(),
      this.panner.connect(this.gain)
  }
  function br(e, t) {
      this.analyser = e.context.createAnalyser(),
      this.analyser.fftSize = void 0 !== t ? t : 2048,
      this.data = new Uint8Array(this.analyser.frequencyBinCount),
      e.getOutput().connect(this.analyser)
  }
  function _r(e, t, i) {
      switch (this.binding = e,
      this.valueSize = i,
      e = Float64Array,
      t) {
      case "quaternion":
          t = this._slerp;
          break;
      case "string":
      case "bool":
          e = Array,
          t = this._select;
          break;
      default:
          t = this._lerp
      }
      this.buffer = new e(4 * i),
      this._mixBufferRegion = t,
      this.referenceCount = this.useCount = this.cumulativeWeight = 0
  }
  function wr(e, t, i) {
      this.path = t,
      this.parsedPath = i || wr.parseTrackName(t),
      this.node = wr.findNode(e, this.parsedPath.nodeName) || e,
      this.rootNode = e
  }
  function Er() {
      this.uuid = ho.generateUUID(),
      this._objects = Array.prototype.slice.call(arguments),
      this.nCachedObjects_ = 0;
      var e = {};
      this._indicesByUUID = e;
      for (var t = 0, i = arguments.length; t !== i; ++t)
          e[arguments[t].uuid] = t;
      this._paths = [],
      this._parsedPaths = [],
      this._bindings = [],
      this._bindingsIndicesByPath = {};
      var n = this;
      this.stats = {
          objects: {
              get total() {
                  return n._objects.length
              },
              get inUse() {
                  return this.total - n.nCachedObjects_
              }
          },
          get bindingsPerObject() {
              return n._bindings.length
          }
      }
  }
  function Mr(e, t, i) {
      this._mixer = e,
      this._clip = t,
      this._localRoot = i || null,
      e = t.tracks,
      t = e.length,
      i = Array(t);
      for (var n = {
          endingStart: 2400,
          endingEnd: 2400
      }, r = 0; r !== t; ++r) {
          var o = e[r].createInterpolant(null);
          i[r] = o,
          o.settings = n
      }
      this._interpolantSettings = n,
      this._interpolants = i,
      this._propertyBindings = Array(t),
      this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null,
      this.loop = 2201,
      this._loopCount = -1,
      this._startTime = null,
      this.time = 0,
      this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1,
      this.repetitions = 1 / 0,
      this.paused = !1,
      this.enabled = !0,
      this.clampWhenFinished = !1,
      this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
  }
  function Tr(e) {
      this._root = e,
      this._initMemoryManager(),
      this.time = this._accuIndex = 0,
      this.timeScale = 1
  }
  function Sr(e, t) {
      "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
      e = t),
      this.value = e
  }
  function Ar() {
      Et.call(this),
      this.type = "InstancedBufferGeometry",
      this.maxInstancedCount = void 0
  }
  function Rr(e, t, i, n) {
      this.uuid = ho.generateUUID(),
      this.data = e,
      this.itemSize = t,
      this.offset = i,
      this.normalized = !0 === n
  }
  function Lr(e, t) {
      this.uuid = ho.generateUUID(),
      this.array = e,
      this.stride = t,
      this.count = void 0 !== e ? e.length / t : 0,
      this.dynamic = !1,
      this.updateRange = {
          offset: 0,
          count: -1
      },
      this.onUploadCallback = function() {}
      ,
      this.version = 0
  }
  function Pr(e, t, i) {
      Lr.call(this, e, t),
      this.meshPerAttribute = i || 1
  }
  function Cr(e, t, i) {
      lt.call(this, e, t),
      this.meshPerAttribute = i || 1
  }
  function Ir(e, t, i, n) {
      this.ray = new it(e,t),
      this.near = i || 0,
      this.far = n || 1 / 0,
      this.params = {
          Mesh: {},
          Line: {},
          LOD: {},
          Points: {
              threshold: 1
          },
          Sprite: {}
      },
      Object.defineProperties(this.params, {
          PointCloud: {
              get: function() {
                  return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                  this.Points
              }
          }
      })
  }
  function Ur(e, t) {
      return e.distance - t.distance
  }
  function Nr(e, t, i, n) {
      if (!1 !== e.visible && (e.raycast(t, i),
      !0 === n)) {
          e = e.children,
          n = 0;
          for (var r = e.length; r > n; n++)
              Nr(e[n], t, i, !0)
      }
  }
  function Dr(e) {
      this.autoStart = void 0 !== e ? e : !0,
      this.elapsedTime = this.oldTime = this.startTime = 0,
      this.running = !1
  }
  function Or(e, t, i) {
      return this.radius = void 0 !== e ? e : 1,
      this.phi = void 0 !== t ? t : 0,
      this.theta = void 0 !== i ? i : 0,
      this
  }
  function Br(e, t, i) {
      return this.radius = void 0 !== e ? e : 1,
      this.theta = void 0 !== t ? t : 0,
      this.y = void 0 !== i ? i : 0,
      this
  }
  function Fr(e, t) {
      Mt.call(this, e, t),
      this.animationsMap = {},
      this.animationsList = [];
      var i = this.geometry.morphTargets.length;
      this.createAnimation("__default", 0, i - 1, i / 1),
      this.setAnimationWeight("__default", 1)
  }
  function zr(e) {
      ot.call(this),
      this.material = e,
      this.render = function() {}
  }
  function Hr(e, t, i, n) {
      this.object = e,
      this.size = void 0 !== t ? t : 1,
      e = void 0 !== i ? i : 16711680,
      n = void 0 !== n ? n : 1,
      t = 0,
      (i = this.object.geometry) && i.isGeometry ? t = 3 * i.faces.length : i && i.isBufferGeometry && (t = i.attributes.normal.count),
      i = new Et,
      t = new yt(6 * t,3),
      i.addAttribute("position", t),
      gi.call(this, i, new fi({
          color: e,
          linewidth: n
      })),
      this.matrixAutoUpdate = !1,
      this.update()
  }
  function Gr(e) {
      ot.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrix = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      e = new Et;
      for (var t = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, n = 1; 32 > i; i++,
      n++) {
          var r = i / 32 * Math.PI * 2
            , o = n / 32 * Math.PI * 2;
          t.push(Math.cos(r), Math.sin(r), 1, Math.cos(o), Math.sin(o), 1)
      }
      e.addAttribute("position", new yt(t,3)),
      t = new fi({
          fog: !1
      }),
      this.cone = new gi(e,t),
      this.add(this.cone),
      this.update()
  }
  function Vr(e) {
      this.bones = this.getBoneList(e);
      for (var t = new Et, i = [], n = [], r = new V(0,0,1), o = new V(0,1,0), a = 0; a < this.bones.length; a++) {
          var s = this.bones[a];
          s.parent && s.parent.isBone && (i.push(0, 0, 0),
          i.push(0, 0, 0),
          n.push(r.r, r.g, r.b),
          n.push(o.r, o.g, o.b))
      }
      t.addAttribute("position", new yt(i,3)),
      t.addAttribute("color", new yt(n,3)),
      i = new fi({
          vertexColors: 2,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0
      }),
      gi.call(this, t, i),
      this.root = e,
      this.matrix = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      this.update()
  }
  function kr(e, t) {
      this.light = e,
      this.light.updateMatrixWorld();
      var i = new Xi(t,4,2)
        , n = new ht({
          wireframe: !0,
          fog: !1
      });
      n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
      Mt.call(this, i, n),
      this.matrix = this.light.matrixWorld,
      this.matrixAutoUpdate = !1
  }
  function jr(e) {
      ot.call(this),
      this.light = e,
      this.light.updateMatrixWorld();
      var t = new ht({
          color: e.color,
          fog: !1
      });
      e = new ht({
          color: e.color,
          fog: !1,
          wireframe: !0
      });
      var i = new Et;
      i.addAttribute("position", new lt(new Float32Array(18),3)),
      this.add(new Mt(i,t)),
      this.add(new Mt(i,e)),
      this.update()
  }
  function Wr(e, t) {
      ot.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrix = e.matrixWorld,
      this.matrixAutoUpdate = !1;
      var i = new Ii(t);
      i.rotateY(.5 * Math.PI);
      var n = new ht({
          vertexColors: 2,
          wireframe: !0
      })
        , r = i.getAttribute("position")
        , r = new Float32Array(3 * r.count);
      i.addAttribute("color", new lt(r,3)),
      this.add(new Mt(i,n)),
      this.update()
  }
  function Xr(e, t, i, n) {
      e = e || 10,
      t = t || 10,
      i = new V(void 0 !== i ? i : 4473924),
      n = new V(void 0 !== n ? n : 8947848);
      var r = t / 2
        , o = e / t
        , a = e / 2;
      e = [];
      for (var s = [], c = 0, h = 0, l = -a; t >= c; c++,
      l += o) {
          e.push(-a, 0, l, a, 0, l),
          e.push(l, 0, -a, l, 0, a);
          var u = c === r ? i : n;
          u.toArray(s, h),
          h += 3,
          u.toArray(s, h),
          h += 3,
          u.toArray(s, h),
          h += 3,
          u.toArray(s, h),
          h += 3
      }
      t = new Et,
      t.addAttribute("position", new yt(e,3)),
      t.addAttribute("color", new yt(s,3)),
      i = new fi({
          vertexColors: 2
      }),
      gi.call(this, t, i)
  }
  function qr(e, t, i, n, r, o) {
      e = e || 10,
      t = t || 16,
      i = i || 8,
      n = n || 64,
      r = new V(void 0 !== r ? r : 4473924),
      o = new V(void 0 !== o ? o : 8947848);
      var a, s, c, h, l, u = [], p = [];
      for (c = 0; t >= c; c++)
          s = c / t * 2 * Math.PI,
          a = Math.sin(s) * e,
          s = Math.cos(s) * e,
          u.push(0, 0, 0),
          u.push(a, 0, s),
          l = 1 & c ? r : o,
          p.push(l.r, l.g, l.b),
          p.push(l.r, l.g, l.b);
      for (c = 0; i >= c; c++)
          for (l = 1 & c ? r : o,
          h = e - e / i * c,
          t = 0; n > t; t++)
              s = t / n * 2 * Math.PI,
              a = Math.sin(s) * h,
              s = Math.cos(s) * h,
              u.push(a, 0, s),
              p.push(l.r, l.g, l.b),
              s = (t + 1) / n * 2 * Math.PI,
              a = Math.sin(s) * h,
              s = Math.cos(s) * h,
              u.push(a, 0, s),
              p.push(l.r, l.g, l.b);
      e = new Et,
      e.addAttribute("position", new yt(u,3)),
      e.addAttribute("color", new yt(p,3)),
      u = new fi({
          vertexColors: 2
      }),
      gi.call(this, e, u)
  }
  function Yr(e, t, i, n) {
      this.object = e,
      this.size = void 0 !== t ? t : 1,
      e = void 0 !== i ? i : 16776960,
      n = void 0 !== n ? n : 1,
      t = 0,
      (i = this.object.geometry) && i.isGeometry ? t = i.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."),
      i = new Et,
      t = new yt(6 * t,3),
      i.addAttribute("position", t),
      gi.call(this, i, new fi({
          color: e,
          linewidth: n
      })),
      this.matrixAutoUpdate = !1,
      this.update()
  }
  function Zr(e, t) {
      ot.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrix = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      void 0 === t && (t = 1);
      var i = new Et;
      i.addAttribute("position", new yt([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0],3));
      var n = new fi({
          fog: !1
      });
      this.add(new mi(i,n)),
      i = new Et,
      i.addAttribute("position", new yt([0, 0, 0, 0, 0, 1],3)),
      this.add(new mi(i,n)),
      this.update()
  }
  function Jr(e) {
      function t(e, t, n) {
          i(e, n),
          i(t, n)
      }
      function i(e, t) {
          o.push(0, 0, 0),
          a.push(t.r, t.g, t.b),
          void 0 === s[e] && (s[e] = []),
          s[e].push(o.length / 3 - 1)
      }
      var n = new Et
        , r = new fi({
          color: 16777215,
          vertexColors: 1
      })
        , o = []
        , a = []
        , s = {}
        , c = new V(16755200)
        , h = new V(16711680)
        , l = new V(43775)
        , u = new V(16777215)
        , p = new V(3355443);
      t("n1", "n2", c),
      t("n2", "n4", c),
      t("n4", "n3", c),
      t("n3", "n1", c),
      t("f1", "f2", c),
      t("f2", "f4", c),
      t("f4", "f3", c),
      t("f3", "f1", c),
      t("n1", "f1", c),
      t("n2", "f2", c),
      t("n3", "f3", c),
      t("n4", "f4", c),
      t("p", "n1", h),
      t("p", "n2", h),
      t("p", "n3", h),
      t("p", "n4", h),
      t("u1", "u2", l),
      t("u2", "u3", l),
      t("u3", "u1", l),
      t("c", "t", u),
      t("p", "c", p),
      t("cn1", "cn2", p),
      t("cn3", "cn4", p),
      t("cf1", "cf2", p),
      t("cf3", "cf4", p),
      n.addAttribute("position", new yt(o,3)),
      n.addAttribute("color", new yt(a,3)),
      gi.call(this, n, r),
      this.camera = e,
      this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
      this.matrix = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      this.pointMap = s,
      this.update()
  }
  function Qr(e, t) {
      void 0 === t && (t = 16776960);
      var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
        , n = new Float32Array(24)
        , r = new Et;
      r.setIndex(new lt(i,1)),
      r.addAttribute("position", new lt(n,3)),
      gi.call(this, r, new fi({
          color: t
      })),
      void 0 !== e && this.update(e)
  }
  function Kr(e, t, i, n, r, o) {
      ot.call(this),
      void 0 === n && (n = 16776960),
      void 0 === i && (i = 1),
      void 0 === r && (r = .2 * i),
      void 0 === o && (o = .2 * r),
      void 0 === Oo && (Oo = new Et,
      Oo.addAttribute("position", new yt([0, 0, 0, 0, 1, 0],3)),
      Bo = new tn(0,.5,1,5,1),
      Bo.translate(0, -.5, 0)),
      this.position.copy(t),
      this.line = new mi(Oo,new fi({
          color: n
      })),
      this.line.matrixAutoUpdate = !1,
      this.add(this.line),
      this.cone = new Mt(Bo,new ht({
          color: n
      })),
      this.cone.matrixAutoUpdate = !1,
      this.add(this.cone),
      this.setDirection(e),
      this.setLength(i, r, o)
  }
  function $r(e) {
      e = e || 1;
      var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e];
      e = new Et,
      e.addAttribute("position", new yt(t,3)),
      e.addAttribute("color", new yt([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3)),
      t = new fi({
          vertexColors: 2
      }),
      gi.call(this, e, t)
  }
  function eo() {
      var e = 0
        , t = 0
        , i = 0
        , n = 0;
      return {
          initCatmullRom: function(r, o, a, s, c) {
              r = c * (a - r),
              s = c * (s - o),
              e = o,
              t = r,
              i = -3 * o + 3 * a - 2 * r - s,
              n = 2 * o - 2 * a + r + s
          },
          initNonuniformCatmullRom: function(r, o, a, s, c, h, l) {
              r = ((o - r) / c - (a - r) / (c + h) + (a - o) / h) * h,
              s = ((a - o) / h - (s - o) / (h + l) + (s - a) / l) * h,
              e = o,
              t = r,
              i = -3 * o + 3 * a - 2 * r - s,
              n = 2 * o - 2 * a + r + s
          },
          calc: function(r) {
              var o = r * r;
              return e + t * r + i * o + n * o * r
          }
      }
  }
  function to(e) {
      this.points = e || [],
      this.closed = !1
  }
  function io(e, t, i, n) {
      this.v0 = e,
      this.v1 = t,
      this.v2 = i,
      this.v3 = n
  }
  function no(e, t, i) {
      this.v0 = e,
      this.v1 = t,
      this.v2 = i
  }
  function ro(e, t) {
      this.v1 = e,
      this.v2 = t
  }
  function oo(e, t, i, n, r, o) {
      rr.call(this, e, t, i, i, n, r, o)
  }
  function ao(e) {
      console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
      to.call(this, e),
      this.type = "catmullrom",
      this.closed = !0
  }
  function so(e) {
      console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
      to.call(this, e),
      this.type = "catmullrom"
  }
  function co(e) {
      console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),
      to.call(this, e),
      this.type = "catmullrom"
  }
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
  void 0 === Math.sign && (Math.sign = function(e) {
      return 0 > e ? -1 : e > 0 ? 1 : +e
  }
  ),
  void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
      get: function() {
          return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
      }
  }),
  void 0 === Object.assign && function() {
      Object.assign = function(e) {
          if (void 0 === e || null === e)
              throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), i = 1; i < arguments.length; i++) {
              var n = arguments[i];
              if (void 0 !== n && null !== n)
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
      }
  }(),
  t.prototype = {
      addEventListener: function(e, t) {
          void 0 === this._listeners && (this._listeners = {});
          var i = this._listeners;
          void 0 === i[e] && (i[e] = []),
          -1 === i[e].indexOf(t) && i[e].push(t)
      },
      hasEventListener: function(e, t) {
          if (void 0 === this._listeners)
              return !1;
          var i = this._listeners;
          return void 0 !== i[e] && -1 !== i[e].indexOf(t)
      },
      removeEventListener: function(e, t) {
          if (void 0 !== this._listeners) {
              var i = this._listeners[e];
              if (void 0 !== i) {
                  var n = i.indexOf(t);
                  -1 !== n && i.splice(n, 1)
              }
          }
      },
      dispatchEvent: function(e) {
          if (void 0 !== this._listeners) {
              var t = this._listeners[e.type];
              if (void 0 !== t) {
                  e.target = this;
                  var i, n = [], r = t.length;
                  for (i = 0; r > i; i++)
                      n[i] = t[i];
                  for (i = 0; r > i; i++)
                      n[i].call(this, e)
              }
          }
      }
  };
  var ho = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function() {
          var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = Array(36), n = 0;
          return function() {
              for (var r = 0; 36 > r; r++)
                  8 === r || 13 === r || 18 === r || 23 === r ? i[r] = "-" : 14 === r ? i[r] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0),
                  e = 15 & n,
                  n >>= 4,
                  i[r] = t[19 === r ? 3 & e | 8 : e]);
              return i.join("")
          }
      }(),
      clamp: function(e, t, i) {
          return Math.max(t, Math.min(i, e))
      },
      euclideanModulo: function(e, t) {
          return (e % t + t) % t
      },
      mapLinear: function(e, t, i, n, r) {
          return n + (e - t) * (r - n) / (i - t)
      },
      lerp: function(e, t, i) {
          return (1 - i) * e + i * t
      },
      smoothstep: function(e, t, i) {
          return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t),
          e * e * (3 - 2 * e))
      },
      smootherstep: function(e, t, i) {
          return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t),
          e * e * e * (e * (6 * e - 15) + 10))
      },
      randInt: function(e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
      },
      randFloat: function(e, t) {
          return e + Math.random() * (t - e)
      },
      randFloatSpread: function(e) {
          return e * (.5 - Math.random())
      },
      degToRad: function(e) {
          return e * ho.DEG2RAD
      },
      radToDeg: function(e) {
          return e * ho.RAD2DEG
      },
      isPowerOfTwo: function(e) {
          return 0 === (e & e - 1) && 0 !== e
      },
      nearestPowerOfTwo: function(e) {
          return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
      },
      nextPowerOfTwo: function(e) {
          return e--,
          e |= e >> 1,
          e |= e >> 2,
          e |= e >> 4,
          e |= e >> 8,
          e |= e >> 16,
          e++,
          e
      }
  };
  i.prototype = {
      constructor: i,
      isVector2: !0,
      get width() {
          return this.x
      },
      set width(e) {
          this.x = e
      },
      get height() {
          return this.y
      },
      set height(e) {
          this.y = e
      },
      set: function(e, t) {
          return this.x = e,
          this.y = t,
          this
      },
      setScalar: function(e) {
          return this.y = this.x = e,
          this
      },
      setX: function(e) {
          return this.x = e,
          this
      },
      setY: function(e) {
          return this.y = e,
          this
      },
      setComponent: function(e, t) {
          switch (e) {
          case 0:
              this.x = t;
              break;
          case 1:
              this.y = t;
              break;
          default:
              throw Error("index is out of range: " + e)
          }
          return this
      },
      getComponent: function(e) {
          switch (e) {
          case 0:
              return this.x;
          case 1:
              return this.y;
          default:
              throw Error("index is out of range: " + e)
          }
      },
      clone: function() {
          return new this.constructor(this.x,this.y)
      },
      copy: function(e) {
          return this.x = e.x,
          this.y = e.y,
          this
      },
      add: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
          this.addVectors(e, t)) : (this.x += e.x,
          this.y += e.y,
          this)
      },
      addScalar: function(e) {
          return this.x += e,
          this.y += e,
          this
      },
      addVectors: function(e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this
      },
      addScaledVector: function(e, t) {
          return this.x += e.x * t,
          this.y += e.y * t,
          this
      },
      sub: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
          this.subVectors(e, t)) : (this.x -= e.x,
          this.y -= e.y,
          this)
      },
      subScalar: function(e) {
          return this.x -= e,
          this.y -= e,
          this
      },
      subVectors: function(e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this
      },
      multiply: function(e) {
          return this.x *= e.x,
          this.y *= e.y,
          this
      },
      multiplyScalar: function(e) {
          return isFinite(e) ? (this.x *= e,
          this.y *= e) : this.y = this.x = 0,
          this
      },
      divide: function(e) {
          return this.x /= e.x,
          this.y /= e.y,
          this
      },
      divideScalar: function(e) {
          return this.multiplyScalar(1 / e)
      },
      min: function(e) {
          return this.x = Math.min(this.x, e.x),
          this.y = Math.min(this.y, e.y),
          this
      },
      max: function(e) {
          return this.x = Math.max(this.x, e.x),
          this.y = Math.max(this.y, e.y),
          this
      },
      clamp: function(e, t) {
          return this.x = Math.max(e.x, Math.min(t.x, this.x)),
          this.y = Math.max(e.y, Math.min(t.y, this.y)),
          this
      },
      clampScalar: function() {
          var e, t;
          return function(n, r) {
              return void 0 === e && (e = new i,
              t = new i),
              e.set(n, n),
              t.set(r, r),
              this.clamp(e, t)
          }
      }(),
      clampLength: function(e, t) {
          var i = this.length();
          return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
      },
      floor: function() {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this
      },
      ceil: function() {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this
      },
      round: function() {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this
      },
      roundToZero: function() {
          return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
          this
      },
      negate: function() {
          return this.x = -this.x,
          this.y = -this.y,
          this
      },
      dot: function(e) {
          return this.x * e.x + this.y * e.y
      },
      lengthSq: function() {
          return this.x * this.x + this.y * this.y
      },
      length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y)
      },
      lengthManhattan: function() {
          return Math.abs(this.x) + Math.abs(this.y)
      },
      normalize: function() {
          return this.divideScalar(this.length())
      },
      angle: function() {
          var e = Math.atan2(this.y, this.x);
          return 0 > e && (e += 2 * Math.PI),
          e
      },
      distanceTo: function(e) {
          return Math.sqrt(this.distanceToSquared(e))
      },
      distanceToSquared: function(e) {
          var t = this.x - e.x;
          return e = this.y - e.y,
          t * t + e * e
      },
      distanceToManhattan: function(e) {
          return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
      },
      setLength: function(e) {
          return this.multiplyScalar(e / this.length())
      },
      lerp: function(e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this
      },
      lerpVectors: function(e, t, i) {
          return this.subVectors(t, e).multiplyScalar(i).add(e)
      },
      equals: function(e) {
          return e.x === this.x && e.y === this.y
      },
      fromArray: function(e, t) {
          return void 0 === t && (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e
      },
      fromBufferAttribute: function(e, t, i) {
          return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
          this.x = e.getX(t),
          this.y = e.getY(t),
          this
      },
      rotateAround: function(e, t) {
          var i = Math.cos(t)
            , n = Math.sin(t)
            , r = this.x - e.x
            , o = this.y - e.y;
          return this.x = r * i - o * n + e.x,
          this.y = r * n + o * i + e.y,
          this
      }
  };
  var lo = 0;
  n.DEFAULT_IMAGE = void 0,
  n.DEFAULT_MAPPING = 300,
  n.prototype = {
      constructor: n,
      isTexture: !0,
      set needsUpdate(e) {
          !0 === e && this.version++
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.image = e.image,
          this.mipmaps = e.mipmaps.slice(0),
          this.mapping = e.mapping,
          this.wrapS = e.wrapS,
          this.wrapT = e.wrapT,
          this.magFilter = e.magFilter,
          this.minFilter = e.minFilter,
          this.anisotropy = e.anisotropy,
          this.format = e.format,
          this.type = e.type,
          this.offset.copy(e.offset),
          this.repeat.copy(e.repeat),
          this.generateMipmaps = e.generateMipmaps,
          this.premultiplyAlpha = e.premultiplyAlpha,
          this.flipY = e.flipY,
          this.unpackAlignment = e.unpackAlignment,
          this.encoding = e.encoding,
          this
      },
      toJSON: function(e) {
          if (void 0 !== e.textures[this.uuid])
              return e.textures[this.uuid];
          var t = {
              metadata: {
                  version: 4.4,
                  type: "Texture",
                  generator: "Texture.toJSON"
              },
              uuid: this.uuid,
              name: this.name,
              mapping: this.mapping,
              repeat: [this.repeat.x, this.repeat.y],
              offset: [this.offset.x, this.offset.y],
              wrap: [this.wrapS, this.wrapT],
              minFilter: this.minFilter,
              magFilter: this.magFilter,
              anisotropy: this.anisotropy,
              flipY: this.flipY
          };
          if (void 0 !== this.image) {
              var i = this.image;
              if (void 0 === i.uuid && (i.uuid = ho.generateUUID()),
              void 0 === e.images[i.uuid]) {
                  var n, r = e.images, o = i.uuid, a = i.uuid;
                  void 0 !== i.toDataURL ? n = i : (n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                  n.width = i.width,
                  n.height = i.height,
                  n.getContext("2d").drawImage(i, 0, 0, i.width, i.height)),
                  n = 2048 < n.width || 2048 < n.height ? n.toDataURL("image/jpeg", .6) : n.toDataURL("image/png"),
                  r[o] = {
                      uuid: a,
                      url: n
                  }
              }
              t.image = i.uuid
          }
          return e.textures[this.uuid] = t
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      },
      transformUv: function(e) {
          if (300 === this.mapping) {
              if (e.multiply(this.repeat),
              e.add(this.offset),
              0 > e.x || 1 < e.x)
                  switch (this.wrapS) {
                  case 1e3:
                      e.x -= Math.floor(e.x);
                      break;
                  case 1001:
                      e.x = 0 > e.x ? 0 : 1;
                      break;
                  case 1002:
                      e.x = 1 === Math.abs(Math.floor(e.x) % 2) ? Math.ceil(e.x) - e.x : e.x - Math.floor(e.x)
                  }
              if (0 > e.y || 1 < e.y)
                  switch (this.wrapT) {
                  case 1e3:
                      e.y -= Math.floor(e.y);
                      break;
                  case 1001:
                      e.y = 0 > e.y ? 0 : 1;
                      break;
                  case 1002:
                      e.y = 1 === Math.abs(Math.floor(e.y) % 2) ? Math.ceil(e.y) - e.y : e.y - Math.floor(e.y)
                  }
              this.flipY && (e.y = 1 - e.y)
          }
      }
  },
  Object.assign(n.prototype, t.prototype),
  r.prototype = {
      constructor: r,
      isVector4: !0,
      set: function(e, t, i, n) {
          return this.x = e,
          this.y = t,
          this.z = i,
          this.w = n,
          this
      },
      setScalar: function(e) {
          return this.w = this.z = this.y = this.x = e,
          this
      },
      setX: function(e) {
          return this.x = e,
          this
      },
      setY: function(e) {
          return this.y = e,
          this
      },
      setZ: function(e) {
          return this.z = e,
          this
      },
      setW: function(e) {
          return this.w = e,
          this
      },
      setComponent: function(e, t) {
          switch (e) {
          case 0:
              this.x = t;
              break;
          case 1:
              this.y = t;
              break;
          case 2:
              this.z = t;
              break;
          case 3:
              this.w = t;
              break;
          default:
              throw Error("index is out of range: " + e)
          }
          return this
      },
      getComponent: function(e) {
          switch (e) {
          case 0:
              return this.x;
          case 1:
              return this.y;
          case 2:
              return this.z;
          case 3:
              return this.w;
          default:
              throw Error("index is out of range: " + e)
          }
      },
      clone: function() {
          return new this.constructor(this.x,this.y,this.z,this.w)
      },
      copy: function(e) {
          return this.x = e.x,
          this.y = e.y,
          this.z = e.z,
          this.w = void 0 !== e.w ? e.w : 1,
          this
      },
      add: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
          this.addVectors(e, t)) : (this.x += e.x,
          this.y += e.y,
          this.z += e.z,
          this.w += e.w,
          this)
      },
      addScalar: function(e) {
          return this.x += e,
          this.y += e,
          this.z += e,
          this.w += e,
          this
      },
      addVectors: function(e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this.z = e.z + t.z,
          this.w = e.w + t.w,
          this
      },
      addScaledVector: function(e, t) {
          return this.x += e.x * t,
          this.y += e.y * t,
          this.z += e.z * t,
          this.w += e.w * t,
          this
      },
      sub: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
          this.subVectors(e, t)) : (this.x -= e.x,
          this.y -= e.y,
          this.z -= e.z,
          this.w -= e.w,
          this)
      },
      subScalar: function(e) {
          return this.x -= e,
          this.y -= e,
          this.z -= e,
          this.w -= e,
          this
      },
      subVectors: function(e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this.z = e.z - t.z,
          this.w = e.w - t.w,
          this
      },
      multiplyScalar: function(e) {
          return isFinite(e) ? (this.x *= e,
          this.y *= e,
          this.z *= e,
          this.w *= e) : this.w = this.z = this.y = this.x = 0,
          this
      },
      applyMatrix4: function(e) {
          var t = this.x
            , i = this.y
            , n = this.z
            , r = this.w;
          return e = e.elements,
          this.x = e[0] * t + e[4] * i + e[8] * n + e[12] * r,
          this.y = e[1] * t + e[5] * i + e[9] * n + e[13] * r,
          this.z = e[2] * t + e[6] * i + e[10] * n + e[14] * r,
          this.w = e[3] * t + e[7] * i + e[11] * n + e[15] * r,
          this
      },
      divideScalar: function(e) {
          return this.multiplyScalar(1 / e)
      },
      setAxisAngleFromQuaternion: function(e) {
          this.w = 2 * Math.acos(e.w);
          var t = Math.sqrt(1 - e.w * e.w);
          return 1e-4 > t ? (this.x = 1,
          this.z = this.y = 0) : (this.x = e.x / t,
          this.y = e.y / t,
          this.z = e.z / t),
          this
      },
      setAxisAngleFromRotationMatrix: function(e) {
          var t, i, n;
          e = e.elements;
          var r = e[0];
          n = e[4];
          var o = e[8]
            , a = e[1]
            , s = e[5]
            , c = e[9];
          i = e[2],
          t = e[6];
          var h = e[10];
          return .01 > Math.abs(n - a) && .01 > Math.abs(o - i) && .01 > Math.abs(c - t) ? .1 > Math.abs(n + a) && .1 > Math.abs(o + i) && .1 > Math.abs(c + t) && .1 > Math.abs(r + s + h - 3) ? (this.set(1, 0, 0, 0),
          this) : (e = Math.PI,
          r = (r + 1) / 2,
          s = (s + 1) / 2,
          h = (h + 1) / 2,
          n = (n + a) / 4,
          o = (o + i) / 4,
          c = (c + t) / 4,
          r > s && r > h ? .01 > r ? (t = 0,
          n = i = .707106781) : (t = Math.sqrt(r),
          i = n / t,
          n = o / t) : s > h ? .01 > s ? (t = .707106781,
          i = 0,
          n = .707106781) : (i = Math.sqrt(s),
          t = n / i,
          n = c / i) : .01 > h ? (i = t = .707106781,
          n = 0) : (n = Math.sqrt(h),
          t = o / n,
          i = c / n),
          this.set(t, i, n, e),
          this) : (e = Math.sqrt((t - c) * (t - c) + (o - i) * (o - i) + (a - n) * (a - n)),
          .001 > Math.abs(e) && (e = 1),
          this.x = (t - c) / e,
          this.y = (o - i) / e,
          this.z = (a - n) / e,
          this.w = Math.acos((r + s + h - 1) / 2),
          this)
      },
      min: function(e) {
          return this.x = Math.min(this.x, e.x),
          this.y = Math.min(this.y, e.y),
          this.z = Math.min(this.z, e.z),
          this.w = Math.min(this.w, e.w),
          this
      },
      max: function(e) {
          return this.x = Math.max(this.x, e.x),
          this.y = Math.max(this.y, e.y),
          this.z = Math.max(this.z, e.z),
          this.w = Math.max(this.w, e.w),
          this
      },
      clamp: function(e, t) {
          return this.x = Math.max(e.x, Math.min(t.x, this.x)),
          this.y = Math.max(e.y, Math.min(t.y, this.y)),
          this.z = Math.max(e.z, Math.min(t.z, this.z)),
          this.w = Math.max(e.w, Math.min(t.w, this.w)),
          this
      },
      clampScalar: function() {
          var e, t;
          return function(i, n) {
              return void 0 === e && (e = new r,
              t = new r),
              e.set(i, i, i, i),
              t.set(n, n, n, n),
              this.clamp(e, t)
          }
      }(),
      floor: function() {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this.z = Math.floor(this.z),
          this.w = Math.floor(this.w),
          this
      },
      ceil: function() {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this.z = Math.ceil(this.z),
          this.w = Math.ceil(this.w),
          this
      },
      round: function() {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this.z = Math.round(this.z),
          this.w = Math.round(this.w),
          this
      },
      roundToZero: function() {
          return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
          this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
          this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w),
          this
      },
      negate: function() {
          return this.x = -this.x,
          this.y = -this.y,
          this.z = -this.z,
          this.w = -this.w,
          this
      },
      dot: function(e) {
          return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
      },
      lengthSq: function() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      },
      length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      },
      lengthManhattan: function() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      },
      normalize: function() {
          return this.divideScalar(this.length())
      },
      setLength: function(e) {
          return this.multiplyScalar(e / this.length())
      },
      lerp: function(e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this.z += (e.z - this.z) * t,
          this.w += (e.w - this.w) * t,
          this
      },
      lerpVectors: function(e, t, i) {
          return this.subVectors(t, e).multiplyScalar(i).add(e)
      },
      equals: function(e) {
          return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
      },
      fromArray: function(e, t) {
          return void 0 === t && (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this.z = e[t + 2],
          this.w = e[t + 3],
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e[t + 2] = this.z,
          e[t + 3] = this.w,
          e
      },
      fromBufferAttribute: function(e, t, i) {
          return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
          this.x = e.getX(t),
          this.y = e.getY(t),
          this.z = e.getZ(t),
          this.w = e.getW(t),
          this
      }
  },
  o.prototype = {
      constructor: o,
      isWebGLRenderTarget: !0,
      setSize: function(e, t) {
          (this.width !== e || this.height !== t) && (this.width = e,
          this.height = t,
          this.dispose()),
          this.viewport.set(0, 0, e, t),
          this.scissor.set(0, 0, e, t)
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.width = e.width,
          this.height = e.height,
          this.viewport.copy(e.viewport),
          this.texture = e.texture.clone(),
          this.depthBuffer = e.depthBuffer,
          this.stencilBuffer = e.stencilBuffer,
          this.depthTexture = e.depthTexture,
          this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  },
  Object.assign(o.prototype, t.prototype),
  a.prototype = Object.create(o.prototype),
  a.prototype.constructor = a,
  a.prototype.isWebGLRenderTargetCube = !0,
  s.prototype = {
      constructor: s,
      get x() {
          return this._x
      },
      set x(e) {
          this._x = e,
          this.onChangeCallback()
      },
      get y() {
          return this._y
      },
      set y(e) {
          this._y = e,
          this.onChangeCallback()
      },
      get z() {
          return this._z
      },
      set z(e) {
          this._z = e,
          this.onChangeCallback()
      },
      get w() {
          return this._w
      },
      set w(e) {
          this._w = e,
          this.onChangeCallback()
      },
      set: function(e, t, i, n) {
          return this._x = e,
          this._y = t,
          this._z = i,
          this._w = n,
          this.onChangeCallback(),
          this
      },
      clone: function() {
          return new this.constructor(this._x,this._y,this._z,this._w)
      },
      copy: function(e) {
          return this._x = e.x,
          this._y = e.y,
          this._z = e.z,
          this._w = e.w,
          this.onChangeCallback(),
          this
      },
      setFromEuler: function(e, t) {
          if (!1 === (e && e.isEuler))
              throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
          var i = Math.cos(e._x / 2)
            , n = Math.cos(e._y / 2)
            , r = Math.cos(e._z / 2)
            , o = Math.sin(e._x / 2)
            , a = Math.sin(e._y / 2)
            , s = Math.sin(e._z / 2)
            , c = e.order;
          return "XYZ" === c ? (this._x = o * n * r + i * a * s,
          this._y = i * a * r - o * n * s,
          this._z = i * n * s + o * a * r,
          this._w = i * n * r - o * a * s) : "YXZ" === c ? (this._x = o * n * r + i * a * s,
          this._y = i * a * r - o * n * s,
          this._z = i * n * s - o * a * r,
          this._w = i * n * r + o * a * s) : "ZXY" === c ? (this._x = o * n * r - i * a * s,
          this._y = i * a * r + o * n * s,
          this._z = i * n * s + o * a * r,
          this._w = i * n * r - o * a * s) : "ZYX" === c ? (this._x = o * n * r - i * a * s,
          this._y = i * a * r + o * n * s,
          this._z = i * n * s - o * a * r,
          this._w = i * n * r + o * a * s) : "YZX" === c ? (this._x = o * n * r + i * a * s,
          this._y = i * a * r + o * n * s,
          this._z = i * n * s - o * a * r,
          this._w = i * n * r - o * a * s) : "XZY" === c && (this._x = o * n * r - i * a * s,
          this._y = i * a * r - o * n * s,
          this._z = i * n * s + o * a * r,
          this._w = i * n * r + o * a * s),
          !1 !== t && this.onChangeCallback(),
          this
      },
      setFromAxisAngle: function(e, t) {
          var i = t / 2
            , n = Math.sin(i);
          return this._x = e.x * n,
          this._y = e.y * n,
          this._z = e.z * n,
          this._w = Math.cos(i),
          this.onChangeCallback(),
          this
      },
      setFromRotationMatrix: function(e) {
          var t = e.elements
            , i = t[0];
          e = t[4];
          var n = t[8]
            , r = t[1]
            , o = t[5]
            , a = t[9]
            , s = t[2]
            , c = t[6]
            , t = t[10]
            , h = i + o + t;
          return h > 0 ? (i = .5 / Math.sqrt(h + 1),
          this._w = .25 / i,
          this._x = (c - a) * i,
          this._y = (n - s) * i,
          this._z = (r - e) * i) : i > o && i > t ? (i = 2 * Math.sqrt(1 + i - o - t),
          this._w = (c - a) / i,
          this._x = .25 * i,
          this._y = (e + r) / i,
          this._z = (n + s) / i) : o > t ? (i = 2 * Math.sqrt(1 + o - i - t),
          this._w = (n - s) / i,
          this._x = (e + r) / i,
          this._y = .25 * i,
          this._z = (a + c) / i) : (i = 2 * Math.sqrt(1 + t - i - o),
          this._w = (r - e) / i,
          this._x = (n + s) / i,
          this._y = (a + c) / i,
          this._z = .25 * i),
          this.onChangeCallback(),
          this
      },
      setFromUnitVectors: function() {
          var e, t;
          return function(i, n) {
              return void 0 === e && (e = new c),
              t = i.dot(n) + 1,
              1e-6 > t ? (t = 0,
              Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n),
              this._x = e.x,
              this._y = e.y,
              this._z = e.z,
              this._w = t,
              this.normalize()
          }
      }(),
      inverse: function() {
          return this.conjugate().normalize()
      },
      conjugate: function() {
          return this._x *= -1,
          this._y *= -1,
          this._z *= -1,
          this.onChangeCallback(),
          this
      },
      dot: function(e) {
          return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
      },
      lengthSq: function() {
          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      },
      length: function() {
          return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      },
      normalize: function() {
          var e = this.length();
          return 0 === e ? (this._z = this._y = this._x = 0,
          this._w = 1) : (e = 1 / e,
          this._x *= e,
          this._y *= e,
          this._z *= e,
          this._w *= e),
          this.onChangeCallback(),
          this
      },
      multiply: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
          this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
      },
      premultiply: function(e) {
          return this.multiplyQuaternions(e, this)
      },
      multiplyQuaternions: function(e, t) {
          var i = e._x
            , n = e._y
            , r = e._z
            , o = e._w
            , a = t._x
            , s = t._y
            , c = t._z
            , h = t._w;
          return this._x = i * h + o * a + n * c - r * s,
          this._y = n * h + o * s + r * a - i * c,
          this._z = r * h + o * c + i * s - n * a,
          this._w = o * h - i * a - n * s - r * c,
          this.onChangeCallback(),
          this
      },
      slerp: function(e, t) {
          if (0 === t)
              return this;
          if (1 === t)
              return this.copy(e);
          var i = this._x
            , n = this._y
            , r = this._z
            , o = this._w
            , a = o * e._w + i * e._x + n * e._y + r * e._z;
          if (0 > a ? (this._w = -e._w,
          this._x = -e._x,
          this._y = -e._y,
          this._z = -e._z,
          a = -a) : this.copy(e),
          a >= 1)
              return this._w = o,
              this._x = i,
              this._y = n,
              this._z = r,
              this;
          var s = Math.sqrt(1 - a * a);
          if (.001 > Math.abs(s))
              return this._w = .5 * (o + this._w),
              this._x = .5 * (i + this._x),
              this._y = .5 * (n + this._y),
              this._z = .5 * (r + this._z),
              this;
          var c = Math.atan2(s, a)
            , a = Math.sin((1 - t) * c) / s
            , s = Math.sin(t * c) / s;
          return this._w = o * a + this._w * s,
          this._x = i * a + this._x * s,
          this._y = n * a + this._y * s,
          this._z = r * a + this._z * s,
          this.onChangeCallback(),
          this
      },
      equals: function(e) {
          return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
      },
      fromArray: function(e, t) {
          return void 0 === t && (t = 0),
          this._x = e[t],
          this._y = e[t + 1],
          this._z = e[t + 2],
          this._w = e[t + 3],
          this.onChangeCallback(),
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this._x,
          e[t + 1] = this._y,
          e[t + 2] = this._z,
          e[t + 3] = this._w,
          e
      },
      onChange: function(e) {
          return this.onChangeCallback = e,
          this
      },
      onChangeCallback: function() {}
  },
  Object.assign(s, {
      slerp: function(e, t, i, n) {
          return i.copy(e).slerp(t, n)
      },
      slerpFlat: function(e, t, i, n, r, o, a) {
          var s = i[n + 0]
            , c = i[n + 1]
            , h = i[n + 2];
          i = i[n + 3],
          n = r[o + 0];
          var l = r[o + 1]
            , u = r[o + 2];
          if (r = r[o + 3],
          i !== r || s !== n || c !== l || h !== u) {
              o = 1 - a;
              var p = s * n + c * l + h * u + i * r
                , d = p >= 0 ? 1 : -1
                , f = 1 - p * p;
              f > Number.EPSILON && (f = Math.sqrt(f),
              p = Math.atan2(f, p * d),
              o = Math.sin(o * p) / f,
              a = Math.sin(a * p) / f),
              d *= a,
              s = s * o + n * d,
              c = c * o + l * d,
              h = h * o + u * d,
              i = i * o + r * d,
              o === 1 - a && (a = 1 / Math.sqrt(s * s + c * c + h * h + i * i),
              s *= a,
              c *= a,
              h *= a,
              i *= a)
          }
          e[t] = s,
          e[t + 1] = c,
          e[t + 2] = h,
          e[t + 3] = i
      }
  }),
  c.prototype = {
      constructor: c,
      isVector3: !0,
      set: function(e, t, i) {
          return this.x = e,
          this.y = t,
          this.z = i,
          this
      },
      setScalar: function(e) {
          return this.z = this.y = this.x = e,
          this
      },
      setX: function(e) {
          return this.x = e,
          this
      },
      setY: function(e) {
          return this.y = e,
          this
      },
      setZ: function(e) {
          return this.z = e,
          this
      },
      setComponent: function(e, t) {
          switch (e) {
          case 0:
              this.x = t;
              break;
          case 1:
              this.y = t;
              break;
          case 2:
              this.z = t;
              break;
          default:
              throw Error("index is out of range: " + e)
          }
          return this
      },
      getComponent: function(e) {
          switch (e) {
          case 0:
              return this.x;
          case 1:
              return this.y;
          case 2:
              return this.z;
          default:
              throw Error("index is out of range: " + e)
          }
      },
      clone: function() {
          return new this.constructor(this.x,this.y,this.z)
      },
      copy: function(e) {
          return this.x = e.x,
          this.y = e.y,
          this.z = e.z,
          this
      },
      add: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
          this.addVectors(e, t)) : (this.x += e.x,
          this.y += e.y,
          this.z += e.z,
          this)
      },
      addScalar: function(e) {
          return this.x += e,
          this.y += e,
          this.z += e,
          this
      },
      addVectors: function(e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this.z = e.z + t.z,
          this
      },
      addScaledVector: function(e, t) {
          return this.x += e.x * t,
          this.y += e.y * t,
          this.z += e.z * t,
          this
      },
      sub: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
          this.subVectors(e, t)) : (this.x -= e.x,
          this.y -= e.y,
          this.z -= e.z,
          this)
      },
      subScalar: function(e) {
          return this.x -= e,
          this.y -= e,
          this.z -= e,
          this
      },
      subVectors: function(e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this.z = e.z - t.z,
          this
      },
      multiply: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
          this.multiplyVectors(e, t)) : (this.x *= e.x,
          this.y *= e.y,
          this.z *= e.z,
          this)
      },
      multiplyScalar: function(e) {
          return isFinite(e) ? (this.x *= e,
          this.y *= e,
          this.z *= e) : this.z = this.y = this.x = 0,
          this
      },
      multiplyVectors: function(e, t) {
          return this.x = e.x * t.x,
          this.y = e.y * t.y,
          this.z = e.z * t.z,
          this
      },
      applyEuler: function() {
          var e;
          return function(t) {
              return !1 === (t && t.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
              void 0 === e && (e = new s),
              this.applyQuaternion(e.setFromEuler(t))
          }
      }(),
      applyAxisAngle: function() {
          var e;
          return function(t, i) {
              return void 0 === e && (e = new s),
              this.applyQuaternion(e.setFromAxisAngle(t, i))
          }
      }(),
      applyMatrix3: function(e) {
          var t = this.x
            , i = this.y
            , n = this.z;
          return e = e.elements,
          this.x = e[0] * t + e[3] * i + e[6] * n,
          this.y = e[1] * t + e[4] * i + e[7] * n,
          this.z = e[2] * t + e[5] * i + e[8] * n,
          this
      },
      applyMatrix4: function(e) {
          var t = this.x
            , i = this.y
            , n = this.z;
          return e = e.elements,
          this.x = e[0] * t + e[4] * i + e[8] * n + e[12],
          this.y = e[1] * t + e[5] * i + e[9] * n + e[13],
          this.z = e[2] * t + e[6] * i + e[10] * n + e[14],
          this.divideScalar(e[3] * t + e[7] * i + e[11] * n + e[15])
      },
      applyQuaternion: function(e) {
          var t = this.x
            , i = this.y
            , n = this.z
            , r = e.x
            , o = e.y
            , a = e.z;
          e = e.w;
          var s = e * t + o * n - a * i
            , c = e * i + a * t - r * n
            , h = e * n + r * i - o * t
            , t = -r * t - o * i - a * n;
          return this.x = s * e + t * -r + c * -a - h * -o,
          this.y = c * e + t * -o + h * -r - s * -a,
          this.z = h * e + t * -a + s * -o - c * -r,
          this
      },
      project: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
              this.applyMatrix4(e)
          }
      }(),
      unproject: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
              this.applyMatrix4(e)
          }
      }(),
      transformDirection: function(e) {
          var t = this.x
            , i = this.y
            , n = this.z;
          return e = e.elements,
          this.x = e[0] * t + e[4] * i + e[8] * n,
          this.y = e[1] * t + e[5] * i + e[9] * n,
          this.z = e[2] * t + e[6] * i + e[10] * n,
          this.normalize()
      },
      divide: function(e) {
          return this.x /= e.x,
          this.y /= e.y,
          this.z /= e.z,
          this
      },
      divideScalar: function(e) {
          return this.multiplyScalar(1 / e)
      },
      min: function(e) {
          return this.x = Math.min(this.x, e.x),
          this.y = Math.min(this.y, e.y),
          this.z = Math.min(this.z, e.z),
          this
      },
      max: function(e) {
          return this.x = Math.max(this.x, e.x),
          this.y = Math.max(this.y, e.y),
          this.z = Math.max(this.z, e.z),
          this
      },
      clamp: function(e, t) {
          return this.x = Math.max(e.x, Math.min(t.x, this.x)),
          this.y = Math.max(e.y, Math.min(t.y, this.y)),
          this.z = Math.max(e.z, Math.min(t.z, this.z)),
          this
      },
      clampScalar: function() {
          var e, t;
          return function(i, n) {
              return void 0 === e && (e = new c,
              t = new c),
              e.set(i, i, i),
              t.set(n, n, n),
              this.clamp(e, t)
          }
      }(),
      clampLength: function(e, t) {
          var i = this.length();
          return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
      },
      floor: function() {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this.z = Math.floor(this.z),
          this
      },
      ceil: function() {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this.z = Math.ceil(this.z),
          this
      },
      round: function() {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this.z = Math.round(this.z),
          this
      },
      roundToZero: function() {
          return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
          this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
          this
      },
      negate: function() {
          return this.x = -this.x,
          this.y = -this.y,
          this.z = -this.z,
          this
      },
      dot: function(e) {
          return this.x * e.x + this.y * e.y + this.z * e.z
      },
      lengthSq: function() {
          return this.x * this.x + this.y * this.y + this.z * this.z
      },
      length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      },
      lengthManhattan: function() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      },
      normalize: function() {
          return this.divideScalar(this.length())
      },
      setLength: function(e) {
          return this.multiplyScalar(e / this.length())
      },
      lerp: function(e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this.z += (e.z - this.z) * t,
          this
      },
      lerpVectors: function(e, t, i) {
          return this.subVectors(t, e).multiplyScalar(i).add(e)
      },
      cross: function(e, t) {
          if (void 0 !== t)
              return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
              this.crossVectors(e, t);
          var i = this.x
            , n = this.y
            , r = this.z;
          return this.x = n * e.z - r * e.y,
          this.y = r * e.x - i * e.z,
          this.z = i * e.y - n * e.x,
          this
      },
      crossVectors: function(e, t) {
          var i = e.x
            , n = e.y
            , r = e.z
            , o = t.x
            , a = t.y
            , s = t.z;
          return this.x = n * s - r * a,
          this.y = r * o - i * s,
          this.z = i * a - n * o,
          this
      },
      projectOnVector: function(e) {
          var t = e.dot(this) / e.lengthSq();
          return this.copy(e).multiplyScalar(t)
      },
      projectOnPlane: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new c),
              e.copy(this).projectOnVector(t),
              this.sub(e)
          }
      }(),
      reflect: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new c),
              this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
          }
      }(),
      angleTo: function(e) {
          return e = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq()),
          Math.acos(ho.clamp(e, -1, 1))
      },
      distanceTo: function(e) {
          return Math.sqrt(this.distanceToSquared(e))
      },
      distanceToSquared: function(e) {
          var t = this.x - e.x
            , i = this.y - e.y;
          return e = this.z - e.z,
          t * t + i * i + e * e
      },
      distanceToManhattan: function(e) {
          return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
      },
      setFromSpherical: function(e) {
          var t = Math.sin(e.phi) * e.radius;
          return this.x = t * Math.sin(e.theta),
          this.y = Math.cos(e.phi) * e.radius,
          this.z = t * Math.cos(e.theta),
          this
      },
      setFromCylindrical: function(e) {
          return this.x = e.radius * Math.sin(e.theta),
          this.y = e.y,
          this.z = e.radius * Math.cos(e.theta),
          this
      },
      setFromMatrixPosition: function(e) {
          return this.setFromMatrixColumn(e, 3)
      },
      setFromMatrixScale: function(e) {
          var t = this.setFromMatrixColumn(e, 0).length()
            , i = this.setFromMatrixColumn(e, 1).length();
          return e = this.setFromMatrixColumn(e, 2).length(),
          this.x = t,
          this.y = i,
          this.z = e,
          this
      },
      setFromMatrixColumn: function(e, t) {
          if ("number" == typeof e) {
              console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
              var i = e;
              e = t,
              t = i
          }
          return this.fromArray(e.elements, 4 * t)
      },
      equals: function(e) {
          return e.x === this.x && e.y === this.y && e.z === this.z
      },
      fromArray: function(e, t) {
          return void 0 === t && (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this.z = e[t + 2],
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e[t + 2] = this.z,
          e
      },
      fromBufferAttribute: function(e, t, i) {
          return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
          this.x = e.getX(t),
          this.y = e.getY(t),
          this.z = e.getZ(t),
          this
      }
  },
  h.prototype = {
      constructor: h,
      isMatrix4: !0,
      set: function(e, t, i, n, r, o, a, s, c, h, l, u, p, d, f, m) {
          var g = this.elements;
          return g[0] = e,
          g[4] = t,
          g[8] = i,
          g[12] = n,
          g[1] = r,
          g[5] = o,
          g[9] = a,
          g[13] = s,
          g[2] = c,
          g[6] = h,
          g[10] = l,
          g[14] = u,
          g[3] = p,
          g[7] = d,
          g[11] = f,
          g[15] = m,
          this
      },
      identity: function() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
          this
      },
      clone: function() {
          return (new h).fromArray(this.elements)
      },
      copy: function(e) {
          return this.elements.set(e.elements),
          this
      },
      copyPosition: function(e) {
          var t = this.elements;
          return e = e.elements,
          t[12] = e[12],
          t[13] = e[13],
          t[14] = e[14],
          this
      },
      extractBasis: function(e, t, i) {
          return e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          i.setFromMatrixColumn(this, 2),
          this
      },
      makeBasis: function(e, t, i) {
          return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1),
          this
      },
      extractRotation: function() {
          var e;
          return function(t) {
              void 0 === e && (e = new c);
              var i = this.elements
                , n = t.elements
                , r = 1 / e.setFromMatrixColumn(t, 0).length()
                , o = 1 / e.setFromMatrixColumn(t, 1).length();
              return t = 1 / e.setFromMatrixColumn(t, 2).length(),
              i[0] = n[0] * r,
              i[1] = n[1] * r,
              i[2] = n[2] * r,
              i[4] = n[4] * o,
              i[5] = n[5] * o,
              i[6] = n[6] * o,
              i[8] = n[8] * t,
              i[9] = n[9] * t,
              i[10] = n[10] * t,
              this
          }
      }(),
      makeRotationFromEuler: function(e) {
          !1 === (e && e.isEuler) && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
          var t = this.elements
            , i = e.x
            , n = e.y
            , r = e.z
            , o = Math.cos(i)
            , i = Math.sin(i)
            , a = Math.cos(n)
            , n = Math.sin(n)
            , s = Math.cos(r)
            , r = Math.sin(r);
          if ("XYZ" === e.order) {
              e = o * s;
              var c = o * r
                , h = i * s
                , l = i * r;
              t[0] = a * s,
              t[4] = -a * r,
              t[8] = n,
              t[1] = c + h * n,
              t[5] = e - l * n,
              t[9] = -i * a,
              t[2] = l - e * n,
              t[6] = h + c * n,
              t[10] = o * a
          } else
              "YXZ" === e.order ? (e = a * s,
              c = a * r,
              h = n * s,
              l = n * r,
              t[0] = e + l * i,
              t[4] = h * i - c,
              t[8] = o * n,
              t[1] = o * r,
              t[5] = o * s,
              t[9] = -i,
              t[2] = c * i - h,
              t[6] = l + e * i,
              t[10] = o * a) : "ZXY" === e.order ? (e = a * s,
              c = a * r,
              h = n * s,
              l = n * r,
              t[0] = e - l * i,
              t[4] = -o * r,
              t[8] = h + c * i,
              t[1] = c + h * i,
              t[5] = o * s,
              t[9] = l - e * i,
              t[2] = -o * n,
              t[6] = i,
              t[10] = o * a) : "ZYX" === e.order ? (e = o * s,
              c = o * r,
              h = i * s,
              l = i * r,
              t[0] = a * s,
              t[4] = h * n - c,
              t[8] = e * n + l,
              t[1] = a * r,
              t[5] = l * n + e,
              t[9] = c * n - h,
              t[2] = -n,
              t[6] = i * a,
              t[10] = o * a) : "YZX" === e.order ? (e = o * a,
              c = o * n,
              h = i * a,
              l = i * n,
              t[0] = a * s,
              t[4] = l - e * r,
              t[8] = h * r + c,
              t[1] = r,
              t[5] = o * s,
              t[9] = -i * s,
              t[2] = -n * s,
              t[6] = c * r + h,
              t[10] = e - l * r) : "XZY" === e.order && (e = o * a,
              c = o * n,
              h = i * a,
              l = i * n,
              t[0] = a * s,
              t[4] = -r,
              t[8] = n * s,
              t[1] = e * r + l,
              t[5] = o * s,
              t[9] = c * r - h,
              t[2] = h * r - c,
              t[6] = i * s,
              t[10] = l * r + e);
          return t[3] = 0,
          t[7] = 0,
          t[11] = 0,
          t[12] = 0,
          t[13] = 0,
          t[14] = 0,
          t[15] = 1,
          this
      },
      makeRotationFromQuaternion: function(e) {
          var t = this.elements
            , i = e.x
            , n = e.y
            , r = e.z
            , o = e.w
            , a = i + i
            , s = n + n
            , c = r + r;
          e = i * a;
          var h = i * s
            , i = i * c
            , l = n * s
            , n = n * c
            , r = r * c
            , a = o * a
            , s = o * s
            , o = o * c;
          return t[0] = 1 - (l + r),
          t[4] = h - o,
          t[8] = i + s,
          t[1] = h + o,
          t[5] = 1 - (e + r),
          t[9] = n - a,
          t[2] = i - s,
          t[6] = n + a,
          t[10] = 1 - (e + l),
          t[3] = 0,
          t[7] = 0,
          t[11] = 0,
          t[12] = 0,
          t[13] = 0,
          t[14] = 0,
          t[15] = 1,
          this
      },
      lookAt: function() {
          var e, t, i;
          return function(n, r, o) {
              void 0 === e && (e = new c,
              t = new c,
              i = new c);
              var a = this.elements;
              return i.subVectors(n, r).normalize(),
              0 === i.lengthSq() && (i.z = 1),
              e.crossVectors(o, i).normalize(),
              0 === e.lengthSq() && (i.z += 1e-4,
              e.crossVectors(o, i).normalize()),
              t.crossVectors(i, e),
              a[0] = e.x,
              a[4] = t.x,
              a[8] = i.x,
              a[1] = e.y,
              a[5] = t.y,
              a[9] = i.y,
              a[2] = e.z,
              a[6] = t.z,
              a[10] = i.z,
              this
          }
      }(),
      multiply: function(e, t) {
          return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
          this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
      },
      premultiply: function(e) {
          return this.multiplyMatrices(e, this)
      },
      multiplyMatrices: function(e, t) {
          var i = e.elements
            , n = t.elements
            , r = this.elements
            , o = i[0]
            , a = i[4]
            , s = i[8]
            , c = i[12]
            , h = i[1]
            , l = i[5]
            , u = i[9]
            , p = i[13]
            , d = i[2]
            , f = i[6]
            , m = i[10]
            , g = i[14]
            , v = i[3]
            , y = i[7]
            , x = i[11]
            , i = i[15]
            , b = n[0]
            , _ = n[4]
            , w = n[8]
            , E = n[12]
            , M = n[1]
            , T = n[5]
            , S = n[9]
            , A = n[13]
            , R = n[2]
            , L = n[6]
            , P = n[10]
            , C = n[14]
            , I = n[3]
            , U = n[7]
            , N = n[11]
            , n = n[15];
          return r[0] = o * b + a * M + s * R + c * I,
          r[4] = o * _ + a * T + s * L + c * U,
          r[8] = o * w + a * S + s * P + c * N,
          r[12] = o * E + a * A + s * C + c * n,
          r[1] = h * b + l * M + u * R + p * I,
          r[5] = h * _ + l * T + u * L + p * U,
          r[9] = h * w + l * S + u * P + p * N,
          r[13] = h * E + l * A + u * C + p * n,
          r[2] = d * b + f * M + m * R + g * I,
          r[6] = d * _ + f * T + m * L + g * U,
          r[10] = d * w + f * S + m * P + g * N,
          r[14] = d * E + f * A + m * C + g * n,
          r[3] = v * b + y * M + x * R + i * I,
          r[7] = v * _ + y * T + x * L + i * U,
          r[11] = v * w + y * S + x * P + i * N,
          r[15] = v * E + y * A + x * C + i * n,
          this
      },
      multiplyToArray: function(e, t, i) {
          var n = this.elements;
          return this.multiplyMatrices(e, t),
          i[0] = n[0],
          i[1] = n[1],
          i[2] = n[2],
          i[3] = n[3],
          i[4] = n[4],
          i[5] = n[5],
          i[6] = n[6],
          i[7] = n[7],
          i[8] = n[8],
          i[9] = n[9],
          i[10] = n[10],
          i[11] = n[11],
          i[12] = n[12],
          i[13] = n[13],
          i[14] = n[14],
          i[15] = n[15],
          this
      },
      multiplyScalar: function(e) {
          var t = this.elements;
          return t[0] *= e,
          t[4] *= e,
          t[8] *= e,
          t[12] *= e,
          t[1] *= e,
          t[5] *= e,
          t[9] *= e,
          t[13] *= e,
          t[2] *= e,
          t[6] *= e,
          t[10] *= e,
          t[14] *= e,
          t[3] *= e,
          t[7] *= e,
          t[11] *= e,
          t[15] *= e,
          this
      },
      applyToBufferAttribute: function() {
          var e;
          return function(t) {
              void 0 === e && (e = new c);
              for (var i = 0, n = t.count; n > i; i++)
                  e.x = t.getX(i),
                  e.y = t.getY(i),
                  e.z = t.getZ(i),
                  e.applyMatrix4(this),
                  t.setXYZ(i, e.x, e.y, e.z);
              return t
          }
      }(),
      determinant: function() {
          var e = this.elements
            , t = e[0]
            , i = e[4]
            , n = e[8]
            , r = e[12]
            , o = e[1]
            , a = e[5]
            , s = e[9]
            , c = e[13]
            , h = e[2]
            , l = e[6]
            , u = e[10]
            , p = e[14];
          return e[3] * (+r * s * l - n * c * l - r * a * u + i * c * u + n * a * p - i * s * p) + e[7] * (+t * s * p - t * c * u + r * o * u - n * o * p + n * c * h - r * s * h) + e[11] * (+t * c * l - t * a * p - r * o * l + i * o * p + r * a * h - i * c * h) + e[15] * (-n * a * h - t * s * l + t * a * u + n * o * l - i * o * u + i * s * h)
      },
      transpose: function() {
          var e, t = this.elements;
          return e = t[1],
          t[1] = t[4],
          t[4] = e,
          e = t[2],
          t[2] = t[8],
          t[8] = e,
          e = t[6],
          t[6] = t[9],
          t[9] = e,
          e = t[3],
          t[3] = t[12],
          t[12] = e,
          e = t[7],
          t[7] = t[13],
          t[13] = e,
          e = t[11],
          t[11] = t[14],
          t[14] = e,
          this
      },
      setPosition: function(e) {
          var t = this.elements;
          return t[12] = e.x,
          t[13] = e.y,
          t[14] = e.z,
          this
      },
      getInverse: function(e, t) {
          var i = this.elements
            , n = e.elements
            , r = n[0]
            , o = n[1]
            , a = n[2]
            , s = n[3]
            , c = n[4]
            , h = n[5]
            , l = n[6]
            , u = n[7]
            , p = n[8]
            , d = n[9]
            , f = n[10]
            , m = n[11]
            , g = n[12]
            , v = n[13]
            , y = n[14]
            , n = n[15]
            , x = d * y * u - v * f * u + v * l * m - h * y * m - d * l * n + h * f * n
            , b = g * f * u - p * y * u - g * l * m + c * y * m + p * l * n - c * f * n
            , _ = p * v * u - g * d * u + g * h * m - c * v * m - p * h * n + c * d * n
            , w = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y
            , E = r * x + o * b + a * _ + s * w;
          if (0 === E) {
              if (!0 === t)
                  throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
              return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"),
              this.identity()
          }
          return E = 1 / E,
          i[0] = x * E,
          i[1] = (v * f * s - d * y * s - v * a * m + o * y * m + d * a * n - o * f * n) * E,
          i[2] = (h * y * s - v * l * s + v * a * u - o * y * u - h * a * n + o * l * n) * E,
          i[3] = (d * l * s - h * f * s - d * a * u + o * f * u + h * a * m - o * l * m) * E,
          i[4] = b * E,
          i[5] = (p * y * s - g * f * s + g * a * m - r * y * m - p * a * n + r * f * n) * E,
          i[6] = (g * l * s - c * y * s - g * a * u + r * y * u + c * a * n - r * l * n) * E,
          i[7] = (c * f * s - p * l * s + p * a * u - r * f * u - c * a * m + r * l * m) * E,
          i[8] = _ * E,
          i[9] = (g * d * s - p * v * s - g * o * m + r * v * m + p * o * n - r * d * n) * E,
          i[10] = (c * v * s - g * h * s + g * o * u - r * v * u - c * o * n + r * h * n) * E,
          i[11] = (p * h * s - c * d * s - p * o * u + r * d * u + c * o * m - r * h * m) * E,
          i[12] = w * E,
          i[13] = (p * v * a - g * d * a + g * o * f - r * v * f - p * o * y + r * d * y) * E,
          i[14] = (g * h * a - c * v * a - g * o * l + r * v * l + c * o * y - r * h * y) * E,
          i[15] = (c * d * a - p * h * a + p * o * l - r * d * l - c * o * f + r * h * f) * E,
          this
      },
      scale: function(e) {
          var t = this.elements
            , i = e.x
            , n = e.y;
          return e = e.z,
          t[0] *= i,
          t[4] *= n,
          t[8] *= e,
          t[1] *= i,
          t[5] *= n,
          t[9] *= e,
          t[2] *= i,
          t[6] *= n,
          t[10] *= e,
          t[3] *= i,
          t[7] *= n,
          t[11] *= e,
          this
      },
      getMaxScaleOnAxis: function() {
          var e = this.elements;
          return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
      },
      makeTranslation: function(e, t, i) {
          return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
          this
      },
      makeRotationX: function(e) {
          var t = Math.cos(e);
          return e = Math.sin(e),
          this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1),
          this
      },
      makeRotationY: function(e) {
          var t = Math.cos(e);
          return e = Math.sin(e),
          this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1),
          this
      },
      makeRotationZ: function(e) {
          var t = Math.cos(e);
          return e = Math.sin(e),
          this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
          this
      },
      makeRotationAxis: function(e, t) {
          var i = Math.cos(t)
            , n = Math.sin(t)
            , r = 1 - i
            , o = e.x
            , a = e.y
            , s = e.z
            , c = r * o
            , h = r * a;
          return this.set(c * o + i, c * a - n * s, c * s + n * a, 0, c * a + n * s, h * a + i, h * s - n * o, 0, c * s - n * a, h * s + n * o, r * s * s + i, 0, 0, 0, 0, 1),
          this
      },
      makeScale: function(e, t, i) {
          return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
          this
      },
      makeShear: function(e, t, i) {
          return this.set(1, t, i, 0, e, 1, i, 0, e, t, 1, 0, 0, 0, 0, 1),
          this
      },
      compose: function(e, t, i) {
          return this.makeRotationFromQuaternion(t),
          this.scale(i),
          this.setPosition(e),
          this
      },
      decompose: function() {
          var e, t;
          return function(i, n, r) {
              void 0 === e && (e = new c,
              t = new h);
              var o = this.elements
                , a = e.set(o[0], o[1], o[2]).length()
                , s = e.set(o[4], o[5], o[6]).length()
                , l = e.set(o[8], o[9], o[10]).length();
              0 > this.determinant() && (a = -a),
              i.x = o[12],
              i.y = o[13],
              i.z = o[14],
              t.elements.set(this.elements),
              i = 1 / a;
              var o = 1 / s
                , u = 1 / l;
              return t.elements[0] *= i,
              t.elements[1] *= i,
              t.elements[2] *= i,
              t.elements[4] *= o,
              t.elements[5] *= o,
              t.elements[6] *= o,
              t.elements[8] *= u,
              t.elements[9] *= u,
              t.elements[10] *= u,
              n.setFromRotationMatrix(t),
              r.x = a,
              r.y = s,
              r.z = l,
              this
          }
      }(),
      makePerspective: function(e, t, i, n, r, o) {
          void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
          var a = this.elements;
          return a[0] = 2 * r / (t - e),
          a[4] = 0,
          a[8] = (t + e) / (t - e),
          a[12] = 0,
          a[1] = 0,
          a[5] = 2 * r / (i - n),
          a[9] = (i + n) / (i - n),
          a[13] = 0,
          a[2] = 0,
          a[6] = 0,
          a[10] = -(o + r) / (o - r),
          a[14] = -2 * o * r / (o - r),
          a[3] = 0,
          a[7] = 0,
          a[11] = -1,
          a[15] = 0,
          this
      },
      makeOrthographic: function(e, t, i, n, r, o) {
          var a = this.elements
            , s = 1 / (t - e)
            , c = 1 / (i - n)
            , h = 1 / (o - r);
          return a[0] = 2 * s,
          a[4] = 0,
          a[8] = 0,
          a[12] = -((t + e) * s),
          a[1] = 0,
          a[5] = 2 * c,
          a[9] = 0,
          a[13] = -((i + n) * c),
          a[2] = 0,
          a[6] = 0,
          a[10] = -2 * h,
          a[14] = -((o + r) * h),
          a[3] = 0,
          a[7] = 0,
          a[11] = 0,
          a[15] = 1,
          this
      },
      equals: function(e) {
          var t = this.elements;
          e = e.elements;
          for (var i = 0; 16 > i; i++)
              if (t[i] !== e[i])
                  return !1;
          return !0
      },
      fromArray: function(e, t) {
          void 0 === t && (t = 0);
          for (var i = 0; 16 > i; i++)
              this.elements[i] = e[i + t];
          return this
      },
      toArray: function(e, t) {
          void 0 === e && (e = []),
          void 0 === t && (t = 0);
          var i = this.elements;
          return e[t] = i[0],
          e[t + 1] = i[1],
          e[t + 2] = i[2],
          e[t + 3] = i[3],
          e[t + 4] = i[4],
          e[t + 5] = i[5],
          e[t + 6] = i[6],
          e[t + 7] = i[7],
          e[t + 8] = i[8],
          e[t + 9] = i[9],
          e[t + 10] = i[10],
          e[t + 11] = i[11],
          e[t + 12] = i[12],
          e[t + 13] = i[13],
          e[t + 14] = i[14],
          e[t + 15] = i[15],
          e
      }
  },
  l.prototype = Object.create(n.prototype),
  l.prototype.constructor = l,
  l.prototype.isCubeTexture = !0,
  Object.defineProperty(l.prototype, "images", {
      get: function() {
          return this.image
      },
      set: function(e) {
          this.image = e
      }
  });
  var uo = new n
    , po = new l
    , fo = []
    , mo = [];
  H.prototype.setValue = function(e, t) {
      for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
          var o = i[n];
          o.setValue(e, t[o.id])
      }
  }
  ;
  var go = /([\w\d_]+)(\])?(\[|\.)?/g;
  G.prototype.setValue = function(e, t, i) {
      t = this.map[t],
      void 0 !== t && t.setValue(e, i, this.renderer)
  }
  ,
  G.prototype.set = function(e, t, i) {
      var n = this.map[i];
      void 0 !== n && n.setValue(e, t[i], this.renderer)
  }
  ,
  G.prototype.setOptional = function(e, t, i) {
      t = t[i],
      void 0 !== t && this.setValue(e, i, t)
  }
  ,
  G.upload = function(e, t, i, n) {
      for (var r = 0, o = t.length; r !== o; ++r) {
          var a = t[r]
            , s = i[a.id];
          !1 !== s.needsUpdate && a.setValue(e, s.value, n)
      }
  }
  ,
  G.seqWithValue = function(e, t) {
      for (var i = [], n = 0, r = e.length; n !== r; ++n) {
          var o = e[n];
          o.id in t && i.push(o)
      }
      return i
  }
  ;
  var vo = {
      merge: function(e) {
          for (var t = {}, i = 0; i < e.length; i++) {
              var n, r = this.clone(e[i]);
              for (n in r)
                  t[n] = r[n]
          }
          return t
      },
      clone: function(e) {
          var t, i = {};
          for (t in e) {
              i[t] = {};
              for (var n in e[t]) {
                  var r = e[t][n];
                  i[t][n] = r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? r.clone() : Array.isArray(r) ? r.slice() : r
              }
          }
          return i
      }
  }
    , yo = {
      alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n",
      alphatest_fragment: "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n",
      aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
      begin_vertex: "\nvec3 transformed = vec3( position );\n",
      beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
      bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n	const float LUT_SIZE  = 64.0;\n	const float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n	const float LUT_BIAS  = 0.5/LUT_SIZE;\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 P = geometry.position;\n	float theta = acos( dot( N, V ) );\n	vec2 uv = vec2(\n		sqrt( saturate( roughness ) ),\n		saturate( theta / ( 0.5 * PI ) ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n	int config = 0;\n	if ( L[0].z > 0.0 ) config += 1;\n	if ( L[1].z > 0.0 ) config += 2;\n	if ( L[2].z > 0.0 ) config += 4;\n	if ( L[3].z > 0.0 ) config += 8;\n	n = 0;\n	if ( config == 0 ) {\n	} else if ( config == 1 ) {\n		n = 3;\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n		L[2] = -L[3].z * L[0] + L[0].z * L[3];\n	} else if ( config == 2 ) {\n		n = 3;\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n	} else if ( config == 3 ) {\n		n = 4;\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n		L[3] = -L[3].z * L[0] + L[0].z * L[3];\n	} else if ( config == 4 ) {\n		n = 3;\n		L[0] = -L[3].z * L[2] + L[2].z * L[3];\n		L[1] = -L[1].z * L[2] + L[2].z * L[1];\n	} else if ( config == 5 ) {\n		n = 0;\n	} else if ( config == 6 ) {\n		n = 4;\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n		L[3] = -L[3].z * L[2] + L[2].z * L[3];\n	} else if ( config == 7 ) {\n		n = 5;\n		L[4] = -L[3].z * L[0] + L[0].z * L[3];\n		L[3] = -L[3].z * L[2] + L[2].z * L[3];\n	} else if ( config == 8 ) {\n		n = 3;\n		L[0] = -L[0].z * L[3] + L[3].z * L[0];\n		L[1] = -L[2].z * L[3] + L[3].z * L[2];\n		L[2] =  L[3];\n	} else if ( config == 9 ) {\n		n = 4;\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n		L[2] = -L[2].z * L[3] + L[3].z * L[2];\n	} else if ( config == 10 ) {\n		n = 0;\n	} else if ( config == 11 ) {\n		n = 5;\n		L[4] = L[3];\n		L[3] = -L[2].z * L[3] + L[3].z * L[2];\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n	} else if ( config == 12 ) {\n		n = 4;\n		L[1] = -L[1].z * L[2] + L[2].z * L[1];\n		L[0] = -L[0].z * L[3] + L[3].z * L[0];\n	} else if ( config == 13 ) {\n		n = 5;\n		L[4] = L[3];\n		L[3] = L[2];\n		L[2] = -L[1].z * L[2] + L[2].z * L[1];\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n	} else if ( config == 14 ) {\n		n = 5;\n		L[4] = -L[0].z * L[3] + L[3].z * L[0];\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n	} else if ( config == 15 ) {\n		n = 4;\n	}\n	if ( n == 3 )\n		L[3] = L[0];\n	if ( n == 4 )\n		L[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n	float cosTheta = dot( v1, v2 );\n	float theta = acos( cosTheta );\n	float res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n	return res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n	rectPoints[0] = pos - halfWidth - halfHeight;\n	rectPoints[1] = pos + halfWidth - halfHeight;\n	rectPoints[2] = pos + halfWidth + halfHeight;\n	rectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 P = geometry.position;\n	vec3 T1, T2;\n	T1 = normalize(V - N * dot( V, N ));\n	T2 = - cross( N, T1 );\n	mat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n	vec3 clippedRect[5];\n	clippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n	clippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n	clippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n	clippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n	int n;\n	clipQuadToHorizon(clippedRect, n);\n	if ( n == 0 )\n		return vec3( 0, 0, 0 );\n	clippedRect[0] = normalize( clippedRect[0] );\n	clippedRect[1] = normalize( clippedRect[1] );\n	clippedRect[2] = normalize( clippedRect[2] );\n	clippedRect[3] = normalize( clippedRect[3] );\n	clippedRect[4] = normalize( clippedRect[4] );\n	float sum = 0.0;\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n	if (n >= 4)\n		sum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n	if (n == 5)\n		sum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n	sum = max( 0.0, sum );\n	vec3 Lo_i = vec3( sum, sum, sum );\n	return Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n		const in GeometricContext geometry,\n		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n		const in float roughness,\n		const in sampler2D ltcMat, const in sampler2D ltcMag ) {\n	vec3 rectPoints[4];\n	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n	vec2 uv = ltcTextureCoords( geometry, roughness );\n	vec4 brdfLtcApproxParams, t;\n	brdfLtcApproxParams = texture2D( ltcMat, uv );\n	t = texture2D( ltcMat, uv );\n	float brdfLtcScalar = texture2D( ltcMag, uv ).a;\n	mat3 brdfLtcApproxMat = mat3(\n		vec3(   1,   0, t.y ),\n		vec3(   0, t.z,   0 ),\n		vec3( t.w,   0, t.x )\n	);\n	vec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n	specularReflectance *= brdfLtcScalar;\n	return specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n		const in GeometricContext geometry,\n		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n	vec3 rectPoints[4];\n	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n	mat3 diffuseBrdfMat = mat3(1);\n	vec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n	return diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n",
      clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n		\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n			vec4 plane = clippingPlanes[ i ];\n			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		if ( clipped ) discard;\n	\n	#endif\n#endif\n",
      clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n",
      clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n",
      color_fragment: "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n",
      color_pars_vertex: "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
      color_vertex: "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
      common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n	mat3 tmp;\n	tmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n	tmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n	tmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n	return tmp;\n}\n",
      cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n",
      defaultnormal_vertex: "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
      displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n",
      displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n",
      encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.x, max( value.g, value.b ) );\n	float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M            = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.x, max( value.g, value.b ) );\n	float D      = max( maxRange / maxRGB, 1.0 );\n	D            = min( floor( D ) / 255.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n	vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n	Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract(Le);\n	vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n	return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
      envmap_fragment: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n",
      envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n",
      envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n",
      envmap_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n",
      fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
      fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif\n",
      gradientmap_pars_fragment: "#ifdef TOON\n	uniform sampler2D gradientMap;\n	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n		float dotNL = dot( normal, lightDirection );\n		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n		#ifdef USE_GRADIENTMAP\n			return texture2D( gradientMap, coord ).rgb;\n		#else\n			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n		#endif\n	}\n#endif\n",
      lightmap_fragment: "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n",
      lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltcMat;	uniform sampler2D ltcMag;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n",
      lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 matDiffColor = material.diffuseColor;\n		vec3 matSpecColor = material.specularColor;\n		vec3 lightColor   = rectAreaLight.color;\n		float roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n		vec3 spec = Rect_Area_Light_Specular_Reflectance(\n				geometry,\n				rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n				roughness,\n				ltcMat, ltcMag );\n		vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n				geometry,\n				rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n		reflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n		reflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n	}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifdef TOON\n		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#else\n		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n		vec3 irradiance = dotNL * directLight.color;\n	#endif\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_Direct_RectArea		RE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n",
      lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 matDiffColor = material.diffuseColor;\n		vec3 matSpecColor = material.specularColor;\n		vec3 lightColor   = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 spec = Rect_Area_Light_Specular_Reflectance(\n				geometry,\n				rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n				roughness,\n				ltcMat, ltcMag );\n		vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n				geometry,\n				rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n		reflectedLight.directSpecular += lightColor * matSpecColor * spec;\n		reflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n		irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n",
      logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif",
      logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n",
      map_fragment: "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n",
      map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n",
      map_particle_fragment: "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      map_particle_pars_fragment: "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n",
      metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n",
      metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
      morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n",
      normal_flip: "#ifdef DOUBLE_SIDED\n	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n	float flipNormal = 1.0;\n#endif\n",
      normal_fragment: "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n",
      packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      project_vertex: "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
      roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n",
      roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n",
      shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n",
      shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n",
      shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n",
      skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n",
      skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n",
      skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
      specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
      tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif",
      uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n",
      uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
      uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
      uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif",
      uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif",
      worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n",
      cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n",
      cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n",
      depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n",
      depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n",
      distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
      distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition;\n}\n",
      equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n",
      linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}\n",
      meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}\n",
      meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
      meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
      meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
      normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
      points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
      shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
      shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n"
  };
  V.prototype = {
      constructor: V,
      isColor: !0,
      r: 1,
      g: 1,
      b: 1,
      set: function(e) {
          return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
          this
      },
      setScalar: function(e) {
          return this.b = this.g = this.r = e,
          this
      },
      setHex: function(e) {
          return e = Math.floor(e),
          this.r = (e >> 16 & 255) / 255,
          this.g = (e >> 8 & 255) / 255,
          this.b = (255 & e) / 255,
          this
      },
      setRGB: function(e, t, i) {
          return this.r = e,
          this.g = t,
          this.b = i,
          this
      },
      setHSL: function() {
          function e(e, t, i) {
              return 0 > i && (i += 1),
              i > 1 && --i,
              1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + 6 * (t - e) * (2 / 3 - i) : e
          }
          return function(t, i, n) {
              return t = ho.euclideanModulo(t, 1),
              i = ho.clamp(i, 0, 1),
              n = ho.clamp(n, 0, 1),
              0 === i ? this.r = this.g = this.b = n : (i = .5 >= n ? n * (1 + i) : n + i - n * i,
              n = 2 * n - i,
              this.r = e(n, i, t + 1 / 3),
              this.g = e(n, i, t),
              this.b = e(n, i, t - 1 / 3)),
              this
          }
      }(),
      setStyle: function(e) {
          function t(t) {
              void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
          }
          var i;
          if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
              var n = i[2];
              switch (i[1]) {
              case "rgb":
              case "rgba":
                  if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n))
                      return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                      this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                      this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                      t(i[5]),
                      this;
                  if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n))
                      return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                      this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                      this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                      t(i[5]),
                      this;
                  break;
              case "hsl":
              case "hsla":
                  if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) {
                      var n = parseFloat(i[1]) / 360
                        , r = parseInt(i[2], 10) / 100
                        , o = parseInt(i[3], 10) / 100;
                      return t(i[5]),
                      this.setHSL(n, r, o)
                  }
              }
          } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
              if (i = i[1],
              n = i.length,
              3 === n)
                  return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255,
                  this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255,
                  this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255,
                  this;
              if (6 === n)
                  return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255,
                  this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255,
                  this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255,
                  this
          }
          return e && 0 < e.length && (i = xo[e],
          void 0 !== i ? this.setHex(i) : console.warn("THREE.Color: Unknown color " + e)),
          this
      },
      clone: function() {
          return new this.constructor(this.r,this.g,this.b)
      },
      copy: function(e) {
          return this.r = e.r,
          this.g = e.g,
          this.b = e.b,
          this
      },
      copyGammaToLinear: function(e, t) {
          return void 0 === t && (t = 2),
          this.r = Math.pow(e.r, t),
          this.g = Math.pow(e.g, t),
          this.b = Math.pow(e.b, t),
          this
      },
      copyLinearToGamma: function(e, t) {
          void 0 === t && (t = 2);
          var i = t > 0 ? 1 / t : 1;
          return this.r = Math.pow(e.r, i),
          this.g = Math.pow(e.g, i),
          this.b = Math.pow(e.b, i),
          this
      },
      convertGammaToLinear: function() {
          var e = this.r
            , t = this.g
            , i = this.b;
          return this.r = e * e,
          this.g = t * t,
          this.b = i * i,
          this
      },
      convertLinearToGamma: function() {
          return this.r = Math.sqrt(this.r),
          this.g = Math.sqrt(this.g),
          this.b = Math.sqrt(this.b),
          this
      },
      getHex: function() {
          return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
      },
      getHexString: function() {
          return ("000000" + this.getHex().toString(16)).slice(-6)
      },
      getHSL: function(e) {
          e = e || {
              h: 0,
              s: 0,
              l: 0
          };
          var t, i = this.r, n = this.g, r = this.b, o = Math.max(i, n, r), a = Math.min(i, n, r), s = (a + o) / 2;
          if (a === o)
              a = t = 0;
          else {
              var c = o - a
                , a = .5 >= s ? c / (o + a) : c / (2 - o - a);
              switch (o) {
              case i:
                  t = (n - r) / c + (r > n ? 6 : 0);
                  break;
              case n:
                  t = (r - i) / c + 2;
                  break;
              case r:
                  t = (i - n) / c + 4
              }
              t /= 6
          }
          return e.h = t,
          e.s = a,
          e.l = s,
          e
      },
      getStyle: function() {
          return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
      },
      offsetHSL: function(e, t, i) {
          var n = this.getHSL();
          return n.h += e,
          n.s += t,
          n.l += i,
          this.setHSL(n.h, n.s, n.l),
          this
      },
      add: function(e) {
          return this.r += e.r,
          this.g += e.g,
          this.b += e.b,
          this
      },
      addColors: function(e, t) {
          return this.r = e.r + t.r,
          this.g = e.g + t.g,
          this.b = e.b + t.b,
          this
      },
      addScalar: function(e) {
          return this.r += e,
          this.g += e,
          this.b += e,
          this
      },
      sub: function(e) {
          return this.r = Math.max(0, this.r - e.r),
          this.g = Math.max(0, this.g - e.g),
          this.b = Math.max(0, this.b - e.b),
          this
      },
      multiply: function(e) {
          return this.r *= e.r,
          this.g *= e.g,
          this.b *= e.b,
          this
      },
      multiplyScalar: function(e) {
          return this.r *= e,
          this.g *= e,
          this.b *= e,
          this
      },
      lerp: function(e, t) {
          return this.r += (e.r - this.r) * t,
          this.g += (e.g - this.g) * t,
          this.b += (e.b - this.b) * t,
          this
      },
      equals: function(e) {
          return e.r === this.r && e.g === this.g && e.b === this.b
      },
      fromArray: function(e, t) {
          return void 0 === t && (t = 0),
          this.r = e[t],
          this.g = e[t + 1],
          this.b = e[t + 2],
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this.r,
          e[t + 1] = this.g,
          e[t + 2] = this.b,
          e
      },
      toJSON: function() {
          return this.getHex()
      }
  };
  var xo = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
  };
  k.prototype = Object.create(n.prototype),
  k.prototype.constructor = k,
  k.prototype.isDataTexture = !0;
  var bo = {
      common: {
          diffuse: {
              value: new V(15658734)
          },
          opacity: {
              value: 1
          },
          map: {
              value: null
          },
          offsetRepeat: {
              value: new r(0,0,1,1)
          },
          specularMap: {
              value: null
          },
          alphaMap: {
              value: null
          },
          envMap: {
              value: null
          },
          flipEnvMap: {
              value: -1
          },
          reflectivity: {
              value: 1
          },
          refractionRatio: {
              value: .98
          }
      },
      aomap: {
          aoMap: {
              value: null
          },
          aoMapIntensity: {
              value: 1
          }
      },
      lightmap: {
          lightMap: {
              value: null
          },
          lightMapIntensity: {
              value: 1
          }
      },
      emissivemap: {
          emissiveMap: {
              value: null
          }
      },
      bumpmap: {
          bumpMap: {
              value: null
          },
          bumpScale: {
              value: 1
          }
      },
      normalmap: {
          normalMap: {
              value: null
          },
          normalScale: {
              value: new i(1,1)
          }
      },
      displacementmap: {
          displacementMap: {
              value: null
          },
          displacementScale: {
              value: 1
          },
          displacementBias: {
              value: 0
          }
      },
      roughnessmap: {
          roughnessMap: {
              value: null
          }
      },
      metalnessmap: {
          metalnessMap: {
              value: null
          }
      },
      gradientmap: {
          gradientMap: {
              value: null
          }
      },
      fog: {
          fogDensity: {
              value: 25e-5
          },
          fogNear: {
              value: 1
          },
          fogFar: {
              value: 2e3
          },
          fogColor: {
              value: new V(16777215)
          }
      },
      lights: {
          ambientLightColor: {
              value: []
          },
          directionalLights: {
              value: [],
              properties: {
                  direction: {},
                  color: {},
                  shadow: {},
                  shadowBias: {},
                  shadowRadius: {},
                  shadowMapSize: {}
              }
          },
          directionalShadowMap: {
              value: []
          },
          directionalShadowMatrix: {
              value: []
          },
          spotLights: {
              value: [],
              properties: {
                  color: {},
                  position: {},
                  direction: {},
                  distance: {},
                  coneCos: {},
                  penumbraCos: {},
                  decay: {},
                  shadow: {},
                  shadowBias: {},
                  shadowRadius: {},
                  shadowMapSize: {}
              }
          },
          spotShadowMap: {
              value: []
          },
          spotShadowMatrix: {
              value: []
          },
          pointLights: {
              value: [],
              properties: {
                  color: {},
                  position: {},
                  decay: {},
                  distance: {},
                  shadow: {},
                  shadowBias: {},
                  shadowRadius: {},
                  shadowMapSize: {}
              }
          },
          pointShadowMap: {
              value: []
          },
          pointShadowMatrix: {
              value: []
          },
          hemisphereLights: {
              value: [],
              properties: {
                  direction: {},
                  skyColor: {},
                  groundColor: {}
              }
          },
          rectAreaLights: {
              value: [],
              properties: {
                  color: {},
                  position: {},
                  width: {},
                  height: {}
              }
          }
      },
      points: {
          diffuse: {
              value: new V(15658734)
          },
          opacity: {
              value: 1
          },
          size: {
              value: 1
          },
          scale: {
              value: 1
          },
          map: {
              value: null
          },
          offsetRepeat: {
              value: new r(0,0,1,1)
          }
      }
  }
    , _o = {
      basic: {
          uniforms: vo.merge([bo.common, bo.aomap, bo.lightmap, bo.fog]),
          vertexShader: yo.meshbasic_vert,
          fragmentShader: yo.meshbasic_frag
      },
      lambert: {
          uniforms: vo.merge([bo.common, bo.aomap, bo.lightmap, bo.emissivemap, bo.fog, bo.lights, {
              emissive: {
                  value: new V(0)
              }
          }]),
          vertexShader: yo.meshlambert_vert,
          fragmentShader: yo.meshlambert_frag
      },
      phong: {
          uniforms: vo.merge([bo.common, bo.aomap, bo.lightmap, bo.emissivemap, bo.bumpmap, bo.normalmap, bo.displacementmap, bo.gradientmap, bo.fog, bo.lights, {
              emissive: {
                  value: new V(0)
              },
              specular: {
                  value: new V(1118481)
              },
              shininess: {
                  value: 30
              }
          }]),
          vertexShader: yo.meshphong_vert,
          fragmentShader: yo.meshphong_frag
      },
      standard: {
          uniforms: vo.merge([bo.common, bo.aomap, bo.lightmap, bo.emissivemap, bo.bumpmap, bo.normalmap, bo.displacementmap, bo.roughnessmap, bo.metalnessmap, bo.fog, bo.lights, {
              emissive: {
                  value: new V(0)
              },
              roughness: {
                  value: .5
              },
              metalness: {
                  value: 0
              },
              envMapIntensity: {
                  value: 1
              }
          }]),
          vertexShader: yo.meshphysical_vert,
          fragmentShader: yo.meshphysical_frag
      },
      points: {
          uniforms: vo.merge([bo.points, bo.fog]),
          vertexShader: yo.points_vert,
          fragmentShader: yo.points_frag
      },
      dashed: {
          uniforms: vo.merge([bo.common, bo.fog, {
              scale: {
                  value: 1
              },
              dashSize: {
                  value: 1
              },
              totalSize: {
                  value: 2
              }
          }]),
          vertexShader: yo.linedashed_vert,
          fragmentShader: yo.linedashed_frag
      },
      depth: {
          uniforms: vo.merge([bo.common, bo.displacementmap]),
          vertexShader: yo.depth_vert,
          fragmentShader: yo.depth_frag
      },
      normal: {
          uniforms: vo.merge([bo.common, bo.bumpmap, bo.normalmap, bo.displacementmap, {
              opacity: {
                  value: 1
              }
          }]),
          vertexShader: yo.normal_vert,
          fragmentShader: yo.normal_frag
      },
      cube: {
          uniforms: {
              tCube: {
                  value: null
              },
              tFlip: {
                  value: -1
              },
              opacity: {
                  value: 1
              }
          },
          vertexShader: yo.cube_vert,
          fragmentShader: yo.cube_frag
      },
      equirect: {
          uniforms: {
              tEquirect: {
                  value: null
              },
              tFlip: {
                  value: -1
              }
          },
          vertexShader: yo.equirect_vert,
          fragmentShader: yo.equirect_frag
      },
      distanceRGBA: {
          uniforms: {
              lightPos: {
                  value: new c
              }
          },
          vertexShader: yo.distanceRGBA_vert,
          fragmentShader: yo.distanceRGBA_frag
      }
  };
  _o.physical = {
      uniforms: vo.merge([_o.standard.uniforms, {
          clearCoat: {
              value: 0
          },
          clearCoatRoughness: {
              value: 0
          }
      }]),
      vertexShader: yo.meshphysical_vert,
      fragmentShader: yo.meshphysical_frag
  },
  j.prototype = {
      constructor: j,
      set: function(e, t) {
          return this.min.copy(e),
          this.max.copy(t),
          this
      },
      setFromPoints: function(e) {
          this.makeEmpty();
          for (var t = 0, i = e.length; i > t; t++)
              this.expandByPoint(e[t]);
          return this
      },
      setFromCenterAndSize: function() {
          var e = new i;
          return function(t, i) {
              var n = e.copy(i).multiplyScalar(.5);
              return this.min.copy(t).sub(n),
              this.max.copy(t).add(n),
              this
          }
      }(),
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.min.copy(e.min),
          this.max.copy(e.max),
          this
      },
      makeEmpty: function() {
          return this.min.x = this.min.y = 1 / 0,
          this.max.x = this.max.y = -1 / 0,
          this
      },
      isEmpty: function() {
          return this.max.x < this.min.x || this.max.y < this.min.y
      },
      getCenter: function(e) {
          return e = e || new i,
          this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
      },
      getSize: function(e) {
          return e = e || new i,
          this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
      },
      expandByPoint: function(e) {
          return this.min.min(e),
          this.max.max(e),
          this
      },
      expandByVector: function(e) {
          return this.min.sub(e),
          this.max.add(e),
          this
      },
      expandByScalar: function(e) {
          return this.min.addScalar(-e),
          this.max.addScalar(e),
          this
      },
      containsPoint: function(e) {
          return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
      },
      containsBox: function(e) {
          return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
      },
      getParameter: function(e, t) {
          return (t || new i).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
      },
      intersectsBox: function(e) {
          return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
      },
      clampPoint: function(e, t) {
          return (t || new i).copy(e).clamp(this.min, this.max)
      },
      distanceToPoint: function() {
          var e = new i;
          return function(t) {
              return e.copy(t).clamp(this.min, this.max).sub(t).length()
          }
      }(),
      intersect: function(e) {
          return this.min.max(e.min),
          this.max.min(e.max),
          this
      },
      union: function(e) {
          return this.min.min(e.min),
          this.max.max(e.max),
          this
      },
      translate: function(e) {
          return this.min.add(e),
          this.max.add(e),
          this
      },
      equals: function(e) {
          return e.min.equals(this.min) && e.max.equals(this.max)
      }
  };
  var wo = 0;
  q.prototype = {
      constructor: q,
      isMaterial: !0,
      get needsUpdate() {
          return this._needsUpdate
      },
      set needsUpdate(e) {
          !0 === e && this.update(),
          this._needsUpdate = e
      },
      setValues: function(e) {
          if (void 0 !== e)
              for (var t in e) {
                  var i = e[t];
                  if (void 0 === i)
                      console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                  else {
                      var n = this[t];
                      void 0 === n ? console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.") : n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = "overdraw" === t ? Number(i) : i
                  }
              }
      },
      toJSON: function(e) {
          function t(e) {
              var t, i = [];
              for (t in e) {
                  var n = e[t];
                  delete n.metadata,
                  i.push(n)
              }
              return i
          }
          var i = void 0 === e;
          i && (e = {
              textures: {},
              images: {}
          });
          var n = {
              metadata: {
                  version: 4.4,
                  type: "Material",
                  generator: "Material.toJSON"
              }
          };
          return n.uuid = this.uuid,
          n.type = this.type,
          "" !== this.name && (n.name = this.name),
          this.color && this.color.isColor && (n.color = this.color.getHex()),
          void 0 !== this.roughness && (n.roughness = this.roughness),
          void 0 !== this.metalness && (n.metalness = this.metalness),
          this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
          this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
          void 0 !== this.shininess && (n.shininess = this.shininess),
          void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
          void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
          this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
          this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
          this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid),
          this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
          n.bumpScale = this.bumpScale),
          this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
          n.normalScale = this.normalScale.toArray()),
          this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
          n.displacementScale = this.displacementScale,
          n.displacementBias = this.displacementBias),
          this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
          this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
          this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
          this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
          this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
          n.reflectivity = this.reflectivity),
          this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
          void 0 !== this.size && (n.size = this.size),
          void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
          1 !== this.blending && (n.blending = this.blending),
          2 !== this.shading && (n.shading = this.shading),
          0 !== this.side && (n.side = this.side),
          0 !== this.vertexColors && (n.vertexColors = this.vertexColors),
          1 > this.opacity && (n.opacity = this.opacity),
          !0 === this.transparent && (n.transparent = this.transparent),
          n.depthFunc = this.depthFunc,
          n.depthTest = this.depthTest,
          n.depthWrite = this.depthWrite,
          0 < this.alphaTest && (n.alphaTest = this.alphaTest),
          !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
          !0 === this.wireframe && (n.wireframe = this.wireframe),
          1 < this.wireframeLinewidth && (n.wireframeLinewidth = this.wireframeLinewidth),
          "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
          "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
          n.skinning = this.skinning,
          n.morphTargets = this.morphTargets,
          i && (i = t(e.textures),
          e = t(e.images),
          0 < i.length && (n.textures = i),
          0 < e.length && (n.images = e)),
          n
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          this.name = e.name,
          this.fog = e.fog,
          this.lights = e.lights,
          this.blending = e.blending,
          this.side = e.side,
          this.shading = e.shading,
          this.vertexColors = e.vertexColors,
          this.opacity = e.opacity,
          this.transparent = e.transparent,
          this.blendSrc = e.blendSrc,
          this.blendDst = e.blendDst,
          this.blendEquation = e.blendEquation,
          this.blendSrcAlpha = e.blendSrcAlpha,
          this.blendDstAlpha = e.blendDstAlpha,
          this.blendEquationAlpha = e.blendEquationAlpha,
          this.depthFunc = e.depthFunc,
          this.depthTest = e.depthTest,
          this.depthWrite = e.depthWrite,
          this.colorWrite = e.colorWrite,
          this.precision = e.precision,
          this.polygonOffset = e.polygonOffset,
          this.polygonOffsetFactor = e.polygonOffsetFactor,
          this.polygonOffsetUnits = e.polygonOffsetUnits,
          this.alphaTest = e.alphaTest,
          this.premultipliedAlpha = e.premultipliedAlpha,
          this.overdraw = e.overdraw,
          this.visible = e.visible,
          this.clipShadows = e.clipShadows,
          this.clipIntersection = e.clipIntersection,
          e = e.clippingPlanes;
          var t = null;
          if (null !== e)
              for (var i = e.length, t = Array(i), n = 0; n !== i; ++n)
                  t[n] = e[n].clone();
          return this.clippingPlanes = t,
          this
      },
      update: function() {
          this.dispatchEvent({
              type: "update"
          })
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  },
  Object.assign(q.prototype, t.prototype),
  Y.prototype = Object.create(q.prototype),
  Y.prototype.constructor = Y,
  Y.prototype.isShaderMaterial = !0,
  Y.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.fragmentShader = e.fragmentShader,
      this.vertexShader = e.vertexShader,
      this.uniforms = vo.clone(e.uniforms),
      this.defines = e.defines,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.lights = e.lights,
      this.clipping = e.clipping,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.morphNormals = e.morphNormals,
      this.extensions = e.extensions,
      this
  }
  ,
  Y.prototype.toJSON = function(e) {
      return e = q.prototype.toJSON.call(this, e),
      e.uniforms = this.uniforms,
      e.vertexShader = this.vertexShader,
      e.fragmentShader = this.fragmentShader,
      e
  }
  ,
  Z.prototype = Object.create(q.prototype),
  Z.prototype.constructor = Z,
  Z.prototype.isMeshDepthMaterial = !0,
  Z.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.depthPacking = e.depthPacking,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.map = e.map,
      this.alphaMap = e.alphaMap,
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this
  }
  ,
  J.prototype = {
      constructor: J,
      isBox3: !0,
      set: function(e, t) {
          return this.min.copy(e),
          this.max.copy(t),
          this
      },
      setFromArray: function(e) {
          for (var t = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = e.length; c > s; s += 3) {
              var h = e[s]
                , l = e[s + 1]
                , u = e[s + 2];
              t > h && (t = h),
              i > l && (i = l),
              n > u && (n = u),
              h > r && (r = h),
              l > o && (o = l),
              u > a && (a = u)
          }
          return this.min.set(t, i, n),
          this.max.set(r, o, a),
          this
      },
      setFromBufferAttribute: function(e) {
          for (var t = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = e.count; c > s; s++) {
              var h = e.getX(s)
                , l = e.getY(s)
                , u = e.getZ(s);
              t > h && (t = h),
              i > l && (i = l),
              n > u && (n = u),
              h > r && (r = h),
              l > o && (o = l),
              u > a && (a = u)
          }
          return this.min.set(t, i, n),
          this.max.set(r, o, a),
          this
      },
      setFromPoints: function(e) {
          this.makeEmpty();
          for (var t = 0, i = e.length; i > t; t++)
              this.expandByPoint(e[t]);
          return this
      },
      setFromCenterAndSize: function() {
          var e = new c;
          return function(t, i) {
              var n = e.copy(i).multiplyScalar(.5);
              return this.min.copy(t).sub(n),
              this.max.copy(t).add(n),
              this
          }
      }(),
      setFromObject: function(e) {
          return this.makeEmpty(),
          this.expandByObject(e)
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.min.copy(e.min),
          this.max.copy(e.max),
          this
      },
      makeEmpty: function() {
          return this.min.x = this.min.y = this.min.z = 1 / 0,
          this.max.x = this.max.y = this.max.z = -1 / 0,
          this
      },
      isEmpty: function() {
          return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      },
      getCenter: function(e) {
          return e = e || new c,
          this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
      },
      getSize: function(e) {
          return e = e || new c,
          this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
      },
      expandByPoint: function(e) {
          return this.min.min(e),
          this.max.max(e),
          this
      },
      expandByVector: function(e) {
          return this.min.sub(e),
          this.max.add(e),
          this
      },
      expandByScalar: function(e) {
          return this.min.addScalar(-e),
          this.max.addScalar(e),
          this
      },
      expandByObject: function() {
          var e = new c;
          return function(t) {
              var i = this;
              return t.updateMatrixWorld(!0),
              t.traverse(function(t) {
                  var n, r;
                  if (n = t.geometry,
                  void 0 !== n)
                      if (n.isGeometry) {
                          var o = n.vertices;
                          for (n = 0,
                          r = o.length; r > n; n++)
                              e.copy(o[n]),
                              e.applyMatrix4(t.matrixWorld),
                              i.expandByPoint(e)
                      } else if (n.isBufferGeometry && (o = n.attributes.position,
                      void 0 !== o))
                          for (n = 0,
                          r = o.count; r > n; n++)
                              e.fromBufferAttribute(o, n).applyMatrix4(t.matrixWorld),
                              i.expandByPoint(e)
              }),
              this
          }
      }(),
      containsPoint: function(e) {
          return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
      },
      containsBox: function(e) {
          return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
      },
      getParameter: function(e, t) {
          return (t || new c).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
      },
      intersectsBox: function(e) {
          return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
      },
      intersectsSphere: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new c),
              this.clampPoint(t.center, e),
              e.distanceToSquared(t.center) <= t.radius * t.radius
          }
      }(),
      intersectsPlane: function(e) {
          var t, i;
          return 0 < e.normal.x ? (t = e.normal.x * this.min.x,
          i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
          i = e.normal.x * this.min.x),
          0 < e.normal.y ? (t += e.normal.y * this.min.y,
          i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
          i += e.normal.y * this.min.y),
          0 < e.normal.z ? (t += e.normal.z * this.min.z,
          i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
          i += e.normal.z * this.min.z),
          t <= e.constant && i >= e.constant
      },
      clampPoint: function(e, t) {
          return (t || new c).copy(e).clamp(this.min, this.max)
      },
      distanceToPoint: function() {
          var e = new c;
          return function(t) {
              return e.copy(t).clamp(this.min, this.max).sub(t).length()
          }
      }(),
      getBoundingSphere: function() {
          var e = new c;
          return function(t) {
              return t = t || new Q,
              this.getCenter(t.center),
              t.radius = .5 * this.getSize(e).length(),
              t
          }
      }(),
      intersect: function(e) {
          return this.min.max(e.min),
          this.max.min(e.max),
          this.isEmpty() && this.makeEmpty(),
          this
      },
      union: function(e) {
          return this.min.min(e.min),
          this.max.max(e.max),
          this
      },
      applyMatrix4: function() {
          var e = [new c, new c, new c, new c, new c, new c, new c, new c];
          return function(t) {
              return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(e),
              this)
          }
      }(),
      translate: function(e) {
          return this.min.add(e),
          this.max.add(e),
          this
      },
      equals: function(e) {
          return e.min.equals(this.min) && e.max.equals(this.max)
      }
  },
  Q.prototype = {
      constructor: Q,
      set: function(e, t) {
          return this.center.copy(e),
          this.radius = t,
          this
      },
      setFromPoints: function() {
          var e;
          return function(t, i) {
              void 0 === e && (e = new J);
              var n = this.center;
              void 0 !== i ? n.copy(i) : e.setFromPoints(t).getCenter(n);
              for (var r = 0, o = 0, a = t.length; a > o; o++)
                  r = Math.max(r, n.distanceToSquared(t[o]));
              return this.radius = Math.sqrt(r),
              this
          }
      }(),
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.center.copy(e.center),
          this.radius = e.radius,
          this
      },
      empty: function() {
          return 0 >= this.radius
      },
      containsPoint: function(e) {
          return e.distanceToSquared(this.center) <= this.radius * this.radius
      },
      distanceToPoint: function(e) {
          return e.distanceTo(this.center) - this.radius
      },
      intersectsSphere: function(e) {
          var t = this.radius + e.radius;
          return e.center.distanceToSquared(this.center) <= t * t
      },
      intersectsBox: function(e) {
          return e.intersectsSphere(this)
      },
      intersectsPlane: function(e) {
          return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
      },
      clampPoint: function(e, t) {
          var i = this.center.distanceToSquared(e)
            , n = t || new c;
          return n.copy(e),
          i > this.radius * this.radius && (n.sub(this.center).normalize(),
          n.multiplyScalar(this.radius).add(this.center)),
          n
      },
      getBoundingBox: function(e) {
          return e = e || new J,
          e.set(this.center, this.center),
          e.expandByScalar(this.radius),
          e
      },
      applyMatrix4: function(e) {
          return this.center.applyMatrix4(e),
          this.radius *= e.getMaxScaleOnAxis(),
          this
      },
      translate: function(e) {
          return this.center.add(e),
          this
      },
      equals: function(e) {
          return e.center.equals(this.center) && e.radius === this.radius
      }
  },
  K.prototype = {
      constructor: K,
      isMatrix3: !0,
      set: function(e, t, i, n, r, o, a, s, c) {
          var h = this.elements;
          return h[0] = e,
          h[1] = n,
          h[2] = a,
          h[3] = t,
          h[4] = r,
          h[5] = s,
          h[6] = i,
          h[7] = o,
          h[8] = c,
          this
      },
      identity: function() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
          this
      },
      clone: function() {
          return (new this.constructor).fromArray(this.elements)
      },
      copy: function(e) {
          return e = e.elements,
          this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]),
          this
      },
      setFromMatrix4: function(e) {
          return e = e.elements,
          this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
          this
      },
      applyToBufferAttribute: function() {
          var e;
          return function(t) {
              void 0 === e && (e = new c);
              for (var i = 0, n = t.count; n > i; i++)
                  e.x = t.getX(i),
                  e.y = t.getY(i),
                  e.z = t.getZ(i),
                  e.applyMatrix3(this),
                  t.setXYZ(i, e.x, e.y, e.z);
              return t
          }
      }(),
      multiplyScalar: function(e) {
          var t = this.elements;
          return t[0] *= e,
          t[3] *= e,
          t[6] *= e,
          t[1] *= e,
          t[4] *= e,
          t[7] *= e,
          t[2] *= e,
          t[5] *= e,
          t[8] *= e,
          this
      },
      determinant: function() {
          var e = this.elements
            , t = e[0]
            , i = e[1]
            , n = e[2]
            , r = e[3]
            , o = e[4]
            , a = e[5]
            , s = e[6]
            , c = e[7]
            , e = e[8];
          return t * o * e - t * a * c - i * r * e + i * a * s + n * r * c - n * o * s
      },
      getInverse: function(e, t) {
          e && e.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
          var i = e.elements
            , n = this.elements
            , r = i[0]
            , o = i[1]
            , a = i[2]
            , s = i[3]
            , c = i[4]
            , h = i[5]
            , l = i[6]
            , u = i[7]
            , i = i[8]
            , p = i * c - h * u
            , d = h * l - i * s
            , f = u * s - c * l
            , m = r * p + o * d + a * f;
          if (0 === m) {
              if (!0 === t)
                  throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
              return console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"),
              this.identity()
          }
          return m = 1 / m,
          n[0] = p * m,
          n[1] = (a * u - i * o) * m,
          n[2] = (h * o - a * c) * m,
          n[3] = d * m,
          n[4] = (i * r - a * l) * m,
          n[5] = (a * s - h * r) * m,
          n[6] = f * m,
          n[7] = (o * l - u * r) * m,
          n[8] = (c * r - o * s) * m,
          this
      },
      transpose: function() {
          var e, t = this.elements;
          return e = t[1],
          t[1] = t[3],
          t[3] = e,
          e = t[2],
          t[2] = t[6],
          t[6] = e,
          e = t[5],
          t[5] = t[7],
          t[7] = e,
          this
      },
      getNormalMatrix: function(e) {
          return this.setFromMatrix4(e).getInverse(this).transpose()
      },
      transposeIntoArray: function(e) {
          var t = this.elements;
          return e[0] = t[0],
          e[1] = t[3],
          e[2] = t[6],
          e[3] = t[1],
          e[4] = t[4],
          e[5] = t[7],
          e[6] = t[2],
          e[7] = t[5],
          e[8] = t[8],
          this
      },
      fromArray: function(e, t) {
          void 0 === t && (t = 0);
          for (var i = 0; 9 > i; i++)
              this.elements[i] = e[i + t];
          return this
      },
      toArray: function(e, t) {
          void 0 === e && (e = []),
          void 0 === t && (t = 0);
          var i = this.elements;
          return e[t] = i[0],
          e[t + 1] = i[1],
          e[t + 2] = i[2],
          e[t + 3] = i[3],
          e[t + 4] = i[4],
          e[t + 5] = i[5],
          e[t + 6] = i[6],
          e[t + 7] = i[7],
          e[t + 8] = i[8],
          e
      }
  },
  $.prototype = {
      constructor: $,
      set: function(e, t) {
          return this.normal.copy(e),
          this.constant = t,
          this
      },
      setComponents: function(e, t, i, n) {
          return this.normal.set(e, t, i),
          this.constant = n,
          this
      },
      setFromNormalAndCoplanarPoint: function(e, t) {
          return this.normal.copy(e),
          this.constant = -t.dot(this.normal),
          this
      },
      setFromCoplanarPoints: function() {
          var e = new c
            , t = new c;
          return function(i, n, r) {
              return n = e.subVectors(r, n).cross(t.subVectors(i, n)).normalize(),
              this.setFromNormalAndCoplanarPoint(n, i),
              this
          }
      }(),
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.normal.copy(e.normal),
          this.constant = e.constant,
          this
      },
      normalize: function() {
          var e = 1 / this.normal.length();
          return this.normal.multiplyScalar(e),
          this.constant *= e,
          this
      },
      negate: function() {
          return this.constant *= -1,
          this.normal.negate(),
          this
      },
      distanceToPoint: function(e) {
          return this.normal.dot(e) + this.constant
      },
      distanceToSphere: function(e) {
          return this.distanceToPoint(e.center) - e.radius
      },
      projectPoint: function(e, t) {
          return this.orthoPoint(e, t).sub(e).negate()
      },
      orthoPoint: function(e, t) {
          var i = this.distanceToPoint(e);
          return (t || new c).copy(this.normal).multiplyScalar(i)
      },
      intersectLine: function() {
          var e = new c;
          return function(t, i) {
              var n = i || new c
                , r = t.delta(e)
                , o = this.normal.dot(r);
              return 0 !== o ? (o = -(t.start.dot(this.normal) + this.constant) / o,
              0 > o || o > 1 ? void 0 : n.copy(r).multiplyScalar(o).add(t.start)) : 0 === this.distanceToPoint(t.start) ? n.copy(t.start) : void 0
          }
      }(),
      intersectsLine: function(e) {
          var t = this.distanceToPoint(e.start);
          return e = this.distanceToPoint(e.end),
          0 > t && e > 0 || 0 > e && t > 0
      },
      intersectsBox: function(e) {
          return e.intersectsPlane(this)
      },
      intersectsSphere: function(e) {
          return e.intersectsPlane(this)
      },
      coplanarPoint: function(e) {
          return (e || new c).copy(this.normal).multiplyScalar(-this.constant)
      },
      applyMatrix4: function() {
          var e = new c
            , t = new K;
          return function(i, n) {
              var r = this.coplanarPoint(e).applyMatrix4(i)
                , o = n || t.getNormalMatrix(i)
                , o = this.normal.applyMatrix3(o).normalize();
              return this.constant = -r.dot(o),
              this
          }
      }(),
      translate: function(e) {
          return this.constant -= e.dot(this.normal),
          this
      },
      equals: function(e) {
          return e.normal.equals(this.normal) && e.constant === this.constant
      }
  },
  et.prototype = {
      constructor: et,
      set: function(e, t, i, n, r, o) {
          var a = this.planes;
          return a[0].copy(e),
          a[1].copy(t),
          a[2].copy(i),
          a[3].copy(n),
          a[4].copy(r),
          a[5].copy(o),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          for (var t = this.planes, i = 0; 6 > i; i++)
              t[i].copy(e.planes[i]);
          return this
      },
      setFromMatrix: function(e) {
          var t = this.planes
            , i = e.elements;
          e = i[0];
          var n = i[1]
            , r = i[2]
            , o = i[3]
            , a = i[4]
            , s = i[5]
            , c = i[6]
            , h = i[7]
            , l = i[8]
            , u = i[9]
            , p = i[10]
            , d = i[11]
            , f = i[12]
            , m = i[13]
            , g = i[14]
            , i = i[15];
          return t[0].setComponents(o - e, h - a, d - l, i - f).normalize(),
          t[1].setComponents(o + e, h + a, d + l, i + f).normalize(),
          t[2].setComponents(o + n, h + s, d + u, i + m).normalize(),
          t[3].setComponents(o - n, h - s, d - u, i - m).normalize(),
          t[4].setComponents(o - r, h - c, d - p, i - g).normalize(),
          t[5].setComponents(o + r, h + c, d + p, i + g).normalize(),
          this
      },
      intersectsObject: function() {
          var e = new Q;
          return function(t) {
              var i = t.geometry;
              return null === i.boundingSphere && i.computeBoundingSphere(),
              e.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),
              this.intersectsSphere(e)
          }
      }(),
      intersectsSprite: function() {
          var e = new Q;
          return function(t) {
              return e.center.set(0, 0, 0),
              e.radius = .7071067811865476,
              e.applyMatrix4(t.matrixWorld),
              this.intersectsSphere(e)
          }
      }(),
      intersectsSphere: function(e) {
          var t = this.planes
            , i = e.center;
          e = -e.radius;
          for (var n = 0; 6 > n; n++)
              if (t[n].distanceToPoint(i) < e)
                  return !1;
          return !0
      },
      intersectsBox: function() {
          var e = new c
            , t = new c;
          return function(i) {
              for (var n = this.planes, r = 0; 6 > r; r++) {
                  var o = n[r];
                  e.x = 0 < o.normal.x ? i.min.x : i.max.x,
                  t.x = 0 < o.normal.x ? i.max.x : i.min.x,
                  e.y = 0 < o.normal.y ? i.min.y : i.max.y,
                  t.y = 0 < o.normal.y ? i.max.y : i.min.y,
                  e.z = 0 < o.normal.z ? i.min.z : i.max.z,
                  t.z = 0 < o.normal.z ? i.max.z : i.min.z;
                  var a = o.distanceToPoint(e)
                    , o = o.distanceToPoint(t);
                  if (0 > a && 0 > o)
                      return !1
              }
              return !0
          }
      }(),
      containsPoint: function(e) {
          for (var t = this.planes, i = 0; 6 > i; i++)
              if (0 > t[i].distanceToPoint(e))
                  return !1;
          return !0
      }
  },
  it.prototype = {
      constructor: it,
      set: function(e, t) {
          return this.origin.copy(e),
          this.direction.copy(t),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.origin.copy(e.origin),
          this.direction.copy(e.direction),
          this
      },
      at: function(e, t) {
          return (t || new c).copy(this.direction).multiplyScalar(e).add(this.origin)
      },
      lookAt: function(e) {
          return this.direction.copy(e).sub(this.origin).normalize(),
          this
      },
      recast: function() {
          var e = new c;
          return function(t) {
              return this.origin.copy(this.at(t, e)),
              this
          }
      }(),
      closestPointToPoint: function(e, t) {
          var i = t || new c;
          i.subVectors(e, this.origin);
          var n = i.dot(this.direction);
          return 0 > n ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
      },
      distanceToPoint: function(e) {
          return Math.sqrt(this.distanceSqToPoint(e))
      },
      distanceSqToPoint: function() {
          var e = new c;
          return function(t) {
              var i = e.subVectors(t, this.origin).dot(this.direction);
              return 0 > i ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin),
              e.distanceToSquared(t))
          }
      }(),
      distanceSqToSegment: function() {
          var e = new c
            , t = new c
            , i = new c;
          return function(n, r, o, a) {
              e.copy(n).add(r).multiplyScalar(.5),
              t.copy(r).sub(n).normalize(),
              i.copy(this.origin).sub(e);
              var s, c = .5 * n.distanceTo(r), h = -this.direction.dot(t), l = i.dot(this.direction), u = -i.dot(t), p = i.lengthSq(), d = Math.abs(1 - h * h);
              return d > 0 ? (n = h * u - l,
              r = h * l - u,
              s = c * d,
              n >= 0 ? r >= -s ? s >= r ? (c = 1 / d,
              n *= c,
              r *= c,
              h = n * (n + h * r + 2 * l) + r * (h * n + r + 2 * u) + p) : (r = c,
              n = Math.max(0, -(h * r + l)),
              h = -n * n + r * (r + 2 * u) + p) : (r = -c,
              n = Math.max(0, -(h * r + l)),
              h = -n * n + r * (r + 2 * u) + p) : -s >= r ? (n = Math.max(0, -(-h * c + l)),
              r = n > 0 ? -c : Math.min(Math.max(-c, -u), c),
              h = -n * n + r * (r + 2 * u) + p) : s >= r ? (n = 0,
              r = Math.min(Math.max(-c, -u), c),
              h = r * (r + 2 * u) + p) : (n = Math.max(0, -(h * c + l)),
              r = n > 0 ? c : Math.min(Math.max(-c, -u), c),
              h = -n * n + r * (r + 2 * u) + p)) : (r = h > 0 ? -c : c,
              n = Math.max(0, -(h * r + l)),
              h = -n * n + r * (r + 2 * u) + p),
              o && o.copy(this.direction).multiplyScalar(n).add(this.origin),
              a && a.copy(t).multiplyScalar(r).add(e),
              h
          }
      }(),
      intersectSphere: function() {
          var e = new c;
          return function(t, i) {
              e.subVectors(t.center, this.origin);
              var n = e.dot(this.direction)
                , r = e.dot(e) - n * n
                , o = t.radius * t.radius;
              return r > o ? null : (o = Math.sqrt(o - r),
              r = n - o,
              n += o,
              0 > r && 0 > n ? null : 0 > r ? this.at(n, i) : this.at(r, i))
          }
      }(),
      intersectsSphere: function(e) {
          return this.distanceToPoint(e.center) <= e.radius
      },
      distanceToPlane: function(e) {
          var t = e.normal.dot(this.direction);
          return 0 === t ? 0 === e.distanceToPoint(this.origin) ? 0 : null : (e = -(this.origin.dot(e.normal) + e.constant) / t,
          e >= 0 ? e : null)
      },
      intersectPlane: function(e, t) {
          var i = this.distanceToPlane(e);
          return null === i ? null : this.at(i, t)
      },
      intersectsPlane: function(e) {
          var t = e.distanceToPoint(this.origin);
          return 0 === t || 0 > e.normal.dot(this.direction) * t ? !0 : !1
      },
      intersectBox: function(e, t) {
          var i, n, r, o, a;
          n = 1 / this.direction.x,
          o = 1 / this.direction.y,
          a = 1 / this.direction.z;
          var s = this.origin;
          return n >= 0 ? (i = (e.min.x - s.x) * n,
          n *= e.max.x - s.x) : (i = (e.max.x - s.x) * n,
          n *= e.min.x - s.x),
          o >= 0 ? (r = (e.min.y - s.y) * o,
          o *= e.max.y - s.y) : (r = (e.max.y - s.y) * o,
          o *= e.min.y - s.y),
          i > o || r > n ? null : ((r > i || i !== i) && (i = r),
          (n > o || n !== n) && (n = o),
          a >= 0 ? (r = (e.min.z - s.z) * a,
          a *= e.max.z - s.z) : (r = (e.max.z - s.z) * a,
          a *= e.min.z - s.z),
          i > a || r > n ? null : ((r > i || i !== i) && (i = r),
          (n > a || n !== n) && (n = a),
          0 > n ? null : this.at(i >= 0 ? i : n, t)))
      },
      intersectsBox: function() {
          var e = new c;
          return function(t) {
              return null !== this.intersectBox(t, e)
          }
      }(),
      intersectTriangle: function() {
          var e = new c
            , t = new c
            , i = new c
            , n = new c;
          return function(r, o, a, s, c) {
              if (t.subVectors(o, r),
              i.subVectors(a, r),
              n.crossVectors(t, i),
              o = this.direction.dot(n),
              o > 0) {
                  if (s)
                      return null;
                  s = 1
              } else {
                  if (!(0 > o))
                      return null;
                  s = -1,
                  o = -o
              }
              return e.subVectors(this.origin, r),
              r = s * this.direction.dot(i.crossVectors(e, i)),
              0 > r ? null : (a = s * this.direction.dot(t.cross(e)),
              0 > a || r + a > o ? null : (r = -s * e.dot(n),
              0 > r ? null : this.at(r / o, c)))
          }
      }(),
      applyMatrix4: function(e) {
          return this.direction.add(this.origin).applyMatrix4(e),
          this.origin.applyMatrix4(e),
          this.direction.sub(this.origin),
          this.direction.normalize(),
          this
      },
      equals: function(e) {
          return e.origin.equals(this.origin) && e.direction.equals(this.direction)
      }
  },
  nt.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "),
  nt.DefaultOrder = "XYZ",
  nt.prototype = {
      constructor: nt,
      isEuler: !0,
      get x() {
          return this._x
      },
      set x(e) {
          this._x = e,
          this.onChangeCallback()
      },
      get y() {
          return this._y
      },
      set y(e) {
          this._y = e,
          this.onChangeCallback()
      },
      get z() {
          return this._z
      },
      set z(e) {
          this._z = e,
          this.onChangeCallback()
      },
      get order() {
          return this._order
      },
      set order(e) {
          this._order = e,
          this.onChangeCallback()
      },
      set: function(e, t, i, n) {
          return this._x = e,
          this._y = t,
          this._z = i,
          this._order = n || this._order,
          this.onChangeCallback(),
          this
      },
      clone: function() {
          return new this.constructor(this._x,this._y,this._z,this._order)
      },
      copy: function(e) {
          return this._x = e._x,
          this._y = e._y,
          this._z = e._z,
          this._order = e._order,
          this.onChangeCallback(),
          this
      },
      setFromRotationMatrix: function(e, t, i) {
          var n = ho.clamp
            , r = e.elements;
          e = r[0];
          var o = r[4]
            , a = r[8]
            , s = r[1]
            , c = r[5]
            , h = r[9]
            , l = r[2]
            , u = r[6]
            , r = r[10];
          return t = t || this._order,
          "XYZ" === t ? (this._y = Math.asin(n(a, -1, 1)),
          .99999 > Math.abs(a) ? (this._x = Math.atan2(-h, r),
          this._z = Math.atan2(-o, e)) : (this._x = Math.atan2(u, c),
          this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(h, -1, 1)),
          .99999 > Math.abs(h) ? (this._y = Math.atan2(a, r),
          this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-l, e),
          this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(u, -1, 1)),
          .99999 > Math.abs(u) ? (this._y = Math.atan2(-l, r),
          this._z = Math.atan2(-o, c)) : (this._y = 0,
          this._z = Math.atan2(s, e))) : "ZYX" === t ? (this._y = Math.asin(-n(l, -1, 1)),
          .99999 > Math.abs(l) ? (this._x = Math.atan2(u, r),
          this._z = Math.atan2(s, e)) : (this._x = 0,
          this._z = Math.atan2(-o, c))) : "YZX" === t ? (this._z = Math.asin(n(s, -1, 1)),
          .99999 > Math.abs(s) ? (this._x = Math.atan2(-h, c),
          this._y = Math.atan2(-l, e)) : (this._x = 0,
          this._y = Math.atan2(a, r))) : "XZY" === t ? (this._z = Math.asin(-n(o, -1, 1)),
          .99999 > Math.abs(o) ? (this._x = Math.atan2(u, c),
          this._y = Math.atan2(a, e)) : (this._x = Math.atan2(-h, r),
          this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t),
          this._order = t,
          !1 !== i && this.onChangeCallback(),
          this
      },
      setFromQuaternion: function() {
          var e;
          return function(t, i, n) {
              return void 0 === e && (e = new h),
              e.makeRotationFromQuaternion(t),
              this.setFromRotationMatrix(e, i, n)
          }
      }(),
      setFromVector3: function(e, t) {
          return this.set(e.x, e.y, e.z, t || this._order)
      },
      reorder: function() {
          var e = new s;
          return function(t) {
              return e.setFromEuler(this),
              this.setFromQuaternion(e, t)
          }
      }(),
      equals: function(e) {
          return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
      },
      fromArray: function(e) {
          return this._x = e[0],
          this._y = e[1],
          this._z = e[2],
          void 0 !== e[3] && (this._order = e[3]),
          this.onChangeCallback(),
          this
      },
      toArray: function(e, t) {
          return void 0 === e && (e = []),
          void 0 === t && (t = 0),
          e[t] = this._x,
          e[t + 1] = this._y,
          e[t + 2] = this._z,
          e[t + 3] = this._order,
          e
      },
      toVector3: function(e) {
          return e ? e.set(this._x, this._y, this._z) : new c(this._x,this._y,this._z)
      },
      onChange: function(e) {
          return this.onChangeCallback = e,
          this
      },
      onChangeCallback: function() {}
  },
  rt.prototype = {
      constructor: rt,
      set: function(e) {
          this.mask = 1 << e
      },
      enable: function(e) {
          this.mask |= 1 << e
      },
      toggle: function(e) {
          this.mask ^= 1 << e
      },
      disable: function(e) {
          this.mask &= ~(1 << e)
      },
      test: function(e) {
          return 0 !== (this.mask & e.mask)
      }
  };
  var Eo = 0;
  ot.DefaultUp = new c(0,1,0),
  ot.DefaultMatrixAutoUpdate = !0,
  ot.prototype = {
      constructor: ot,
      isObject3D: !0,
      applyMatrix: function(e) {
          this.matrix.multiplyMatrices(e, this.matrix),
          this.matrix.decompose(this.position, this.quaternion, this.scale)
      },
      setRotationFromAxisAngle: function(e, t) {
          this.quaternion.setFromAxisAngle(e, t)
      },
      setRotationFromEuler: function(e) {
          this.quaternion.setFromEuler(e, !0)
      },
      setRotationFromMatrix: function(e) {
          this.quaternion.setFromRotationMatrix(e)
      },
      setRotationFromQuaternion: function(e) {
          this.quaternion.copy(e)
      },
      rotateOnAxis: function() {
          var e = new s;
          return function(t, i) {
              return e.setFromAxisAngle(t, i),
              this.quaternion.multiply(e),
              this
          }
      }(),
      rotateX: function() {
          var e = new c(1,0,0);
          return function(t) {
              return this.rotateOnAxis(e, t)
          }
      }(),
      rotateY: function() {
          var e = new c(0,1,0);
          return function(t) {
              return this.rotateOnAxis(e, t)
          }
      }(),
      rotateZ: function() {
          var e = new c(0,0,1);
          return function(t) {
              return this.rotateOnAxis(e, t)
          }
      }(),
      translateOnAxis: function() {
          var e = new c;
          return function(t, i) {
              return e.copy(t).applyQuaternion(this.quaternion),
              this.position.add(e.multiplyScalar(i)),
              this
          }
      }(),
      translateX: function() {
          var e = new c(1,0,0);
          return function(t) {
              return this.translateOnAxis(e, t)
          }
      }(),
      translateY: function() {
          var e = new c(0,1,0);
          return function(t) {
              return this.translateOnAxis(e, t)
          }
      }(),
      translateZ: function() {
          var e = new c(0,0,1);
          return function(t) {
              return this.translateOnAxis(e, t)
          }
      }(),
      localToWorld: function(e) {
          return e.applyMatrix4(this.matrixWorld)
      },
      worldToLocal: function() {
          var e = new h;
          return function(t) {
              return t.applyMatrix4(e.getInverse(this.matrixWorld))
          }
      }(),
      lookAt: function() {
          var e = new h;
          return function(t) {
              e.lookAt(t, this.position, this.up),
              this.quaternion.setFromRotationMatrix(e)
          }
      }(),
      add: function(e) {
          if (1 < arguments.length) {
              for (var t = 0; t < arguments.length; t++)
                  this.add(arguments[t]);
              return this
          }
          return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
          this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e),
          e.parent = this,
          e.dispatchEvent({
              type: "added"
          }),
          this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
          this)
      },
      remove: function(e) {
          if (1 < arguments.length)
              for (var t = 0; t < arguments.length; t++)
                  this.remove(arguments[t]);
          t = this.children.indexOf(e),
          -1 !== t && (e.parent = null,
          e.dispatchEvent({
              type: "removed"
          }),
          this.children.splice(t, 1))
      },
      getObjectById: function(e) {
          return this.getObjectByProperty("id", e)
      },
      getObjectByName: function(e) {
          return this.getObjectByProperty("name", e)
      },
      getObjectByProperty: function(e, t) {
          if (this[e] === t)
              return this;
          for (var i = 0, n = this.children.length; n > i; i++) {
              var r = this.children[i].getObjectByProperty(e, t);
              if (void 0 !== r)
                  return r
          }
      },
      getWorldPosition: function(e) {
          return e = e || new c,
          this.updateMatrixWorld(!0),
          e.setFromMatrixPosition(this.matrixWorld)
      },
      getWorldQuaternion: function() {
          var e = new c
            , t = new c;
          return function(i) {
              return i = i || new s,
              this.updateMatrixWorld(!0),
              this.matrixWorld.decompose(e, i, t),
              i
          }
      }(),
      getWorldRotation: function() {
          var e = new s;
          return function(t) {
              return t = t || new nt,
              this.getWorldQuaternion(e),
              t.setFromQuaternion(e, this.rotation.order, !1)
          }
      }(),
      getWorldScale: function() {
          var e = new c
            , t = new s;
          return function(i) {
              return i = i || new c,
              this.updateMatrixWorld(!0),
              this.matrixWorld.decompose(e, t, i),
              i
          }
      }(),
      getWorldDirection: function() {
          var e = new s;
          return function(t) {
              return t = t || new c,
              this.getWorldQuaternion(e),
              t.set(0, 0, 1).applyQuaternion(e)
          }
      }(),
      raycast: function() {},
      traverse: function(e) {
          e(this);
          for (var t = this.children, i = 0, n = t.length; n > i; i++)
              t[i].traverse(e)
      },
      traverseVisible: function(e) {
          if (!1 !== this.visible) {
              e(this);
              for (var t = this.children, i = 0, n = t.length; n > i; i++)
                  t[i].traverseVisible(e)
          }
      },
      traverseAncestors: function(e) {
          var t = this.parent;
          null !== t && (e(t),
          t.traverseAncestors(e))
      },
      updateMatrix: function() {
          this.matrix.compose(this.position, this.quaternion, this.scale),
          this.matrixWorldNeedsUpdate = !0
      },
      updateMatrixWorld: function(e) {
          !0 === this.matrixAutoUpdate && this.updateMatrix(),
          (!0 === this.matrixWorldNeedsUpdate || !0 === e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
          this.matrixWorldNeedsUpdate = !1,
          e = !0);
          for (var t = this.children, i = 0, n = t.length; n > i; i++)
              t[i].updateMatrixWorld(e)
      },
      toJSON: function(e) {
          function t(e) {
              var t, i = [];
              for (t in e) {
                  var n = e[t];
                  delete n.metadata,
                  i.push(n)
              }
              return i
          }
          var i = void 0 === e || "" === e
            , n = {};
          i && (e = {
              geometries: {},
              materials: {},
              textures: {},
              images: {}
          },
          n.metadata = {
              version: 4.4,
              type: "Object",
              generator: "Object3D.toJSON"
          });
          var r = {};
          if (r.uuid = this.uuid,
          r.type = this.type,
          "" !== this.name && (r.name = this.name),
          "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
          !0 === this.castShadow && (r.castShadow = !0),
          !0 === this.receiveShadow && (r.receiveShadow = !0),
          !1 === this.visible && (r.visible = !1),
          r.matrix = this.matrix.toArray(),
          void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)),
          r.geometry = this.geometry.uuid),
          void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)),
          r.material = this.material.uuid),
          0 < this.children.length) {
              r.children = [];
              for (var o = 0; o < this.children.length; o++)
                  r.children.push(this.children[o].toJSON(e).object)
          }
          if (i) {
              var i = t(e.geometries)
                , o = t(e.materials)
                , a = t(e.textures);
              e = t(e.images),
              0 < i.length && (n.geometries = i),
              0 < o.length && (n.materials = o),
              0 < a.length && (n.textures = a),
              0 < e.length && (n.images = e)
          }
          return n.object = r,
          n
      },
      clone: function(e) {
          return (new this.constructor).copy(this, e)
      },
      copy: function(e, t) {
          if (void 0 === t && (t = !0),
          this.name = e.name,
          this.up.copy(e.up),
          this.position.copy(e.position),
          this.quaternion.copy(e.quaternion),
          this.scale.copy(e.scale),
          this.matrix.copy(e.matrix),
          this.matrixWorld.copy(e.matrixWorld),
          this.matrixAutoUpdate = e.matrixAutoUpdate,
          this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
          this.layers.mask = e.layers.mask,
          this.visible = e.visible,
          this.castShadow = e.castShadow,
          this.receiveShadow = e.receiveShadow,
          this.frustumCulled = e.frustumCulled,
          this.renderOrder = e.renderOrder,
          this.userData = JSON.parse(JSON.stringify(e.userData)),
          !0 === t)
              for (var i = 0; i < e.children.length; i++)
                  this.add(e.children[i].clone());
          return this
      }
  },
  Object.assign(ot.prototype, t.prototype),
  at.prototype = {
      constructor: at,
      set: function(e, t) {
          return this.start.copy(e),
          this.end.copy(t),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.start.copy(e.start),
          this.end.copy(e.end),
          this
      },
      getCenter: function(e) {
          return (e || new c).addVectors(this.start, this.end).multiplyScalar(.5)
      },
      delta: function(e) {
          return (e || new c).subVectors(this.end, this.start)
      },
      distanceSq: function() {
          return this.start.distanceToSquared(this.end)
      },
      distance: function() {
          return this.start.distanceTo(this.end)
      },
      at: function(e, t) {
          var i = t || new c;
          return this.delta(i).multiplyScalar(e).add(this.start)
      },
      closestPointToPointParameter: function() {
          var e = new c
            , t = new c;
          return function(i, n) {
              e.subVectors(i, this.start),
              t.subVectors(this.end, this.start);
              var r = t.dot(t)
                , r = t.dot(e) / r;
              return n && (r = ho.clamp(r, 0, 1)),
              r
          }
      }(),
      closestPointToPoint: function(e, t, i) {
          return e = this.closestPointToPointParameter(e, t),
          i = i || new c,
          this.delta(i).multiplyScalar(e).add(this.start)
      },
      applyMatrix4: function(e) {
          return this.start.applyMatrix4(e),
          this.end.applyMatrix4(e),
          this
      },
      equals: function(e) {
          return e.start.equals(this.start) && e.end.equals(this.end)
      }
  },
  st.normal = function() {
      var e = new c;
      return function(t, i, n, r) {
          return r = r || new c,
          r.subVectors(n, i),
          e.subVectors(t, i),
          r.cross(e),
          t = r.lengthSq(),
          t > 0 ? r.multiplyScalar(1 / Math.sqrt(t)) : r.set(0, 0, 0)
      }
  }(),
  st.barycoordFromPoint = function() {
      var e = new c
        , t = new c
        , i = new c;
      return function(n, r, o, a, s) {
          e.subVectors(a, r),
          t.subVectors(o, r),
          i.subVectors(n, r),
          n = e.dot(e),
          r = e.dot(t),
          o = e.dot(i);
          var h = t.dot(t);
          a = t.dot(i);
          var l = n * h - r * r;
          return s = s || new c,
          0 === l ? s.set(-2, -1, -1) : (l = 1 / l,
          h = (h * o - r * a) * l,
          n = (n * a - r * o) * l,
          s.set(1 - h - n, n, h))
      }
  }(),
  st.containsPoint = function() {
      var e = new c;
      return function(t, i, n, r) {
          return t = st.barycoordFromPoint(t, i, n, r, e),
          0 <= t.x && 0 <= t.y && 1 >= t.x + t.y
      }
  }(),
  st.prototype = {
      constructor: st,
      set: function(e, t, i) {
          return this.a.copy(e),
          this.b.copy(t),
          this.c.copy(i),
          this
      },
      setFromPointsAndIndices: function(e, t, i, n) {
          return this.a.copy(e[t]),
          this.b.copy(e[i]),
          this.c.copy(e[n]),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.a.copy(e.a),
          this.b.copy(e.b),
          this.c.copy(e.c),
          this
      },
      area: function() {
          var e = new c
            , t = new c;
          return function() {
              return e.subVectors(this.c, this.b),
              t.subVectors(this.a, this.b),
              .5 * e.cross(t).length()
          }
      }(),
      midpoint: function(e) {
          return (e || new c).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
      },
      normal: function(e) {
          return st.normal(this.a, this.b, this.c, e)
      },
      plane: function(e) {
          return (e || new $).setFromCoplanarPoints(this.a, this.b, this.c)
      },
      barycoordFromPoint: function(e, t) {
          return st.barycoordFromPoint(e, this.a, this.b, this.c, t)
      },
      containsPoint: function(e) {
          return st.containsPoint(e, this.a, this.b, this.c)
      },
      closestPointToPoint: function() {
          var e, t, i, n;
          return function(r, o) {
              void 0 === e && (e = new $,
              t = [new at, new at, new at],
              i = new c,
              n = new c);
              var a = o || new c
                , s = 1 / 0;
              if (e.setFromCoplanarPoints(this.a, this.b, this.c),
              e.projectPoint(r, i),
              !0 === this.containsPoint(i))
                  a.copy(i);
              else {
                  t[0].set(this.a, this.b),
                  t[1].set(this.b, this.c),
                  t[2].set(this.c, this.a);
                  for (var h = 0; h < t.length; h++) {
                      t[h].closestPointToPoint(i, !0, n);
                      var l = i.distanceToSquared(n);
                      s > l && (s = l,
                      a.copy(n))
                  }
              }
              return a
          }
      }(),
      equals: function(e) {
          return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
      }
  },
  ct.prototype = {
      constructor: ct,
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          this.a = e.a,
          this.b = e.b,
          this.c = e.c,
          this.normal.copy(e.normal),
          this.color.copy(e.color),
          this.materialIndex = e.materialIndex;
          for (var t = 0, i = e.vertexNormals.length; i > t; t++)
              this.vertexNormals[t] = e.vertexNormals[t].clone();
          for (t = 0,
          i = e.vertexColors.length; i > t; t++)
              this.vertexColors[t] = e.vertexColors[t].clone();
          return this
      }
  },
  ht.prototype = Object.create(q.prototype),
  ht.prototype.constructor = ht,
  ht.prototype.isMeshBasicMaterial = !0,
  ht.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.map = e.map,
      this.lightMap = e.lightMap,
      this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap,
      this.aoMapIntensity = e.aoMapIntensity,
      this.specularMap = e.specularMap,
      this.alphaMap = e.alphaMap,
      this.envMap = e.envMap,
      this.combine = e.combine,
      this.reflectivity = e.reflectivity,
      this.refractionRatio = e.refractionRatio,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.wireframeLinecap = e.wireframeLinecap,
      this.wireframeLinejoin = e.wireframeLinejoin,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this
  }
  ,
  lt.prototype = {
      constructor: lt,
      isBufferAttribute: !0,
      set needsUpdate(e) {
          !0 === e && this.version++
      },
      setArray: function(e) {
          if (Array.isArray(e))
              throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
          this.count = void 0 !== e ? e.length / this.itemSize : 0,
          this.array = e
      },
      setDynamic: function(e) {
          return this.dynamic = e,
          this
      },
      copy: function(e) {
          return this.array = new e.array.constructor(e.array),
          this.itemSize = e.itemSize,
          this.count = e.count,
          this.normalized = e.normalized,
          this.dynamic = e.dynamic,
          this
      },
      copyAt: function(e, t, i) {
          e *= this.itemSize,
          i *= t.itemSize;
          for (var n = 0, r = this.itemSize; r > n; n++)
              this.array[e + n] = t.array[i + n];
          return this
      },
      copyArray: function(e) {
          return this.array.set(e),
          this
      },
      copyColorsArray: function(e) {
          for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
              var o = e[n];
              void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n),
              o = new V),
              t[i++] = o.r,
              t[i++] = o.g,
              t[i++] = o.b
          }
          return this
      },
      copyIndicesArray: function(e) {
          for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
              var o = e[n];
              t[i++] = o.a,
              t[i++] = o.b,
              t[i++] = o.c
          }
          return this
      },
      copyVector2sArray: function(e) {
          for (var t = this.array, n = 0, r = 0, o = e.length; o > r; r++) {
              var a = e[r];
              void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r),
              a = new i),
              t[n++] = a.x,
              t[n++] = a.y
          }
          return this
      },
      copyVector3sArray: function(e) {
          for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
              var o = e[n];
              void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n),
              o = new c),
              t[i++] = o.x,
              t[i++] = o.y,
              t[i++] = o.z
          }
          return this
      },
      copyVector4sArray: function(e) {
          for (var t = this.array, i = 0, n = 0, o = e.length; o > n; n++) {
              var a = e[n];
              void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
              a = new r),
              t[i++] = a.x,
              t[i++] = a.y,
              t[i++] = a.z,
              t[i++] = a.w
          }
          return this
      },
      set: function(e, t) {
          return void 0 === t && (t = 0),
          this.array.set(e, t),
          this
      },
      getX: function(e) {
          return this.array[e * this.itemSize]
      },
      setX: function(e, t) {
          return this.array[e * this.itemSize] = t,
          this
      },
      getY: function(e) {
          return this.array[e * this.itemSize + 1]
      },
      setY: function(e, t) {
          return this.array[e * this.itemSize + 1] = t,
          this
      },
      getZ: function(e) {
          return this.array[e * this.itemSize + 2]
      },
      setZ: function(e, t) {
          return this.array[e * this.itemSize + 2] = t,
          this
      },
      getW: function(e) {
          return this.array[e * this.itemSize + 3]
      },
      setW: function(e, t) {
          return this.array[e * this.itemSize + 3] = t,
          this
      },
      setXY: function(e, t, i) {
          return e *= this.itemSize,
          this.array[e + 0] = t,
          this.array[e + 1] = i,
          this
      },
      setXYZ: function(e, t, i, n) {
          return e *= this.itemSize,
          this.array[e + 0] = t,
          this.array[e + 1] = i,
          this.array[e + 2] = n,
          this
      },
      setXYZW: function(e, t, i, n, r) {
          return e *= this.itemSize,
          this.array[e + 0] = t,
          this.array[e + 1] = i,
          this.array[e + 2] = n,
          this.array[e + 3] = r,
          this
      },
      onUpload: function(e) {
          return this.onUploadCallback = e,
          this
      },
      clone: function() {
          return new this.constructor(this.array,this.itemSize).copy(this)
      }
  },
  ut.prototype = Object.create(lt.prototype),
  ut.prototype.constructor = ut,
  pt.prototype = Object.create(lt.prototype),
  pt.prototype.constructor = pt,
  dt.prototype = Object.create(lt.prototype),
  dt.prototype.constructor = dt,
  ft.prototype = Object.create(lt.prototype),
  ft.prototype.constructor = ft,
  mt.prototype = Object.create(lt.prototype),
  mt.prototype.constructor = mt,
  gt.prototype = Object.create(lt.prototype),
  gt.prototype.constructor = gt,
  vt.prototype = Object.create(lt.prototype),
  vt.prototype.constructor = vt,
  yt.prototype = Object.create(lt.prototype),
  yt.prototype.constructor = yt,
  xt.prototype = Object.create(lt.prototype),
  xt.prototype.constructor = xt,
  Object.assign(bt.prototype, {
      computeGroups: function(e) {
          var t, i = [], n = void 0;
          e = e.faces;
          for (var r = 0; r < e.length; r++) {
              var o = e[r];
              o.materialIndex !== n && (n = o.materialIndex,
              void 0 !== t && (t.count = 3 * r - t.start,
              i.push(t)),
              t = {
                  start: 3 * r,
                  materialIndex: n
              })
          }
          void 0 !== t && (t.count = 3 * r - t.start,
          i.push(t)),
          this.groups = i
      },
      fromGeometry: function(e) {
          var t, n = e.faces, r = e.vertices, o = e.faceVertexUvs, a = o[0] && 0 < o[0].length, s = o[1] && 0 < o[1].length, c = e.morphTargets, h = c.length;
          if (h > 0) {
              t = [];
              for (var l = 0; h > l; l++)
                  t[l] = [];
              this.morphTargets.position = t
          }
          var u, p = e.morphNormals, d = p.length;
          if (d > 0) {
              for (u = [],
              l = 0; d > l; l++)
                  u[l] = [];
              this.morphTargets.normal = u
          }
          for (var f = e.skinIndices, m = e.skinWeights, g = f.length === r.length, v = m.length === r.length, l = 0; l < n.length; l++) {
              var y = n[l];
              this.vertices.push(r[y.a], r[y.b], r[y.c]);
              var x = y.vertexNormals;
              for (3 === x.length ? this.normals.push(x[0], x[1], x[2]) : (x = y.normal,
              this.normals.push(x, x, x)),
              x = y.vertexColors,
              3 === x.length ? this.colors.push(x[0], x[1], x[2]) : (x = y.color,
              this.colors.push(x, x, x)),
              !0 === a && (x = o[0][l],
              void 0 !== x ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
              this.uvs.push(new i, new i, new i))),
              !0 === s && (x = o[1][l],
              void 0 !== x ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
              this.uvs2.push(new i, new i, new i))),
              x = 0; h > x; x++) {
                  var b = c[x].vertices;
                  t[x].push(b[y.a], b[y.b], b[y.c])
              }
              for (x = 0; d > x; x++)
                  b = p[x].vertexNormals[l],
                  u[x].push(b.a, b.b, b.c);
              g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
              v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
          }
          return this.computeGroups(e),
          this.verticesNeedUpdate = e.verticesNeedUpdate,
          this.normalsNeedUpdate = e.normalsNeedUpdate,
          this.colorsNeedUpdate = e.colorsNeedUpdate,
          this.uvsNeedUpdate = e.uvsNeedUpdate,
          this.groupsNeedUpdate = e.groupsNeedUpdate,
          this
      }
  });
  var Mo = 0;
  wt.prototype = {
      constructor: wt,
      isGeometry: !0,
      applyMatrix: function(e) {
          for (var t = (new K).getNormalMatrix(e), i = 0, n = this.vertices.length; n > i; i++)
              this.vertices[i].applyMatrix4(e);
          for (i = 0,
          n = this.faces.length; n > i; i++) {
              e = this.faces[i],
              e.normal.applyMatrix3(t).normalize();
              for (var r = 0, o = e.vertexNormals.length; o > r; r++)
                  e.vertexNormals[r].applyMatrix3(t).normalize()
          }
          return null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          this.normalsNeedUpdate = this.verticesNeedUpdate = !0,
          this
      },
      rotateX: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationX(t),
              this.applyMatrix(e),
              this
          }
      }(),
      rotateY: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationY(t),
              this.applyMatrix(e),
              this
          }
      }(),
      rotateZ: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationZ(t),
              this.applyMatrix(e),
              this
          }
      }(),
      translate: function() {
          var e;
          return function(t, i, n) {
              return void 0 === e && (e = new h),
              e.makeTranslation(t, i, n),
              this.applyMatrix(e),
              this
          }
      }(),
      scale: function() {
          var e;
          return function(t, i, n) {
              return void 0 === e && (e = new h),
              e.makeScale(t, i, n),
              this.applyMatrix(e),
              this
          }
      }(),
      lookAt: function() {
          var e;
          return function(t) {
              void 0 === e && (e = new ot),
              e.lookAt(t),
              e.updateMatrix(),
              this.applyMatrix(e.matrix)
          }
      }(),
      fromBufferGeometry: function(e) {
          function t(e, t, i, r) {
              var o = void 0 !== s ? [p[e].clone(), p[t].clone(), p[i].clone()] : []
                , a = void 0 !== h ? [n.colors[e].clone(), n.colors[t].clone(), n.colors[i].clone()] : [];
              r = new ct(e,t,i,o,a,r),
              n.faces.push(r),
              void 0 !== l && n.faceVertexUvs[0].push([d[e].clone(), d[t].clone(), d[i].clone()]),
              void 0 !== u && n.faceVertexUvs[1].push([f[e].clone(), f[t].clone(), f[i].clone()])
          }
          var n = this
            , r = null !== e.index ? e.index.array : void 0
            , o = e.attributes
            , a = o.position.array
            , s = void 0 !== o.normal ? o.normal.array : void 0
            , h = void 0 !== o.color ? o.color.array : void 0
            , l = void 0 !== o.uv ? o.uv.array : void 0
            , u = void 0 !== o.uv2 ? o.uv2.array : void 0;
          void 0 !== u && (this.faceVertexUvs[1] = []);
          for (var p = [], d = [], f = [], m = o = 0; o < a.length; o += 3,
          m += 2)
              n.vertices.push(new c(a[o],a[o + 1],a[o + 2])),
              void 0 !== s && p.push(new c(s[o],s[o + 1],s[o + 2])),
              void 0 !== h && n.colors.push(new V(h[o],h[o + 1],h[o + 2])),
              void 0 !== l && d.push(new i(l[m],l[m + 1])),
              void 0 !== u && f.push(new i(u[m],u[m + 1]));
          if (void 0 !== r)
              if (a = e.groups,
              0 < a.length)
                  for (o = 0; o < a.length; o++)
                      for (var g = a[o], v = g.start, y = g.count, m = v, v = v + y; v > m; m += 3)
                          t(r[m], r[m + 1], r[m + 2], g.materialIndex);
              else
                  for (o = 0; o < r.length; o += 3)
                      t(r[o], r[o + 1], r[o + 2]);
          else
              for (o = 0; o < a.length / 3; o += 3)
                  t(o, o + 1, o + 2);
          return this.computeFaceNormals(),
          null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
          null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
          this
      },
      center: function() {
          this.computeBoundingBox();
          var e = this.boundingBox.getCenter().negate();
          return this.translate(e.x, e.y, e.z),
          e
      },
      normalize: function() {
          this.computeBoundingSphere();
          var e = this.boundingSphere.center
            , t = this.boundingSphere.radius
            , t = 0 === t ? 1 : 1 / t
            , i = new h;
          return i.set(t, 0, 0, -t * e.x, 0, t, 0, -t * e.y, 0, 0, t, -t * e.z, 0, 0, 0, 1),
          this.applyMatrix(i),
          this
      },
      computeFaceNormals: function() {
          for (var e = new c, t = new c, i = 0, n = this.faces.length; n > i; i++) {
              var r = this.faces[i]
                , o = this.vertices[r.a]
                , a = this.vertices[r.b];
              e.subVectors(this.vertices[r.c], a),
              t.subVectors(o, a),
              e.cross(t),
              e.normalize(),
              r.normal.copy(e)
          }
      },
      computeVertexNormals: function(e) {
          void 0 === e && (e = !0);
          var t, i, n;
          for (n = Array(this.vertices.length),
          t = 0,
          i = this.vertices.length; i > t; t++)
              n[t] = new c;
          if (e) {
              var r, o, a, s = new c, h = new c;
              for (e = 0,
              t = this.faces.length; t > e; e++)
                  i = this.faces[e],
                  r = this.vertices[i.a],
                  o = this.vertices[i.b],
                  a = this.vertices[i.c],
                  s.subVectors(a, o),
                  h.subVectors(r, o),
                  s.cross(h),
                  n[i.a].add(s),
                  n[i.b].add(s),
                  n[i.c].add(s)
          } else
              for (this.computeFaceNormals(),
              e = 0,
              t = this.faces.length; t > e; e++)
                  i = this.faces[e],
                  n[i.a].add(i.normal),
                  n[i.b].add(i.normal),
                  n[i.c].add(i.normal);
          for (t = 0,
          i = this.vertices.length; i > t; t++)
              n[t].normalize();
          for (e = 0,
          t = this.faces.length; t > e; e++)
              i = this.faces[e],
              r = i.vertexNormals,
              3 === r.length ? (r[0].copy(n[i.a]),
              r[1].copy(n[i.b]),
              r[2].copy(n[i.c])) : (r[0] = n[i.a].clone(),
              r[1] = n[i.b].clone(),
              r[2] = n[i.c].clone());
          0 < this.faces.length && (this.normalsNeedUpdate = !0)
      },
      computeFlatVertexNormals: function() {
          var e, t, i;
          for (this.computeFaceNormals(),
          e = 0,
          t = this.faces.length; t > e; e++) {
              i = this.faces[e];
              var n = i.vertexNormals;
              3 === n.length ? (n[0].copy(i.normal),
              n[1].copy(i.normal),
              n[2].copy(i.normal)) : (n[0] = i.normal.clone(),
              n[1] = i.normal.clone(),
              n[2] = i.normal.clone())
          }
          0 < this.faces.length && (this.normalsNeedUpdate = !0)
      },
      computeMorphNormals: function() {
          var e, t, i, n, r;
          for (i = 0,
          n = this.faces.length; n > i; i++)
              for (r = this.faces[i],
              r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(),
              r.__originalVertexNormals || (r.__originalVertexNormals = []),
              e = 0,
              t = r.vertexNormals.length; t > e; e++)
                  r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
          var o = new wt;
          for (o.faces = this.faces,
          e = 0,
          t = this.morphTargets.length; t > e; e++) {
              if (!this.morphNormals[e]) {
                  this.morphNormals[e] = {},
                  this.morphNormals[e].faceNormals = [],
                  this.morphNormals[e].vertexNormals = [],
                  r = this.morphNormals[e].faceNormals;
                  var a, s, h = this.morphNormals[e].vertexNormals;
                  for (i = 0,
                  n = this.faces.length; n > i; i++)
                      a = new c,
                      s = {
                          a: new c,
                          b: new c,
                          c: new c
                      },
                      r.push(a),
                      h.push(s)
              }
              for (h = this.morphNormals[e],
              o.vertices = this.morphTargets[e].vertices,
              o.computeFaceNormals(),
              o.computeVertexNormals(),
              i = 0,
              n = this.faces.length; n > i; i++)
                  r = this.faces[i],
                  a = h.faceNormals[i],
                  s = h.vertexNormals[i],
                  a.copy(r.normal),
                  s.a.copy(r.vertexNormals[0]),
                  s.b.copy(r.vertexNormals[1]),
                  s.c.copy(r.vertexNormals[2])
          }
          for (i = 0,
          n = this.faces.length; n > i; i++)
              r = this.faces[i],
              r.normal = r.__originalFaceNormal,
              r.vertexNormals = r.__originalVertexNormals
      },
      computeLineDistances: function() {
          for (var e = 0, t = this.vertices, i = 0, n = t.length; n > i; i++)
              i > 0 && (e += t[i].distanceTo(t[i - 1])),
              this.lineDistances[i] = e
      },
      computeBoundingBox: function() {
          null === this.boundingBox && (this.boundingBox = new J),
          this.boundingBox.setFromPoints(this.vertices)
      },
      computeBoundingSphere: function() {
          null === this.boundingSphere && (this.boundingSphere = new Q),
          this.boundingSphere.setFromPoints(this.vertices)
      },
      merge: function(e, t, i) {
          if (!1 === (e && e.isGeometry))
              console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
          else {
              var n, r = this.vertices.length, o = this.vertices, a = e.vertices, s = this.faces, c = e.faces, h = this.faceVertexUvs[0], l = e.faceVertexUvs[0], u = this.colors, p = e.colors;
              void 0 === i && (i = 0),
              void 0 !== t && (n = (new K).getNormalMatrix(t)),
              e = 0;
              for (var d = a.length; d > e; e++) {
                  var f = a[e].clone();
                  void 0 !== t && f.applyMatrix4(t),
                  o.push(f)
              }
              for (e = 0,
              d = p.length; d > e; e++)
                  u.push(p[e].clone());
              for (e = 0,
              d = c.length; d > e; e++) {
                  var a = c[e]
                    , m = a.vertexNormals
                    , p = a.vertexColors
                    , u = new ct(a.a + r,a.b + r,a.c + r);
                  for (u.normal.copy(a.normal),
                  void 0 !== n && u.normal.applyMatrix3(n).normalize(),
                  t = 0,
                  o = m.length; o > t; t++)
                      f = m[t].clone(),
                      void 0 !== n && f.applyMatrix3(n).normalize(),
                      u.vertexNormals.push(f);
                  for (u.color.copy(a.color),
                  t = 0,
                  o = p.length; o > t; t++)
                      f = p[t],
                      u.vertexColors.push(f.clone());
                  u.materialIndex = a.materialIndex + i,
                  s.push(u)
              }
              for (e = 0,
              d = l.length; d > e; e++)
                  if (i = l[e],
                  n = [],
                  void 0 !== i) {
                      for (t = 0,
                      o = i.length; o > t; t++)
                          n.push(i[t].clone());
                      h.push(n)
                  }
          }
      },
      mergeMesh: function(e) {
          !1 === (e && e.isMesh) ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(),
          this.merge(e.geometry, e.matrix))
      },
      mergeVertices: function() {
          var e, t, i, n = {}, r = [], o = [], a = Math.pow(10, 4);
          for (t = 0,
          i = this.vertices.length; i > t; t++)
              e = this.vertices[t],
              e = Math.round(e.x * a) + "_" + Math.round(e.y * a) + "_" + Math.round(e.z * a),
              void 0 === n[e] ? (n[e] = t,
              r.push(this.vertices[t]),
              o[t] = r.length - 1) : o[t] = o[n[e]];
          for (n = [],
          t = 0,
          i = this.faces.length; i > t; t++)
              for (a = this.faces[t],
              a.a = o[a.a],
              a.b = o[a.b],
              a.c = o[a.c],
              a = [a.a, a.b, a.c],
              e = 0; 3 > e; e++)
                  if (a[e] === a[(e + 1) % 3]) {
                      n.push(t);
                      break
                  }
          for (t = n.length - 1; t >= 0; t--)
              for (a = n[t],
              this.faces.splice(a, 1),
              o = 0,
              i = this.faceVertexUvs.length; i > o; o++)
                  this.faceVertexUvs[o].splice(a, 1);
          return t = this.vertices.length - r.length,
          this.vertices = r,
          t
      },
      sortFacesByMaterialIndex: function() {
          for (var e = this.faces, t = e.length, i = 0; t > i; i++)
              e[i]._id = i;
          e.sort(function(e, t) {
              return e.materialIndex - t.materialIndex
          });
          var n, r, o = this.faceVertexUvs[0], a = this.faceVertexUvs[1];
          for (o && o.length === t && (n = []),
          a && a.length === t && (r = []),
          i = 0; t > i; i++) {
              var s = e[i]._id;
              n && n.push(o[s]),
              r && r.push(a[s])
          }
          n && (this.faceVertexUvs[0] = n),
          r && (this.faceVertexUvs[1] = r)
      },
      toJSON: function() {
          function e(e, t, i) {
              return i ? e | 1 << t : e & ~(1 << t)
          }
          function t(e) {
              var t = e.x.toString() + e.y.toString() + e.z.toString();
              return void 0 !== h[t] ? h[t] : (h[t] = c.length / 3,
              c.push(e.x, e.y, e.z),
              h[t])
          }
          function i(e) {
              var t = e.r.toString() + e.g.toString() + e.b.toString();
              return void 0 !== u[t] ? u[t] : (u[t] = l.length,
              l.push(e.getHex()),
              u[t])
          }
          function n(e) {
              var t = e.x.toString() + e.y.toString();
              return void 0 !== d[t] ? d[t] : (d[t] = p.length / 2,
              p.push(e.x, e.y),
              d[t])
          }
          var r = {
              metadata: {
                  version: 4.4,
                  type: "Geometry",
                  generator: "Geometry.toJSON"
              }
          };
          if (r.uuid = this.uuid,
          r.type = this.type,
          "" !== this.name && (r.name = this.name),
          void 0 !== this.parameters) {
              var o, a = this.parameters;
              for (o in a)
                  void 0 !== a[o] && (r[o] = a[o]);
              return r
          }
          for (a = [],
          o = 0; o < this.vertices.length; o++) {
              var s = this.vertices[o];
              a.push(s.x, s.y, s.z)
          }
          var s = []
            , c = []
            , h = {}
            , l = []
            , u = {}
            , p = []
            , d = {};
          for (o = 0; o < this.faces.length; o++) {
              var f = this.faces[o]
                , m = void 0 !== this.faceVertexUvs[0][o]
                , g = 0 < f.normal.length()
                , v = 0 < f.vertexNormals.length
                , y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b
                , x = 0 < f.vertexColors.length
                , b = 0
                , b = e(b, 0, 0)
                , b = e(b, 1, !0)
                , b = e(b, 2, !1)
                , b = e(b, 3, m)
                , b = e(b, 4, g)
                , b = e(b, 5, v)
                , b = e(b, 6, y)
                , b = e(b, 7, x);
              s.push(b),
              s.push(f.a, f.b, f.c),
              s.push(f.materialIndex),
              m && (m = this.faceVertexUvs[0][o],
              s.push(n(m[0]), n(m[1]), n(m[2]))),
              g && s.push(t(f.normal)),
              v && (g = f.vertexNormals,
              s.push(t(g[0]), t(g[1]), t(g[2]))),
              y && s.push(i(f.color)),
              x && (f = f.vertexColors,
              s.push(i(f[0]), i(f[1]), i(f[2])))
          }
          return r.data = {},
          r.data.vertices = a,
          r.data.normals = c,
          0 < l.length && (r.data.colors = l),
          0 < p.length && (r.data.uvs = [p]),
          r.data.faces = s,
          r
      },
      clone: function() {
          return (new wt).copy(this)
      },
      copy: function(e) {
          var t, i, n, r, o, a;
          for (this.vertices = [],
          this.colors = [],
          this.faces = [],
          this.faceVertexUvs = [[]],
          this.morphTargets = [],
          this.morphNormals = [],
          this.skinWeights = [],
          this.skinIndices = [],
          this.lineDistances = [],
          this.boundingSphere = this.boundingBox = null,
          this.name = e.name,
          n = e.vertices,
          t = 0,
          i = n.length; i > t; t++)
              this.vertices.push(n[t].clone());
          for (n = e.colors,
          t = 0,
          i = n.length; i > t; t++)
              this.colors.push(n[t].clone());
          for (n = e.faces,
          t = 0,
          i = n.length; i > t; t++)
              this.faces.push(n[t].clone());
          for (t = 0,
          i = e.faceVertexUvs.length; i > t; t++) {
              var s = e.faceVertexUvs[t];
              for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []),
              n = 0,
              r = s.length; r > n; n++) {
                  var c = s[n]
                    , h = [];
                  for (o = 0,
                  a = c.length; a > o; o++)
                      h.push(c[o].clone());
                  this.faceVertexUvs[t].push(h)
              }
          }
          for (o = e.morphTargets,
          t = 0,
          i = o.length; i > t; t++) {
              if (a = {},
              a.name = o[t].name,
              void 0 !== o[t].vertices)
                  for (a.vertices = [],
                  n = 0,
                  r = o[t].vertices.length; r > n; n++)
                      a.vertices.push(o[t].vertices[n].clone());
              if (void 0 !== o[t].normals)
                  for (a.normals = [],
                  n = 0,
                  r = o[t].normals.length; r > n; n++)
                      a.normals.push(o[t].normals[n].clone());
              this.morphTargets.push(a)
          }
          for (o = e.morphNormals,
          t = 0,
          i = o.length; i > t; t++) {
              if (a = {},
              void 0 !== o[t].vertexNormals)
                  for (a.vertexNormals = [],
                  n = 0,
                  r = o[t].vertexNormals.length; r > n; n++)
                      s = o[t].vertexNormals[n],
                      c = {},
                      c.a = s.a.clone(),
                      c.b = s.b.clone(),
                      c.c = s.c.clone(),
                      a.vertexNormals.push(c);
              if (void 0 !== o[t].faceNormals)
                  for (a.faceNormals = [],
                  n = 0,
                  r = o[t].faceNormals.length; r > n; n++)
                      a.faceNormals.push(o[t].faceNormals[n].clone());
              this.morphNormals.push(a)
          }
          for (n = e.skinWeights,
          t = 0,
          i = n.length; i > t; t++)
              this.skinWeights.push(n[t].clone());
          for (n = e.skinIndices,
          t = 0,
          i = n.length; i > t; t++)
              this.skinIndices.push(n[t].clone());
          for (n = e.lineDistances,
          t = 0,
          i = n.length; i > t; t++)
              this.lineDistances.push(n[t]);
          return t = e.boundingBox,
          null !== t && (this.boundingBox = t.clone()),
          t = e.boundingSphere,
          null !== t && (this.boundingSphere = t.clone()),
          this.elementsNeedUpdate = e.elementsNeedUpdate,
          this.verticesNeedUpdate = e.verticesNeedUpdate,
          this.uvsNeedUpdate = e.uvsNeedUpdate,
          this.normalsNeedUpdate = e.normalsNeedUpdate,
          this.colorsNeedUpdate = e.colorsNeedUpdate,
          this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate,
          this.groupsNeedUpdate = e.groupsNeedUpdate,
          this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  },
  Object.assign(wt.prototype, t.prototype),
  Et.prototype = {
      constructor: Et,
      isBufferGeometry: !0,
      getIndex: function() {
          return this.index
      },
      setIndex: function(e) {
          this.index = Array.isArray(e) ? new (65535 < _t(e) ? vt : mt)(e,1) : e
      },
      addAttribute: function(e, t, i) {
          if (!1 === (t && t.isBufferAttribute) && !1 === (t && t.isInterleavedBufferAttribute))
              console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
              this.addAttribute(e, new lt(t,i));
          else {
              if ("index" !== e)
                  return this.attributes[e] = t,
                  this;
              console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
              this.setIndex(t)
          }
      },
      getAttribute: function(e) {
          return this.attributes[e]
      },
      removeAttribute: function(e) {
          return delete this.attributes[e],
          this
      },
      addGroup: function(e, t, i) {
          this.groups.push({
              start: e,
              count: t,
              materialIndex: void 0 !== i ? i : 0
          })
      },
      clearGroups: function() {
          this.groups = []
      },
      setDrawRange: function(e, t) {
          this.drawRange.start = e,
          this.drawRange.count = t
      },
      applyMatrix: function(e) {
          var t = this.attributes.position;
          return void 0 !== t && (e.applyToBufferAttribute(t),
          t.needsUpdate = !0),
          t = this.attributes.normal,
          void 0 !== t && ((new K).getNormalMatrix(e).applyToBufferAttribute(t),
          t.needsUpdate = !0),
          null !== this.boundingBox && this.computeBoundingBox(),
          null !== this.boundingSphere && this.computeBoundingSphere(),
          this
      },
      rotateX: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationX(t),
              this.applyMatrix(e),
              this
          }
      }(),
      rotateY: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationY(t),
              this.applyMatrix(e),
              this
          }
      }(),
      rotateZ: function() {
          var e;
          return function(t) {
              return void 0 === e && (e = new h),
              e.makeRotationZ(t),
              this.applyMatrix(e),
              this
          }
      }(),
      translate: function() {
          var e;
          return function(t, i, n) {
              return void 0 === e && (e = new h),
              e.makeTranslation(t, i, n),
              this.applyMatrix(e),
              this
          }
      }(),
      scale: function() {
          var e;
          return function(t, i, n) {
              return void 0 === e && (e = new h),
              e.makeScale(t, i, n),
              this.applyMatrix(e),
              this
          }
      }(),
      lookAt: function() {
          var e;
          return function(t) {
              void 0 === e && (e = new ot),
              e.lookAt(t),
              e.updateMatrix(),
              this.applyMatrix(e.matrix)
          }
      }(),
      center: function() {
          this.computeBoundingBox();
          var e = this.boundingBox.getCenter().negate();
          return this.translate(e.x, e.y, e.z),
          e
      },
      setFromObject: function(e) {
          var t = e.geometry;
          if (e.isPoints || e.isLine) {
              e = new yt(3 * t.vertices.length,3);
              var i = new yt(3 * t.colors.length,3);
              this.addAttribute("position", e.copyVector3sArray(t.vertices)),
              this.addAttribute("color", i.copyColorsArray(t.colors)),
              t.lineDistances && t.lineDistances.length === t.vertices.length && (e = new yt(t.lineDistances.length,1),
              this.addAttribute("lineDistance", e.copyArray(t.lineDistances))),
              null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
              null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
          } else
              e.isMesh && t && t.isGeometry && this.fromGeometry(t);
          return this
      },
      updateFromObject: function(e) {
          var t = e.geometry;
          if (e.isMesh) {
              var i = t.__directGeometry;
              if (!0 === t.elementsNeedUpdate && (i = void 0,
              t.elementsNeedUpdate = !1),
              void 0 === i)
                  return this.fromGeometry(t);
              i.verticesNeedUpdate = t.verticesNeedUpdate,
              i.normalsNeedUpdate = t.normalsNeedUpdate,
              i.colorsNeedUpdate = t.colorsNeedUpdate,
              i.uvsNeedUpdate = t.uvsNeedUpdate,
              i.groupsNeedUpdate = t.groupsNeedUpdate,
              t.verticesNeedUpdate = !1,
              t.normalsNeedUpdate = !1,
              t.colorsNeedUpdate = !1,
              t.uvsNeedUpdate = !1,
              t.groupsNeedUpdate = !1,
              t = i
          }
          return !0 === t.verticesNeedUpdate && (i = this.attributes.position,
          void 0 !== i && (i.copyVector3sArray(t.vertices),
          i.needsUpdate = !0),
          t.verticesNeedUpdate = !1),
          !0 === t.normalsNeedUpdate && (i = this.attributes.normal,
          void 0 !== i && (i.copyVector3sArray(t.normals),
          i.needsUpdate = !0),
          t.normalsNeedUpdate = !1),
          !0 === t.colorsNeedUpdate && (i = this.attributes.color,
          void 0 !== i && (i.copyColorsArray(t.colors),
          i.needsUpdate = !0),
          t.colorsNeedUpdate = !1),
          t.uvsNeedUpdate && (i = this.attributes.uv,
          void 0 !== i && (i.copyVector2sArray(t.uvs),
          i.needsUpdate = !0),
          t.uvsNeedUpdate = !1),
          t.lineDistancesNeedUpdate && (i = this.attributes.lineDistance,
          void 0 !== i && (i.copyArray(t.lineDistances),
          i.needsUpdate = !0),
          t.lineDistancesNeedUpdate = !1),
          t.groupsNeedUpdate && (t.computeGroups(e.geometry),
          this.groups = t.groups,
          t.groupsNeedUpdate = !1),
          this
      },
      fromGeometry: function(e) {
          return e.__directGeometry = (new bt).fromGeometry(e),
          this.fromDirectGeometry(e.__directGeometry)
      },
      fromDirectGeometry: function(e) {
          var t = new Float32Array(3 * e.vertices.length);
          this.addAttribute("position", new lt(t,3).copyVector3sArray(e.vertices)),
          0 < e.normals.length && (t = new Float32Array(3 * e.normals.length),
          this.addAttribute("normal", new lt(t,3).copyVector3sArray(e.normals))),
          0 < e.colors.length && (t = new Float32Array(3 * e.colors.length),
          this.addAttribute("color", new lt(t,3).copyColorsArray(e.colors))),
          0 < e.uvs.length && (t = new Float32Array(2 * e.uvs.length),
          this.addAttribute("uv", new lt(t,2).copyVector2sArray(e.uvs))),
          0 < e.uvs2.length && (t = new Float32Array(2 * e.uvs2.length),
          this.addAttribute("uv2", new lt(t,2).copyVector2sArray(e.uvs2))),
          0 < e.indices.length && (t = new (65535 < _t(e.indices) ? Uint32Array : Uint16Array)(3 * e.indices.length),
          this.setIndex(new lt(t,1).copyIndicesArray(e.indices))),
          this.groups = e.groups;
          for (var i in e.morphTargets) {
              for (var t = [], n = e.morphTargets[i], r = 0, o = n.length; o > r; r++) {
                  var a = n[r]
                    , s = new yt(3 * a.length,3);
                  t.push(s.copyVector3sArray(a))
              }
              this.morphAttributes[i] = t
          }
          return 0 < e.skinIndices.length && (i = new yt(4 * e.skinIndices.length,4),
          this.addAttribute("skinIndex", i.copyVector4sArray(e.skinIndices))),
          0 < e.skinWeights.length && (i = new yt(4 * e.skinWeights.length,4),
          this.addAttribute("skinWeight", i.copyVector4sArray(e.skinWeights))),
          null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
          null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
          this
      },
      computeBoundingBox: function() {
          null === this.boundingBox && (this.boundingBox = new J);
          var e = this.attributes.position;
          void 0 !== e ? this.boundingBox.setFromBufferAttribute(e) : this.boundingBox.makeEmpty(),
          (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
      },
      computeBoundingSphere: function() {
          var e = new J
            , t = new c;
          return function() {
              null === this.boundingSphere && (this.boundingSphere = new Q);
              var i = this.attributes.position;
              if (i) {
                  var n = this.boundingSphere.center;
                  e.setFromBufferAttribute(i),
                  e.getCenter(n);
                  for (var r = 0, o = 0, a = i.count; a > o; o++)
                      t.x = i.getX(o),
                      t.y = i.getY(o),
                      t.z = i.getZ(o),
                      r = Math.max(r, n.distanceToSquared(t));
                  this.boundingSphere.radius = Math.sqrt(r),
                  isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
              }
          }
      }(),
      computeFaceNormals: function() {},
      computeVertexNormals: function() {
          var e = this.index
            , t = this.attributes
            , i = this.groups;
          if (t.position) {
              var n = t.position.array;
              if (void 0 === t.normal)
                  this.addAttribute("normal", new lt(new Float32Array(n.length),3));
              else
                  for (var r = t.normal.array, o = 0, a = r.length; a > o; o++)
                      r[o] = 0;
              var s, h, l, r = t.normal.array, u = new c, p = new c, d = new c, f = new c, m = new c;
              if (e) {
                  e = e.array,
                  0 === i.length && this.addGroup(0, e.length);
                  for (var g = 0, v = i.length; v > g; ++g)
                      for (o = i[g],
                      a = o.start,
                      s = o.count,
                      o = a,
                      a += s; a > o; o += 3)
                          s = 3 * e[o + 0],
                          h = 3 * e[o + 1],
                          l = 3 * e[o + 2],
                          u.fromArray(n, s),
                          p.fromArray(n, h),
                          d.fromArray(n, l),
                          f.subVectors(d, p),
                          m.subVectors(u, p),
                          f.cross(m),
                          r[s] += f.x,
                          r[s + 1] += f.y,
                          r[s + 2] += f.z,
                          r[h] += f.x,
                          r[h + 1] += f.y,
                          r[h + 2] += f.z,
                          r[l] += f.x,
                          r[l + 1] += f.y,
                          r[l + 2] += f.z
              } else
                  for (o = 0,
                  a = n.length; a > o; o += 9)
                      u.fromArray(n, o),
                      p.fromArray(n, o + 3),
                      d.fromArray(n, o + 6),
                      f.subVectors(d, p),
                      m.subVectors(u, p),
                      f.cross(m),
                      r[o] = f.x,
                      r[o + 1] = f.y,
                      r[o + 2] = f.z,
                      r[o + 3] = f.x,
                      r[o + 4] = f.y,
                      r[o + 5] = f.z,
                      r[o + 6] = f.x,
                      r[o + 7] = f.y,
                      r[o + 8] = f.z;
              this.normalizeNormals(),
              t.normal.needsUpdate = !0
          }
      },
      merge: function(e, t) {
          if (!1 !== (e && e.isBufferGeometry)) {
              void 0 === t && (t = 0);
              var i, n = this.attributes;
              for (i in n)
                  if (void 0 !== e.attributes[i])
                      for (var r = n[i].array, o = e.attributes[i], a = o.array, s = 0, o = o.itemSize * t; s < a.length; s++,
                      o++)
                          r[o] = a[s];
              return this
          }
          console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
      },
      normalizeNormals: function() {
          for (var e, t, i, n = this.attributes.normal.array, r = 0, o = n.length; o > r; r += 3)
              e = n[r],
              t = n[r + 1],
              i = n[r + 2],
              e = 1 / Math.sqrt(e * e + t * t + i * i),
              n[r] *= e,
              n[r + 1] *= e,
              n[r + 2] *= e
      },
      toNonIndexed: function() {
          if (null === this.index)
              return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
              this;
          var e, t = new Et, i = this.index.array, n = this.attributes;
          for (e in n) {
              for (var r, o = n[e], a = o.array, o = o.itemSize, s = new a.constructor(i.length * o), c = 0, h = 0, l = i.length; l > h; h++) {
                  r = i[h] * o;
                  for (var u = 0; o > u; u++)
                      s[c++] = a[r++]
              }
              t.addAttribute(e, new lt(s,o))
          }
          return t
      },
      toJSON: function() {
          var e = {
              metadata: {
                  version: 4.4,
                  type: "BufferGeometry",
                  generator: "BufferGeometry.toJSON"
              }
          };
          if (e.uuid = this.uuid,
          e.type = this.type,
          "" !== this.name && (e.name = this.name),
          void 0 !== this.parameters) {
              var t, i = this.parameters;
              for (t in i)
                  void 0 !== i[t] && (e[t] = i[t]);
              return e
          }
          e.data = {
              attributes: {}
          };
          var n = this.index;
          null !== n && (i = Array.prototype.slice.call(n.array),
          e.data.index = {
              type: n.array.constructor.name,
              array: i
          }),
          n = this.attributes;
          for (t in n) {
              var r = n[t]
                , i = Array.prototype.slice.call(r.array);
              e.data.attributes[t] = {
                  itemSize: r.itemSize,
                  type: r.array.constructor.name,
                  array: i,
                  normalized: r.normalized
              }
          }
          return t = this.groups,
          0 < t.length && (e.data.groups = JSON.parse(JSON.stringify(t))),
          t = this.boundingSphere,
          null !== t && (e.data.boundingSphere = {
              center: t.center.toArray(),
              radius: t.radius
          }),
          e
      },
      clone: function() {
          return (new Et).copy(this)
      },
      copy: function(e) {
          var t, i, n;
          this.index = null,
          this.attributes = {},
          this.morphAttributes = {},
          this.groups = [],
          this.boundingSphere = this.boundingBox = null,
          this.name = e.name,
          i = e.index,
          null !== i && this.setIndex(i.clone()),
          i = e.attributes;
          for (t in i)
              this.addAttribute(t, i[t].clone());
          var r = e.morphAttributes;
          for (t in r) {
              var o = []
                , a = r[t];
              for (i = 0,
              n = a.length; n > i; i++)
                  o.push(a[i].clone());
              this.morphAttributes[t] = o
          }
          for (t = e.groups,
          i = 0,
          n = t.length; n > i; i++)
              r = t[i],
              this.addGroup(r.start, r.count, r.materialIndex);
          return t = e.boundingBox,
          null !== t && (this.boundingBox = t.clone()),
          t = e.boundingSphere,
          null !== t && (this.boundingSphere = t.clone()),
          this.drawRange.start = e.drawRange.start,
          this.drawRange.count = e.drawRange.count,
          this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  },
  Et.MaxIndex = 65535,
  Object.assign(Et.prototype, t.prototype),
  Mt.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: Mt,
      isMesh: !0,
      setDrawMode: function(e) {
          this.drawMode = e
      },
      copy: function(e) {
          return ot.prototype.copy.call(this, e),
          this.drawMode = e.drawMode,
          this
      },
      updateMorphTargets: function() {
          var e = this.geometry.morphTargets;
          if (void 0 !== e && 0 < e.length) {
              this.morphTargetInfluences = [],
              this.morphTargetDictionary = {};
              for (var t = 0, i = e.length; i > t; t++)
                  this.morphTargetInfluences.push(0),
                  this.morphTargetDictionary[e[t].name] = t
          }
      },
      raycast: function() {
          function e(e, t, i, n, r, o, a) {
              return st.barycoordFromPoint(e, t, i, n, y),
              r.multiplyScalar(y.x),
              o.multiplyScalar(y.y),
              a.multiplyScalar(y.z),
              r.add(o).add(a),
              r.clone()
          }
          function t(e, t, i, n, r, o, a) {
              var s = e.material;
              return null === (1 === s.side ? i.intersectTriangle(o, r, n, !0, a) : i.intersectTriangle(n, r, o, 2 !== s.side, a)) ? null : (b.copy(a),
              b.applyMatrix4(e.matrixWorld),
              i = t.ray.origin.distanceTo(b),
              i < t.near || i > t.far ? null : {
                  distance: i,
                  point: b.clone(),
                  object: e
              })
          }
          function n(i, n, r, o, a, c, h, p) {
              return s.fromBufferAttribute(o, c),
              l.fromBufferAttribute(o, h),
              u.fromBufferAttribute(o, p),
              (i = t(i, n, r, s, l, u, x)) && (a && (m.fromBufferAttribute(a, c),
              g.fromBufferAttribute(a, h),
              v.fromBufferAttribute(a, p),
              i.uv = e(x, s, l, u, m, g, v)),
              i.face = new ct(c,h,p,st.normal(s, l, u)),
              i.faceIndex = c),
              i
          }
          var r = new h
            , o = new it
            , a = new Q
            , s = new c
            , l = new c
            , u = new c
            , p = new c
            , d = new c
            , f = new c
            , m = new i
            , g = new i
            , v = new i
            , y = new c
            , x = new c
            , b = new c;
          return function(i, c) {
              var h = this.geometry
                , y = this.material
                , b = this.matrixWorld;
              if (void 0 !== y && (null === h.boundingSphere && h.computeBoundingSphere(),
              a.copy(h.boundingSphere),
              a.applyMatrix4(b),
              !1 !== i.ray.intersectsSphere(a) && (r.getInverse(b),
              o.copy(i.ray).applyMatrix4(r),
              null === h.boundingBox || !1 !== o.intersectsBox(h.boundingBox)))) {
                  var _;
                  if (h.isBufferGeometry) {
                      var w, E, M, T, y = h.index, S = h.attributes.position, b = h.attributes.uv;
                      if (null !== y)
                          for (M = 0,
                          T = y.count; T > M; M += 3)
                              h = y.getX(M),
                              w = y.getX(M + 1),
                              E = y.getX(M + 2),
                              (_ = n(this, i, o, S, b, h, w, E)) && (_.faceIndex = Math.floor(M / 3),
                              c.push(_));
                      else
                          for (M = 0,
                          T = S.count; T > M; M += 3)
                              h = M,
                              w = M + 1,
                              E = M + 2,
                              (_ = n(this, i, o, S, b, h, w, E)) && (_.index = h,
                              c.push(_))
                  } else if (h.isGeometry) {
                      var A, R, b = y && y.isMultiMaterial;
                      M = !0 === b ? y.materials : null,
                      T = h.vertices,
                      w = h.faces,
                      E = h.faceVertexUvs[0],
                      0 < E.length && (S = E);
                      for (var L = 0, P = w.length; P > L; L++) {
                          var C = w[L];
                          if (_ = !0 === b ? M[C.materialIndex] : y,
                          void 0 !== _) {
                              if (E = T[C.a],
                              A = T[C.b],
                              R = T[C.c],
                              !0 === _.morphTargets) {
                                  _ = h.morphTargets;
                                  var I = this.morphTargetInfluences;
                                  s.set(0, 0, 0),
                                  l.set(0, 0, 0),
                                  u.set(0, 0, 0);
                                  for (var U = 0, N = _.length; N > U; U++) {
                                      var D = I[U];
                                      if (0 !== D) {
                                          var O = _[U].vertices;
                                          s.addScaledVector(p.subVectors(O[C.a], E), D),
                                          l.addScaledVector(d.subVectors(O[C.b], A), D),
                                          u.addScaledVector(f.subVectors(O[C.c], R), D)
                                      }
                                  }
                                  s.add(E),
                                  l.add(A),
                                  u.add(R),
                                  E = s,
                                  A = l,
                                  R = u
                              }
                              (_ = t(this, i, o, E, A, R, x)) && (S && (I = S[L],
                              m.copy(I[0]),
                              g.copy(I[1]),
                              v.copy(I[2]),
                              _.uv = e(x, E, A, R, m, g, v)),
                              _.face = C,
                              _.faceIndex = L,
                              c.push(_))
                          }
                      }
                  }
              }
          }
      }(),
      clone: function() {
          return new this.constructor(this.geometry,this.material).copy(this)
      }
  }),
  Tt.prototype = Object.create(wt.prototype),
  Tt.prototype.constructor = Tt,
  St.prototype = Object.create(Et.prototype),
  St.prototype.constructor = St,
  At.prototype = Object.create(wt.prototype),
  At.prototype.constructor = At,
  Rt.prototype = Object.create(Et.prototype),
  Rt.prototype.constructor = Rt,
  Lt.prototype = Object.create(ot.prototype),
  Lt.prototype.constructor = Lt,
  Lt.prototype.isCamera = !0,
  Lt.prototype.getWorldDirection = function() {
      var e = new s;
      return function(t) {
          return t = t || new c,
          this.getWorldQuaternion(e),
          t.set(0, 0, -1).applyQuaternion(e)
      }
  }(),
  Lt.prototype.lookAt = function() {
      var e = new h;
      return function(t) {
          e.lookAt(this.position, t, this.up),
          this.quaternion.setFromRotationMatrix(e)
      }
  }(),
  Lt.prototype.clone = function() {
      return (new this.constructor).copy(this)
  }
  ,
  Lt.prototype.copy = function(e) {
      return ot.prototype.copy.call(this, e),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this
  }
  ,
  Pt.prototype = Object.assign(Object.create(Lt.prototype), {
      constructor: Pt,
      isPerspectiveCamera: !0,
      copy: function(e) {
          return Lt.prototype.copy.call(this, e),
          this.fov = e.fov,
          this.zoom = e.zoom,
          this.near = e.near,
          this.far = e.far,
          this.focus = e.focus,
          this.aspect = e.aspect,
          this.view = null === e.view ? null : Object.assign({}, e.view),
          this.filmGauge = e.filmGauge,
          this.filmOffset = e.filmOffset,
          this
      },
      setFocalLength: function(e) {
          e = .5 * this.getFilmHeight() / e,
          this.fov = 2 * ho.RAD2DEG * Math.atan(e),
          this.updateProjectionMatrix()
      },
      getFocalLength: function() {
          var e = Math.tan(.5 * ho.DEG2RAD * this.fov);
          return .5 * this.getFilmHeight() / e
      },
      getEffectiveFOV: function() {
          return 2 * ho.RAD2DEG * Math.atan(Math.tan(.5 * ho.DEG2RAD * this.fov) / this.zoom)
      },
      getFilmWidth: function() {
          return this.filmGauge * Math.min(this.aspect, 1)
      },
      getFilmHeight: function() {
          return this.filmGauge / Math.max(this.aspect, 1)
      },
      setViewOffset: function(e, t, i, n, r, o) {
          this.aspect = e / t,
          this.view = {
              fullWidth: e,
              fullHeight: t,
              offsetX: i,
              offsetY: n,
              width: r,
              height: o
          },
          this.updateProjectionMatrix()
      },
      clearViewOffset: function() {
          this.view = null,
          this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function() {
          var e = this.near
            , t = e * Math.tan(.5 * ho.DEG2RAD * this.fov) / this.zoom
            , i = 2 * t
            , n = this.aspect * i
            , r = -.5 * n
            , o = this.view;
          if (null !== o)
              var a = o.fullWidth
                , s = o.fullHeight
                , r = r + o.offsetX * n / a
                , t = t - o.offsetY * i / s
                , n = o.width / a * n
                , i = o.height / s * i;
          o = this.filmOffset,
          0 !== o && (r += e * o / this.getFilmWidth()),
          this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far)
      },
      toJSON: function(e) {
          return e = ot.prototype.toJSON.call(this, e),
          e.object.fov = this.fov,
          e.object.zoom = this.zoom,
          e.object.near = this.near,
          e.object.far = this.far,
          e.object.focus = this.focus,
          e.object.aspect = this.aspect,
          null !== this.view && (e.object.view = Object.assign({}, this.view)),
          e.object.filmGauge = this.filmGauge,
          e.object.filmOffset = this.filmOffset,
          e
      }
  }),
  Ct.prototype = Object.assign(Object.create(Lt.prototype), {
      constructor: Ct,
      isOrthographicCamera: !0,
      copy: function(e) {
          return Lt.prototype.copy.call(this, e),
          this.left = e.left,
          this.right = e.right,
          this.top = e.top,
          this.bottom = e.bottom,
          this.near = e.near,
          this.far = e.far,
          this.zoom = e.zoom,
          this.view = null === e.view ? null : Object.assign({}, e.view),
          this
      },
      setViewOffset: function(e, t, i, n, r, o) {
          this.view = {
              fullWidth: e,
              fullHeight: t,
              offsetX: i,
              offsetY: n,
              width: r,
              height: o
          },
          this.updateProjectionMatrix()
      },
      clearViewOffset: function() {
          this.view = null,
          this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function() {
          var e = (this.right - this.left) / (2 * this.zoom)
            , t = (this.top - this.bottom) / (2 * this.zoom)
            , i = (this.right + this.left) / 2
            , n = (this.top + this.bottom) / 2
            , r = i - e
            , i = i + e
            , e = n + t
            , t = n - t;
          if (null !== this.view)
              var i = this.zoom / (this.view.width / this.view.fullWidth)
                , t = this.zoom / (this.view.height / this.view.fullHeight)
                , o = (this.right - this.left) / this.view.width
                , n = (this.top - this.bottom) / this.view.height
                , r = r + this.view.offsetX / i * o
                , i = r + this.view.width / i * o
                , e = e - this.view.offsetY / t * n
                , t = e - this.view.height / t * n;
          this.projectionMatrix.makeOrthographic(r, i, e, t, this.near, this.far)
      },
      toJSON: function(e) {
          return e = ot.prototype.toJSON.call(this, e),
          e.object.zoom = this.zoom,
          e.object.left = this.left,
          e.object.right = this.right,
          e.object.top = this.top,
          e.object.bottom = this.bottom,
          e.object.near = this.near,
          e.object.far = this.far,
          null !== this.view && (e.object.view = Object.assign({}, this.view)),
          e
      }
  });
  var To = 0;
  ri.prototype.isFogExp2 = !0,
  ri.prototype.clone = function() {
      return new ri(this.color.getHex(),this.density)
  }
  ,
  ri.prototype.toJSON = function() {
      return {
          type: "FogExp2",
          color: this.color.getHex(),
          density: this.density
      }
  }
  ,
  oi.prototype.isFog = !0,
  oi.prototype.clone = function() {
      return new oi(this.color.getHex(),this.near,this.far)
  }
  ,
  oi.prototype.toJSON = function() {
      return {
          type: "Fog",
          color: this.color.getHex(),
          near: this.near,
          far: this.far
      }
  }
  ,
  ai.prototype = Object.create(ot.prototype),
  ai.prototype.constructor = ai,
  ai.prototype.copy = function(e, t) {
      return ot.prototype.copy.call(this, e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
      this.autoUpdate = e.autoUpdate,
      this.matrixAutoUpdate = e.matrixAutoUpdate,
      this
  }
  ,
  ai.prototype.toJSON = function(e) {
      var t = ot.prototype.toJSON.call(this, e);
      return null !== this.background && (t.object.background = this.background.toJSON(e)),
      null !== this.fog && (t.object.fog = this.fog.toJSON()),
      t
  }
  ,
  si.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: si,
      isLensFlare: !0,
      copy: function(e) {
          ot.prototype.copy.call(this, e),
          this.positionScreen.copy(e.positionScreen),
          this.customUpdateCallback = e.customUpdateCallback;
          for (var t = 0, i = e.lensFlares.length; i > t; t++)
              this.lensFlares.push(e.lensFlares[t]);
          return this
      },
      add: function(e, t, i, n, r, o) {
          void 0 === t && (t = -1),
          void 0 === i && (i = 0),
          void 0 === o && (o = 1),
          void 0 === r && (r = new V(16777215)),
          void 0 === n && (n = 1),
          i = Math.min(i, Math.max(0, i)),
          this.lensFlares.push({
              texture: e,
              size: t,
              distance: i,
              x: 0,
              y: 0,
              z: 0,
              scale: 1,
              rotation: 0,
              opacity: o,
              color: r,
              blending: n
          })
      },
      updateLensFlares: function() {
          var e, t, i = this.lensFlares.length, n = 2 * -this.positionScreen.x, r = 2 * -this.positionScreen.y;
          for (e = 0; i > e; e++)
              t = this.lensFlares[e],
              t.x = this.positionScreen.x + n * t.distance,
              t.y = this.positionScreen.y + r * t.distance,
              t.wantedRotation = t.x * Math.PI * .25,
              t.rotation += .25 * (t.wantedRotation - t.rotation)
      }
  }),
  ci.prototype = Object.create(q.prototype),
  ci.prototype.constructor = ci,
  ci.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.map = e.map,
      this.rotation = e.rotation,
      this
  }
  ,
  hi.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: hi,
      isSprite: !0,
      raycast: function() {
          var e = new c;
          return function(t, i) {
              e.setFromMatrixPosition(this.matrixWorld);
              var n = t.ray.distanceSqToPoint(e);
              n > this.scale.x * this.scale.y / 4 || i.push({
                  distance: Math.sqrt(n),
                  point: this.position,
                  face: null,
                  object: this
              })
          }
      }(),
      clone: function() {
          return new this.constructor(this.material).copy(this)
      }
  }),
  li.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: li,
      copy: function(e) {
          ot.prototype.copy.call(this, e, !1),
          e = e.levels;
          for (var t = 0, i = e.length; i > t; t++) {
              var n = e[t];
              this.addLevel(n.object.clone(), n.distance)
          }
          return this
      },
      addLevel: function(e, t) {
          void 0 === t && (t = 0),
          t = Math.abs(t);
          for (var i = this.levels, n = 0; n < i.length && !(t < i[n].distance); n++)
              ;
          i.splice(n, 0, {
              distance: t,
              object: e
          }),
          this.add(e)
      },
      getObjectForDistance: function(e) {
          for (var t = this.levels, i = 1, n = t.length; n > i && !(e < t[i].distance); i++)
              ;
          return t[i - 1].object
      },
      raycast: function() {
          var e = new c;
          return function(t, i) {
              e.setFromMatrixPosition(this.matrixWorld);
              var n = t.ray.origin.distanceTo(e);
              this.getObjectForDistance(n).raycast(t, i)
          }
      }(),
      update: function() {
          var e = new c
            , t = new c;
          return function(i) {
              var n = this.levels;
              if (1 < n.length) {
                  e.setFromMatrixPosition(i.matrixWorld),
                  t.setFromMatrixPosition(this.matrixWorld),
                  i = e.distanceTo(t),
                  n[0].object.visible = !0;
                  for (var r = 1, o = n.length; o > r && i >= n[r].distance; r++)
                      n[r - 1].object.visible = !1,
                      n[r].object.visible = !0;
                  for (; o > r; r++)
                      n[r].object.visible = !1
              }
          }
      }(),
      toJSON: function(e) {
          e = ot.prototype.toJSON.call(this, e),
          e.object.levels = [];
          for (var t = this.levels, i = 0, n = t.length; n > i; i++) {
              var r = t[i];
              e.object.levels.push({
                  object: r.object.uuid,
                  distance: r.distance
              })
          }
          return e
      }
  }),
  Object.assign(ui.prototype, {
      calculateInverses: function() {
          this.boneInverses = [];
          for (var e = 0, t = this.bones.length; t > e; e++) {
              var i = new h;
              this.bones[e] && i.getInverse(this.bones[e].matrixWorld),
              this.boneInverses.push(i)
          }
      },
      pose: function() {
          for (var e, t = 0, i = this.bones.length; i > t; t++)
              (e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
          for (t = 0,
          i = this.bones.length; i > t; t++)
              (e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld),
              e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
              e.matrix.decompose(e.position, e.quaternion, e.scale))
      },
      update: function() {
          var e = new h;
          return function() {
              for (var t = 0, i = this.bones.length; i > t; t++)
                  e.multiplyMatrices(this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix, this.boneInverses[t]),
                  e.toArray(this.boneMatrices, 16 * t);
              this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
          }
      }(),
      clone: function() {
          return new ui(this.bones,this.boneInverses,this.useVertexTexture)
      }
  }),
  pi.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: pi,
      isBone: !0
  }),
  di.prototype = Object.assign(Object.create(Mt.prototype), {
      constructor: di,
      isSkinnedMesh: !0,
      bind: function(e, t) {
          this.skeleton = e,
          void 0 === t && (this.updateMatrixWorld(!0),
          this.skeleton.calculateInverses(),
          t = this.matrixWorld),
          this.bindMatrix.copy(t),
          this.bindMatrixInverse.getInverse(t)
      },
      pose: function() {
          this.skeleton.pose()
      },
      normalizeSkinWeights: function() {
          if (this.geometry && this.geometry.isGeometry)
              for (var e = 0; e < this.geometry.skinWeights.length; e++) {
                  var t = this.geometry.skinWeights[e]
                    , i = 1 / t.lengthManhattan();
                  1 / 0 !== i ? t.multiplyScalar(i) : t.set(1, 0, 0, 0)
              }
          else if (this.geometry && this.geometry.isBufferGeometry)
              for (var t = new r, n = this.geometry.attributes.skinWeight, e = 0; e < n.count; e++)
                  t.x = n.getX(e),
                  t.y = n.getY(e),
                  t.z = n.getZ(e),
                  t.w = n.getW(e),
                  i = 1 / t.lengthManhattan(),
                  1 / 0 !== i ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
                  n.setXYZW(e, t.x, t.y, t.z, t.w)
      },
      updateMatrixWorld: function() {
          Mt.prototype.updateMatrixWorld.call(this, !0),
          "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
      },
      clone: function() {
          return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)
      }
  }),
  fi.prototype = Object.create(q.prototype),
  fi.prototype.constructor = fi,
  fi.prototype.isLineBasicMaterial = !0,
  fi.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.linewidth = e.linewidth,
      this.linecap = e.linecap,
      this.linejoin = e.linejoin,
      this
  }
  ,
  mi.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: mi,
      isLine: !0,
      raycast: function() {
          var e = new h
            , t = new it
            , i = new Q;
          return function(n, r) {
              var o = n.linePrecision
                , o = o * o
                , a = this.geometry
                , s = this.matrixWorld;
              if (null === a.boundingSphere && a.computeBoundingSphere(),
              i.copy(a.boundingSphere),
              i.applyMatrix4(s),
              !1 !== n.ray.intersectsSphere(i)) {
                  e.getInverse(s),
                  t.copy(n.ray).applyMatrix4(e);
                  var h = new c
                    , l = new c
                    , s = new c
                    , u = new c
                    , p = this && this.isLineSegments ? 2 : 1;
                  if (a.isBufferGeometry) {
                      var d = a.index
                        , f = a.attributes.position.array;
                      if (null !== d)
                          for (var d = d.array, a = 0, m = d.length - 1; m > a; a += p) {
                              var g = d[a + 1];
                              h.fromArray(f, 3 * d[a]),
                              l.fromArray(f, 3 * g),
                              g = t.distanceSqToSegment(h, l, u, s),
                              g > o || (u.applyMatrix4(this.matrixWorld),
                              g = n.ray.origin.distanceTo(u),
                              g < n.near || g > n.far || r.push({
                                  distance: g,
                                  point: s.clone().applyMatrix4(this.matrixWorld),
                                  index: a,
                                  face: null,
                                  faceIndex: null,
                                  object: this
                              }))
                          }
                      else
                          for (a = 0,
                          m = f.length / 3 - 1; m > a; a += p)
                              h.fromArray(f, 3 * a),
                              l.fromArray(f, 3 * a + 3),
                              g = t.distanceSqToSegment(h, l, u, s),
                              g > o || (u.applyMatrix4(this.matrixWorld),
                              g = n.ray.origin.distanceTo(u),
                              g < n.near || g > n.far || r.push({
                                  distance: g,
                                  point: s.clone().applyMatrix4(this.matrixWorld),
                                  index: a,
                                  face: null,
                                  faceIndex: null,
                                  object: this
                              }))
                  } else if (a.isGeometry)
                      for (h = a.vertices,
                      l = h.length,
                      a = 0; l - 1 > a; a += p)
                          g = t.distanceSqToSegment(h[a], h[a + 1], u, s),
                          g > o || (u.applyMatrix4(this.matrixWorld),
                          g = n.ray.origin.distanceTo(u),
                          g < n.near || g > n.far || r.push({
                              distance: g,
                              point: s.clone().applyMatrix4(this.matrixWorld),
                              index: a,
                              face: null,
                              faceIndex: null,
                              object: this
                          }))
              }
          }
      }(),
      clone: function() {
          return new this.constructor(this.geometry,this.material).copy(this)
      }
  }),
  gi.prototype = Object.assign(Object.create(mi.prototype), {
      constructor: gi,
      isLineSegments: !0
  }),
  vi.prototype = Object.create(q.prototype),
  vi.prototype.constructor = vi,
  vi.prototype.isPointsMaterial = !0,
  vi.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.map = e.map,
      this.size = e.size,
      this.sizeAttenuation = e.sizeAttenuation,
      this
  }
  ,
  yi.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: yi,
      isPoints: !0,
      raycast: function() {
          var e = new h
            , t = new it
            , i = new Q;
          return function(n, r) {
              function o(e, i) {
                  var o = t.distanceSqToPoint(e);
                  if (u > o) {
                      var s = t.closestPointToPoint(e);
                      s.applyMatrix4(h);
                      var c = n.ray.origin.distanceTo(s);
                      c < n.near || c > n.far || r.push({
                          distance: c,
                          distanceToRay: Math.sqrt(o),
                          point: s.clone(),
                          index: i,
                          face: null,
                          object: a
                      })
                  }
              }
              var a = this
                , s = this.geometry
                , h = this.matrixWorld
                , l = n.params.Points.threshold;
              if (null === s.boundingSphere && s.computeBoundingSphere(),
              i.copy(s.boundingSphere),
              i.applyMatrix4(h),
              !1 !== n.ray.intersectsSphere(i)) {
                  e.getInverse(h),
                  t.copy(n.ray).applyMatrix4(e);
                  var l = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                    , u = l * l
                    , l = new c;
                  if (s.isBufferGeometry) {
                      var p = s.index
                        , s = s.attributes.position.array;
                      if (null !== p)
                          for (var d = p.array, p = 0, f = d.length; f > p; p++) {
                              var m = d[p];
                              l.fromArray(s, 3 * m),
                              o(l, m)
                          }
                      else
                          for (p = 0,
                          d = s.length / 3; d > p; p++)
                              l.fromArray(s, 3 * p),
                              o(l, p)
                  } else
                      for (l = s.vertices,
                      p = 0,
                      d = l.length; d > p; p++)
                          o(l[p], p)
              }
          }
      }(),
      clone: function() {
          return new this.constructor(this.geometry,this.material).copy(this)
      }
  }),
  xi.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: xi
  }),
  bi.prototype = Object.create(n.prototype),
  bi.prototype.constructor = bi,
  _i.prototype = Object.create(n.prototype),
  _i.prototype.constructor = _i,
  _i.prototype.isCompressedTexture = !0,
  wi.prototype = Object.create(n.prototype),
  wi.prototype.constructor = wi,
  Ei.prototype = Object.create(n.prototype),
  Ei.prototype.constructor = Ei,
  Ei.prototype.isDepthTexture = !0,
  Mi.prototype = Object.create(Et.prototype),
  Mi.prototype.constructor = Mi,
  Ti.prototype = Object.create(wt.prototype),
  Ti.prototype.constructor = Ti,
  Si.prototype = Object.create(Et.prototype),
  Si.prototype.constructor = Si,
  Ai.prototype = Object.create(wt.prototype),
  Ai.prototype.constructor = Ai,
  Ri.prototype = Object.create(Et.prototype),
  Ri.prototype.constructor = Ri,
  Li.prototype = Object.create(wt.prototype),
  Li.prototype.constructor = Li,
  Pi.prototype = Object.create(Ri.prototype),
  Pi.prototype.constructor = Pi,
  Ci.prototype = Object.create(wt.prototype),
  Ci.prototype.constructor = Ci,
  Ii.prototype = Object.create(Ri.prototype),
  Ii.prototype.constructor = Ii,
  Ui.prototype = Object.create(wt.prototype),
  Ui.prototype.constructor = Ui,
  Ni.prototype = Object.create(Ri.prototype),
  Ni.prototype.constructor = Ni,
  Di.prototype = Object.create(wt.prototype),
  Di.prototype.constructor = Di,
  Oi.prototype = Object.create(Ri.prototype),
  Oi.prototype.constructor = Oi,
  Bi.prototype = Object.create(wt.prototype),
  Bi.prototype.constructor = Bi,
  Fi.prototype = Object.create(Et.prototype),
  Fi.prototype.constructor = Fi,
  zi.prototype = Object.create(wt.prototype),
  zi.prototype.constructor = zi,
  Hi.prototype = Object.create(Et.prototype),
  Hi.prototype.constructor = Hi,
  Gi.prototype = Object.create(wt.prototype),
  Gi.prototype.constructor = Gi,
  Vi.prototype = Object.create(Et.prototype),
  Vi.prototype.constructor = Vi;
  var So = {
      area: function(e) {
          for (var t = e.length, i = 0, n = t - 1, r = 0; t > r; n = r++)
              i += e[n].x * e[r].y - e[r].x * e[n].y;
          return .5 * i
      },
      triangulate: function() {
          return function(e, t) {
              var i = e.length;
              if (3 > i)
                  return null;
              var n, r, o, a = [], s = [], c = [];
              if (0 < So.area(e))
                  for (r = 0; i > r; r++)
                      s[r] = r;
              else
                  for (r = 0; i > r; r++)
                      s[r] = i - 1 - r;
              var h = 2 * i;
              for (r = i - 1; i > 2; ) {
                  if (0 >= h--) {
                      console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                      break
                  }
                  n = r,
                  n >= i && (n = 0),
                  r = n + 1,
                  r >= i && (r = 0),
                  o = r + 1,
                  o >= i && (o = 0);
                  var l;
                  e: {
                      var u, p, d, f, m, g, v, y;
                      if (u = e[s[n]].x,
                      p = e[s[n]].y,
                      d = e[s[r]].x,
                      f = e[s[r]].y,
                      m = e[s[o]].x,
                      g = e[s[o]].y,
                      0 >= (d - u) * (g - p) - (f - p) * (m - u))
                          l = !1;
                      else {
                          var x, b, _, w, E, M, T, S, A, R;
                          for (x = m - d,
                          b = g - f,
                          _ = u - m,
                          w = p - g,
                          E = d - u,
                          M = f - p,
                          l = 0; i > l; l++)
                              if (v = e[s[l]].x,
                              y = e[s[l]].y,
                              !(v === u && y === p || v === d && y === f || v === m && y === g) && (T = v - u,
                              S = y - p,
                              A = v - d,
                              R = y - f,
                              v -= m,
                              y -= g,
                              A = x * R - b * A,
                              T = E * S - M * T,
                              S = _ * y - w * v,
                              A >= -Number.EPSILON && S >= -Number.EPSILON && T >= -Number.EPSILON)) {
                                  l = !1;
                                  break e
                              }
                          l = !0
                      }
                  }
                  if (l) {
                      for (a.push([e[s[n]], e[s[r]], e[s[o]]]),
                      c.push([s[n], s[r], s[o]]),
                      n = r,
                      o = r + 1; i > o; n++,
                      o++)
                          s[n] = s[o];
                      i--,
                      h = 2 * i
                  }
              }
              return t ? c : a
          }
      }(),
      triangulateShape: function(e, t) {
          function i(e) {
              var t = e.length;
              t > 2 && e[t - 1].equals(e[0]) && e.pop()
          }
          function n(e, t, i) {
              return e.x !== t.x ? e.x < t.x ? e.x <= i.x && i.x <= t.x : t.x <= i.x && i.x <= e.x : e.y < t.y ? e.y <= i.y && i.y <= t.y : t.y <= i.y && i.y <= e.y
          }
          function r(e, t, i, r, o) {
              var a = t.x - e.x
                , s = t.y - e.y
                , c = r.x - i.x
                , h = r.y - i.y
                , l = e.x - i.x
                , u = e.y - i.y
                , p = s * c - a * h
                , d = s * l - a * u;
              if (Math.abs(p) > Number.EPSILON) {
                  if (p > 0) {
                      if (0 > d || d > p)
                          return [];
                      if (c = h * l - c * u,
                      0 > c || c > p)
                          return []
                  } else {
                      if (d > 0 || p > d)
                          return [];
                      if (c = h * l - c * u,
                      c > 0 || p > c)
                          return []
                  }
                  return 0 === c ? !o || 0 !== d && d !== p ? [e] : [] : c === p ? !o || 0 !== d && d !== p ? [t] : [] : 0 === d ? [i] : d === p ? [r] : (o = c / p,
                  [{
                      x: e.x + o * a,
                      y: e.y + o * s
                  }])
              }
              return 0 !== d || h * l !== c * u ? [] : (s = 0 === a && 0 === s,
              c = 0 === c && 0 === h,
              s && c ? e.x !== i.x || e.y !== i.y ? [] : [e] : s ? n(i, r, e) ? [e] : [] : c ? n(e, t, i) ? [i] : [] : (0 !== a ? (e.x < t.x ? (a = e,
              c = e.x,
              s = t,
              e = t.x) : (a = t,
              c = t.x,
              s = e,
              e = e.x),
              i.x < r.x ? (t = i,
              p = i.x,
              h = r,
              i = r.x) : (t = r,
              p = r.x,
              h = i,
              i = i.x)) : (e.y < t.y ? (a = e,
              c = e.y,
              s = t,
              e = t.y) : (a = t,
              c = t.y,
              s = e,
              e = e.y),
              i.y < r.y ? (t = i,
              p = i.y,
              h = r,
              i = r.y) : (t = r,
              p = r.y,
              h = i,
              i = i.y)),
              p >= c ? p > e ? [] : e === p ? o ? [] : [t] : i >= e ? [t, s] : [t, h] : c > i ? [] : c === i ? o ? [] : [a] : i >= e ? [a, s] : [a, h]))
          }
          function o(e, t, i, n) {
              var r = t.x - e.x
                , o = t.y - e.y;
              t = i.x - e.x,
              i = i.y - e.y;
              var a = n.x - e.x;
              return n = n.y - e.y,
              e = r * i - o * t,
              r = r * n - o * a,
              Math.abs(e) > Number.EPSILON ? (t = a * i - n * t,
              e > 0 ? r >= 0 && t >= 0 : r >= 0 || t >= 0) : r > 0
          }
          i(e),
          t.forEach(i);
          var a, s, c, h, l, u = {};
          for (c = e.concat(),
          a = 0,
          s = t.length; s > a; a++)
              Array.prototype.push.apply(c, t[a]);
          for (a = 0,
          s = c.length; s > a; a++)
              l = c[a].x + ":" + c[a].y,
              void 0 !== u[l] && console.warn("THREE.ShapeUtils: Duplicate point", l, a),
              u[l] = a;
          a = function(e, t) {
              function i(e, t) {
                  var i = g.length - 1
                    , n = e - 1;
                  0 > n && (n = i);
                  var r = e + 1;
                  return r > i && (r = 0),
                  (i = o(g[e], g[n], g[r], s[t])) ? (i = s.length - 1,
                  n = t - 1,
                  0 > n && (n = i),
                  r = t + 1,
                  r > i && (r = 0),
                  (i = o(s[t], s[n], s[r], g[e])) ? !0 : !1) : !1
              }
              function n(e, t) {
                  var i, n;
                  for (i = 0; i < g.length; i++)
                      if (n = i + 1,
                      n %= g.length,
                      n = r(e, t, g[i], g[n], !0),
                      0 < n.length)
                          return !0;
                  return !1
              }
              function a(e, i) {
                  var n, o, a, s;
                  for (n = 0; n < v.length; n++)
                      for (o = t[v[n]],
                      a = 0; a < o.length; a++)
                          if (s = a + 1,
                          s %= o.length,
                          s = r(e, i, o[a], o[s], !0),
                          0 < s.length)
                              return !0;
                  return !1
              }
              var s, c, h, l, u, p, d, f, m, g = e.concat(), v = [], y = [], x = 0;
              for (c = t.length; c > x; x++)
                  v.push(x);
              d = 0;
              for (var b = 2 * v.length; 0 < v.length; ) {
                  if (b--,
                  0 > b) {
                      console.log("Infinite Loop! Holes left:" + v.length + ", Probably Hole outside Shape!");
                      break
                  }
                  for (h = d; h < g.length; h++) {
                      for (l = g[h],
                      c = -1,
                      x = 0; x < v.length; x++)
                          if (u = v[x],
                          p = l.x + ":" + l.y + ":" + u,
                          void 0 === y[p]) {
                              for (s = t[u],
                              f = 0; f < s.length; f++)
                                  if (u = s[f],
                                  i(h, f) && !n(l, u) && !a(l, u)) {
                                      c = f,
                                      v.splice(x, 1),
                                      d = g.slice(0, h + 1),
                                      u = g.slice(h),
                                      f = s.slice(c),
                                      m = s.slice(0, c + 1),
                                      g = d.concat(f).concat(m).concat(u),
                                      d = h;
                                      break
                                  }
                              if (c >= 0)
                                  break;
                              y[p] = !0
                          }
                      if (c >= 0)
                          break
                  }
              }
              return g
          }(e, t);
          var p = So.triangulate(a, !1);
          for (a = 0,
          s = p.length; s > a; a++)
              for (h = p[a],
              c = 0; 3 > c; c++)
                  l = h[c].x + ":" + h[c].y,
                  l = u[l],
                  void 0 !== l && (h[c] = l);
          return p.concat()
      },
      isClockWise: function(e) {
          return 0 > So.area(e)
      }
  };
  ki.prototype = Object.create(wt.prototype),
  ki.prototype.constructor = ki,
  ki.prototype.addShapeList = function(e, t) {
      for (var i = e.length, n = 0; i > n; n++)
          this.addShape(e[n], t)
  }
  ,
  ki.prototype.addShape = function(e, t) {
      function n(e, t, i) {
          return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          t.clone().multiplyScalar(i).add(e)
      }
      function r(e, t, n) {
          var r, o, a;
          o = e.x - t.x,
          a = e.y - t.y,
          r = n.x - e.x;
          var s = n.y - e.y
            , c = o * o + a * a;
          if (Math.abs(o * s - a * r) > Number.EPSILON) {
              var h = Math.sqrt(c)
                , l = Math.sqrt(r * r + s * s)
                , c = t.x - a / h;
              if (t = t.y + o / h,
              s = ((n.x - s / l - c) * s - (n.y + r / l - t) * r) / (o * s - a * r),
              r = c + o * s - e.x,
              o = t + a * s - e.y,
              a = r * r + o * o,
              2 >= a)
                  return new i(r,o);
              a = Math.sqrt(a / 2)
          } else
              e = !1,
              o > Number.EPSILON ? r > Number.EPSILON && (e = !0) : o < -Number.EPSILON ? r < -Number.EPSILON && (e = !0) : Math.sign(a) === Math.sign(s) && (e = !0),
              e ? (r = -a,
              a = Math.sqrt(c)) : (r = o,
              o = a,
              a = Math.sqrt(c / 2));
          return new i(r / a,o / a)
      }
      function o(e, t) {
          var i, n;
          for (H = e.length; 0 <= --H; ) {
              i = H,
              n = H - 1,
              0 > n && (n = e.length - 1);
              var r, o = b + 2 * v;
              for (r = 0; o > r; r++) {
                  var a = F * r
                    , s = F * (r + 1)
                    , c = t + i + a
                    , a = t + n + a
                    , h = t + n + s
                    , s = t + i + s
                    , c = c + R
                    , a = a + R
                    , h = h + R
                    , s = s + R;
                  A.faces.push(new ct(c,a,s,null,null,1)),
                  A.faces.push(new ct(a,h,s,null,null,1)),
                  c = E.generateSideWallUV(A, c, a, h, s),
                  A.faceVertexUvs[0].push([c[0], c[1], c[3]]),
                  A.faceVertexUvs[0].push([c[1], c[2], c[3]])
              }
          }
      }
      function a(e, t, i) {
          A.vertices.push(new c(e,t,i))
      }
      function s(e, t, i) {
          e += R,
          t += R,
          i += R,
          A.faces.push(new ct(e,t,i,null,null,0)),
          e = E.generateTopUV(A, e, t, i),
          A.faceVertexUvs[0].push(e)
      }
      var h, l, u, p, d, f = void 0 !== t.amount ? t.amount : 100, m = void 0 !== t.bevelThickness ? t.bevelThickness : 6, g = void 0 !== t.bevelSize ? t.bevelSize : m - 2, v = void 0 !== t.bevelSegments ? t.bevelSegments : 3, y = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0, x = void 0 !== t.curveSegments ? t.curveSegments : 12, b = void 0 !== t.steps ? t.steps : 1, _ = t.extrudePath, w = !1, E = void 0 !== t.UVGenerator ? t.UVGenerator : ki.WorldUVGenerator;
      _ && (h = _.getSpacedPoints(b),
      w = !0,
      y = !1,
      l = void 0 !== t.frames ? t.frames : _.computeFrenetFrames(b, !1),
      u = new c,
      p = new c,
      d = new c),
      y || (g = m = v = 0);
      var M, T, S, A = this, R = this.vertices.length, _ = e.extractPoints(x), x = _.shape, L = _.holes;
      if (_ = !So.isClockWise(x)) {
          for (x = x.reverse(),
          T = 0,
          S = L.length; S > T; T++)
              M = L[T],
              So.isClockWise(M) && (L[T] = M.reverse());
          _ = !1
      }
      var P = So.triangulateShape(x, L)
        , C = x;
      for (T = 0,
      S = L.length; S > T; T++)
          M = L[T],
          x = x.concat(M);
      var I, U, N, D, O, B, F = x.length, z = P.length, _ = [], H = 0;
      for (N = C.length,
      I = N - 1,
      U = H + 1; N > H; H++,
      I++,
      U++)
          I === N && (I = 0),
          U === N && (U = 0),
          _[H] = r(C[H], C[I], C[U]);
      var G, V = [], k = _.concat();
      for (T = 0,
      S = L.length; S > T; T++) {
          for (M = L[T],
          G = [],
          H = 0,
          N = M.length,
          I = N - 1,
          U = H + 1; N > H; H++,
          I++,
          U++)
              I === N && (I = 0),
              U === N && (U = 0),
              G[H] = r(M[H], M[I], M[U]);
          V.push(G),
          k = k.concat(G)
      }
      for (I = 0; v > I; I++) {
          for (N = I / v,
          D = m * Math.cos(N * Math.PI / 2),
          U = g * Math.sin(N * Math.PI / 2),
          H = 0,
          N = C.length; N > H; H++)
              O = n(C[H], _[H], U),
              a(O.x, O.y, -D);
          for (T = 0,
          S = L.length; S > T; T++)
              for (M = L[T],
              G = V[T],
              H = 0,
              N = M.length; N > H; H++)
                  O = n(M[H], G[H], U),
                  a(O.x, O.y, -D)
      }
      for (U = g,
      H = 0; F > H; H++)
          O = y ? n(x[H], k[H], U) : x[H],
          w ? (p.copy(l.normals[0]).multiplyScalar(O.x),
          u.copy(l.binormals[0]).multiplyScalar(O.y),
          d.copy(h[0]).add(p).add(u),
          a(d.x, d.y, d.z)) : a(O.x, O.y, 0);
      for (N = 1; b >= N; N++)
          for (H = 0; F > H; H++)
              O = y ? n(x[H], k[H], U) : x[H],
              w ? (p.copy(l.normals[N]).multiplyScalar(O.x),
              u.copy(l.binormals[N]).multiplyScalar(O.y),
              d.copy(h[N]).add(p).add(u),
              a(d.x, d.y, d.z)) : a(O.x, O.y, f / b * N);
      for (I = v - 1; I >= 0; I--) {
          for (N = I / v,
          D = m * Math.cos(N * Math.PI / 2),
          U = g * Math.sin(N * Math.PI / 2),
          H = 0,
          N = C.length; N > H; H++)
              O = n(C[H], _[H], U),
              a(O.x, O.y, f + D);
          for (T = 0,
          S = L.length; S > T; T++)
              for (M = L[T],
              G = V[T],
              H = 0,
              N = M.length; N > H; H++)
                  O = n(M[H], G[H], U),
                  w ? a(O.x, O.y + h[b - 1].y, h[b - 1].x + D) : a(O.x, O.y, f + D)
      }
      !function() {
          if (y) {
              var e = 0 * F;
              for (H = 0; z > H; H++)
                  B = P[H],
                  s(B[2] + e, B[1] + e, B[0] + e);
              for (e = F * (b + 2 * v),
              H = 0; z > H; H++)
                  B = P[H],
                  s(B[0] + e, B[1] + e, B[2] + e)
          } else {
              for (H = 0; z > H; H++)
                  B = P[H],
                  s(B[2], B[1], B[0]);
              for (H = 0; z > H; H++)
                  B = P[H],
                  s(B[0] + F * b, B[1] + F * b, B[2] + F * b)
          }
      }(),
      function() {
          var e = 0;
          for (o(C, e),
          e += C.length,
          T = 0,
          S = L.length; S > T; T++)
              M = L[T],
              o(M, e),
              e += M.length
      }()
  }
  ,
  ki.WorldUVGenerator = {
      generateTopUV: function(e, t, n, r) {
          return e = e.vertices,
          t = e[t],
          n = e[n],
          r = e[r],
          [new i(t.x,t.y), new i(n.x,n.y), new i(r.x,r.y)]
      },
      generateSideWallUV: function(e, t, n, r, o) {
          return e = e.vertices,
          t = e[t],
          n = e[n],
          r = e[r],
          o = e[o],
          .01 > Math.abs(t.y - n.y) ? [new i(t.x,1 - t.z), new i(n.x,1 - n.z), new i(r.x,1 - r.z), new i(o.x,1 - o.z)] : [new i(t.y,1 - t.z), new i(n.y,1 - n.z), new i(r.y,1 - r.z), new i(o.y,1 - o.z)]
      }
  },
  ji.prototype = Object.create(ki.prototype),
  ji.prototype.constructor = ji,
  Wi.prototype = Object.create(wt.prototype),
  Wi.prototype.constructor = Wi,
  Xi.prototype = Object.create(Et.prototype),
  Xi.prototype.constructor = Xi,
  qi.prototype = Object.create(wt.prototype),
  qi.prototype.constructor = qi,
  Yi.prototype = Object.create(Et.prototype),
  Yi.prototype.constructor = Yi,
  Zi.prototype = Object.create(wt.prototype),
  Zi.prototype.constructor = Zi,
  Ji.prototype = Object.create(Et.prototype),
  Ji.prototype.constructor = Ji,
  Qi.prototype = Object.create(wt.prototype),
  Qi.prototype.constructor = Qi,
  Ki.prototype = Object.create(Et.prototype),
  Ki.prototype.constructor = Ki,
  $i.prototype = Object.create(Et.prototype),
  $i.prototype.constructor = $i,
  en.prototype = Object.create(wt.prototype),
  en.prototype.constructor = en,
  tn.prototype = Object.create(Et.prototype),
  tn.prototype.constructor = tn,
  nn.prototype = Object.create(en.prototype),
  nn.prototype.constructor = nn,
  rn.prototype = Object.create(tn.prototype),
  rn.prototype.constructor = rn,
  on.prototype = Object.create(wt.prototype),
  on.prototype.constructor = on,
  an.prototype = Object.create(Et.prototype),
  an.prototype.constructor = an;
  var Ao = Object.freeze({
      WireframeGeometry: Mi,
      ParametricGeometry: Ti,
      ParametricBufferGeometry: Si,
      TetrahedronGeometry: Li,
      TetrahedronBufferGeometry: Pi,
      OctahedronGeometry: Ci,
      OctahedronBufferGeometry: Ii,
      IcosahedronGeometry: Ui,
      IcosahedronBufferGeometry: Ni,
      DodecahedronGeometry: Di,
      DodecahedronBufferGeometry: Oi,
      PolyhedronGeometry: Ai,
      PolyhedronBufferGeometry: Ri,
      TubeGeometry: Bi,
      TubeBufferGeometry: Fi,
      TorusKnotGeometry: zi,
      TorusKnotBufferGeometry: Hi,
      TorusGeometry: Gi,
      TorusBufferGeometry: Vi,
      TextGeometry: ji,
      SphereGeometry: Wi,
      SphereBufferGeometry: Xi,
      RingGeometry: qi,
      RingBufferGeometry: Yi,
      PlaneGeometry: At,
      PlaneBufferGeometry: Rt,
      LatheGeometry: Zi,
      LatheBufferGeometry: Ji,
      ShapeGeometry: Qi,
      ShapeBufferGeometry: Ki,
      ExtrudeGeometry: ki,
      EdgesGeometry: $i,
      ConeGeometry: nn,
      ConeBufferGeometry: rn,
      CylinderGeometry: en,
      CylinderBufferGeometry: tn,
      CircleGeometry: on,
      CircleBufferGeometry: an,
      BoxGeometry: Tt,
      BoxBufferGeometry: St
  });
  sn.prototype = Object.create(Y.prototype),
  sn.prototype.constructor = sn,
  sn.prototype.isShadowMaterial = !0,
  cn.prototype = Object.create(Y.prototype),
  cn.prototype.constructor = cn,
  cn.prototype.isRawShaderMaterial = !0,
  hn.prototype = {
      constructor: hn,
      isMultiMaterial: !0,
      toJSON: function(e) {
          for (var t = {
              metadata: {
                  version: 4.2,
                  type: "material",
                  generator: "MaterialExporter"
              },
              uuid: this.uuid,
              type: this.type,
              materials: []
          }, i = this.materials, n = 0, r = i.length; r > n; n++) {
              var o = i[n].toJSON(e);
              delete o.metadata,
              t.materials.push(o)
          }
          return t.visible = this.visible,
          t
      },
      clone: function() {
          for (var e = new this.constructor, t = 0; t < this.materials.length; t++)
              e.materials.push(this.materials[t].clone());
          return e.visible = this.visible,
          e
      }
  },
  ln.prototype = Object.create(q.prototype),
  ln.prototype.constructor = ln,
  ln.prototype.isMeshStandardMaterial = !0,
  ln.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.defines = {
          STANDARD: ""
      },
      this.color.copy(e.color),
      this.roughness = e.roughness,
      this.metalness = e.metalness,
      this.map = e.map,
      this.lightMap = e.lightMap,
      this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap,
      this.aoMapIntensity = e.aoMapIntensity,
      this.emissive.copy(e.emissive),
      this.emissiveMap = e.emissiveMap,
      this.emissiveIntensity = e.emissiveIntensity,
      this.bumpMap = e.bumpMap,
      this.bumpScale = e.bumpScale,
      this.normalMap = e.normalMap,
      this.normalScale.copy(e.normalScale),
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this.roughnessMap = e.roughnessMap,
      this.metalnessMap = e.metalnessMap,
      this.alphaMap = e.alphaMap,
      this.envMap = e.envMap,
      this.envMapIntensity = e.envMapIntensity,
      this.refractionRatio = e.refractionRatio,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.wireframeLinecap = e.wireframeLinecap,
      this.wireframeLinejoin = e.wireframeLinejoin,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.morphNormals = e.morphNormals,
      this
  }
  ,
  un.prototype = Object.create(ln.prototype),
  un.prototype.constructor = un,
  un.prototype.isMeshPhysicalMaterial = !0,
  un.prototype.copy = function(e) {
      return ln.prototype.copy.call(this, e),
      this.defines = {
          PHYSICAL: ""
      },
      this.reflectivity = e.reflectivity,
      this.clearCoat = e.clearCoat,
      this.clearCoatRoughness = e.clearCoatRoughness,
      this
  }
  ,
  pn.prototype = Object.create(q.prototype),
  pn.prototype.constructor = pn,
  pn.prototype.isMeshPhongMaterial = !0,
  pn.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      this.shininess = e.shininess,
      this.map = e.map,
      this.lightMap = e.lightMap,
      this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap,
      this.aoMapIntensity = e.aoMapIntensity,
      this.emissive.copy(e.emissive),
      this.emissiveMap = e.emissiveMap,
      this.emissiveIntensity = e.emissiveIntensity,
      this.bumpMap = e.bumpMap,
      this.bumpScale = e.bumpScale,
      this.normalMap = e.normalMap,
      this.normalScale.copy(e.normalScale),
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this.specularMap = e.specularMap,
      this.alphaMap = e.alphaMap,
      this.envMap = e.envMap,
      this.combine = e.combine,
      this.reflectivity = e.reflectivity,
      this.refractionRatio = e.refractionRatio,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.wireframeLinecap = e.wireframeLinecap,
      this.wireframeLinejoin = e.wireframeLinejoin,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.morphNormals = e.morphNormals,
      this
  }
  ,
  dn.prototype = Object.create(pn.prototype),
  dn.prototype.constructor = dn,
  dn.prototype.isMeshToonMaterial = !0,
  dn.prototype.copy = function(e) {
      return pn.prototype.copy.call(this, e),
      this.gradientMap = e.gradientMap,
      this
  }
  ,
  fn.prototype = Object.create(q.prototype),
  fn.prototype.constructor = fn,
  fn.prototype.isMeshNormalMaterial = !0,
  fn.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.bumpMap = e.bumpMap,
      this.bumpScale = e.bumpScale,
      this.normalMap = e.normalMap,
      this.normalScale.copy(e.normalScale),
      this.displacementMap = e.displacementMap,
      this.displacementScale = e.displacementScale,
      this.displacementBias = e.displacementBias,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.morphNormals = e.morphNormals,
      this
  }
  ,
  mn.prototype = Object.create(q.prototype),
  mn.prototype.constructor = mn,
  mn.prototype.isMeshLambertMaterial = !0,
  mn.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.map = e.map,
      this.lightMap = e.lightMap,
      this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap,
      this.aoMapIntensity = e.aoMapIntensity,
      this.emissive.copy(e.emissive),
      this.emissiveMap = e.emissiveMap,
      this.emissiveIntensity = e.emissiveIntensity,
      this.specularMap = e.specularMap,
      this.alphaMap = e.alphaMap,
      this.envMap = e.envMap,
      this.combine = e.combine,
      this.reflectivity = e.reflectivity,
      this.refractionRatio = e.refractionRatio,
      this.wireframe = e.wireframe,
      this.wireframeLinewidth = e.wireframeLinewidth,
      this.wireframeLinecap = e.wireframeLinecap,
      this.wireframeLinejoin = e.wireframeLinejoin,
      this.skinning = e.skinning,
      this.morphTargets = e.morphTargets,
      this.morphNormals = e.morphNormals,
      this
  }
  ,
  gn.prototype = Object.create(q.prototype),
  gn.prototype.constructor = gn,
  gn.prototype.isLineDashedMaterial = !0,
  gn.prototype.copy = function(e) {
      return q.prototype.copy.call(this, e),
      this.color.copy(e.color),
      this.linewidth = e.linewidth,
      this.scale = e.scale,
      this.dashSize = e.dashSize,
      this.gapSize = e.gapSize,
      this
  }
  ;
  var Ro = Object.freeze({
      ShadowMaterial: sn,
      SpriteMaterial: ci,
      RawShaderMaterial: cn,
      ShaderMaterial: Y,
      PointsMaterial: vi,
      MultiMaterial: hn,
      MeshPhysicalMaterial: un,
      MeshStandardMaterial: ln,
      MeshPhongMaterial: pn,
      MeshToonMaterial: dn,
      MeshNormalMaterial: fn,
      MeshLambertMaterial: mn,
      MeshDepthMaterial: Z,
      MeshBasicMaterial: ht,
      LineDashedMaterial: gn,
      LineBasicMaterial: fi,
      Material: q
  })
    , Lo = {
      enabled: !1,
      files: {},
      add: function(e, t) {
          !1 !== this.enabled && (this.files[e] = t)
      },
      get: function(e) {
          return !1 !== this.enabled ? this.files[e] : void 0
      },
      remove: function(e) {
          delete this.files[e]
      },
      clear: function() {
          this.files = {}
      }
  }
    , Po = new vn;
  Object.assign(yn.prototype, {
      load: function(e, t, i, n) {
          void 0 === e && (e = ""),
          void 0 !== this.path && (e = this.path + e);
          var r = this
            , o = Lo.get(e);
          if (void 0 !== o)
              return r.manager.itemStart(e),
              setTimeout(function() {
                  t && t(o),
                  r.manager.itemEnd(e)
              }, 0),
              o;
          var a = e.match(/^data:(.*?)(;base64)?,(.*)$/);
          if (a) {
              var s = a[1]
                , c = !!a[2]
                , a = a[3]
                , a = window.decodeURIComponent(a);
              c && (a = window.atob(a));
              try {
                  var h, l = (this.responseType || "").toLowerCase();
                  switch (l) {
                  case "arraybuffer":
                  case "blob":
                      h = new ArrayBuffer(a.length);
                      for (var u = new Uint8Array(h), c = 0; c < a.length; c++)
                          u[c] = a.charCodeAt(c);
                      "blob" === l && (h = new Blob([h],{
                          type: s
                      }));
                      break;
                  case "document":
                      h = (new DOMParser).parseFromString(a, s);
                      break;
                  case "json":
                      h = JSON.parse(a);
                      break;
                  default:
                      h = a
                  }
                  window.setTimeout(function() {
                      t && t(h),
                      r.manager.itemEnd(e)
                  }, 0)
              } catch (p) {
                  window.setTimeout(function() {
                      n && n(p),
                      r.manager.itemError(e)
                  }, 0)
              }
          } else {
              var d = new XMLHttpRequest;
              d.open("GET", e, !0),
              d.addEventListener("load", function(i) {
                  var o = i.target.response;
                  Lo.add(e, o),
                  200 === this.status ? (t && t(o),
                  r.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."),
                  t && t(o),
                  r.manager.itemEnd(e)) : (n && n(i),
                  r.manager.itemError(e))
              }, !1),
              void 0 !== i && d.addEventListener("progress", function(e) {
                  i(e)
              }, !1),
              d.addEventListener("error", function(t) {
                  n && n(t),
                  r.manager.itemError(e)
              }, !1),
              void 0 !== this.responseType && (d.responseType = this.responseType),
              void 0 !== this.withCredentials && (d.withCredentials = this.withCredentials),
              d.overrideMimeType && d.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"),
              d.send(null)
          }
          return r.manager.itemStart(e),
          d
      },
      setPath: function(e) {
          return this.path = e,
          this
      },
      setResponseType: function(e) {
          return this.responseType = e,
          this
      },
      setWithCredentials: function(e) {
          return this.withCredentials = e,
          this
      },
      setMimeType: function(e) {
          return this.mimeType = e,
          this
      }
  }),
  Object.assign(xn.prototype, {
      load: function(e, t, i, n) {
          function r(r) {
              c.load(e[r], function(e) {
                  e = o._parser(e, !0),
                  a[r] = {
                      width: e.width,
                      height: e.height,
                      format: e.format,
                      mipmaps: e.mipmaps
                  },
                  h += 1,
                  6 === h && (1 === e.mipmapCount && (s.minFilter = 1006),
                  s.format = e.format,
                  s.needsUpdate = !0,
                  t && t(s))
              }, i, n)
          }
          var o = this
            , a = []
            , s = new _i;
          s.image = a;
          var c = new yn(this.manager);
          if (c.setPath(this.path),
          c.setResponseType("arraybuffer"),
          Array.isArray(e))
              for (var h = 0, l = 0, u = e.length; u > l; ++l)
                  r(l);
          else
              c.load(e, function(e) {
                  if (e = o._parser(e, !0),
                  e.isCubemap)
                      for (var i = e.mipmaps.length / e.mipmapCount, n = 0; i > n; n++) {
                          a[n] = {
                              mipmaps: []
                          };
                          for (var r = 0; r < e.mipmapCount; r++)
                              a[n].mipmaps.push(e.mipmaps[n * e.mipmapCount + r]),
                              a[n].format = e.format,
                              a[n].width = e.width,
                              a[n].height = e.height
                      }
                  else
                      s.image.width = e.width,
                      s.image.height = e.height,
                      s.mipmaps = e.mipmaps;
                  1 === e.mipmapCount && (s.minFilter = 1006),
                  s.format = e.format,
                  s.needsUpdate = !0,
                  t && t(s)
              }, i, n);
          return s
      },
      setPath: function(e) {
          return this.path = e,
          this
      }
  }),
  Object.assign(bn.prototype, {
      load: function(e, t, i, n) {
          var r = this
            , o = new k
            , a = new yn(this.manager);
          return a.setResponseType("arraybuffer"),
          a.load(e, function(e) {
              (e = r._parser(e)) && (void 0 !== e.image ? o.image = e.image : void 0 !== e.data && (o.image.width = e.width,
              o.image.height = e.height,
              o.image.data = e.data),
              o.wrapS = void 0 !== e.wrapS ? e.wrapS : 1001,
              o.wrapT = void 0 !== e.wrapT ? e.wrapT : 1001,
              o.magFilter = void 0 !== e.magFilter ? e.magFilter : 1006,
              o.minFilter = void 0 !== e.minFilter ? e.minFilter : 1008,
              o.anisotropy = void 0 !== e.anisotropy ? e.anisotropy : 1,
              void 0 !== e.format && (o.format = e.format),
              void 0 !== e.type && (o.type = e.type),
              void 0 !== e.mipmaps && (o.mipmaps = e.mipmaps),
              1 === e.mipmapCount && (o.minFilter = 1006),
              o.needsUpdate = !0,
              t && t(o, e))
          }, i, n),
          o
      }
  }),
  Object.assign(_n.prototype, {
      load: function(e, t, i, n) {
          void 0 === e && (e = ""),
          void 0 !== this.path && (e = this.path + e);
          var r = this
            , o = Lo.get(e);
          return void 0 !== o ? (r.manager.itemStart(e),
          setTimeout(function() {
              t && t(o),
              r.manager.itemEnd(e)
          }, 0),
          o) : (i = document.createElementNS("http://www.w3.org/1999/xhtml", "img"),
          i.addEventListener("load", function() {
              Lo.add(e, this),
              t && t(this),
              r.manager.itemEnd(e)
          }, !1),
          i.addEventListener("error", function(t) {
              n && n(t),
              r.manager.itemError(e)
          }, !1),
          void 0 !== this.crossOrigin && (i.crossOrigin = this.crossOrigin),
          r.manager.itemStart(e),
          i.src = e,
          i)
      },
      setCrossOrigin: function(e) {
          return this.crossOrigin = e,
          this
      },
      setPath: function(e) {
          return this.path = e,
          this
      }
  }),
  Object.assign(wn.prototype, {
      load: function(e, t, i, n) {
          function r(i) {
              a.load(e[i], function(e) {
                  o.images[i] = e,
                  s++,
                  6 === s && (o.needsUpdate = !0,
                  t && t(o))
              }, void 0, n)
          }
          var o = new l
            , a = new _n(this.manager);
          a.setCrossOrigin(this.crossOrigin),
          a.setPath(this.path);
          var s = 0;
          for (i = 0; i < e.length; ++i)
              r(i);
          return o
      },
      setCrossOrigin: function(e) {
          return this.crossOrigin = e,
          this
      },
      setPath: function(e) {
          return this.path = e,
          this
      }
  }),
  Object.assign(En.prototype, {
      load: function(e, t, i, r) {
          var o = new n
            , a = new _n(this.manager);
          return a.setCrossOrigin(this.crossOrigin),
          a.setPath(this.path),
          a.load(e, function(i) {
              var n = 0 < e.search(/\.(jpg|jpeg)$/) || 0 === e.search(/^data\:image\/jpeg/);
              o.format = n ? 1022 : 1023,
              o.image = i,
              o.needsUpdate = !0,
              void 0 !== t && t(o)
          }, i, r),
          o
      },
      setCrossOrigin: function(e) {
          return this.crossOrigin = e,
          this
      },
      setPath: function(e) {
          return this.path = e,
          this
      }
  }),
  Mn.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: Mn,
      isLight: !0,
      copy: function(e) {
          return ot.prototype.copy.call(this, e),
          this.color.copy(e.color),
          this.intensity = e.intensity,
          this
      },
      toJSON: function(e) {
          return e = ot.prototype.toJSON.call(this, e),
          e.object.color = this.color.getHex(),
          e.object.intensity = this.intensity,
          void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
          void 0 !== this.distance && (e.object.distance = this.distance),
          void 0 !== this.angle && (e.object.angle = this.angle),
          void 0 !== this.decay && (e.object.decay = this.decay),
          void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
          void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
          e
      }
  }),
  Tn.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: Tn,
      isHemisphereLight: !0,
      copy: function(e) {
          return Mn.prototype.copy.call(this, e),
          this.groundColor.copy(e.groundColor),
          this
      }
  }),
  Object.assign(Sn.prototype, {
      copy: function(e) {
          return this.camera = e.camera.clone(),
          this.bias = e.bias,
          this.radius = e.radius,
          this.mapSize.copy(e.mapSize),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      toJSON: function() {
          var e = {};
          return 0 !== this.bias && (e.bias = this.bias),
          1 !== this.radius && (e.radius = this.radius),
          (512 !== this.mapSize.x || 512 !== this.mapSize.y) && (e.mapSize = this.mapSize.toArray()),
          e.camera = this.camera.toJSON(!1).object,
          delete e.camera.matrix,
          e
      }
  }),
  An.prototype = Object.assign(Object.create(Sn.prototype), {
      constructor: An,
      isSpotLightShadow: !0,
      update: function(e) {
          var t = 2 * ho.RAD2DEG * e.angle
            , i = this.mapSize.width / this.mapSize.height;
          e = e.distance || 500;
          var n = this.camera;
          (t !== n.fov || i !== n.aspect || e !== n.far) && (n.fov = t,
          n.aspect = i,
          n.far = e,
          n.updateProjectionMatrix())
      }
  }),
  Rn.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: Rn,
      isSpotLight: !0,
      copy: function(e) {
          return Mn.prototype.copy.call(this, e),
          this.distance = e.distance,
          this.angle = e.angle,
          this.penumbra = e.penumbra,
          this.decay = e.decay,
          this.target = e.target.clone(),
          this.shadow = e.shadow.clone(),
          this
      }
  }),
  Ln.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: Ln,
      isPointLight: !0,
      copy: function(e) {
          return Mn.prototype.copy.call(this, e),
          this.distance = e.distance,
          this.decay = e.decay,
          this.shadow = e.shadow.clone(),
          this
      }
  }),
  Pn.prototype = Object.assign(Object.create(Sn.prototype), {
      constructor: Pn
  }),
  Cn.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: Cn,
      isDirectionalLight: !0,
      copy: function(e) {
          return Mn.prototype.copy.call(this, e),
          this.target = e.target.clone(),
          this.shadow = e.shadow.clone(),
          this
      }
  }),
  In.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: In,
      isAmbientLight: !0
  });
  var Co = {
      arraySlice: function(e, t, i) {
          return Co.isTypedArray(e) ? new e.constructor(e.subarray(t, i)) : e.slice(t, i)
      },
      convertArray: function(e, t, i) {
          return !e || !i && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
      },
      isTypedArray: function(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView)
      },
      getKeyframeOrder: function(e) {
          for (var t = e.length, i = Array(t), n = 0; n !== t; ++n)
              i[n] = n;
          return i.sort(function(t, i) {
              return e[t] - e[i]
          }),
          i
      },
      sortedArray: function(e, t, i) {
          for (var n = e.length, r = new e.constructor(n), o = 0, a = 0; a !== n; ++o)
              for (var s = i[o] * t, c = 0; c !== t; ++c)
                  r[a++] = e[s + c];
          return r
      },
      flattenJSON: function(e, t, i, n) {
          for (var r = 1, o = e[0]; void 0 !== o && void 0 === o[n]; )
              o = e[r++];
          if (void 0 !== o) {
              var a = o[n];
              if (void 0 !== a)
                  if (Array.isArray(a)) {
                      do
                          a = o[n],
                          void 0 !== a && (t.push(o.time),
                          i.push.apply(i, a)),
                          o = e[r++];
                      while (void 0 !== o)
                  } else if (void 0 !== a.toArray) {
                      do
                          a = o[n],
                          void 0 !== a && (t.push(o.time),
                          a.toArray(i, i.length)),
                          o = e[r++];
                      while (void 0 !== o)
                  } else
                      do
                          a = o[n],
                          void 0 !== a && (t.push(o.time),
                          i.push(a)),
                          o = e[r++];
                      while (void 0 !== o)
          }
      }
  };
  Un.prototype = {
      constructor: Un,
      evaluate: function(e) {
          var t = this.parameterPositions
            , i = this._cachedIndex
            , n = t[i]
            , r = t[i - 1];
          e: {
              t: {
                  i: {
                      n: if (!(n > e)) {
                          for (var o = i + 2; ; ) {
                              if (void 0 === n) {
                                  if (r > e)
                                      break n;
                                  return this._cachedIndex = i = t.length,
                                  this.afterEnd_(i - 1, e, r)
                              }
                              if (i === o)
                                  break;
                              if (r = n,
                              n = t[++i],
                              n > e)
                                  break t
                          }
                          n = t.length;
                          break i
                      }
                      if (e >= r)
                          break e;
                      for (o = t[1],
                      o > e && (i = 2,
                      r = o),
                      o = i - 2; ; ) {
                          if (void 0 === r)
                              return this._cachedIndex = 0,
                              this.beforeStart_(0, e, n);
                          if (i === o)
                              break;
                          if (n = r,
                          r = t[--i - 1],
                          e >= r)
                              break t
                      }
                      n = i,
                      i = 0
                  }
                  for (; n > i; )
                      r = i + n >>> 1,
                      e < t[r] ? n = r : i = r + 1;
                  if (n = t[i],
                  r = t[i - 1],
                  void 0 === r)
                      return this._cachedIndex = 0,
                      this.beforeStart_(0, e, n);
                  if (void 0 === n)
                      return this._cachedIndex = i = t.length,
                      this.afterEnd_(i - 1, r, e)
              }
              this._cachedIndex = i,
              this.intervalChanged_(i, r, n)
          }
          return this.interpolate_(i, r, e, n)
      },
      settings: null,
      DefaultSettings_: {},
      getSettings_: function() {
          return this.settings || this.DefaultSettings_
      },
      copySampleValue_: function(e) {
          var t = this.resultBuffer
            , i = this.sampleValues
            , n = this.valueSize;
          e *= n;
          for (var r = 0; r !== n; ++r)
              t[r] = i[e + r];
          return t
      },
      interpolate_: function() {
          throw Error("call to abstract method")
      },
      intervalChanged_: function() {}
  },
  Object.assign(Un.prototype, {
      beforeStart_: Un.prototype.copySampleValue_,
      afterEnd_: Un.prototype.copySampleValue_
  }),
  Nn.prototype = Object.assign(Object.create(Un.prototype), {
      constructor: Nn,
      DefaultSettings_: {
          endingStart: 2400,
          endingEnd: 2400
      },
      intervalChanged_: function(e, t, i) {
          var n = this.parameterPositions
            , r = e - 2
            , o = e + 1
            , a = n[r]
            , s = n[o];
          if (void 0 === a)
              switch (this.getSettings_().endingStart) {
              case 2401:
                  r = e,
                  a = 2 * t - i;
                  break;
              case 2402:
                  r = n.length - 2,
                  a = t + n[r] - n[r + 1];
                  break;
              default:
                  r = e,
                  a = i
              }
          if (void 0 === s)
              switch (this.getSettings_().endingEnd) {
              case 2401:
                  o = e,
                  s = 2 * i - t;
                  break;
              case 2402:
                  o = 1,
                  s = i + n[1] - n[0];
                  break;
              default:
                  o = e - 1,
                  s = t
              }
          e = .5 * (i - t),
          n = this.valueSize,
          this._weightPrev = e / (t - a),
          this._weightNext = e / (s - i),
          this._offsetPrev = r * n,
          this._offsetNext = o * n
      },
      interpolate_: function(e, t, i, n) {
          var r = this.resultBuffer
            , o = this.sampleValues
            , a = this.valueSize;
          e *= a;
          var s = e - a
            , c = this._offsetPrev
            , h = this._offsetNext
            , l = this._weightPrev
            , u = this._weightNext
            , p = (i - t) / (n - t);
          for (i = p * p,
          n = i * p,
          t = -l * n + 2 * l * i - l * p,
          l = (1 + l) * n + (-1.5 - 2 * l) * i + (-.5 + l) * p + 1,
          p = (-1 - u) * n + (1.5 + u) * i + .5 * p,
          u = u * n - u * i,
          i = 0; i !== a; ++i)
              r[i] = t * o[c + i] + l * o[s + i] + p * o[e + i] + u * o[h + i];
          return r
      }
  }),
  Dn.prototype = Object.assign(Object.create(Un.prototype), {
      constructor: Dn,
      interpolate_: function(e, t, i, n) {
          var r = this.resultBuffer
            , o = this.sampleValues
            , a = this.valueSize;
          e *= a;
          var s = e - a;
          for (t = (i - t) / (n - t),
          i = 1 - t,
          n = 0; n !== a; ++n)
              r[n] = o[s + n] * i + o[e + n] * t;
          return r
      }
  }),
  On.prototype = Object.assign(Object.create(Un.prototype), {
      constructor: On,
      interpolate_: function(e) {
          return this.copySampleValue_(e - 1)
      }
  });
  var Io;
  Io = {
      TimeBufferType: Float32Array,
      ValueBufferType: Float32Array,
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodDiscrete: function(e) {
          return new On(this.times,this.values,this.getValueSize(),e)
      },
      InterpolantFactoryMethodLinear: function(e) {
          return new Dn(this.times,this.values,this.getValueSize(),e)
      },
      InterpolantFactoryMethodSmooth: function(e) {
          return new Nn(this.times,this.values,this.getValueSize(),e)
      },
      setInterpolation: function(e) {
          var t;
          switch (e) {
          case 2300:
              t = this.InterpolantFactoryMethodDiscrete;
              break;
          case 2301:
              t = this.InterpolantFactoryMethodLinear;
              break;
          case 2302:
              t = this.InterpolantFactoryMethodSmooth
          }
          if (void 0 === t) {
              if (t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name,
              void 0 === this.createInterpolant) {
                  if (e === this.DefaultInterpolation)
                      throw Error(t);
                  this.setInterpolation(this.DefaultInterpolation)
              }
              console.warn(t)
          } else
              this.createInterpolant = t
      },
      getInterpolation: function() {
          switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
              return 2300;
          case this.InterpolantFactoryMethodLinear:
              return 2301;
          case this.InterpolantFactoryMethodSmooth:
              return 2302
          }
      },
      getValueSize: function() {
          return this.values.length / this.times.length
      },
      shift: function(e) {
          if (0 !== e)
              for (var t = this.times, i = 0, n = t.length; i !== n; ++i)
                  t[i] += e;
          return this
      },
      scale: function(e) {
          if (1 !== e)
              for (var t = this.times, i = 0, n = t.length; i !== n; ++i)
                  t[i] *= e;
          return this
      },
      trim: function(e, t) {
          for (var i = this.times, n = i.length, r = 0, o = n - 1; r !== n && i[r] < e; )
              ++r;
          for (; -1 !== o && i[o] > t; )
              --o;
          return ++o,
          (0 !== r || o !== n) && (r >= o && (o = Math.max(o, 1),
          r = o - 1),
          n = this.getValueSize(),
          this.times = Co.arraySlice(i, r, o),
          this.values = Co.arraySlice(this.values, r * n, o * n)),
          this
      },
      validate: function() {
          var e = !0
            , t = this.getValueSize();
          0 !== t - Math.floor(t) && (console.error("invalid value size in track", this),
          e = !1);
          var i = this.times
            , t = this.values
            , n = i.length;
          0 === n && (console.error("track is empty", this),
          e = !1);
          for (var r = null, o = 0; o !== n; o++) {
              var a = i[o];
              if ("number" == typeof a && isNaN(a)) {
                  console.error("time is not a valid number", this, o, a),
                  e = !1;
                  break
              }
              if (null !== r && r > a) {
                  console.error("out of order keys", this, o, a, r),
                  e = !1;
                  break
              }
              r = a
          }
          if (void 0 !== t && Co.isTypedArray(t))
              for (o = 0,
              i = t.length; o !== i; ++o)
                  if (n = t[o],
                  isNaN(n)) {
                      console.error("value is not a valid number", this, o, n),
                      e = !1;
                      break
                  }
          return e
      },
      optimize: function() {
          for (var e = this.times, t = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, o = e.length - 1, a = 1; o > a; ++a) {
              var s = !1
                , c = e[a];
              if (c !== e[a + 1] && (1 !== a || c !== c[0]))
                  if (n)
                      s = !0;
                  else
                      for (var h = a * i, l = h - i, u = h + i, c = 0; c !== i; ++c) {
                          var p = t[h + c];
                          if (p !== t[l + c] || p !== t[u + c]) {
                              s = !0;
                              break
                          }
                      }
              if (s) {
                  if (a !== r)
                      for (e[r] = e[a],
                      s = a * i,
                      h = r * i,
                      c = 0; c !== i; ++c)
                          t[h + c] = t[s + c];
                  ++r
              }
          }
          if (o > 0) {
              for (e[r] = e[o],
              s = o * i,
              h = r * i,
              c = 0; c !== i; ++c)
                  t[h + c] = t[s + c];
              ++r
          }
          return r !== e.length && (this.times = Co.arraySlice(e, 0, r),
          this.values = Co.arraySlice(t, 0, r * i)),
          this
      }
  },
  Fn.prototype = Object.assign(Object.create(Io), {
      constructor: Fn,
      ValueTypeName: "vector"
  }),
  zn.prototype = Object.assign(Object.create(Un.prototype), {
      constructor: zn,
      interpolate_: function(e, t, i, n) {
          var r = this.resultBuffer
            , o = this.sampleValues
            , a = this.valueSize;
          for (e *= a,
          t = (i - t) / (n - t),
          i = e + a; e !== i; e += 4)
              s.slerpFlat(r, 0, o, e - a, o, e, t);
          return r
      }
  }),
  Hn.prototype = Object.assign(Object.create(Io), {
      constructor: Hn,
      ValueTypeName: "quaternion",
      DefaultInterpolation: 2301,
      InterpolantFactoryMethodLinear: function(e) {
          return new zn(this.times,this.values,this.getValueSize(),e)
      },
      InterpolantFactoryMethodSmooth: void 0
  }),
  Gn.prototype = Object.assign(Object.create(Io), {
      constructor: Gn,
      ValueTypeName: "number"
  }),
  Vn.prototype = Object.assign(Object.create(Io), {
      constructor: Vn,
      ValueTypeName: "string",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
  }),
  kn.prototype = Object.assign(Object.create(Io), {
      constructor: kn,
      ValueTypeName: "bool",
      ValueBufferType: Array,
      DefaultInterpolation: 2300,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
  }),
  jn.prototype = Object.assign(Object.create(Io), {
      constructor: jn,
      ValueTypeName: "color"
  }),
  Wn.prototype = Io,
  Io.constructor = Wn,
  Object.assign(Wn, {
      parse: function(e) {
          if (void 0 === e.type)
              throw Error("track type undefined, can not parse");
          var t = Wn._getTrackTypeForValueTypeName(e.type);
          if (void 0 === e.times) {
              var i = []
                , n = [];
              Co.flattenJSON(e.keys, i, n, "value"),
              e.times = i,
              e.values = n
          }
          return void 0 !== t.parse ? t.parse(e) : new t(e.name,e.times,e.values,e.interpolation)
      },
      toJSON: function(e) {
          var t = e.constructor;
          if (void 0 !== t.toJSON)
              t = t.toJSON(e);
          else {
              var t = {
                  name: e.name,
                  times: Co.convertArray(e.times, Array),
                  values: Co.convertArray(e.values, Array)
              }
                , i = e.getInterpolation();
              i !== e.DefaultInterpolation && (t.interpolation = i)
          }
          return t.type = e.ValueTypeName,
          t
      },
      _getTrackTypeForValueTypeName: function(e) {
          switch (e.toLowerCase()) {
          case "scalar":
          case "double":
          case "float":
          case "number":
          case "integer":
              return Gn;
          case "vector":
          case "vector2":
          case "vector3":
          case "vector4":
              return Fn;
          case "color":
              return jn;
          case "quaternion":
              return Hn;
          case "bool":
          case "boolean":
              return kn;
          case "string":
              return Vn
          }
          throw Error("Unsupported typeName: " + e)
      }
  }),
  Xn.prototype = {
      constructor: Xn,
      resetDuration: function() {
          for (var e = 0, t = 0, i = this.tracks.length; t !== i; ++t)
              var n = this.tracks[t]
                , e = Math.max(e, n.times[n.times.length - 1]);
          this.duration = e
      },
      trim: function() {
          for (var e = 0; e < this.tracks.length; e++)
              this.tracks[e].trim(0, this.duration);
          return this
      },
      optimize: function() {
          for (var e = 0; e < this.tracks.length; e++)
              this.tracks[e].optimize();
          return this
      }
  },
  Object.assign(Xn, {
      parse: function(e) {
          for (var t = [], i = e.tracks, n = 1 / (e.fps || 1), r = 0, o = i.length; r !== o; ++r)
              t.push(Wn.parse(i[r]).scale(n));
          return new Xn(e.name,e.duration,t)
      },
      toJSON: function(e) {
          var t = []
            , i = e.tracks;
          e = {
              name: e.name,
              duration: e.duration,
              tracks: t
          };
          for (var n = 0, r = i.length; n !== r; ++n)
              t.push(Wn.toJSON(i[n]));
          return e
      },
      CreateFromMorphTargetSequence: function(e, t, i, n) {
          for (var r = t.length, o = [], a = 0; r > a; a++) {
              var s = []
                , c = [];
              s.push((a + r - 1) % r, a, (a + 1) % r),
              c.push(0, 1, 0);
              var h = Co.getKeyframeOrder(s)
                , s = Co.sortedArray(s, 1, h)
                , c = Co.sortedArray(c, 1, h);
              n || 0 !== s[0] || (s.push(r),
              c.push(c[0])),
              o.push(new Gn(".morphTargetInfluences[" + t[a].name + "]",s,c).scale(1 / i))
          }
          return new Xn(e,-1,o)
      },
      findByName: function(e, t) {
          var i = e;
          Array.isArray(e) || (i = e.geometry && e.geometry.animations || e.animations);
          for (var n = 0; n < i.length; n++)
              if (i[n].name === t)
                  return i[n];
          return null
      },
      CreateClipsFromMorphTargetSequences: function(e, t, i) {
          for (var n = {}, r = /^([\w-]*?)([\d]+)$/, o = 0, a = e.length; a > o; o++) {
              var s = e[o]
                , c = s.name.match(r);
              if (c && 1 < c.length) {
                  var h = c[1];
                  (c = n[h]) || (n[h] = c = []),
                  c.push(s)
              }
          }
          e = [];
          for (h in n)
              e.push(Xn.CreateFromMorphTargetSequence(h, n[h], t, i));
          return e
      },
      parseAnimation: function(e, t) {
          if (!e)
              return console.error("  no animation in JSONLoader data"),
              null;
          for (var i = function(e, t, i, n, r) {
              if (0 !== i.length) {
                  var o = []
                    , a = [];
                  Co.flattenJSON(i, o, a, n),
                  0 !== o.length && r.push(new e(t,o,a))
              }
          }, n = [], r = e.name || "default", o = e.length || -1, a = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
              var h = s[c].keys;
              if (h && 0 !== h.length)
                  if (h[0].morphTargets) {
                      for (var o = {}, l = 0; l < h.length; l++)
                          if (h[l].morphTargets)
                              for (var u = 0; u < h[l].morphTargets.length; u++)
                                  o[h[l].morphTargets[u]] = -1;
                      for (var p in o) {
                          for (var d = [], f = [], u = 0; u !== h[l].morphTargets.length; ++u) {
                              var m = h[l];
                              d.push(m.time),
                              f.push(m.morphTarget === p ? 1 : 0)
                          }
                          n.push(new Gn(".morphTargetInfluence[" + p + "]",d,f))
                      }
                      o = o.length * (a || 1)
                  } else
                      l = ".bones[" + t[c].name + "]",
                      i(Fn, l + ".position", h, "pos", n),
                      i(Hn, l + ".quaternion", h, "rot", n),
                      i(Fn, l + ".scale", h, "scl", n)
          }
          return 0 === n.length ? null : new Xn(r,o,n)
      }
  }),
  Object.assign(qn.prototype, {
      load: function(e, t, i, n) {
          var r = this;
          new yn(r.manager).load(e, function(e) {
              t(r.parse(JSON.parse(e)))
          }, i, n)
      },
      setTextures: function(e) {
          this.textures = e
      },
      parse: function(e) {
          function t(e) {
              return void 0 === n[e] && console.warn("THREE.MaterialLoader: Undefined texture", e),
              n[e]
          }
          var n = this.textures
            , r = new Ro[e.type];
          if (void 0 !== e.uuid && (r.uuid = e.uuid),
          void 0 !== e.name && (r.name = e.name),
          void 0 !== e.color && r.color.setHex(e.color),
          void 0 !== e.roughness && (r.roughness = e.roughness),
          void 0 !== e.metalness && (r.metalness = e.metalness),
          void 0 !== e.emissive && r.emissive.setHex(e.emissive),
          void 0 !== e.specular && r.specular.setHex(e.specular),
          void 0 !== e.shininess && (r.shininess = e.shininess),
          void 0 !== e.clearCoat && (r.clearCoat = e.clearCoat),
          void 0 !== e.clearCoatRoughness && (r.clearCoatRoughness = e.clearCoatRoughness),
          void 0 !== e.uniforms && (r.uniforms = e.uniforms),
          void 0 !== e.vertexShader && (r.vertexShader = e.vertexShader),
          void 0 !== e.fragmentShader && (r.fragmentShader = e.fragmentShader),
          void 0 !== e.vertexColors && (r.vertexColors = e.vertexColors),
          void 0 !== e.fog && (r.fog = e.fog),
          void 0 !== e.shading && (r.shading = e.shading),
          void 0 !== e.blending && (r.blending = e.blending),
          void 0 !== e.side && (r.side = e.side),
          void 0 !== e.opacity && (r.opacity = e.opacity),
          void 0 !== e.transparent && (r.transparent = e.transparent),
          void 0 !== e.alphaTest && (r.alphaTest = e.alphaTest),
          void 0 !== e.depthTest && (r.depthTest = e.depthTest),
          void 0 !== e.depthWrite && (r.depthWrite = e.depthWrite),
          void 0 !== e.colorWrite && (r.colorWrite = e.colorWrite),
          void 0 !== e.wireframe && (r.wireframe = e.wireframe),
          void 0 !== e.wireframeLinewidth && (r.wireframeLinewidth = e.wireframeLinewidth),
          void 0 !== e.wireframeLinecap && (r.wireframeLinecap = e.wireframeLinecap),
          void 0 !== e.wireframeLinejoin && (r.wireframeLinejoin = e.wireframeLinejoin),
          void 0 !== e.skinning && (r.skinning = e.skinning),
          void 0 !== e.morphTargets && (r.morphTargets = e.morphTargets),
          void 0 !== e.size && (r.size = e.size),
          void 0 !== e.sizeAttenuation && (r.sizeAttenuation = e.sizeAttenuation),
          void 0 !== e.map && (r.map = t(e.map)),
          void 0 !== e.alphaMap && (r.alphaMap = t(e.alphaMap),
          r.transparent = !0),
          void 0 !== e.bumpMap && (r.bumpMap = t(e.bumpMap)),
          void 0 !== e.bumpScale && (r.bumpScale = e.bumpScale),
          void 0 !== e.normalMap && (r.normalMap = t(e.normalMap)),
          void 0 !== e.normalScale) {
              var o = e.normalScale;
              !1 === Array.isArray(o) && (o = [o, o]),
              r.normalScale = (new i).fromArray(o)
          }
          if (void 0 !== e.displacementMap && (r.displacementMap = t(e.displacementMap)),
          void 0 !== e.displacementScale && (r.displacementScale = e.displacementScale),
          void 0 !== e.displacementBias && (r.displacementBias = e.displacementBias),
          void 0 !== e.roughnessMap && (r.roughnessMap = t(e.roughnessMap)),
          void 0 !== e.metalnessMap && (r.metalnessMap = t(e.metalnessMap)),
          void 0 !== e.emissiveMap && (r.emissiveMap = t(e.emissiveMap)),
          void 0 !== e.emissiveIntensity && (r.emissiveIntensity = e.emissiveIntensity),
          void 0 !== e.specularMap && (r.specularMap = t(e.specularMap)),
          void 0 !== e.envMap && (r.envMap = t(e.envMap)),
          void 0 !== e.reflectivity && (r.reflectivity = e.reflectivity),
          void 0 !== e.lightMap && (r.lightMap = t(e.lightMap)),
          void 0 !== e.lightMapIntensity && (r.lightMapIntensity = e.lightMapIntensity),
          void 0 !== e.aoMap && (r.aoMap = t(e.aoMap)),
          void 0 !== e.aoMapIntensity && (r.aoMapIntensity = e.aoMapIntensity),
          void 0 !== e.gradientMap && (r.gradientMap = t(e.gradientMap)),
          void 0 !== e.materials)
              for (var o = 0, a = e.materials.length; a > o; o++)
                  r.materials.push(this.parse(e.materials[o]));
          return r
      }
  }),
  Object.assign(Yn.prototype, {
      load: function(e, t, i, n) {
          var r = this;
          new yn(r.manager).load(e, function(e) {
              t(r.parse(JSON.parse(e)))
          }, i, n)
      },
      parse: function(e) {
          var t = new Et
            , i = e.data.index
            , n = {
              Int8Array: Int8Array,
              Uint8Array: Uint8Array,
              Uint8ClampedArray: Uint8ClampedArray,
              Int16Array: Int16Array,
              Uint16Array: Uint16Array,
              Int32Array: Int32Array,
              Uint32Array: Uint32Array,
              Float32Array: Float32Array,
              Float64Array: Float64Array
          };
          void 0 !== i && (i = new n[i.type](i.array),
          t.setIndex(new lt(i,1)));
          var r, o = e.data.attributes;
          for (r in o) {
              var a = o[r]
                , i = new n[a.type](a.array);
              t.addAttribute(r, new lt(i,a.itemSize,a.normalized))
          }
          if (n = e.data.groups || e.data.drawcalls || e.data.offsets,
          void 0 !== n)
              for (r = 0,
              i = n.length; r !== i; ++r)
                  o = n[r],
                  t.addGroup(o.start, o.count, o.materialIndex);
          return e = e.data.boundingSphere,
          void 0 !== e && (n = new c,
          void 0 !== e.center && n.fromArray(e.center),
          t.boundingSphere = new Q(n,e.radius)),
          t
      }
  }),
  Zn.prototype = {
      constructor: Zn,
      crossOrigin: void 0,
      extractUrlBase: function(e) {
          return e = e.split("/"),
          1 === e.length ? "./" : (e.pop(),
          e.join("/") + "/")
      },
      initMaterials: function(e, t, i) {
          for (var n = [], r = 0; r < e.length; ++r)
              n[r] = this.createMaterial(e[r], t, i);
          return n
      },
      createMaterial: function() {
          var e, t, i, n = {
              NoBlending: 0,
              NormalBlending: 1,
              AdditiveBlending: 2,
              SubtractiveBlending: 3,
              MultiplyBlending: 4,
              CustomBlending: 5
          };
          return function(r, o, a) {
              function s(e, i, n, r, s) {
                  e = o + e;
                  var c = Zn.Handlers.get(e);
                  return null !== c ? e = c.load(e) : (t.setCrossOrigin(a),
                  e = t.load(e)),
                  void 0 !== i && (e.repeat.fromArray(i),
                  1 !== i[0] && (e.wrapS = 1e3),
                  1 !== i[1] && (e.wrapT = 1e3)),
                  void 0 !== n && e.offset.fromArray(n),
                  void 0 !== r && ("repeat" === r[0] && (e.wrapS = 1e3),
                  "mirror" === r[0] && (e.wrapS = 1002),
                  "repeat" === r[1] && (e.wrapT = 1e3),
                  "mirror" === r[1] && (e.wrapT = 1002)),
                  void 0 !== s && (e.anisotropy = s),
                  i = ho.generateUUID(),
                  h[i] = e,
                  i
              }
              void 0 === e && (e = new V),
              void 0 === t && (t = new En),
              void 0 === i && (i = new qn);
              var c, h = {}, l = {
                  uuid: ho.generateUUID(),
                  type: "MeshLambertMaterial"
              };
              for (c in r) {
                  var u = r[c];
                  switch (c) {
                  case "DbgColor":
                  case "DbgIndex":
                  case "opticalDensity":
                  case "illumination":
                      break;
                  case "DbgName":
                      l.name = u;
                      break;
                  case "blending":
                      l.blending = n[u];
                      break;
                  case "colorAmbient":
                  case "mapAmbient":
                      console.warn("THREE.Loader.createMaterial:", c, "is no longer supported.");
                      break;
                  case "colorDiffuse":
                      l.color = e.fromArray(u).getHex();
                      break;
                  case "colorSpecular":
                      l.specular = e.fromArray(u).getHex();
                      break;
                  case "colorEmissive":
                      l.emissive = e.fromArray(u).getHex();
                      break;
                  case "specularCoef":
                      l.shininess = u;
                      break;
                  case "shading":
                      "basic" === u.toLowerCase() && (l.type = "MeshBasicMaterial"),
                      "phong" === u.toLowerCase() && (l.type = "MeshPhongMaterial"),
                      "standard" === u.toLowerCase() && (l.type = "MeshStandardMaterial");
                      break;
                  case "mapDiffuse":
                      l.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                      break;
                  case "mapDiffuseRepeat":
                  case "mapDiffuseOffset":
                  case "mapDiffuseWrap":
                  case "mapDiffuseAnisotropy":
                      break;
                  case "mapEmissive":
                      l.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                      break;
                  case "mapEmissiveRepeat":
                  case "mapEmissiveOffset":
                  case "mapEmissiveWrap":
                  case "mapEmissiveAnisotropy":
                      break;
                  case "mapLight":
                      l.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                      break;
                  case "mapLightRepeat":
                  case "mapLightOffset":
                  case "mapLightWrap":
                  case "mapLightAnisotropy":
                      break;
                  case "mapAO":
                      l.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                      break;
                  case "mapAORepeat":
                  case "mapAOOffset":
                  case "mapAOWrap":
                  case "mapAOAnisotropy":
                      break;
                  case "mapBump":
                      l.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                      break;
                  case "mapBumpScale":
                      l.bumpScale = u;
                      break;
                  case "mapBumpRepeat":
                  case "mapBumpOffset":
                  case "mapBumpWrap":
                  case "mapBumpAnisotropy":
                      break;
                  case "mapNormal":
                      l.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                      break;
                  case "mapNormalFactor":
                      l.normalScale = [u, u];
                      break;
                  case "mapNormalRepeat":
                  case "mapNormalOffset":
                  case "mapNormalWrap":
                  case "mapNormalAnisotropy":
                      break;
                  case "mapSpecular":
                      l.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                      break;
                  case "mapSpecularRepeat":
                  case "mapSpecularOffset":
                  case "mapSpecularWrap":
                  case "mapSpecularAnisotropy":
                      break;
                  case "mapMetalness":
                      l.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                      break;
                  case "mapMetalnessRepeat":
                  case "mapMetalnessOffset":
                  case "mapMetalnessWrap":
                  case "mapMetalnessAnisotropy":
                      break;
                  case "mapRoughness":
                      l.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                      break;
                  case "mapRoughnessRepeat":
                  case "mapRoughnessOffset":
                  case "mapRoughnessWrap":
                  case "mapRoughnessAnisotropy":
                      break;
                  case "mapAlpha":
                      l.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                      break;
                  case "mapAlphaRepeat":
                  case "mapAlphaOffset":
                  case "mapAlphaWrap":
                  case "mapAlphaAnisotropy":
                      break;
                  case "flipSided":
                      l.side = 1;
                      break;
                  case "doubleSided":
                      l.side = 2;
                      break;
                  case "transparency":
                      console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                      l.opacity = u;
                      break;
                  case "depthTest":
                  case "depthWrite":
                  case "colorWrite":
                  case "opacity":
                  case "reflectivity":
                  case "transparent":
                  case "visible":
                  case "wireframe":
                      l[c] = u;
                      break;
                  case "vertexColors":
                      !0 === u && (l.vertexColors = 2),
                      "face" === u && (l.vertexColors = 1);
                      break;
                  default:
                      console.error("THREE.Loader.createMaterial: Unsupported", c, u)
                  }
              }
              return "MeshBasicMaterial" === l.type && delete l.emissive,
              "MeshPhongMaterial" !== l.type && delete l.specular,
              1 > l.opacity && (l.transparent = !0),
              i.setTextures(h),
              i.parse(l)
          }
      }()
  },
  Zn.Handlers = {
      handlers: [],
      add: function(e, t) {
          this.handlers.push(e, t)
      },
      get: function(e) {
          for (var t = this.handlers, i = 0, n = t.length; n > i; i += 2) {
              var r = t[i + 1];
              if (t[i].test(e))
                  return r
          }
          return null
      }
  },
  Object.assign(Jn.prototype, {
      load: function(e, t, i, n) {
          var r = this
            , o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Zn.prototype.extractUrlBase(e)
            , a = new yn(this.manager);
          a.setWithCredentials(this.withCredentials),
          a.load(e, function(i) {
              i = JSON.parse(i);
              var n = i.metadata;
              if (void 0 !== n && (n = n.type,
              void 0 !== n)) {
                  if ("object" === n.toLowerCase())
                      return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                  if ("scene" === n.toLowerCase())
                      return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
              }
              i = r.parse(i, o),
              t(i.geometry, i.materials)
          }, i, n)
      },
      setTexturePath: function(e) {
          this.texturePath = e
      },
      parse: function(e, t) {
          var n = new wt
            , o = void 0 !== e.scale ? 1 / e.scale : 1;
          return function(t) {
              var r, o, a, s, h, l, u, p, d, f, m, g, v, y = e.faces;
              l = e.vertices;
              var x = e.normals
                , b = e.colors
                , _ = 0;
              if (void 0 !== e.uvs) {
                  for (r = 0; r < e.uvs.length; r++)
                      e.uvs[r].length && _++;
                  for (r = 0; _ > r; r++)
                      n.faceVertexUvs[r] = []
              }
              for (s = 0,
              h = l.length; h > s; )
                  r = new c,
                  r.x = l[s++] * t,
                  r.y = l[s++] * t,
                  r.z = l[s++] * t,
                  n.vertices.push(r);
              for (s = 0,
              h = y.length; h > s; )
                  if (t = y[s++],
                  d = 1 & t,
                  a = 2 & t,
                  r = 8 & t,
                  u = 16 & t,
                  f = 32 & t,
                  l = 64 & t,
                  t &= 128,
                  d) {
                      if (d = new ct,
                      d.a = y[s],
                      d.b = y[s + 1],
                      d.c = y[s + 3],
                      m = new ct,
                      m.a = y[s + 1],
                      m.b = y[s + 2],
                      m.c = y[s + 3],
                      s += 4,
                      a && (a = y[s++],
                      d.materialIndex = a,
                      m.materialIndex = a),
                      a = n.faces.length,
                      r)
                          for (r = 0; _ > r; r++)
                              for (g = e.uvs[r],
                              n.faceVertexUvs[r][a] = [],
                              n.faceVertexUvs[r][a + 1] = [],
                              o = 0; 4 > o; o++)
                                  p = y[s++],
                                  v = g[2 * p],
                                  p = g[2 * p + 1],
                                  v = new i(v,p),
                                  2 !== o && n.faceVertexUvs[r][a].push(v),
                                  0 !== o && n.faceVertexUvs[r][a + 1].push(v);
                      if (u && (u = 3 * y[s++],
                      d.normal.set(x[u++], x[u++], x[u]),
                      m.normal.copy(d.normal)),
                      f)
                          for (r = 0; 4 > r; r++)
                              u = 3 * y[s++],
                              f = new c(x[u++],x[u++],x[u]),
                              2 !== r && d.vertexNormals.push(f),
                              0 !== r && m.vertexNormals.push(f);
                      if (l && (l = y[s++],
                      l = b[l],
                      d.color.setHex(l),
                      m.color.setHex(l)),
                      t)
                          for (r = 0; 4 > r; r++)
                              l = y[s++],
                              l = b[l],
                              2 !== r && d.vertexColors.push(new V(l)),
                              0 !== r && m.vertexColors.push(new V(l));
                      n.faces.push(d),
                      n.faces.push(m)
                  } else {
                      if (d = new ct,
                      d.a = y[s++],
                      d.b = y[s++],
                      d.c = y[s++],
                      a && (a = y[s++],
                      d.materialIndex = a),
                      a = n.faces.length,
                      r)
                          for (r = 0; _ > r; r++)
                              for (g = e.uvs[r],
                              n.faceVertexUvs[r][a] = [],
                              o = 0; 3 > o; o++)
                                  p = y[s++],
                                  v = g[2 * p],
                                  p = g[2 * p + 1],
                                  v = new i(v,p),
                                  n.faceVertexUvs[r][a].push(v);
                      if (u && (u = 3 * y[s++],
                      d.normal.set(x[u++], x[u++], x[u])),
                      f)
                          for (r = 0; 3 > r; r++)
                              u = 3 * y[s++],
                              f = new c(x[u++],x[u++],x[u]),
                              d.vertexNormals.push(f);
                      if (l && (l = y[s++],
                      d.color.setHex(b[l])),
                      t)
                          for (r = 0; 3 > r; r++)
                              l = y[s++],
                              d.vertexColors.push(new V(b[l]));
                      n.faces.push(d)
                  }
          }(o),
          function() {
              var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
              if (e.skinWeights)
                  for (var i = 0, o = e.skinWeights.length; o > i; i += t)
                      n.skinWeights.push(new r(e.skinWeights[i],t > 1 ? e.skinWeights[i + 1] : 0,t > 2 ? e.skinWeights[i + 2] : 0,t > 3 ? e.skinWeights[i + 3] : 0));
              if (e.skinIndices)
                  for (i = 0,
                  o = e.skinIndices.length; o > i; i += t)
                      n.skinIndices.push(new r(e.skinIndices[i],t > 1 ? e.skinIndices[i + 1] : 0,t > 2 ? e.skinIndices[i + 2] : 0,t > 3 ? e.skinIndices[i + 3] : 0));
              n.bones = e.bones,
              n.bones && 0 < n.bones.length && (n.skinWeights.length !== n.skinIndices.length || n.skinIndices.length !== n.vertices.length) && console.warn("When skinning, number of vertices (" + n.vertices.length + "), skinIndices (" + n.skinIndices.length + "), and skinWeights (" + n.skinWeights.length + ") should match.")
          }(),
          function(t) {
              if (void 0 !== e.morphTargets)
                  for (var i = 0, r = e.morphTargets.length; r > i; i++) {
                      n.morphTargets[i] = {},
                      n.morphTargets[i].name = e.morphTargets[i].name,
                      n.morphTargets[i].vertices = [];
                      for (var o = n.morphTargets[i].vertices, a = e.morphTargets[i].vertices, s = 0, h = a.length; h > s; s += 3) {
                          var l = new c;
                          l.x = a[s] * t,
                          l.y = a[s + 1] * t,
                          l.z = a[s + 2] * t,
                          o.push(l)
                      }
                  }
              if (void 0 !== e.morphColors && 0 < e.morphColors.length)
                  for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
                  t = n.faces,
                  o = e.morphColors[0].colors,
                  i = 0,
                  r = t.length; r > i; i++)
                      t[i].color.fromArray(o, 3 * i)
          }(o),
          function() {
              var t = []
                , i = [];
              void 0 !== e.animation && i.push(e.animation),
              void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
              for (var r = 0; r < i.length; r++) {
                  var o = Xn.parseAnimation(i[r], n.bones);
                  o && t.push(o)
              }
              n.morphTargets && (i = Xn.CreateClipsFromMorphTargetSequences(n.morphTargets, 10),
              t = t.concat(i)),
              0 < t.length && (n.animations = t)
          }(),
          n.computeFaceNormals(),
          n.computeBoundingSphere(),
          void 0 === e.materials || 0 === e.materials.length ? {
              geometry: n
          } : (o = Zn.prototype.initMaterials(e.materials, t, this.crossOrigin),
          {
              geometry: n,
              materials: o
          })
      }
  }),
  Object.assign(Qn.prototype, {
      load: function(e, t, i, n) {
          "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
          var r = this;
          new yn(r.manager).load(e, function(i) {
              var o = null;
              try {
                  o = JSON.parse(i)
              } catch (a) {
                  return void 0 !== n && n(a),
                  void console.error("THREE:ObjectLoader: Can't parse " + e + ".", a.message)
              }
              i = o.metadata,
              void 0 === i || void 0 === i.type || "geometry" === i.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + e + ". Use THREE.JSONLoader instead.") : r.parse(o, t)
          }, i, n)
      },
      setTexturePath: function(e) {
          this.texturePath = e
      },
      setCrossOrigin: function(e) {
          this.crossOrigin = e
      },
      parse: function(e, t) {
          var i = this.parseGeometries(e.geometries)
            , n = this.parseImages(e.images, function() {
              void 0 !== t && t(r)
          })
            , n = this.parseTextures(e.textures, n)
            , n = this.parseMaterials(e.materials, n)
            , r = this.parseObject(e.object, i, n);
          return e.animations && (r.animations = this.parseAnimations(e.animations)),
          void 0 !== e.images && 0 !== e.images.length || void 0 === t || t(r),
          r
      },
      parseGeometries: function(e) {
          var t = {};
          if (void 0 !== e)
              for (var i = new Jn, n = new Yn, r = 0, o = e.length; o > r; r++) {
                  var a, s = e[r];
                  switch (s.type) {
                  case "PlaneGeometry":
                  case "PlaneBufferGeometry":
                      a = new Ao[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                      break;
                  case "BoxGeometry":
                  case "BoxBufferGeometry":
                  case "CubeGeometry":
                      a = new Ao[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                      break;
                  case "CircleGeometry":
                  case "CircleBufferGeometry":
                      a = new Ao[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                      break;
                  case "CylinderGeometry":
                  case "CylinderBufferGeometry":
                      a = new Ao[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                      break;
                  case "ConeGeometry":
                  case "ConeBufferGeometry":
                      a = new Ao[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                      break;
                  case "SphereGeometry":
                  case "SphereBufferGeometry":
                      a = new Ao[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                      break;
                  case "DodecahedronGeometry":
                  case "IcosahedronGeometry":
                  case "OctahedronGeometry":
                  case "TetrahedronGeometry":
                      a = new Ao[s.type](s.radius,s.detail);
                      break;
                  case "RingGeometry":
                  case "RingBufferGeometry":
                      a = new Ao[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                      break;
                  case "TorusGeometry":
                  case "TorusBufferGeometry":
                      a = new Ao[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                      break;
                  case "TorusKnotGeometry":
                  case "TorusKnotBufferGeometry":
                      a = new Ao[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                      break;
                  case "LatheGeometry":
                  case "LatheBufferGeometry":
                      a = new Ao[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                      break;
                  case "BufferGeometry":
                      a = n.parse(s);
                      break;
                  case "Geometry":
                      a = i.parse(s.data, this.texturePath).geometry;
                      break;
                  default:
                      console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                      continue
                  }
                  a.uuid = s.uuid,
                  void 0 !== s.name && (a.name = s.name),
                  t[s.uuid] = a
              }
          return t
      },
      parseMaterials: function(e, t) {
          var i = {};
          if (void 0 !== e) {
              var n = new qn;
              n.setTextures(t);
              for (var r = 0, o = e.length; o > r; r++) {
                  var a = n.parse(e[r]);
                  i[a.uuid] = a
              }
          }
          return i
      },
      parseAnimations: function(e) {
          for (var t = [], i = 0; i < e.length; i++) {
              var n = Xn.parse(e[i]);
              t.push(n)
          }
          return t
      },
      parseImages: function(e, t) {
          function i(e) {
              return n.manager.itemStart(e),
              a.load(e, function() {
                  n.manager.itemEnd(e)
              }, void 0, function() {
                  n.manager.itemError(e)
              })
          }
          var n = this
            , r = {};
          if (void 0 !== e && 0 < e.length) {
              var o = new vn(t)
                , a = new _n(o);
              a.setCrossOrigin(this.crossOrigin);
              for (var o = 0, s = e.length; s > o; o++) {
                  var c = e[o]
                    , h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
                  r[c.uuid] = i(h)
              }
          }
          return r
      },
      parseTextures: function(e, t) {
          function i(e, t) {
              return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e),
              t[e])
          }
          var r = {
              UVMapping: 300,
              CubeReflectionMapping: 301,
              CubeRefractionMapping: 302,
              EquirectangularReflectionMapping: 303,
              EquirectangularRefractionMapping: 304,
              SphericalReflectionMapping: 305,
              CubeUVReflectionMapping: 306,
              CubeUVRefractionMapping: 307
          }
            , o = {
              RepeatWrapping: 1e3,
              ClampToEdgeWrapping: 1001,
              MirroredRepeatWrapping: 1002
          }
            , a = {
              NearestFilter: 1003,
              NearestMipMapNearestFilter: 1004,
              NearestMipMapLinearFilter: 1005,
              LinearFilter: 1006,
              LinearMipMapNearestFilter: 1007,
              LinearMipMapLinearFilter: 1008
          }
            , s = {};
          if (void 0 !== e)
              for (var c = 0, h = e.length; h > c; c++) {
                  var l = e[c];
                  void 0 === l.image && console.warn('THREE.ObjectLoader: No "image" specified for', l.uuid),
                  void 0 === t[l.image] && console.warn("THREE.ObjectLoader: Undefined image", l.image);
                  var u = new n(t[l.image]);
                  u.needsUpdate = !0,
                  u.uuid = l.uuid,
                  void 0 !== l.name && (u.name = l.name),
                  void 0 !== l.mapping && (u.mapping = i(l.mapping, r)),
                  void 0 !== l.offset && u.offset.fromArray(l.offset),
                  void 0 !== l.repeat && u.repeat.fromArray(l.repeat),
                  void 0 !== l.wrap && (u.wrapS = i(l.wrap[0], o),
                  u.wrapT = i(l.wrap[1], o)),
                  void 0 !== l.minFilter && (u.minFilter = i(l.minFilter, a)),
                  void 0 !== l.magFilter && (u.magFilter = i(l.magFilter, a)),
                  void 0 !== l.anisotropy && (u.anisotropy = l.anisotropy),
                  void 0 !== l.flipY && (u.flipY = l.flipY),
                  s[l.uuid] = u
              }
          return s
      },
      parseObject: function() {
          var e = new h;
          return function(t, i, n) {
              function r(e) {
                  return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e),
                  i[e]
              }
              function o(e) {
                  return void 0 !== e ? (void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e),
                  n[e]) : void 0
              }
              var a;
              switch (t.type) {
              case "Scene":
                  a = new ai,
                  void 0 !== t.background && Number.isInteger(t.background) && (a.background = new V(t.background)),
                  void 0 !== t.fog && ("Fog" === t.fog.type ? a.fog = new oi(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (a.fog = new ri(t.fog.color,t.fog.density)));
                  break;
              case "PerspectiveCamera":
                  a = new Pt(t.fov,t.aspect,t.near,t.far),
                  void 0 !== t.focus && (a.focus = t.focus),
                  void 0 !== t.zoom && (a.zoom = t.zoom),
                  void 0 !== t.filmGauge && (a.filmGauge = t.filmGauge),
                  void 0 !== t.filmOffset && (a.filmOffset = t.filmOffset),
                  void 0 !== t.view && (a.view = Object.assign({}, t.view));
                  break;
              case "OrthographicCamera":
                  a = new Ct(t.left,t.right,t.top,t.bottom,t.near,t.far);
                  break;
              case "AmbientLight":
                  a = new In(t.color,t.intensity);
                  break;
              case "DirectionalLight":
                  a = new Cn(t.color,t.intensity);
                  break;
              case "PointLight":
                  a = new Ln(t.color,t.intensity,t.distance,t.decay);
                  break;
              case "SpotLight":
                  a = new Rn(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                  break;
              case "HemisphereLight":
                  a = new Tn(t.color,t.groundColor,t.intensity);
                  break;
              case "Mesh":
                  a = r(t.geometry);
                  var s = o(t.material);
                  a = a.bones && 0 < a.bones.length ? new di(a,s) : new Mt(a,s);
                  break;
              case "LOD":
                  a = new li;
                  break;
              case "Line":
                  a = new mi(r(t.geometry),o(t.material),t.mode);
                  break;
              case "LineSegments":
                  a = new gi(r(t.geometry),o(t.material));
                  break;
              case "PointCloud":
              case "Points":
                  a = new yi(r(t.geometry),o(t.material));
                  break;
              case "Sprite":
                  a = new hi(o(t.material));
                  break;
              case "Group":
                  a = new xi;
                  break;
              case "SkinnedMesh":
                  console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");
              default:
                  a = new ot
              }
              if (a.uuid = t.uuid,
              void 0 !== t.name && (a.name = t.name),
              void 0 !== t.matrix ? (e.fromArray(t.matrix),
              e.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position),
              void 0 !== t.rotation && a.rotation.fromArray(t.rotation),
              void 0 !== t.quaternion && a.quaternion.fromArray(t.quaternion),
              void 0 !== t.scale && a.scale.fromArray(t.scale)),
              void 0 !== t.castShadow && (a.castShadow = t.castShadow),
              void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow),
              t.shadow && (void 0 !== t.shadow.bias && (a.shadow.bias = t.shadow.bias),
              void 0 !== t.shadow.radius && (a.shadow.radius = t.shadow.radius),
              void 0 !== t.shadow.mapSize && a.shadow.mapSize.fromArray(t.shadow.mapSize),
              void 0 !== t.shadow.camera && (a.shadow.camera = this.parseObject(t.shadow.camera))),
              void 0 !== t.visible && (a.visible = t.visible),
              void 0 !== t.userData && (a.userData = t.userData),
              void 0 !== t.children)
                  for (var c in t.children)
                      a.add(this.parseObject(t.children[c], i, n));
              if ("LOD" === t.type)
                  for (t = t.levels,
                  s = 0; s < t.length; s++) {
                      var h = t[s];
                      c = a.getObjectByProperty("uuid", h.object),
                      void 0 !== c && a.addLevel(c, h.distance)
                  }
              return a
          }
      }()
  }),
  tr.prototype = {
      constructor: tr,
      getPoint: function() {
          return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
          null
      },
      getPointAt: function(e) {
          return e = this.getUtoTmapping(e),
          this.getPoint(e)
      },
      getPoints: function(e) {
          isNaN(e) && (e = 5);
          for (var t = [], i = 0; e >= i; i++)
              t.push(this.getPoint(i / e));
          return t
      },
      getSpacedPoints: function(e) {
          isNaN(e) && (e = 5);
          for (var t = [], i = 0; e >= i; i++)
              t.push(this.getPointAt(i / e));
          return t
      },
      getLength: function() {
          var e = this.getLengths();
          return e[e.length - 1]
      },
      getLengths: function(e) {
          if (isNaN(e) && (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
          this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
              return this.cacheArcLengths;
          this.needsUpdate = !1;
          var t, i, n = [], r = this.getPoint(0), o = 0;
          for (n.push(0),
          i = 1; e >= i; i++)
              t = this.getPoint(i / e),
              o += t.distanceTo(r),
              n.push(o),
              r = t;
          return this.cacheArcLengths = n
      },
      updateArcLengths: function() {
          this.needsUpdate = !0,
          this.getLengths()
      },
      getUtoTmapping: function(e, t) {
          var i, n, r = this.getLengths(), o = r.length;
          n = t ? t : e * r[o - 1];
          for (var a, s = 0, c = o - 1; c >= s; )
              if (i = Math.floor(s + (c - s) / 2),
              a = r[i] - n,
              0 > a)
                  s = i + 1;
              else {
                  if (!(a > 0)) {
                      c = i;
                      break
                  }
                  c = i - 1
              }
          return i = c,
          r[i] === n ? i / (o - 1) : (s = r[i],
          (i + (n - s) / (r[i + 1] - s)) / (o - 1))
      },
      getTangent: function(e) {
          var t = e - 1e-4;
          return e += 1e-4,
          0 > t && (t = 0),
          e > 1 && (e = 1),
          t = this.getPoint(t),
          this.getPoint(e).clone().sub(t).normalize()
      },
      getTangentAt: function(e) {
          return e = this.getUtoTmapping(e),
          this.getTangent(e)
      },
      computeFrenetFrames: function(e, t) {
          var i, n, r = new c, o = [], a = [], s = [], l = new c, u = new h;
          for (i = 0; e >= i; i++)
              n = i / e,
              o[i] = this.getTangentAt(n),
              o[i].normalize();
          a[0] = new c,
          s[0] = new c,
          i = Number.MAX_VALUE,
          n = Math.abs(o[0].x);
          var p = Math.abs(o[0].y)
            , d = Math.abs(o[0].z);
          for (i >= n && (i = n,
          r.set(1, 0, 0)),
          i >= p && (i = p,
          r.set(0, 1, 0)),
          i >= d && r.set(0, 0, 1),
          l.crossVectors(o[0], r).normalize(),
          a[0].crossVectors(o[0], l),
          s[0].crossVectors(o[0], a[0]),
          i = 1; e >= i; i++)
              a[i] = a[i - 1].clone(),
              s[i] = s[i - 1].clone(),
              l.crossVectors(o[i - 1], o[i]),
              l.length() > Number.EPSILON && (l.normalize(),
              r = Math.acos(ho.clamp(o[i - 1].dot(o[i]), -1, 1)),
              a[i].applyMatrix4(u.makeRotationAxis(l, r))),
              s[i].crossVectors(o[i], a[i]);
          if (!0 === t)
              for (r = Math.acos(ho.clamp(a[0].dot(a[e]), -1, 1)),
              r /= e,
              0 < o[0].dot(l.crossVectors(a[0], a[e])) && (r = -r),
              i = 1; e >= i; i++)
                  a[i].applyMatrix4(u.makeRotationAxis(o[i], r * i)),
                  s[i].crossVectors(o[i], a[i]);
          return {
              tangents: o,
              normals: a,
              binormals: s
          }
      }
  },
  ir.prototype = Object.create(tr.prototype),
  ir.prototype.constructor = ir,
  ir.prototype.isLineCurve = !0,
  ir.prototype.getPoint = function(e) {
      if (1 === e)
          return this.v2.clone();
      var t = this.v2.clone().sub(this.v1);
      return t.multiplyScalar(e).add(this.v1),
      t
  }
  ,
  ir.prototype.getPointAt = function(e) {
      return this.getPoint(e)
  }
  ,
  ir.prototype.getTangent = function() {
      return this.v2.clone().sub(this.v1).normalize()
  }
  ,
  nr.prototype = Object.assign(Object.create(tr.prototype), {
      constructor: nr,
      add: function(e) {
          this.curves.push(e)
      },
      closePath: function() {
          var e = this.curves[0].getPoint(0)
            , t = this.curves[this.curves.length - 1].getPoint(1);
          e.equals(t) || this.curves.push(new ir(t,e))
      },
      getPoint: function(e) {
          var t = e * this.getLength()
            , i = this.getCurveLengths();
          for (e = 0; e < i.length; ) {
              if (i[e] >= t)
                  return t = i[e] - t,
                  e = this.curves[e],
                  i = e.getLength(),
                  e.getPointAt(0 === i ? 0 : 1 - t / i);
              e++
          }
          return null
      },
      getLength: function() {
          var e = this.getCurveLengths();
          return e[e.length - 1]
      },
      updateArcLengths: function() {
          this.needsUpdate = !0,
          this.cacheLengths = null,
          this.getLengths()
      },
      getCurveLengths: function() {
          if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
              return this.cacheLengths;
          for (var e = [], t = 0, i = 0, n = this.curves.length; n > i; i++)
              t += this.curves[i].getLength(),
              e.push(t);
          return this.cacheLengths = e
      },
      getSpacedPoints: function(e) {
          isNaN(e) && (e = 40);
          for (var t = [], i = 0; e >= i; i++)
              t.push(this.getPoint(i / e));
          return this.autoClose && t.push(t[0]),
          t
      },
      getPoints: function(e) {
          e = e || 12;
          for (var t, i = [], n = 0, r = this.curves; n < r.length; n++)
              for (var o = r[n], o = o.getPoints(o && o.isEllipseCurve ? 2 * e : o && o.isLineCurve ? 1 : o && o.isSplineCurve ? e * o.points.length : e), a = 0; a < o.length; a++) {
                  var s = o[a];
                  t && t.equals(s) || (i.push(s),
                  t = s)
              }
          return this.autoClose && 1 < i.length && !i[i.length - 1].equals(i[0]) && i.push(i[0]),
          i
      },
      createPointsGeometry: function(e) {
          return e = this.getPoints(e),
          this.createGeometry(e)
      },
      createSpacedPointsGeometry: function(e) {
          return e = this.getSpacedPoints(e),
          this.createGeometry(e)
      },
      createGeometry: function(e) {
          for (var t = new wt, i = 0, n = e.length; n > i; i++) {
              var r = e[i];
              t.vertices.push(new c(r.x,r.y,r.z || 0))
          }
          return t
      }
  }),
  rr.prototype = Object.create(tr.prototype),
  rr.prototype.constructor = rr,
  rr.prototype.isEllipseCurve = !0,
  rr.prototype.getPoint = function(e) {
      for (var t = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; 0 > n; )
          n += t;
      for (; n > t; )
          n -= t;
      n < Number.EPSILON && (n = r ? 0 : t),
      !0 !== this.aClockwise || r || (n = n === t ? -t : n - t),
      t = this.aStartAngle + e * n,
      e = this.aX + this.xRadius * Math.cos(t);
      var o = this.aY + this.yRadius * Math.sin(t);
      return 0 !== this.aRotation && (t = Math.cos(this.aRotation),
      n = Math.sin(this.aRotation),
      r = e - this.aX,
      o -= this.aY,
      e = r * t - o * n + this.aX,
      o = r * n + o * t + this.aY),
      new i(e,o)
  }
  ,
  or.prototype = Object.create(tr.prototype),
  or.prototype.constructor = or,
  or.prototype.isSplineCurve = !0,
  or.prototype.getPoint = function(e) {
      var t = this.points
        , n = (t.length - 1) * e;
      e = Math.floor(n);
      var n = n - e
        , r = t[0 === e ? e : e - 1]
        , o = t[e]
        , a = t[e > t.length - 2 ? t.length - 1 : e + 1]
        , t = t[e > t.length - 3 ? t.length - 1 : e + 2];
      return new i(Kn(n, r.x, o.x, a.x, t.x),Kn(n, r.y, o.y, a.y, t.y))
  }
  ,
  ar.prototype = Object.create(tr.prototype),
  ar.prototype.constructor = ar,
  ar.prototype.getPoint = function(e) {
      var t = this.v0
        , n = this.v1
        , r = this.v2
        , o = this.v3;
      return new i(er(e, t.x, n.x, r.x, o.x),er(e, t.y, n.y, r.y, o.y))
  }
  ,
  sr.prototype = Object.create(tr.prototype),
  sr.prototype.constructor = sr,
  sr.prototype.getPoint = function(e) {
      var t = this.v0
        , n = this.v1
        , r = this.v2;
      return new i($n(e, t.x, n.x, r.x),$n(e, t.y, n.y, r.y))
  }
  ;
  var Uo = Object.assign(Object.create(nr.prototype), {
      fromPoints: function(e) {
          this.moveTo(e[0].x, e[0].y);
          for (var t = 1, i = e.length; i > t; t++)
              this.lineTo(e[t].x, e[t].y)
      },
      moveTo: function(e, t) {
          this.currentPoint.set(e, t)
      },
      lineTo: function(e, t) {
          var n = new ir(this.currentPoint.clone(),new i(e,t));
          this.curves.push(n),
          this.currentPoint.set(e, t)
      },
      quadraticCurveTo: function(e, t, n, r) {
          e = new sr(this.currentPoint.clone(),new i(e,t),new i(n,r)),
          this.curves.push(e),
          this.currentPoint.set(n, r)
      },
      bezierCurveTo: function(e, t, n, r, o, a) {
          e = new ar(this.currentPoint.clone(),new i(e,t),new i(n,r),new i(o,a)),
          this.curves.push(e),
          this.currentPoint.set(o, a)
      },
      splineThru: function(e) {
          var t = [this.currentPoint.clone()].concat(e)
            , t = new or(t);
          this.curves.push(t),
          this.currentPoint.copy(e[e.length - 1])
      },
      arc: function(e, t, i, n, r, o) {
          this.absarc(e + this.currentPoint.x, t + this.currentPoint.y, i, n, r, o)
      },
      absarc: function(e, t, i, n, r, o) {
          this.absellipse(e, t, i, i, n, r, o)
      },
      ellipse: function(e, t, i, n, r, o, a, s) {
          this.absellipse(e + this.currentPoint.x, t + this.currentPoint.y, i, n, r, o, a, s)
      },
      absellipse: function(e, t, i, n, r, o, a, s) {
          e = new rr(e,t,i,n,r,o,a,s),
          0 < this.curves.length && (t = e.getPoint(0),
          t.equals(this.currentPoint) || this.lineTo(t.x, t.y)),
          this.curves.push(e),
          e = e.getPoint(1),
          this.currentPoint.copy(e)
      }
  });
  cr.prototype = Uo,
  Uo.constructor = cr,
  hr.prototype = Object.assign(Object.create(Uo), {
      constructor: hr,
      getPointsHoles: function(e) {
          for (var t = [], i = 0, n = this.holes.length; n > i; i++)
              t[i] = this.holes[i].getPoints(e);
          return t
      },
      extractAllPoints: function(e) {
          return {
              shape: this.getPoints(e),
              holes: this.getPointsHoles(e)
          }
      },
      extractPoints: function(e) {
          return this.extractAllPoints(e)
      }
  }),
  lr.prototype = {
      moveTo: function(e, t) {
          this.currentPath = new cr,
          this.subPaths.push(this.currentPath),
          this.currentPath.moveTo(e, t)
      },
      lineTo: function(e, t) {
          this.currentPath.lineTo(e, t)
      },
      quadraticCurveTo: function(e, t, i, n) {
          this.currentPath.quadraticCurveTo(e, t, i, n)
      },
      bezierCurveTo: function(e, t, i, n, r, o) {
          this.currentPath.bezierCurveTo(e, t, i, n, r, o)
      },
      splineThru: function(e) {
          this.currentPath.splineThru(e)
      },
      toShapes: function(e, t) {
          function i(e) {
              for (var t = [], i = 0, n = e.length; n > i; i++) {
                  var r = e[i]
                    , o = new hr;
                  o.curves = r.curves,
                  t.push(o)
              }
              return t
          }
          function n(e, t) {
              for (var i = t.length, n = !1, r = i - 1, o = 0; i > o; r = o++) {
                  var a = t[r]
                    , s = t[o]
                    , c = s.x - a.x
                    , h = s.y - a.y;
                  if (Math.abs(h) > Number.EPSILON) {
                      if (0 > h && (a = t[o],
                      c = -c,
                      s = t[r],
                      h = -h),
                      !(e.y < a.y || e.y > s.y))
                          if (e.y === a.y) {
                              if (e.x === a.x)
                                  return !0
                          } else {
                              if (r = h * (e.x - a.x) - c * (e.y - a.y),
                              0 === r)
                                  return !0;
                              0 > r || (n = !n)
                          }
                  } else if (e.y === a.y && (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x))
                      return !0
              }
              return n
          }
          var r = So.isClockWise
            , o = this.subPaths;
          if (0 === o.length)
              return [];
          if (!0 === t)
              return i(o);
          var a, s, c, h = [];
          if (1 === o.length)
              return s = o[0],
              c = new hr,
              c.curves = s.curves,
              h.push(c),
              h;
          var l = !r(o[0].getPoints())
            , l = e ? !l : l;
          c = [];
          var u, p = [], d = [], f = 0;
          p[f] = void 0,
          d[f] = [];
          for (var m = 0, g = o.length; g > m; m++)
              s = o[m],
              u = s.getPoints(),
              a = r(u),
              (a = e ? !a : a) ? (!l && p[f] && f++,
              p[f] = {
                  s: new hr,
                  p: u
              },
              p[f].s.curves = s.curves,
              l && f++,
              d[f] = []) : d[f].push({
                  h: s,
                  p: u[0]
              });
          if (!p[0])
              return i(o);
          if (1 < p.length) {
              for (m = !1,
              s = [],
              r = 0,
              o = p.length; o > r; r++)
                  c[r] = [];
              for (r = 0,
              o = p.length; o > r; r++)
                  for (a = d[r],
                  l = 0; l < a.length; l++) {
                      for (f = a[l],
                      u = !0,
                      g = 0; g < p.length; g++)
                          n(f.p, p[g].p) && (r !== g && s.push({
                              froms: r,
                              tos: g,
                              hole: l
                          }),
                          u ? (u = !1,
                          c[g].push(f)) : m = !0);
                      u && c[r].push(f)
                  }
              0 < s.length && (m || (d = c))
          }
          for (m = 0,
          r = p.length; r > m; m++)
              for (c = p[m].s,
              h.push(c),
              s = d[m],
              o = 0,
              a = s.length; a > o; o++)
                  c.holes.push(s[o].h);
          return h
      }
  },
  Object.assign(ur.prototype, {
      isFont: !0,
      generateShapes: function(e, t, i) {
          void 0 === t && (t = 100),
          void 0 === i && (i = 4);
          var n = this.data;
          e = String(e).split("");
          var r = t / n.resolution
            , o = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r
            , a = 0
            , s = 0;
          t = [];
          for (var c = 0; c < e.length; c++) {
              var h = e[c];
              if ("\n" === h)
                  a = 0,
                  s -= o;
              else {
                  var l;
                  l = r;
                  var u = a
                    , p = s;
                  if (h = n.glyphs[h] || n.glyphs["?"]) {
                      var d, f, m, g, v, y, x, b, _ = new lr, w = [];
                      if (h.o)
                          for (var E = h._cachedOutline || (h._cachedOutline = h.o.split(" ")), M = 0, T = E.length; T > M; )
                              switch (E[M++]) {
                              case "m":
                                  d = E[M++] * l + u,
                                  f = E[M++] * l + p,
                                  _.moveTo(d, f);
                                  break;
                              case "l":
                                  d = E[M++] * l + u,
                                  f = E[M++] * l + p,
                                  _.lineTo(d, f);
                                  break;
                              case "q":
                                  if (d = E[M++] * l + u,
                                  f = E[M++] * l + p,
                                  v = E[M++] * l + u,
                                  y = E[M++] * l + p,
                                  _.quadraticCurveTo(v, y, d, f),
                                  g = w[w.length - 1]) {
                                      m = g.x,
                                      g = g.y;
                                      for (var S = 1; i >= S; S++) {
                                          var A = S / i;
                                          $n(A, m, v, d),
                                          $n(A, g, y, f)
                                      }
                                  }
                                  break;
                              case "b":
                                  if (d = E[M++] * l + u,
                                  f = E[M++] * l + p,
                                  v = E[M++] * l + u,
                                  y = E[M++] * l + p,
                                  x = E[M++] * l + u,
                                  b = E[M++] * l + p,
                                  _.bezierCurveTo(v, y, x, b, d, f),
                                  g = w[w.length - 1])
                                      for (m = g.x,
                                      g = g.y,
                                      S = 1; i >= S; S++)
                                          A = S / i,
                                          er(A, m, v, x, d),
                                          er(A, g, y, b, f)
                              }
                      l = {
                          offsetX: h.ha * l,
                          path: _
                      }
                  } else
                      l = void 0;
                  a += l.offsetX,
                  t.push(l.path)
              }
          }
          for (i = [],
          n = 0,
          e = t.length; e > n; n++)
              Array.prototype.push.apply(i, t[n].toShapes());
          return i
      }
  }),
  Object.assign(pr.prototype, {
      load: function(e, t, i, n) {
          var r = this;
          new yn(this.manager).load(e, function(e) {
              var i;
              try {
                  i = JSON.parse(e)
              } catch (n) {
                  console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                  i = JSON.parse(e.substring(65, e.length - 2))
              }
              e = r.parse(i),
              t && t(e)
          }, i, n)
      },
      parse: function(e) {
          return new ur(e)
      }
  });
  var No, Do = {
      getContext: function() {
          return void 0 === No && (No = new (window.AudioContext || window.webkitAudioContext)),
          No
      },
      setContext: function(e) {
          No = e
      }
  };
  Object.assign(dr.prototype, {
      load: function(e, t, i, n) {
          var r = new yn(this.manager);
          r.setResponseType("arraybuffer"),
          r.load(e, function(e) {
              Do.getContext().decodeAudioData(e, function(e) {
                  t(e)
              })
          }, i, n)
      }
  }),
  fr.prototype = Object.assign(Object.create(Mn.prototype), {
      constructor: fr,
      isRectAreaLight: !0,
      copy: function(e) {
          return Mn.prototype.copy.call(this, e),
          this.width = e.width,
          this.height = e.height,
          this
      }
  }),
  Object.assign(mr.prototype, {
      update: function() {
          var e, t, i, n, r, o, a, s = new h, c = new h;
          return function(h) {
              if (e !== this || t !== h.focus || i !== h.fov || n !== h.aspect * this.aspect || r !== h.near || o !== h.far || a !== h.zoom) {
                  e = this,
                  t = h.focus,
                  i = h.fov,
                  n = h.aspect * this.aspect,
                  r = h.near,
                  o = h.far,
                  a = h.zoom;
                  var l, u = h.projectionMatrix.clone(), p = this.eyeSep / 2, d = p * r / t, f = r * Math.tan(ho.DEG2RAD * i * .5) / a;
                  c.elements[12] = -p,
                  s.elements[12] = p,
                  p = -f * n + d,
                  l = f * n + d,
                  u.elements[0] = 2 * r / (l - p),
                  u.elements[8] = (l + p) / (l - p),
                  this.cameraL.projectionMatrix.copy(u),
                  p = -f * n - d,
                  l = f * n - d,
                  u.elements[0] = 2 * r / (l - p),
                  u.elements[8] = (l + p) / (l - p),
                  this.cameraR.projectionMatrix.copy(u)
              }
              this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(c),
              this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(s)
          }
      }()
  }),
  gr.prototype = Object.create(ot.prototype),
  gr.prototype.constructor = gr,
  vr.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: vr,
      getInput: function() {
          return this.gain
      },
      removeFilter: function() {
          null !== this.filter && (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination),
          this.gain.connect(this.context.destination),
          this.filter = null)
      },
      getFilter: function() {
          return this.filter
      },
      setFilter: function(e) {
          null !== this.filter ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
          this.filter = e,
          this.gain.connect(this.filter),
          this.filter.connect(this.context.destination)
      },
      getMasterVolume: function() {
          return this.gain.gain.value
      },
      setMasterVolume: function(e) {
          this.gain.gain.value = e
      },
      updateMatrixWorld: function() {
          var e = new c
            , t = new s
            , i = new c
            , n = new c;
          return function(r) {
              ot.prototype.updateMatrixWorld.call(this, r),
              r = this.context.listener;
              var o = this.up;
              this.matrixWorld.decompose(e, t, i),
              n.set(0, 0, -1).applyQuaternion(t),
              r.positionX ? (r.positionX.setValueAtTime(e.x, this.context.currentTime),
              r.positionY.setValueAtTime(e.y, this.context.currentTime),
              r.positionZ.setValueAtTime(e.z, this.context.currentTime),
              r.forwardX.setValueAtTime(n.x, this.context.currentTime),
              r.forwardY.setValueAtTime(n.y, this.context.currentTime),
              r.forwardZ.setValueAtTime(n.z, this.context.currentTime),
              r.upX.setValueAtTime(o.x, this.context.currentTime),
              r.upY.setValueAtTime(o.y, this.context.currentTime),
              r.upZ.setValueAtTime(o.z, this.context.currentTime)) : (r.setPosition(e.x, e.y, e.z),
              r.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z))
          }
      }()
  }),
  yr.prototype = Object.assign(Object.create(ot.prototype), {
      constructor: yr,
      getOutput: function() {
          return this.gain
      },
      setNodeSource: function(e) {
          return this.hasPlaybackControl = !1,
          this.sourceType = "audioNode",
          this.source = e,
          this.connect(),
          this
      },
      setBuffer: function(e) {
          return this.buffer = e,
          this.sourceType = "buffer",
          this.autoplay && this.play(),
          this
      },
      play: function() {
          if (!0 === this.isPlaying)
              console.warn("THREE.Audio: Audio is already playing.");
          else {
              if (!1 !== this.hasPlaybackControl) {
                  var e = this.context.createBufferSource();
                  return e.buffer = this.buffer,
                  e.loop = this.loop,
                  e.onended = this.onEnded.bind(this),
                  e.playbackRate.setValueAtTime(this.playbackRate, this.startTime),
                  e.start(0, this.startTime),
                  this.isPlaying = !0,
                  this.source = e,
                  this.connect()
              }
              console.warn("THREE.Audio: this Audio has no playback control.")
          }
      },
      pause: function() {
          return !1 !== this.hasPlaybackControl ? (this.source.stop(),
          this.startTime = this.context.currentTime,
          this.isPlaying = !1,
          this) : void console.warn("THREE.Audio: this Audio has no playback control.")
      },
      stop: function() {
          return !1 !== this.hasPlaybackControl ? (this.source.stop(),
          this.startTime = 0,
          this.isPlaying = !1,
          this) : void console.warn("THREE.Audio: this Audio has no playback control.")
      },
      connect: function() {
          if (0 < this.filters.length) {
              this.source.connect(this.filters[0]);
              for (var e = 1, t = this.filters.length; t > e; e++)
                  this.filters[e - 1].connect(this.filters[e]);
              this.filters[this.filters.length - 1].connect(this.getOutput())
          } else
              this.source.connect(this.getOutput());
          return this
      },
      disconnect: function() {
          if (0 < this.filters.length) {
              this.source.disconnect(this.filters[0]);
              for (var e = 1, t = this.filters.length; t > e; e++)
                  this.filters[e - 1].disconnect(this.filters[e]);
              this.filters[this.filters.length - 1].disconnect(this.getOutput())
          } else
              this.source.disconnect(this.getOutput());
          return this
      },
      getFilters: function() {
          return this.filters
      },
      setFilters: function(e) {
          return e || (e = []),
          !0 === this.isPlaying ? (this.disconnect(),
          this.filters = e,
          this.connect()) : this.filters = e,
          this
      },
      getFilter: function() {
          return this.getFilters()[0]
      },
      setFilter: function(e) {
          return this.setFilters(e ? [e] : [])
      },
      setPlaybackRate: function(e) {
          return !1 !== this.hasPlaybackControl ? (this.playbackRate = e,
          !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime),
          this) : void console.warn("THREE.Audio: this Audio has no playback control.")
      },
      getPlaybackRate: function() {
          return this.playbackRate
      },
      onEnded: function() {
          this.isPlaying = !1
      },
      getLoop: function() {
          return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
          !1) : this.loop
      },
      setLoop: function(e) {
          return !1 !== this.hasPlaybackControl ? (this.loop = e,
          !0 === this.isPlaying && (this.source.loop = this.loop),
          this) : void console.warn("THREE.Audio: this Audio has no playback control.")
      },
      getVolume: function() {
          return this.gain.gain.value
      },
      setVolume: function(e) {
          return this.gain.gain.value = e,
          this
      }
  }),
  xr.prototype = Object.assign(Object.create(yr.prototype), {
      constructor: xr,
      getOutput: function() {
          return this.panner
      },
      getRefDistance: function() {
          return this.panner.refDistance
      },
      setRefDistance: function(e) {
          this.panner.refDistance = e
      },
      getRolloffFactor: function() {
          return this.panner.rolloffFactor
      },
      setRolloffFactor: function(e) {
          this.panner.rolloffFactor = e
      },
      getDistanceModel: function() {
          return this.panner.distanceModel
      },
      setDistanceModel: function(e) {
          this.panner.distanceModel = e
      },
      getMaxDistance: function() {
          return this.panner.maxDistance
      },
      setMaxDistance: function(e) {
          this.panner.maxDistance = e
      },
      updateMatrixWorld: function() {
          var e = new c;
          return function(t) {
              ot.prototype.updateMatrixWorld.call(this, t),
              e.setFromMatrixPosition(this.matrixWorld),
              this.panner.setPosition(e.x, e.y, e.z)
          }
      }()
  }),
  Object.assign(br.prototype, {
      getFrequencyData: function() {
          return this.analyser.getByteFrequencyData(this.data),
          this.data
      },
      getAverageFrequency: function() {
          for (var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++)
              e += t[i];
          return e / t.length
      }
  }),
  _r.prototype = {
      constructor: _r,
      accumulate: function(e, t) {
          var i = this.buffer
            , n = this.valueSize
            , r = e * n + n
            , o = this.cumulativeWeight;
          if (0 === o) {
              for (o = 0; o !== n; ++o)
                  i[r + o] = i[o];
              o = t
          } else
              o += t,
              this._mixBufferRegion(i, r, 0, t / o, n);
          this.cumulativeWeight = o
      },
      apply: function(e) {
          var t = this.valueSize
            , i = this.buffer;
          e = e * t + t;
          var n = this.cumulativeWeight
            , r = this.binding;
          this.cumulativeWeight = 0,
          1 > n && this._mixBufferRegion(i, e, 3 * t, 1 - n, t);
          for (var n = t, o = t + t; n !== o; ++n)
              if (i[n] !== i[n + t]) {
                  r.setValue(i, e);
                  break
              }
      },
      saveOriginalState: function() {
          var e = this.buffer
            , t = this.valueSize
            , i = 3 * t;
          this.binding.getValue(e, i);
          for (var n = t; n !== i; ++n)
              e[n] = e[i + n % t];
          this.cumulativeWeight = 0
      },
      restoreOriginalState: function() {
          this.binding.setValue(this.buffer, 3 * this.valueSize)
      },
      _select: function(e, t, i, n, r) {
          if (n >= .5)
              for (n = 0; n !== r; ++n)
                  e[t + n] = e[i + n]
      },
      _slerp: function(e, t, i, n) {
          s.slerpFlat(e, t, e, t, e, i, n)
      },
      _lerp: function(e, t, i, n, r) {
          for (var o = 1 - n, a = 0; a !== r; ++a) {
              var s = t + a;
              e[s] = e[s] * o + e[i + a] * n
          }
      }
  },
  wr.prototype = {
      constructor: wr,
      getValue: function(e, t) {
          this.bind(),
          this.getValue(e, t)
      },
      setValue: function(e, t) {
          this.bind(),
          this.setValue(e, t)
      },
      bind: function() {
          var e = this.node
            , t = this.parsedPath
            , i = t.objectName
            , n = t.propertyName
            , r = t.propertyIndex;
          if (e || (this.node = e = wr.findNode(this.rootNode, t.nodeName) || this.rootNode),
          this.getValue = this._getValue_unavailable,
          this.setValue = this._setValue_unavailable,
          e) {
              if (i) {
                  var o = t.objectIndex;
                  switch (i) {
                  case "materials":
                      if (!e.material)
                          return void console.error("  can not bind to material as node does not have a material", this);
                      if (!e.material.materials)
                          return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                      e = e.material.materials;
                      break;
                  case "bones":
                      if (!e.skeleton)
                          return void console.error("  can not bind to bones as node does not have a skeleton", this);
                      for (e = e.skeleton.bones,
                      i = 0; i < e.length; i++)
                          if (e[i].name === o) {
                              o = i;
                              break
                          }
                      break;
                  default:
                      if (void 0 === e[i])
                          return void console.error("  can not bind to objectName of node, undefined", this);
                      e = e[i]
                  }
                  if (void 0 !== o) {
                      if (void 0 === e[o])
                          return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                      e = e[o]
                  }
              }
              if (o = e[n],
              void 0 === o)
                  console.error("  trying to update property for track: " + t.nodeName + "." + n + " but it wasn't found.", e);
              else {
                  if (t = this.Versioning.None,
                  void 0 !== e.needsUpdate ? (t = this.Versioning.NeedsUpdate,
                  this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (t = this.Versioning.MatrixWorldNeedsUpdate,
                  this.targetObject = e),
                  i = this.BindingType.Direct,
                  void 0 !== r) {
                      if ("morphTargetInfluences" === n) {
                          if (!e.geometry)
                              return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                          if (!e.geometry.morphTargets)
                              return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                          for (i = 0; i < this.node.geometry.morphTargets.length; i++)
                              if (e.geometry.morphTargets[i].name === r) {
                                  r = i;
                                  break
                              }
                      }
                      i = this.BindingType.ArrayElement,
                      this.resolvedProperty = o,
                      this.propertyIndex = r
                  } else
                      void 0 !== o.fromArray && void 0 !== o.toArray ? (i = this.BindingType.HasFromToArray,
                      this.resolvedProperty = o) : void 0 !== o.length ? (i = this.BindingType.EntireArray,
                      this.resolvedProperty = o) : this.propertyName = n;
                  this.getValue = this.GetterByBindingType[i],
                  this.setValue = this.SetterByBindingTypeAndVersioning[i][t]
              }
          } else
              console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
      },
      unbind: function() {
          this.node = null,
          this.getValue = this._getValue_unbound,
          this.setValue = this._setValue_unbound
      }
  },
  Object.assign(wr.prototype, {
      _getValue_unavailable: function() {},
      _setValue_unavailable: function() {},
      _getValue_unbound: wr.prototype.getValue,
      _setValue_unbound: wr.prototype.setValue,
      BindingType: {
          Direct: 0,
          EntireArray: 1,
          ArrayElement: 2,
          HasFromToArray: 3
      },
      Versioning: {
          None: 0,
          NeedsUpdate: 1,
          MatrixWorldNeedsUpdate: 2
      },
      GetterByBindingType: [function(e, t) {
          e[t] = this.node[this.propertyName]
      }
      , function(e, t) {
          for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
              e[t++] = i[n]
      }
      , function(e, t) {
          e[t] = this.resolvedProperty[this.propertyIndex]
      }
      , function(e, t) {
          this.resolvedProperty.toArray(e, t)
      }
      ],
      SetterByBindingTypeAndVersioning: [[function(e, t) {
          this.node[this.propertyName] = e[t]
      }
      , function(e, t) {
          this.node[this.propertyName] = e[t],
          this.targetObject.needsUpdate = !0
      }
      , function(e, t) {
          this.node[this.propertyName] = e[t],
          this.targetObject.matrixWorldNeedsUpdate = !0
      }
      ], [function(e, t) {
          for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
              i[n] = e[t++]
      }
      , function(e, t) {
          for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
              i[n] = e[t++];
          this.targetObject.needsUpdate = !0
      }
      , function(e, t) {
          for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
              i[n] = e[t++];
          this.targetObject.matrixWorldNeedsUpdate = !0
      }
      ], [function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t]
      }
      , function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t],
          this.targetObject.needsUpdate = !0
      }
      , function(e, t) {
          this.resolvedProperty[this.propertyIndex] = e[t],
          this.targetObject.matrixWorldNeedsUpdate = !0
      }
      ], [function(e, t) {
          this.resolvedProperty.fromArray(e, t)
      }
      , function(e, t) {
          this.resolvedProperty.fromArray(e, t),
          this.targetObject.needsUpdate = !0
      }
      , function(e, t) {
          this.resolvedProperty.fromArray(e, t),
          this.targetObject.matrixWorldNeedsUpdate = !0
      }
      ]]
  }),
  wr.Composite = function(e, t, i) {
      i = i || wr.parseTrackName(t),
      this._targetGroup = e,
      this._bindings = e.subscribe_(t, i)
  }
  ,
  wr.Composite.prototype = {
      constructor: wr.Composite,
      getValue: function(e, t) {
          this.bind();
          var i = this._bindings[this._targetGroup.nCachedObjects_];
          void 0 !== i && i.getValue(e, t)
      },
      setValue: function(e, t) {
          for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
              i[n].setValue(e, t)
      },
      bind: function() {
          for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
              e[t].bind()
      },
      unbind: function() {
          for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
              e[t].unbind()
      }
  },
  wr.create = function(e, t, i) {
      return e && e.isAnimationObjectGroup ? new wr.Composite(e,t,i) : new wr(e,t,i)
  }
  ,
  wr.parseTrackName = function(e) {
      var t = /^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/.exec(e);
      if (!t)
          throw Error("cannot parse trackName at all: " + e);
      if (t = {
          nodeName: t[2],
          objectName: t[3],
          objectIndex: t[4],
          propertyName: t[5],
          propertyIndex: t[6]
      },
      null === t.propertyName || 0 === t.propertyName.length)
          throw Error("can not parse propertyName from trackName: " + e);
      return t
  }
  ,
  wr.findNode = function(e, t) {
      if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
          return e;
      if (e.skeleton) {
          var i = function(e) {
              for (var i = 0; i < e.bones.length; i++) {
                  var n = e.bones[i];
                  if (n.name === t)
                      return n
              }
              return null
          }(e.skeleton);
          if (i)
              return i
      }
      if (e.children) {
          var n = function(e) {
              for (var i = 0; i < e.length; i++) {
                  var r = e[i];
                  if (r.name === t || r.uuid === t || (r = n(r.children)))
                      return r
              }
              return null
          };
          if (i = n(e.children))
              return i
      }
      return null
  }
  ,
  Er.prototype = {
      constructor: Er,
      isAnimationObjectGroup: !0,
      add: function() {
          for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, c = 0, h = arguments.length; c !== h; ++c) {
              var l = arguments[c]
                , u = l.uuid
                , p = n[u];
              if (void 0 === p) {
                  p = t++,
                  n[u] = p,
                  e.push(l);
                  for (var u = 0, d = s; u !== d; ++u)
                      a[u].push(new wr(l,r[u],o[u]))
              } else if (i > p) {
                  var f = --i
                    , d = e[f];
                  for (n[d.uuid] = p,
                  e[p] = d,
                  n[u] = f,
                  e[f] = l,
                  u = 0,
                  d = s; u !== d; ++u) {
                      var m = a[u]
                        , g = m[p];
                      m[p] = m[f],
                      void 0 === g && (g = new wr(l,r[u],o[u])),
                      m[f] = g
                  }
              } else
                  void 0 !== e[p] && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
          }
          this.nCachedObjects_ = i
      },
      remove: function() {
          for (var e = this._objects, t = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, o = 0, a = arguments.length; o !== a; ++o) {
              var s = arguments[o]
                , c = s.uuid
                , h = i[c];
              if (void 0 !== h && h >= t) {
                  var l = t++
                    , u = e[l];
                  for (i[u.uuid] = h,
                  e[h] = u,
                  i[c] = l,
                  e[l] = s,
                  s = 0,
                  c = r; s !== c; ++s) {
                      var u = n[s]
                        , p = u[h];
                      u[h] = u[l],
                      u[l] = p
                  }
              }
          }
          this.nCachedObjects_ = t
      },
      uncache: function() {
          for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) {
              var c = arguments[a].uuid
                , h = n[c];
              if (void 0 !== h)
                  if (delete n[c],
                  i > h) {
                      var c = --i
                        , l = e[c]
                        , u = --t
                        , p = e[u];
                      for (n[l.uuid] = h,
                      e[h] = l,
                      n[p.uuid] = c,
                      e[c] = p,
                      e.pop(),
                      l = 0,
                      p = o; l !== p; ++l) {
                          var d = r[l]
                            , f = d[u];
                          d[h] = d[c],
                          d[c] = f,
                          d.pop()
                      }
                  } else
                      for (u = --t,
                      p = e[u],
                      n[p.uuid] = h,
                      e[h] = p,
                      e.pop(),
                      l = 0,
                      p = o; l !== p; ++l)
                          d = r[l],
                          d[h] = d[u],
                          d.pop()
          }
          this.nCachedObjects_ = i
      },
      subscribe_: function(e, t) {
          var i = this._bindingsIndicesByPath
            , n = i[e]
            , r = this._bindings;
          if (void 0 !== n)
              return r[n];
          var o = this._paths
            , a = this._parsedPaths
            , s = this._objects
            , c = this.nCachedObjects_
            , h = Array(s.length)
            , n = r.length;
          for (i[e] = n,
          o.push(e),
          a.push(t),
          r.push(h),
          i = c,
          n = s.length; i !== n; ++i)
              h[i] = new wr(s[i],e,t);
          return h
      },
      unsubscribe_: function(e) {
          var t = this._bindingsIndicesByPath
            , i = t[e];
          if (void 0 !== i) {
              var n = this._paths
                , r = this._parsedPaths
                , o = this._bindings
                , a = o.length - 1
                , s = o[a];
              t[e[a]] = i,
              o[i] = s,
              o.pop(),
              r[i] = r[a],
              r.pop(),
              n[i] = n[a],
              n.pop()
          }
      }
  },
  Mr.prototype = {
      constructor: Mr,
      play: function() {
          return this._mixer._activateAction(this),
          this
      },
      stop: function() {
          return this._mixer._deactivateAction(this),
          this.reset()
      },
      reset: function() {
          return this.paused = !1,
          this.enabled = !0,
          this.time = 0,
          this._loopCount = -1,
          this._startTime = null,
          this.stopFading().stopWarping()
      },
      isRunning: function() {
          return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
      },
      isScheduled: function() {
          return this._mixer._isActiveAction(this)
      },
      startAt: function(e) {
          return this._startTime = e,
          this
      },
      setLoop: function(e, t) {
          return this.loop = e,
          this.repetitions = t,
          this
      },
      setEffectiveWeight: function(e) {
          return this.weight = e,
          this._effectiveWeight = this.enabled ? e : 0,
          this.stopFading()
      },
      getEffectiveWeight: function() {
          return this._effectiveWeight
      },
      fadeIn: function(e) {
          return this._scheduleFading(e, 0, 1)
      },
      fadeOut: function(e) {
          return this._scheduleFading(e, 1, 0)
      },
      crossFadeFrom: function(e, t, i) {
          if (e.fadeOut(t),
          this.fadeIn(t),
          i) {
              i = this._clip.duration;
              var n = e._clip.duration
                , r = i / n;
              e.warp(1, n / i, t),
              this.warp(r, 1, t)
          }
          return this
      },
      crossFadeTo: function(e, t, i) {
          return e.crossFadeFrom(this, t, i)
      },
      stopFading: function() {
          var e = this._weightInterpolant;
          return null !== e && (this._weightInterpolant = null,
          this._mixer._takeBackControlInterpolant(e)),
          this
      },
      setEffectiveTimeScale: function(e) {
          return this.timeScale = e,
          this._effectiveTimeScale = this.paused ? 0 : e,
          this.stopWarping()
      },
      getEffectiveTimeScale: function() {
          return this._effectiveTimeScale
      },
      setDuration: function(e) {
          return this.timeScale = this._clip.duration / e,
          this.stopWarping()
      },
      syncWith: function(e) {
          return this.time = e.time,
          this.timeScale = e.timeScale,
          this.stopWarping()
      },
      halt: function(e) {
          return this.warp(this._effectiveTimeScale, 0, e)
      },
      warp: function(e, t, i) {
          var n = this._mixer
            , r = n.time
            , o = this._timeScaleInterpolant
            , a = this.timeScale;
          return null === o && (this._timeScaleInterpolant = o = n._lendControlInterpolant()),
          n = o.parameterPositions,
          o = o.sampleValues,
          n[0] = r,
          n[1] = r + i,
          o[0] = e / a,
          o[1] = t / a,
          this
      },
      stopWarping: function() {
          var e = this._timeScaleInterpolant;
          return null !== e && (this._timeScaleInterpolant = null,
          this._mixer._takeBackControlInterpolant(e)),
          this
      },
      getMixer: function() {
          return this._mixer
      },
      getClip: function() {
          return this._clip
      },
      getRoot: function() {
          return this._localRoot || this._mixer._root
      },
      _update: function(e, t, i, n) {
          var r = this._startTime;
          if (null !== r) {
              if (t = (e - r) * i,
              0 > t || 0 === i)
                  return;
              this._startTime = null,
              t *= i
          }
          if (t *= this._updateTimeScale(e),
          i = this._updateTime(t),
          e = this._updateWeight(e),
          e > 0) {
              t = this._interpolants;
              for (var r = this._propertyBindings, o = 0, a = t.length; o !== a; ++o)
                  t[o].evaluate(i),
                  r[o].accumulate(n, e)
          }
      },
      _updateWeight: function(e) {
          var t = 0;
          if (this.enabled) {
              var t = this.weight
                , i = this._weightInterpolant;
              if (null !== i) {
                  var n = i.evaluate(e)[0]
                    , t = t * n;
                  e > i.parameterPositions[1] && (this.stopFading(),
                  0 === n && (this.enabled = !1))
              }
          }
          return this._effectiveWeight = t
      },
      _updateTimeScale: function(e) {
          var t = 0;
          if (!this.paused) {
              var t = this.timeScale
                , i = this._timeScaleInterpolant;
              if (null !== i) {
                  var n = i.evaluate(e)[0]
                    , t = t * n;
                  e > i.parameterPositions[1] && (this.stopWarping(),
                  0 === t ? this.paused = !0 : this.timeScale = t)
              }
          }
          return this._effectiveTimeScale = t
      },
      _updateTime: function(e) {
          var t = this.time + e;
          if (0 === e)
              return t;
          var i = this._clip.duration
            , n = this.loop
            , r = this._loopCount;
          if (2200 === n)
              e: {
                  if (-1 === r && (this._loopCount = 0,
                  this._setEndings(!0, !0, !1)),
                  t >= i)
                      t = i;
                  else {
                      if (!(0 > t))
                          break e;
                      t = 0
                  }
                  this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                  this._mixer.dispatchEvent({
                      type: "finished",
                      action: this,
                      direction: 0 > e ? -1 : 1
                  })
              }
          else {
              if (n = 2202 === n,
              -1 === r && (e >= 0 ? (r = 0,
              this._setEndings(!0, 0 === this.repetitions, n)) : this._setEndings(0 === this.repetitions, !0, n)),
              t >= i || 0 > t) {
                  var o = Math.floor(t / i)
                    , t = t - i * o
                    , r = r + Math.abs(o)
                    , a = this.repetitions - r;
                  0 > a ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                  t = e > 0 ? i : 0,
                  this._mixer.dispatchEvent({
                      type: "finished",
                      action: this,
                      direction: e > 0 ? 1 : -1
                  })) : (0 === a ? (e = 0 > e,
                  this._setEndings(e, !e, n)) : this._setEndings(!1, !1, n),
                  this._loopCount = r,
                  this._mixer.dispatchEvent({
                      type: "loop",
                      action: this,
                      loopDelta: o
                  }))
              }
              if (n && 1 === (1 & r))
                  return this.time = t,
                  i - t
          }
          return this.time = t
      },
      _setEndings: function(e, t, i) {
          var n = this._interpolantSettings;
          i ? (n.endingStart = 2401,
          n.endingEnd = 2401) : (n.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402,
          n.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
      },
      _scheduleFading: function(e, t, i) {
          var n = this._mixer
            , r = n.time
            , o = this._weightInterpolant;
          return null === o && (this._weightInterpolant = o = n._lendControlInterpolant()),
          n = o.parameterPositions,
          o = o.sampleValues,
          n[0] = r,
          o[0] = t,
          n[1] = r + e,
          o[1] = i,
          this
      }
  },
  Tr.prototype = {
      constructor: Tr,
      clipAction: function(e, t) {
          var i = t || this._root
            , n = i.uuid
            , r = "string" == typeof e ? Xn.findByName(i, e) : e
            , i = null !== r ? r.uuid : e
            , o = this._actionsByClip[i]
            , a = null;
          if (void 0 !== o) {
              if (a = o.actionByRoot[n],
              void 0 !== a)
                  return a;
              a = o.knownActions[0],
              null === r && (r = a._clip)
          }
          return null === r ? null : (r = new Mr(this,r,t),
          this._bindAction(r, a),
          this._addInactiveAction(r, i, n),
          r)
      },
      existingAction: function(e, t) {
          var i = t || this._root
            , n = i.uuid
            , i = "string" == typeof e ? Xn.findByName(i, e) : e
            , i = this._actionsByClip[i ? i.uuid : e];
          return void 0 !== i ? i.actionByRoot[n] || null : null
      },
      stopAllAction: function() {
          for (var e = this._actions, t = this._nActiveActions, i = this._bindings, n = this._nActiveBindings, r = this._nActiveBindings = this._nActiveActions = 0; r !== t; ++r)
              e[r].reset();
          for (r = 0; r !== n; ++r)
              i[r].useCount = 0;
          return this
      },
      update: function(e) {
          e *= this.timeScale;
          for (var t = this._actions, i = this._nActiveActions, n = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1, a = 0; a !== i; ++a) {
              var s = t[a];
              s.enabled && s._update(n, e, r, o)
          }
          for (e = this._bindings,
          t = this._nActiveBindings,
          a = 0; a !== t; ++a)
              e[a].apply(o);
          return this
      },
      getRoot: function() {
          return this._root
      },
      uncacheClip: function(e) {
          var t = this._actions;
          e = e.uuid;
          var i = this._actionsByClip
            , n = i[e];
          if (void 0 !== n) {
              for (var n = n.knownActions, r = 0, o = n.length; r !== o; ++r) {
                  var a = n[r];
                  this._deactivateAction(a);
                  var s = a._cacheIndex
                    , c = t[t.length - 1];
                  a._cacheIndex = null,
                  a._byClipCacheIndex = null,
                  c._cacheIndex = s,
                  t[s] = c,
                  t.pop(),
                  this._removeInactiveBindingsForAction(a)
              }
              delete i[e]
          }
      },
      uncacheRoot: function(e) {
          e = e.uuid;
          var t, i = this._actionsByClip;
          for (t in i) {
              var n = i[t].actionByRoot[e];
              void 0 !== n && (this._deactivateAction(n),
              this._removeInactiveAction(n))
          }
          if (t = this._bindingsByRootAndName[e],
          void 0 !== t)
              for (var r in t)
                  e = t[r],
                  e.restoreOriginalState(),
                  this._removeInactiveBinding(e)
      },
      uncacheAction: function(e, t) {
          var i = this.existingAction(e, t);
          null !== i && (this._deactivateAction(i),
          this._removeInactiveAction(i))
      }
  },
  Object.assign(Tr.prototype, {
      _bindAction: function(e, t) {
          var i = e._localRoot || this._root
            , n = e._clip.tracks
            , r = n.length
            , o = e._propertyBindings
            , a = e._interpolants
            , s = i.uuid
            , c = this._bindingsByRootAndName
            , h = c[s];
          for (void 0 === h && (h = {},
          c[s] = h),
          c = 0; c !== r; ++c) {
              var l = n[c]
                , u = l.name
                , p = h[u];
              if (void 0 === p) {
                  if (p = o[c],
                  void 0 !== p) {
                      null === p._cacheIndex && (++p.referenceCount,
                      this._addInactiveBinding(p, s, u));
                      continue
                  }
                  p = new _r(wr.create(i, u, t && t._propertyBindings[c].binding.parsedPath),l.ValueTypeName,l.getValueSize()),
                  ++p.referenceCount,
                  this._addInactiveBinding(p, s, u)
              }
              o[c] = p,
              a[c].resultBuffer = p.buffer
          }
      },
      _activateAction: function(e) {
          if (!this._isActiveAction(e)) {
              if (null === e._cacheIndex) {
                  var t = (e._localRoot || this._root).uuid
                    , i = e._clip.uuid
                    , n = this._actionsByClip[i];
                  this._bindAction(e, n && n.knownActions[0]),
                  this._addInactiveAction(e, i, t)
              }
              for (t = e._propertyBindings,
              i = 0,
              n = t.length; i !== n; ++i) {
                  var r = t[i];
                  0 === r.useCount++ && (this._lendBinding(r),
                  r.saveOriginalState())
              }
              this._lendAction(e)
          }
      },
      _deactivateAction: function(e) {
          if (this._isActiveAction(e)) {
              for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
                  var r = t[i];
                  0 === --r.useCount && (r.restoreOriginalState(),
                  this._takeBackBinding(r))
              }
              this._takeBackAction(e)
          }
      },
      _initMemoryManager: function() {
          this._actions = [],
          this._nActiveActions = 0,
          this._actionsByClip = {},
          this._bindings = [],
          this._nActiveBindings = 0,
          this._bindingsByRootAndName = {},
          this._controlInterpolants = [],
          this._nActiveControlInterpolants = 0;
          var e = this;
          this.stats = {
              actions: {
                  get total() {
                      return e._actions.length
                  },
                  get inUse() {
                      return e._nActiveActions
                  }
              },
              bindings: {
                  get total() {
                      return e._bindings.length
                  },
                  get inUse() {
                      return e._nActiveBindings
                  }
              },
              controlInterpolants: {
                  get total() {
                      return e._controlInterpolants.length
                  },
                  get inUse() {
                      return e._nActiveControlInterpolants
                  }
              }
          }
      },
      _isActiveAction: function(e) {
          return e = e._cacheIndex,
          null !== e && e < this._nActiveActions
      },
      _addInactiveAction: function(e, t, i) {
          var n = this._actions
            , r = this._actionsByClip
            , o = r[t];
          void 0 === o ? (o = {
              knownActions: [e],
              actionByRoot: {}
          },
          e._byClipCacheIndex = 0,
          r[t] = o) : (t = o.knownActions,
          e._byClipCacheIndex = t.length,
          t.push(e)),
          e._cacheIndex = n.length,
          n.push(e),
          o.actionByRoot[i] = e
      },
      _removeInactiveAction: function(e) {
          var t = this._actions
            , i = t[t.length - 1]
            , n = e._cacheIndex;
          i._cacheIndex = n,
          t[n] = i,
          t.pop(),
          e._cacheIndex = null;
          var i = e._clip.uuid
            , n = this._actionsByClip
            , r = n[i]
            , o = r.knownActions
            , a = o[o.length - 1]
            , s = e._byClipCacheIndex;
          a._byClipCacheIndex = s,
          o[s] = a,
          o.pop(),
          e._byClipCacheIndex = null,
          delete r.actionByRoot[(t._localRoot || this._root).uuid],
          0 === o.length && delete n[i],
          this._removeInactiveBindingsForAction(e)
      },
      _removeInactiveBindingsForAction: function(e) {
          e = e._propertyBindings;
          for (var t = 0, i = e.length; t !== i; ++t) {
              var n = e[t];
              0 === --n.referenceCount && this._removeInactiveBinding(n)
          }
      },
      _lendAction: function(e) {
          var t = this._actions
            , i = e._cacheIndex
            , n = this._nActiveActions++
            , r = t[n];
          e._cacheIndex = n,
          t[n] = e,
          r._cacheIndex = i,
          t[i] = r
      },
      _takeBackAction: function(e) {
          var t = this._actions
            , i = e._cacheIndex
            , n = --this._nActiveActions
            , r = t[n];
          e._cacheIndex = n,
          t[n] = e,
          r._cacheIndex = i,
          t[i] = r
      },
      _addInactiveBinding: function(e, t, i) {
          var n = this._bindingsByRootAndName
            , r = n[t]
            , o = this._bindings;
          void 0 === r && (r = {},
          n[t] = r),
          r[i] = e,
          e._cacheIndex = o.length,
          o.push(e)
      },
      _removeInactiveBinding: function(e) {
          var t = this._bindings
            , i = e.binding
            , n = i.rootNode.uuid
            , i = i.path
            , r = this._bindingsByRootAndName
            , o = r[n]
            , a = t[t.length - 1];
          e = e._cacheIndex,
          a._cacheIndex = e,
          t[e] = a,
          t.pop(),
          delete o[i];
          e: {
              for (var s in o)
                  break e;
              delete r[n]
          }
      },
      _lendBinding: function(e) {
          var t = this._bindings
            , i = e._cacheIndex
            , n = this._nActiveBindings++
            , r = t[n];
          e._cacheIndex = n,
          t[n] = e,
          r._cacheIndex = i,
          t[i] = r
      },
      _takeBackBinding: function(e) {
          var t = this._bindings
            , i = e._cacheIndex
            , n = --this._nActiveBindings
            , r = t[n];
          e._cacheIndex = n,
          t[n] = e,
          r._cacheIndex = i,
          t[i] = r
      },
      _lendControlInterpolant: function() {
          var e = this._controlInterpolants
            , t = this._nActiveControlInterpolants++
            , i = e[t];
          return void 0 === i && (i = new Dn(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
          i.__cacheIndex = t,
          e[t] = i),
          i
      },
      _takeBackControlInterpolant: function(e) {
          var t = this._controlInterpolants
            , i = e.__cacheIndex
            , n = --this._nActiveControlInterpolants
            , r = t[n];
          e.__cacheIndex = n,
          t[n] = e,
          r.__cacheIndex = i,
          t[i] = r
      },
      _controlInterpolantsResultBuffer: new Float32Array(1)
  }),
  Object.assign(Tr.prototype, t.prototype),
  Sr.prototype.clone = function() {
      return new Sr(void 0 === this.value.clone ? this.value : this.value.clone())
  }
  ,
  Ar.prototype = Object.create(Et.prototype),
  Ar.prototype.constructor = Ar,
  Ar.prototype.isInstancedBufferGeometry = !0,
  Ar.prototype.addGroup = function(e, t, i) {
      this.groups.push({
          start: e,
          count: t,
          materialIndex: i
      })
  }
  ,
  Ar.prototype.copy = function(e) {
      var t = e.index;
      null !== t && this.setIndex(t.clone());
      var i, t = e.attributes;
      for (i in t)
          this.addAttribute(i, t[i].clone());
      for (e = e.groups,
      i = 0,
      t = e.length; t > i; i++) {
          var n = e[i];
          this.addGroup(n.start, n.count, n.materialIndex)
      }
      return this
  }
  ,
  Rr.prototype = {
      constructor: Rr,
      isInterleavedBufferAttribute: !0,
      get count() {
          return this.data.count
      },
      get array() {
          return this.data.array
      },
      setX: function(e, t) {
          return this.data.array[e * this.data.stride + this.offset] = t,
          this
      },
      setY: function(e, t) {
          return this.data.array[e * this.data.stride + this.offset + 1] = t,
          this
      },
      setZ: function(e, t) {
          return this.data.array[e * this.data.stride + this.offset + 2] = t,
          this
      },
      setW: function(e, t) {
          return this.data.array[e * this.data.stride + this.offset + 3] = t,
          this
      },
      getX: function(e) {
          return this.data.array[e * this.data.stride + this.offset]
      },
      getY: function(e) {
          return this.data.array[e * this.data.stride + this.offset + 1]
      },
      getZ: function(e) {
          return this.data.array[e * this.data.stride + this.offset + 2]
      },
      getW: function(e) {
          return this.data.array[e * this.data.stride + this.offset + 3]
      },
      setXY: function(e, t, i) {
          return e = e * this.data.stride + this.offset,
          this.data.array[e + 0] = t,
          this.data.array[e + 1] = i,
          this
      },
      setXYZ: function(e, t, i, n) {
          return e = e * this.data.stride + this.offset,
          this.data.array[e + 0] = t,
          this.data.array[e + 1] = i,
          this.data.array[e + 2] = n,
          this
      },
      setXYZW: function(e, t, i, n, r) {
          return e = e * this.data.stride + this.offset,
          this.data.array[e + 0] = t,
          this.data.array[e + 1] = i,
          this.data.array[e + 2] = n,
          this.data.array[e + 3] = r,
          this
      }
  },
  Lr.prototype = {
      constructor: Lr,
      isInterleavedBuffer: !0,
      set needsUpdate(e) {
          !0 === e && this.version++
      },
      setArray: function(e) {
          if (Array.isArray(e))
              throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
          this.count = void 0 !== e ? e.length / this.stride : 0,
          this.array = e
      },
      setDynamic: function(e) {
          return this.dynamic = e,
          this
      },
      copy: function(e) {
          return this.array = new e.array.constructor(e.array),
          this.count = e.count,
          this.stride = e.stride,
          this.dynamic = e.dynamic,
          this
      },
      copyAt: function(e, t, i) {
          e *= this.stride,
          i *= t.stride;
          for (var n = 0, r = this.stride; r > n; n++)
              this.array[e + n] = t.array[i + n];
          return this
      },
      set: function(e, t) {
          return void 0 === t && (t = 0),
          this.array.set(e, t),
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      onUpload: function(e) {
          return this.onUploadCallback = e,
          this
      }
  },
  Pr.prototype = Object.create(Lr.prototype),
  Pr.prototype.constructor = Pr,
  Pr.prototype.isInstancedInterleavedBuffer = !0,
  Pr.prototype.copy = function(e) {
      return Lr.prototype.copy.call(this, e),
      this.meshPerAttribute = e.meshPerAttribute,
      this
  }
  ,
  Cr.prototype = Object.create(lt.prototype),
  Cr.prototype.constructor = Cr,
  Cr.prototype.isInstancedBufferAttribute = !0,
  Cr.prototype.copy = function(e) {
      return lt.prototype.copy.call(this, e),
      this.meshPerAttribute = e.meshPerAttribute,
      this
  }
  ,
  Ir.prototype = {
      constructor: Ir,
      linePrecision: 1,
      set: function(e, t) {
          this.ray.set(e, t)
      },
      setFromCamera: function(e, t) {
          t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
          this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
      },
      intersectObject: function(e, t) {
          var i = [];
          return Nr(e, this, i, t),
          i.sort(Ur),
          i
      },
      intersectObjects: function(e, t) {
          var i = [];
          if (!1 === Array.isArray(e))
              return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
              i;
          for (var n = 0, r = e.length; r > n; n++)
              Nr(e[n], this, i, t);
          return i.sort(Ur),
          i
      }
  },
  Dr.prototype = {
      constructor: Dr,
      start: function() {
          this.oldTime = this.startTime = (performance || Date).now(),
          this.elapsedTime = 0,
          this.running = !0
      },
      stop: function() {
          this.getElapsedTime(),
          this.running = !1
      },
      getElapsedTime: function() {
          return this.getDelta(),
          this.elapsedTime
      },
      getDelta: function() {
          var e = 0;
          if (this.autoStart && !this.running && this.start(),
          this.running) {
              var t = (performance || Date).now()
                , e = (t - this.oldTime) / 1e3;
              this.oldTime = t,
              this.elapsedTime += e
          }
          return e
      }
  },
  Or.prototype = {
      constructor: Or,
      set: function(e, t, i) {
          return this.radius = e,
          this.phi = t,
          this.theta = i,
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.radius = e.radius,
          this.phi = e.phi,
          this.theta = e.theta,
          this
      },
      makeSafe: function() {
          return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
          this
      },
      setFromVector3: function(e) {
          return this.radius = e.length(),
          0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(e.x, e.z),
          this.phi = Math.acos(ho.clamp(e.y / this.radius, -1, 1))),
          this
      }
  },
  Br.prototype = {
      constructor: Br,
      set: function(e, t, i) {
          return this.radius = e,
          this.theta = t,
          this.y = i,
          this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(e) {
          return this.radius = e.radius,
          this.theta = e.theta,
          this.y = e.y,
          this
      },
      setFromVector3: function(e) {
          return this.radius = Math.sqrt(e.x * e.x + e.z * e.z),
          this.theta = Math.atan2(e.x, e.z),
          this.y = e.y,
          this
      }
  },
  Fr.prototype = Object.create(Mt.prototype),
  Fr.prototype.constructor = Fr,
  Fr.prototype.createAnimation = function(e, t, i, n) {
      t = {
          start: t,
          end: i,
          length: i - t + 1,
          fps: n,
          duration: (i - t) / n,
          lastFrame: 0,
          currentFrame: 0,
          active: !1,
          time: 0,
          direction: 1,
          weight: 1,
          directionBackwards: !1,
          mirroredLoop: !1
      },
      this.animationsMap[e] = t,
      this.animationsList.push(t)
  }
  ,
  Fr.prototype.autoCreateAnimations = function(e) {
      for (var t, i = /([a-z]+)_?(\d+)/i, n = {}, r = this.geometry, o = 0, a = r.morphTargets.length; a > o; o++) {
          var s = r.morphTargets[o].name.match(i);
          if (s && 1 < s.length) {
              var c = s[1];
              n[c] || (n[c] = {
                  start: 1 / 0,
                  end: -1 / 0
              }),
              s = n[c],
              o < s.start && (s.start = o),
              o > s.end && (s.end = o),
              t || (t = c)
          }
      }
      for (c in n)
          s = n[c],
          this.createAnimation(c, s.start, s.end, e);
      this.firstAnimation = t
  }
  ,
  Fr.prototype.setAnimationDirectionForward = function(e) {
      (e = this.animationsMap[e]) && (e.direction = 1,
      e.directionBackwards = !1)
  }
  ,
  Fr.prototype.setAnimationDirectionBackward = function(e) {
      (e = this.animationsMap[e]) && (e.direction = -1,
      e.directionBackwards = !0)
  }
  ,
  Fr.prototype.setAnimationFPS = function(e, t) {
      var i = this.animationsMap[e];
      i && (i.fps = t,
      i.duration = (i.end - i.start) / i.fps)
  }
  ,
  Fr.prototype.setAnimationDuration = function(e, t) {
      var i = this.animationsMap[e];
      i && (i.duration = t,
      i.fps = (i.end - i.start) / i.duration)
  }
  ,
  Fr.prototype.setAnimationWeight = function(e, t) {
      var i = this.animationsMap[e];
      i && (i.weight = t)
  }
  ,
  Fr.prototype.setAnimationTime = function(e, t) {
      var i = this.animationsMap[e];
      i && (i.time = t)
  }
  ,
  Fr.prototype.getAnimationTime = function(e) {
      var t = 0;
      return (e = this.animationsMap[e]) && (t = e.time),
      t
  }
  ,
  Fr.prototype.getAnimationDuration = function(e) {
      var t = -1;
      return (e = this.animationsMap[e]) && (t = e.duration),
      t
  }
  ,
  Fr.prototype.playAnimation = function(e) {
      var t = this.animationsMap[e];
      t ? (t.time = 0,
      t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
  }
  ,
  Fr.prototype.stopAnimation = function(e) {
      (e = this.animationsMap[e]) && (e.active = !1)
  }
  ,
  Fr.prototype.update = function(e) {
      for (var t = 0, i = this.animationsList.length; i > t; t++) {
          var n = this.animationsList[t];
          if (n.active) {
              var r = n.duration / n.length;
              n.time += n.direction * e,
              n.mirroredLoop ? (n.time > n.duration || 0 > n.time) && (n.direction *= -1,
              n.time > n.duration && (n.time = n.duration,
              n.directionBackwards = !0),
              0 > n.time && (n.time = 0,
              n.directionBackwards = !1)) : (n.time %= n.duration,
              0 > n.time && (n.time += n.duration));
              var o = n.start + ho.clamp(Math.floor(n.time / r), 0, n.length - 1)
                , a = n.weight;
              o !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0,
              this.morphTargetInfluences[n.currentFrame] = 1 * a,
              this.morphTargetInfluences[o] = 0,
              n.lastFrame = n.currentFrame,
              n.currentFrame = o),
              r = n.time % r / r,
              n.directionBackwards && (r = 1 - r),
              n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = r * a,
              this.morphTargetInfluences[n.lastFrame] = (1 - r) * a) : this.morphTargetInfluences[n.currentFrame] = a
          }
      }
  }
  ,
  zr.prototype = Object.create(ot.prototype),
  zr.prototype.constructor = zr,
  zr.prototype.isImmediateRenderObject = !0,
  Hr.prototype = Object.create(gi.prototype),
  Hr.prototype.constructor = Hr,
  Hr.prototype.update = function() {
      var e = new c
        , t = new c
        , i = new K;
      return function() {
          var n = ["a", "b", "c"];
          this.object.updateMatrixWorld(!0),
          i.getNormalMatrix(this.object.matrixWorld);
          var r = this.object.matrixWorld
            , o = this.geometry.attributes.position
            , a = this.object.geometry;
          if (a && a.isGeometry)
              for (var s = a.vertices, c = a.faces, h = a = 0, l = c.length; l > h; h++)
                  for (var u = c[h], p = 0, d = u.vertexNormals.length; d > p; p++) {
                      var f = u.vertexNormals[p];
                      e.copy(s[u[n[p]]]).applyMatrix4(r),
                      t.copy(f).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
                      o.setXYZ(a, e.x, e.y, e.z),
                      a += 1,
                      o.setXYZ(a, t.x, t.y, t.z),
                      a += 1
                  }
          else if (a && a.isBufferGeometry)
              for (n = a.attributes.position,
              s = a.attributes.normal,
              p = a = 0,
              d = n.count; d > p; p++)
                  e.set(n.getX(p), n.getY(p), n.getZ(p)).applyMatrix4(r),
                  t.set(s.getX(p), s.getY(p), s.getZ(p)),
                  t.applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
                  o.setXYZ(a, e.x, e.y, e.z),
                  a += 1,
                  o.setXYZ(a, t.x, t.y, t.z),
                  a += 1;
          return o.needsUpdate = !0,
          this
      }
  }(),
  Gr.prototype = Object.create(ot.prototype),
  Gr.prototype.constructor = Gr,
  Gr.prototype.dispose = function() {
      this.cone.geometry.dispose(),
      this.cone.material.dispose()
  }
  ,
  Gr.prototype.update = function() {
      var e = new c
        , t = new c;
      return function() {
          var i = this.light.distance ? this.light.distance : 1e3
            , n = i * Math.tan(this.light.angle);
          this.cone.scale.set(n, n, i),
          e.setFromMatrixPosition(this.light.matrixWorld),
          t.setFromMatrixPosition(this.light.target.matrixWorld),
          this.cone.lookAt(t.sub(e)),
          this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
      }
  }(),
  Vr.prototype = Object.create(gi.prototype),
  Vr.prototype.constructor = Vr,
  Vr.prototype.getBoneList = function(e) {
      var t = [];
      e && e.isBone && t.push(e);
      for (var i = 0; i < e.children.length; i++)
          t.push.apply(t, this.getBoneList(e.children[i]));
      return t
  }
  ,
  Vr.prototype.update = function() {
      var e = new c
        , t = new h
        , i = new h;
      return function() {
          var n = this.geometry
            , r = n.getAttribute("position");
          i.getInverse(this.root.matrixWorld);
          for (var o = 0, a = 0; o < this.bones.length; o++) {
              var s = this.bones[o];
              s.parent && s.parent.isBone && (t.multiplyMatrices(i, s.matrixWorld),
              e.setFromMatrixPosition(t),
              r.setXYZ(a, e.x, e.y, e.z),
              t.multiplyMatrices(i, s.parent.matrixWorld),
              e.setFromMatrixPosition(t),
              r.setXYZ(a + 1, e.x, e.y, e.z),
              a += 2)
          }
          n.getAttribute("position").needsUpdate = !0
      }
  }(),
  kr.prototype = Object.create(Mt.prototype),
  kr.prototype.constructor = kr,
  kr.prototype.dispose = function() {
      this.geometry.dispose(),
      this.material.dispose()
  }
  ,
  kr.prototype.update = function() {
      this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
  }
  ,
  jr.prototype = Object.create(ot.prototype),
  jr.prototype.constructor = jr,
  jr.prototype.dispose = function() {
      this.children[0].geometry.dispose(),
      this.children[0].material.dispose(),
      this.children[1].geometry.dispose(),
      this.children[1].material.dispose()
  }
  ,
  jr.prototype.update = function() {
      var e = new c
        , t = new c;
      return function() {
          var i = this.children[0]
            , n = this.children[1];
          if (this.light.target) {
              e.setFromMatrixPosition(this.light.matrixWorld),
              t.setFromMatrixPosition(this.light.target.matrixWorld);
              var r = t.clone().sub(e);
              i.lookAt(r),
              n.lookAt(r)
          }
          i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
          n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
          var n = .5 * this.light.width
            , r = .5 * this.light.height
            , i = i.geometry.getAttribute("position")
            , o = i.array;
          o[0] = n,
          o[1] = -r,
          o[2] = 0,
          o[3] = n,
          o[4] = r,
          o[5] = 0,
          o[6] = -n,
          o[7] = r,
          o[8] = 0,
          o[9] = -n,
          o[10] = r,
          o[11] = 0,
          o[12] = -n,
          o[13] = -r,
          o[14] = 0,
          o[15] = n,
          o[16] = -r,
          o[17] = 0,
          i.needsUpdate = !0
      }
  }(),
  Wr.prototype = Object.create(ot.prototype),
  Wr.prototype.constructor = Wr,
  Wr.prototype.dispose = function() {
      this.children[0].geometry.dispose(),
      this.children[0].material.dispose()
  }
  ,
  Wr.prototype.update = function() {
      var e = new c
        , t = new V
        , i = new V;
      return function() {
          var n = this.children[0]
            , r = n.geometry.getAttribute("color");
          t.copy(this.light.color).multiplyScalar(this.light.intensity),
          i.copy(this.light.groundColor).multiplyScalar(this.light.intensity);
          for (var o = 0, a = r.count; a > o; o++) {
              var s = a / 2 > o ? t : i;
              r.setXYZ(o, s.r, s.g, s.b)
          }
          n.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
          r.needsUpdate = !0
      }
  }(),
  Xr.prototype = Object.create(gi.prototype),
  Xr.prototype.constructor = Xr,
  qr.prototype = Object.create(gi.prototype),
  qr.prototype.constructor = qr,
  Yr.prototype = Object.create(gi.prototype),
  Yr.prototype.constructor = Yr,
  Yr.prototype.update = function() {
      var e = new c
        , t = new c
        , i = new K;
      return function() {
          this.object.updateMatrixWorld(!0),
          i.getNormalMatrix(this.object.matrixWorld);
          for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, o = o.faces, s = 0, c = 0, h = o.length; h > c; c++) {
              var l = o[c]
                , u = l.normal;
              e.copy(a[l.a]).add(a[l.b]).add(a[l.c]).divideScalar(3).applyMatrix4(n),
              t.copy(u).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
              r.setXYZ(s, e.x, e.y, e.z),
              s += 1,
              r.setXYZ(s, t.x, t.y, t.z),
              s += 1
          }
          return r.needsUpdate = !0,
          this
      }
  }(),
  Zr.prototype = Object.create(ot.prototype),
  Zr.prototype.constructor = Zr,
  Zr.prototype.dispose = function() {
      var e = this.children[0]
        , t = this.children[1];
      e.geometry.dispose(),
      e.material.dispose(),
      t.geometry.dispose(),
      t.material.dispose()
  }
  ,
  Zr.prototype.update = function() {
      var e = new c
        , t = new c
        , i = new c;
      return function() {
          e.setFromMatrixPosition(this.light.matrixWorld),
          t.setFromMatrixPosition(this.light.target.matrixWorld),
          i.subVectors(t, e);
          var n = this.children[0]
            , r = this.children[1];
          n.lookAt(i),
          n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
          r.lookAt(i),
          r.scale.z = i.length()
      }
  }(),
  Jr.prototype = Object.create(gi.prototype),
  Jr.prototype.constructor = Jr,
  Jr.prototype.update = function() {
      function e(e, o, a, s) {
          if (n.set(o, a, s).unproject(r),
          e = i[e],
          void 0 !== e)
              for (o = t.getAttribute("position"),
              a = 0,
              s = e.length; s > a; a++)
                  o.setXYZ(e[a], n.x, n.y, n.z)
      }
      var t, i, n = new c, r = new Lt;
      return function() {
          t = this.geometry,
          i = this.pointMap,
          r.projectionMatrix.copy(this.camera.projectionMatrix),
          e("c", 0, 0, -1),
          e("t", 0, 0, 1),
          e("n1", -1, -1, -1),
          e("n2", 1, -1, -1),
          e("n3", -1, 1, -1),
          e("n4", 1, 1, -1),
          e("f1", -1, -1, 1),
          e("f2", 1, -1, 1),
          e("f3", -1, 1, 1),
          e("f4", 1, 1, 1),
          e("u1", .7, 1.1, -1),
          e("u2", -.7, 1.1, -1),
          e("u3", 0, 2, -1),
          e("cf1", -1, 0, 1),
          e("cf2", 1, 0, 1),
          e("cf3", 0, -1, 1),
          e("cf4", 0, 1, 1),
          e("cn1", -1, 0, -1),
          e("cn2", 1, 0, -1),
          e("cn3", 0, -1, -1),
          e("cn4", 0, 1, -1),
          t.getAttribute("position").needsUpdate = !0
      }
  }(),
  Qr.prototype = Object.create(gi.prototype),
  Qr.prototype.constructor = Qr,
  Qr.prototype.update = function() {
      var e = new J;
      return function(t) {
          if (t && t.isBox3 ? e.copy(t) : e.setFromObject(t),
          !e.isEmpty()) {
              t = e.min;
              var i = e.max
                , n = this.geometry.attributes.position
                , r = n.array;
              r[0] = i.x,
              r[1] = i.y,
              r[2] = i.z,
              r[3] = t.x,
              r[4] = i.y,
              r[5] = i.z,
              r[6] = t.x,
              r[7] = t.y,
              r[8] = i.z,
              r[9] = i.x,
              r[10] = t.y,
              r[11] = i.z,
              r[12] = i.x,
              r[13] = i.y,
              r[14] = t.z,
              r[15] = t.x,
              r[16] = i.y,
              r[17] = t.z,
              r[18] = t.x,
              r[19] = t.y,
              r[20] = t.z,
              r[21] = i.x,
              r[22] = t.y,
              r[23] = t.z,
              n.needsUpdate = !0,
              this.geometry.computeBoundingSphere()
          }
      }
  }();
  var Oo, Bo;
  Kr.prototype = Object.create(ot.prototype),
  Kr.prototype.constructor = Kr,
  Kr.prototype.setDirection = function() {
      var e, t = new c;
      return function(i) {
          .99999 < i.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > i.y ? this.quaternion.set(1, 0, 0, 0) : (t.set(i.z, 0, -i.x).normalize(),
          e = Math.acos(i.y),
          this.quaternion.setFromAxisAngle(t, e))
      }
  }(),
  Kr.prototype.setLength = function(e, t, i) {
      void 0 === t && (t = .2 * e),
      void 0 === i && (i = .2 * t),
      this.line.scale.set(1, Math.max(0, e - t), 1),
      this.line.updateMatrix(),
      this.cone.scale.set(i, t, i),
      this.cone.position.y = e,
      this.cone.updateMatrix()
  }
  ,
  Kr.prototype.setColor = function(e) {
      this.line.material.color.copy(e),
      this.cone.material.color.copy(e)
  }
  ,
  $r.prototype = Object.create(gi.prototype),
  $r.prototype.constructor = $r;
  var Fo = new c
    , zo = new eo
    , Ho = new eo
    , Go = new eo;
  to.prototype = Object.create(tr.prototype),
  to.prototype.constructor = to,
  to.prototype.getPoint = function(e) {
      var t = this.points
        , i = t.length;
      2 > i && console.log("duh, you need at least 2 points"),
      e *= i - (this.closed ? 0 : 1);
      var n = Math.floor(e);
      e -= n,
      this.closed ? n += n > 0 ? 0 : (Math.floor(Math.abs(n) / t.length) + 1) * t.length : 0 === e && n === i - 1 && (n = i - 2,
      e = 1);
      var r, o, a;
      if (this.closed || n > 0 ? r = t[(n - 1) % i] : (Fo.subVectors(t[0], t[1]).add(t[0]),
      r = Fo),
      o = t[n % i],
      a = t[(n + 1) % i],
      this.closed || i > n + 2 ? t = t[(n + 2) % i] : (Fo.subVectors(t[i - 1], t[i - 2]).add(t[i - 1]),
      t = Fo),
      void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
          var s = "chordal" === this.type ? .5 : .25
            , i = Math.pow(r.distanceToSquared(o), s)
            , n = Math.pow(o.distanceToSquared(a), s)
            , s = Math.pow(a.distanceToSquared(t), s);
          1e-4 > n && (n = 1),
          1e-4 > i && (i = n),
          1e-4 > s && (s = n),
          zo.initNonuniformCatmullRom(r.x, o.x, a.x, t.x, i, n, s),
          Ho.initNonuniformCatmullRom(r.y, o.y, a.y, t.y, i, n, s),
          Go.initNonuniformCatmullRom(r.z, o.z, a.z, t.z, i, n, s)
      } else
          "catmullrom" === this.type && (i = void 0 !== this.tension ? this.tension : .5,
          zo.initCatmullRom(r.x, o.x, a.x, t.x, i),
          Ho.initCatmullRom(r.y, o.y, a.y, t.y, i),
          Go.initCatmullRom(r.z, o.z, a.z, t.z, i));
      return new c(zo.calc(e),Ho.calc(e),Go.calc(e))
  }
  ,
  io.prototype = Object.create(tr.prototype),
  io.prototype.constructor = io,
  io.prototype.getPoint = function(e) {
      var t = this.v0
        , i = this.v1
        , n = this.v2
        , r = this.v3;
      return new c(er(e, t.x, i.x, n.x, r.x),er(e, t.y, i.y, n.y, r.y),er(e, t.z, i.z, n.z, r.z))
  }
  ,
  no.prototype = Object.create(tr.prototype),
  no.prototype.constructor = no,
  no.prototype.getPoint = function(e) {
      var t = this.v0
        , i = this.v1
        , n = this.v2;
      return new c($n(e, t.x, i.x, n.x),$n(e, t.y, i.y, n.y),$n(e, t.z, i.z, n.z))
  }
  ,
  ro.prototype = Object.create(tr.prototype),
  ro.prototype.constructor = ro,
  ro.prototype.getPoint = function(e) {
      if (1 === e)
          return this.v2.clone();
      var t = new c;
      return t.subVectors(this.v2, this.v1),
      t.multiplyScalar(e),
      t.add(this.v1),
      t
  }
  ,
  oo.prototype = Object.create(rr.prototype),
  oo.prototype.constructor = oo,
  tr.create = function(e, t) {
      return console.log("THREE.Curve.create() has been deprecated"),
      e.prototype = Object.create(tr.prototype),
      e.prototype.constructor = e,
      e.prototype.getPoint = t,
      e
  }
  ,
  ao.prototype = Object.create(to.prototype),
  so.prototype = Object.create(to.prototype),
  co.prototype = Object.create(to.prototype),
  Object.assign(co.prototype, {
      initFromArray: function() {
          console.error("THREE.Spline: .initFromArray() has been removed.")
      },
      getControlPointsArray: function() {
          console.error("THREE.Spline: .getControlPointsArray() has been removed.")
      },
      reparametrizeByArcLength: function() {
          console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
      }
  }),
  Xr.prototype.setColors = function() {
      console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
  }
  ,
  Object.assign(j.prototype, {
      center: function(e) {
          return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
          this.getCenter(e)
      },
      empty: function() {
          return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
          this.isEmpty()
      },
      isIntersectionBox: function(e) {
          return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
          this.intersectsBox(e)
      },
      size: function(e) {
          return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
          this.getSize(e)
      }
  }),
  Object.assign(J.prototype, {
      center: function(e) {
          return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
          this.getCenter(e)
      },
      empty: function() {
          return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
          this.isEmpty()
      },
      isIntersectionBox: function(e) {
          return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
          this.intersectsBox(e)
      },
      isIntersectionSphere: function(e) {
          return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
          this.intersectsSphere(e)
      },
      size: function(e) {
          return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
          this.getSize(e)
      }
  }),
  at.prototype.center = function(e) {
      return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
      this.getCenter(e)
  }
  ,
  ho.random16 = function() {
      return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
      Math.random()
  }
  ,
  Object.assign(K.prototype, {
      flattenToArrayOffset: function(e, t) {
          return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
          this.toArray(e, t)
      },
      multiplyVector3: function(e) {
          return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
          e.applyMatrix3(this)
      },
      multiplyVector3Array: function(e) {
          return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
          this.applyToVector3Array(e)
      },
      applyToBuffer: function(e) {
          return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
          this.applyToBufferAttribute(e)
      },
      applyToVector3Array: function() {
          console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
      }
  }),
  Object.assign(h.prototype, {
      extractPosition: function(e) {
          return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
          this.copyPosition(e)
      },
      flattenToArrayOffset: function(e, t) {
          return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
          this.toArray(e, t)
      },
      getPosition: function() {
          var e;
          return function() {
              return void 0 === e && (e = new c),
              console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
              e.setFromMatrixColumn(this, 3)
          }
      }(),
      setRotationFromQuaternion: function(e) {
          return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
          this.makeRotationFromQuaternion(e)
      },
      multiplyVector3: function(e) {
          return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
          e.applyMatrix4(this)
      },
      multiplyVector4: function(e) {
          return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
          e.applyMatrix4(this)
      },
      multiplyVector3Array: function(e) {
          return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
          this.applyToVector3Array(e)
      },
      rotateAxis: function(e) {
          console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
          e.transformDirection(this)
      },
      crossVector: function(e) {
          return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
          e.applyMatrix4(this)
      },
      translate: function() {
          console.error("THREE.Matrix4: .translate() has been removed.")
      },
      rotateX: function() {
          console.error("THREE.Matrix4: .rotateX() has been removed.")
      },
      rotateY: function() {
          console.error("THREE.Matrix4: .rotateY() has been removed.")
      },
      rotateZ: function() {
          console.error("THREE.Matrix4: .rotateZ() has been removed.")
      },
      rotateByAxis: function() {
          console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
      },
      applyToBuffer: function(e) {
          return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
          this.applyToBufferAttribute(e)
      },
      applyToVector3Array: function() {
          console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
      },
      makeFrustum: function(e, t, i, n, r, o) {
          return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
          this.makePerspective(e, t, n, i, r, o)
      }
  }),
  $.prototype.isIntersectionLine = function(e) {
      return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
      this.intersectsLine(e)
  }
  ,
  s.prototype.multiplyVector3 = function(e) {
      return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
      e.applyQuaternion(this)
  }
  ,
  Object.assign(it.prototype, {
      isIntersectionBox: function(e) {
          return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
          this.intersectsBox(e)
      },
      isIntersectionPlane: function(e) {
          return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
          this.intersectsPlane(e)
      },
      isIntersectionSphere: function(e) {
          return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
          this.intersectsSphere(e)
      }
  }),
  Object.assign(hr.prototype, {
      extrude: function(e) {
          return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
          new ki(this,e)
      },
      makeGeometry: function(e) {
          return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
          new Qi(this,e)
      }
  }),
  Object.assign(i.prototype, {
      fromAttribute: function(e, t, i) {
          return console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
          this.fromBufferAttribute(e, t, i)
      }
  }),
  Object.assign(c.prototype, {
      setEulerFromRotationMatrix: function() {
          console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
      },
      setEulerFromQuaternion: function() {
          console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
      },
      getPositionFromMatrix: function(e) {
          return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
          this.setFromMatrixPosition(e)
      },
      getScaleFromMatrix: function(e) {
          return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
          this.setFromMatrixScale(e)
      },
      getColumnFromMatrix: function(e, t) {
          return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
          this.setFromMatrixColumn(t, e)
      },
      applyProjection: function(e) {
          return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
          this.applyMatrix4(e)
      },
      fromAttribute: function(e, t, i) {
          return console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
          this.fromBufferAttribute(e, t, i)
      }
  }),
  Object.assign(r.prototype, {
      fromAttribute: function(e, t, i) {
          return console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
          this.fromBufferAttribute(e, t, i)
      }
  }),
  wt.prototype.computeTangents = function() {
      console.warn("THREE.Geometry: .computeTangents() has been removed.")
  }
  ,
  Object.assign(ot.prototype, {
      getChildByName: function(e) {
          return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
          this.getObjectByName(e)
      },
      renderDepth: function() {
          console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
      },
      translate: function(e, t) {
          return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
          this.translateOnAxis(t, e)
      }
  }),
  Object.defineProperties(ot.prototype, {
      eulerOrder: {
          get: function() {
              return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
              this.rotation.order
          },
          set: function(e) {
              console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
              this.rotation.order = e
          }
      },
      useQuaternion: {
          get: function() {
              console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
          },
          set: function() {
              console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
          }
      }
  }),
  Object.defineProperties(li.prototype, {
      objects: {
          get: function() {
              return console.warn("THREE.LOD: .objects has been renamed to .levels."),
              this.levels
          }
      }
  }),
  Pt.prototype.setLens = function(e, t) {
      console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
      void 0 !== t && (this.filmGauge = t),
      this.setFocalLength(e)
  }
  ,
  Object.defineProperties(Mn.prototype, {
      onlyShadow: {
          set: function() {
              console.warn("THREE.Light: .onlyShadow has been removed.")
          }
      },
      shadowCameraFov: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
              this.shadow.camera.fov = e
          }
      },
      shadowCameraLeft: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
              this.shadow.camera.left = e
          }
      },
      shadowCameraRight: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
              this.shadow.camera.right = e
          }
      },
      shadowCameraTop: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
              this.shadow.camera.top = e
          }
      },
      shadowCameraBottom: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
              this.shadow.camera.bottom = e
          }
      },
      shadowCameraNear: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
              this.shadow.camera.near = e
          }
      },
      shadowCameraFar: {
          set: function(e) {
              console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
              this.shadow.camera.far = e
          }
      },
      shadowCameraVisible: {
          set: function() {
              console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
          }
      },
      shadowBias: {
          set: function(e) {
              console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
              this.shadow.bias = e
          }
      },
      shadowDarkness: {
          set: function() {
              console.warn("THREE.Light: .shadowDarkness has been removed.")
          }
      },
      shadowMapWidth: {
          set: function(e) {
              console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
              this.shadow.mapSize.width = e
          }
      },
      shadowMapHeight: {
          set: function(e) {
              console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
              this.shadow.mapSize.height = e
          }
      }
  }),
  Object.defineProperties(lt.prototype, {
      length: {
          get: function() {
              return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
              this.array.length
          }
      }
  }),
  Object.assign(Et.prototype, {
      addIndex: function(e) {
          console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
          this.setIndex(e)
      },
      addDrawCall: function(e, t, i) {
          void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
          console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
          this.addGroup(e, t)
      },
      clearDrawCalls: function() {
          console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
          this.clearGroups()
      },
      computeTangents: function() {
          console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
      },
      computeOffsets: function() {
          console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
      }
  }),
  Object.defineProperties(Et.prototype, {
      drawcalls: {
          get: function() {
              return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
              this.groups
          }
      },
      offsets: {
          get: function() {
              return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
              this.groups
          }
      }
  }),
  Object.defineProperties(Sr.prototype, {
      dynamic: {
          set: function() {
              console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
          }
      },
      onUpdate: {
          value: function() {
              return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
              this
          }
      }
  }),
  Object.defineProperties(q.prototype, {
      wrapAround: {
          get: function() {
              console.warn("THREE." + this.type + ": .wrapAround has been removed.")
          },
          set: function() {
              console.warn("THREE." + this.type + ": .wrapAround has been removed.")
          }
      },
      wrapRGB: {
          get: function() {
              return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
              new V
          }
      }
  }),
  Object.defineProperties(pn.prototype, {
      metal: {
          get: function() {
              return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
              !1
          },
          set: function() {
              console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
          }
      }
  }),
  Object.defineProperties(Y.prototype, {
      derivatives: {
          get: function() {
              return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
              this.extensions.derivatives
          },
          set: function(e) {
              console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
              this.extensions.derivatives = e
          }
      }
  }),
  Object.assign(ni.prototype, {
      supportsFloatTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
          this.extensions.get("OES_texture_float")
      },
      supportsHalfFloatTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
          this.extensions.get("OES_texture_half_float")
      },
      supportsStandardDerivatives: function() {
          return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
          this.extensions.get("OES_standard_derivatives")
      },
      supportsCompressedTextureS3TC: function() {
          return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
          this.extensions.get("WEBGL_compressed_texture_s3tc")
      },
      supportsCompressedTexturePVRTC: function() {
          return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
          this.extensions.get("WEBGL_compressed_texture_pvrtc")
      },
      supportsBlendMinMax: function() {
          return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
          this.extensions.get("EXT_blend_minmax")
      },
      supportsVertexTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
          this.capabilities.vertexTextures
      },
      supportsInstancedArrays: function() {
          return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
          this.extensions.get("ANGLE_instanced_arrays")
      },
      enableScissorTest: function(e) {
          console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
          this.setScissorTest(e)
      },
      initMaterial: function() {
          console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
      },
      addPrePlugin: function() {
          console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
      },
      addPostPlugin: function() {
          console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
      },
      updateShadowMap: function() {
          console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
      }
  }),
  Object.defineProperties(ni.prototype, {
      shadowMapEnabled: {
          get: function() {
              return this.shadowMap.enabled
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
              this.shadowMap.enabled = e
          }
      },
      shadowMapType: {
          get: function() {
              return this.shadowMap.type
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
              this.shadowMap.type = e
          }
      },
      shadowMapCullFace: {
          get: function() {
              return this.shadowMap.cullFace
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
              this.shadowMap.cullFace = e
          }
      }
  }),
  Object.defineProperties(tt.prototype, {
      cullFace: {
          get: function() {
              return this.renderReverseSided ? 2 : 1
          },
          set: function(e) {
              e = 1 !== e,
              console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."),
              this.renderReverseSided = e
          }
      }
  }),
  Object.defineProperties(o.prototype, {
      wrapS: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
              this.texture.wrapS
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
              this.texture.wrapS = e
          }
      },
      wrapT: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
              this.texture.wrapT
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
              this.texture.wrapT = e
          }
      },
      magFilter: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
              this.texture.magFilter
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
              this.texture.magFilter = e
          }
      },
      minFilter: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
              this.texture.minFilter
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
              this.texture.minFilter = e
          }
      },
      anisotropy: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
              this.texture.anisotropy
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
              this.texture.anisotropy = e
          }
      },
      offset: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
              this.texture.offset
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
              this.texture.offset = e
          }
      },
      repeat: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
              this.texture.repeat
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
              this.texture.repeat = e
          }
      },
      format: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
              this.texture.format
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
              this.texture.format = e
          }
      },
      type: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
              this.texture.type
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
              this.texture.type = e
          }
      },
      generateMipmaps: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
              this.texture.generateMipmaps
          },
          set: function(e) {
              console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
              this.texture.generateMipmaps = e
          }
      }
  }),
  yr.prototype.load = function(e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this;
      return (new dr).load(e, function(e) {
          t.setBuffer(e)
      }),
      this
  }
  ,
  br.prototype.getData = function() {
      return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
      this.getFrequencyData()
  }
  ,
  e.WebGLRenderTargetCube = a,
  e.WebGLRenderTarget = o,
  e.WebGLRenderer = ni,
  e.ShaderLib = _o,
  e.UniformsLib = bo,
  e.UniformsUtils = vo,
  e.ShaderChunk = yo,
  e.FogExp2 = ri,
  e.Fog = oi,
  e.Scene = ai,
  e.LensFlare = si,
  e.Sprite = hi,
  e.LOD = li,
  e.SkinnedMesh = di,
  e.Skeleton = ui,
  e.Bone = pi,
  e.Mesh = Mt,
  e.LineSegments = gi,
  e.Line = mi,
  e.Points = yi,
  e.Group = xi,
  e.VideoTexture = bi,
  e.DataTexture = k,
  e.CompressedTexture = _i,
  e.CubeTexture = l,
  e.CanvasTexture = wi,
  e.DepthTexture = Ei,
  e.Texture = n,
  e.CompressedTextureLoader = xn,
  e.DataTextureLoader = bn,
  e.CubeTextureLoader = wn,
  e.TextureLoader = En,
  e.ObjectLoader = Qn,
  e.MaterialLoader = qn,
  e.BufferGeometryLoader = Yn,
  e.DefaultLoadingManager = Po,
  e.LoadingManager = vn,
  e.JSONLoader = Jn,
  e.ImageLoader = _n,
  e.FontLoader = pr,
  e.FileLoader = yn,
  e.Loader = Zn,
  e.Cache = Lo,
  e.AudioLoader = dr,
  e.SpotLightShadow = An,
  e.SpotLight = Rn,
  e.PointLight = Ln,
  e.RectAreaLight = fr,
  e.HemisphereLight = Tn,
  e.DirectionalLightShadow = Pn,
  e.DirectionalLight = Cn,
  e.AmbientLight = In,
  e.LightShadow = Sn,
  e.Light = Mn,
  e.StereoCamera = mr,
  e.PerspectiveCamera = Pt,
  e.OrthographicCamera = Ct,
  e.CubeCamera = gr,
  e.Camera = Lt,
  e.AudioListener = vr,
  e.PositionalAudio = xr,
  e.AudioContext = Do,
  e.AudioAnalyser = br,
  e.Audio = yr,
  e.VectorKeyframeTrack = Fn,
  e.StringKeyframeTrack = Vn,
  e.QuaternionKeyframeTrack = Hn,
  e.NumberKeyframeTrack = Gn,
  e.ColorKeyframeTrack = jn,
  e.BooleanKeyframeTrack = kn,
  e.PropertyMixer = _r,
  e.PropertyBinding = wr,
  e.KeyframeTrack = Wn,
  e.AnimationUtils = Co,
  e.AnimationObjectGroup = Er,
  e.AnimationMixer = Tr,
  e.AnimationClip = Xn,
  e.Uniform = Sr,
  e.InstancedBufferGeometry = Ar,
  e.BufferGeometry = Et,
  e.GeometryIdCount = function() {
      return Mo++
  }
  ,
  e.Geometry = wt,
  e.InterleavedBufferAttribute = Rr,
  e.InstancedInterleavedBuffer = Pr,
  e.InterleavedBuffer = Lr,
  e.InstancedBufferAttribute = Cr,
  e.Face3 = ct,
  e.Object3D = ot,
  e.Raycaster = Ir,
  e.Layers = rt,
  e.EventDispatcher = t,
  e.Clock = Dr,
  e.QuaternionLinearInterpolant = zn,
  e.LinearInterpolant = Dn,
  e.DiscreteInterpolant = On,
  e.CubicInterpolant = Nn,
  e.Interpolant = Un,
  e.Triangle = st,
  e.Math = ho,
  e.Spherical = Or,
  e.Cylindrical = Br,
  e.Plane = $,
  e.Frustum = et,
  e.Sphere = Q,
  e.Ray = it,
  e.Matrix4 = h,
  e.Matrix3 = K,
  e.Box3 = J,
  e.Box2 = j,
  e.Line3 = at,
  e.Euler = nt,
  e.Vector4 = r,
  e.Vector3 = c,
  e.Vector2 = i,
  e.Quaternion = s,
  e.Color = V,
  e.MorphBlendMesh = Fr,
  e.ImmediateRenderObject = zr,
  e.VertexNormalsHelper = Hr,
  e.SpotLightHelper = Gr,
  e.SkeletonHelper = Vr,
  e.PointLightHelper = kr,
  e.RectAreaLightHelper = jr,
  e.HemisphereLightHelper = Wr,
  e.GridHelper = Xr,
  e.PolarGridHelper = qr,
  e.FaceNormalsHelper = Yr,
  e.DirectionalLightHelper = Zr,
  e.CameraHelper = Jr,
  e.BoxHelper = Qr,
  e.ArrowHelper = Kr,
  e.AxisHelper = $r,
  e.CatmullRomCurve3 = to,
  e.CubicBezierCurve3 = io,
  e.QuadraticBezierCurve3 = no,
  e.LineCurve3 = ro,
  e.ArcCurve = oo,
  e.EllipseCurve = rr,
  e.SplineCurve = or,
  e.CubicBezierCurve = ar,
  e.QuadraticBezierCurve = sr,
  e.LineCurve = ir,
  e.Shape = hr,
  e.Path = cr,
  e.ShapePath = lr,
  e.Font = ur,
  e.CurvePath = nr,
  e.Curve = tr,
  e.ShapeUtils = So,
  e.SceneUtils = {
      createMultiMaterialObject: function(e, t) {
          for (var i = new xi, n = 0, r = t.length; r > n; n++)
              i.add(new Mt(e,t[n]));
          return i
      },
      detach: function(e, t, i) {
          e.applyMatrix(t.matrixWorld),
          t.remove(e),
          i.add(e)
      },
      attach: function(e, t, i) {
          var n = new h;
          n.getInverse(i.matrixWorld),
          e.applyMatrix(n),
          t.remove(e),
          i.add(e)
      }
  },
  e.WireframeGeometry = Mi,
  e.ParametricGeometry = Ti,
  e.ParametricBufferGeometry = Si,
  e.TetrahedronGeometry = Li,
  e.TetrahedronBufferGeometry = Pi,
  e.OctahedronGeometry = Ci,
  e.OctahedronBufferGeometry = Ii,
  e.IcosahedronGeometry = Ui,
  e.IcosahedronBufferGeometry = Ni,
  e.DodecahedronGeometry = Di,
  e.DodecahedronBufferGeometry = Oi,
  e.PolyhedronGeometry = Ai,
  e.PolyhedronBufferGeometry = Ri,
  e.TubeGeometry = Bi,
  e.TubeBufferGeometry = Fi,
  e.TorusKnotGeometry = zi,
  e.TorusKnotBufferGeometry = Hi,
  e.TorusGeometry = Gi,
  e.TorusBufferGeometry = Vi,
  e.TextGeometry = ji,
  e.SphereGeometry = Wi,
  e.SphereBufferGeometry = Xi,
  e.RingGeometry = qi,
  e.RingBufferGeometry = Yi,
  e.PlaneGeometry = At,
  e.PlaneBufferGeometry = Rt,
  e.LatheGeometry = Zi,
  e.LatheBufferGeometry = Ji,
  e.ShapeGeometry = Qi,
  e.ShapeBufferGeometry = Ki,
  e.ExtrudeGeometry = ki,
  e.EdgesGeometry = $i,
  e.ConeGeometry = nn,
  e.ConeBufferGeometry = rn,
  e.CylinderGeometry = en,
  e.CylinderBufferGeometry = tn,
  e.CircleGeometry = on,
  e.CircleBufferGeometry = an,
  e.BoxGeometry = Tt,
  e.BoxBufferGeometry = St,
  e.ShadowMaterial = sn,
  e.SpriteMaterial = ci,
  e.RawShaderMaterial = cn,
  e.ShaderMaterial = Y,
  e.PointsMaterial = vi,
  e.MultiMaterial = hn,
  e.MeshPhysicalMaterial = un,
  e.MeshStandardMaterial = ln,
  e.MeshPhongMaterial = pn,
  e.MeshToonMaterial = dn,
  e.MeshNormalMaterial = fn,
  e.MeshLambertMaterial = mn,
  e.MeshDepthMaterial = Z,
  e.MeshBasicMaterial = ht,
  e.LineDashedMaterial = gn,
  e.LineBasicMaterial = fi,
  e.Material = q,
  e.Float64BufferAttribute = xt,
  e.Float32BufferAttribute = yt,
  e.Uint32BufferAttribute = vt,
  e.Int32BufferAttribute = gt,
  e.Uint16BufferAttribute = mt,
  e.Int16BufferAttribute = ft,
  e.Uint8ClampedBufferAttribute = dt,
  e.Uint8BufferAttribute = pt,
  e.Int8BufferAttribute = ut,
  e.BufferAttribute = lt,
  e.REVISION = "84",
  e.MOUSE = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2
  },
  e.CullFaceNone = 0,
  e.CullFaceBack = 1,
  e.CullFaceFront = 2,
  e.CullFaceFrontBack = 3,
  e.FrontFaceDirectionCW = 0,
  e.FrontFaceDirectionCCW = 1,
  e.BasicShadowMap = 0,
  e.PCFShadowMap = 1,
  e.PCFSoftShadowMap = 2,
  e.FrontSide = 0,
  e.BackSide = 1,
  e.DoubleSide = 2,
  e.FlatShading = 1,
  e.SmoothShading = 2,
  e.NoColors = 0,
  e.FaceColors = 1,
  e.VertexColors = 2,
  e.NoBlending = 0,
  e.NormalBlending = 1,
  e.AdditiveBlending = 2,
  e.SubtractiveBlending = 3,
  e.MultiplyBlending = 4,
  e.CustomBlending = 5,
  e.AddEquation = 100,
  e.SubtractEquation = 101,
  e.ReverseSubtractEquation = 102,
  e.MinEquation = 103,
  e.MaxEquation = 104,
  e.ZeroFactor = 200,
  e.OneFactor = 201,
  e.SrcColorFactor = 202,
  e.OneMinusSrcColorFactor = 203,
  e.SrcAlphaFactor = 204,
  e.OneMinusSrcAlphaFactor = 205,
  e.DstAlphaFactor = 206,
  e.OneMinusDstAlphaFactor = 207,
  e.DstColorFactor = 208,
  e.OneMinusDstColorFactor = 209,
  e.SrcAlphaSaturateFactor = 210,
  e.NeverDepth = 0,
  e.AlwaysDepth = 1,
  e.LessDepth = 2,
  e.LessEqualDepth = 3,
  e.EqualDepth = 4,
  e.GreaterEqualDepth = 5,
  e.GreaterDepth = 6,
  e.NotEqualDepth = 7,
  e.MultiplyOperation = 0,
  e.MixOperation = 1,
  e.AddOperation = 2,
  e.NoToneMapping = 0,
  e.LinearToneMapping = 1,
  e.ReinhardToneMapping = 2,
  e.Uncharted2ToneMapping = 3,
  e.CineonToneMapping = 4,
  e.UVMapping = 300,
  e.CubeReflectionMapping = 301,
  e.CubeRefractionMapping = 302,
  e.EquirectangularReflectionMapping = 303,
  e.EquirectangularRefractionMapping = 304,
  e.SphericalReflectionMapping = 305,
  e.CubeUVReflectionMapping = 306,
  e.CubeUVRefractionMapping = 307,
  e.RepeatWrapping = 1e3,
  e.ClampToEdgeWrapping = 1001,
  e.MirroredRepeatWrapping = 1002,
  e.NearestFilter = 1003,
  e.NearestMipMapNearestFilter = 1004,
  e.NearestMipMapLinearFilter = 1005,
  e.LinearFilter = 1006,
  e.LinearMipMapNearestFilter = 1007,
  e.LinearMipMapLinearFilter = 1008,
  e.UnsignedByteType = 1009,
  e.ByteType = 1010,
  e.ShortType = 1011,
  e.UnsignedShortType = 1012,
  e.IntType = 1013,
  e.UnsignedIntType = 1014,
  e.FloatType = 1015,
  e.HalfFloatType = 1016,
  e.UnsignedShort4444Type = 1017,
  e.UnsignedShort5551Type = 1018,
  e.UnsignedShort565Type = 1019,
  e.UnsignedInt248Type = 1020,
  e.AlphaFormat = 1021,
  e.RGBFormat = 1022,
  e.RGBAFormat = 1023,
  e.LuminanceFormat = 1024,
  e.LuminanceAlphaFormat = 1025,
  e.RGBEFormat = 1023,
  e.DepthFormat = 1026,
  e.DepthStencilFormat = 1027,
  e.RGB_S3TC_DXT1_Format = 2001,
  e.RGBA_S3TC_DXT1_Format = 2002,
  e.RGBA_S3TC_DXT3_Format = 2003,
  e.RGBA_S3TC_DXT5_Format = 2004,
  e.RGB_PVRTC_4BPPV1_Format = 2100,
  e.RGB_PVRTC_2BPPV1_Format = 2101,
  e.RGBA_PVRTC_4BPPV1_Format = 2102,
  e.RGBA_PVRTC_2BPPV1_Format = 2103,
  e.RGB_ETC1_Format = 2151,
  e.LoopOnce = 2200,
  e.LoopRepeat = 2201,
  e.LoopPingPong = 2202,
  e.InterpolateDiscrete = 2300,
  e.InterpolateLinear = 2301,
  e.InterpolateSmooth = 2302,
  e.ZeroCurvatureEnding = 2400,
  e.ZeroSlopeEnding = 2401,
  e.WrapAroundEnding = 2402,
  e.TrianglesDrawMode = 0,
  e.TriangleStripDrawMode = 1,
  e.TriangleFanDrawMode = 2,
  e.LinearEncoding = 3e3,
  e.sRGBEncoding = 3001,
  e.GammaEncoding = 3007,
  e.RGBEEncoding = 3002,
  e.LogLuvEncoding = 3003,
  e.RGBM7Encoding = 3004,
  e.RGBM16Encoding = 3005,
  e.RGBDEncoding = 3006,
  e.BasicDepthPacking = 3200,
  e.RGBADepthPacking = 3201,
  e.CubeGeometry = Tt,
  e.Face4 = function(e, t, i, n, r, o, a) {
      return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
      new ct(e,t,i,r,o,a)
  }
  ,
  e.LineStrip = 0,
  e.LinePieces = 1,
  e.MeshFaceMaterial = function(e) {
      return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."),
      new hn(e)
  }
  ,
  e.PointCloud = function(e, t) {
      return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
      new yi(e,t)
  }
  ,
  e.Particle = function(e) {
      return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
      new hi(e)
  }
  ,
  e.ParticleSystem = function(e, t) {
      return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
      new yi(e,t)
  }
  ,
  e.PointCloudMaterial = function(e) {
      return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
      new vi(e)
  }
  ,
  e.ParticleBasicMaterial = function(e) {
      return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
      new vi(e)
  }
  ,
  e.ParticleSystemMaterial = function(e) {
      return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
      new vi(e)
  }
  ,
  e.Vertex = function(e, t, i) {
      return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
      new c(e,t,i)
  }
  ,
  e.DynamicBufferAttribute = function(e, t) {
      return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
      new lt(e,t).setDynamic(!0)
  }
  ,
  e.Int8Attribute = function(e, t) {
      return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
      new ut(e,t)
  }
  ,
  e.Uint8Attribute = function(e, t) {
      return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
      new pt(e,t)
  }
  ,
  e.Uint8ClampedAttribute = function(e, t) {
      return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
      new dt(e,t)
  }
  ,
  e.Int16Attribute = function(e, t) {
      return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
      new ft(e,t)
  }
  ,
  e.Uint16Attribute = function(e, t) {
      return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
      new mt(e,t)
  }
  ,
  e.Int32Attribute = function(e, t) {
      return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
      new gt(e,t)
  }
  ,
  e.Uint32Attribute = function(e, t) {
      return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
      new vt(e,t)
  }
  ,
  e.Float32Attribute = function(e, t) {
      return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
      new yt(e,t)
  }
  ,
  e.Float64Attribute = function(e, t) {
      return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
      new xt(e,t)
  }
  ,
  e.ClosedSplineCurve3 = ao,
  e.SplineCurve3 = so,
  e.Spline = co,
  e.BoundingBoxHelper = function(e, t) {
      return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
      new Qr(e,t)
  }
  ,
  e.EdgesHelper = function(e, t) {
      return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
      new gi(new $i(e.geometry),new fi({
          color: void 0 !== t ? t : 16777215
      }))
  }
  ,
  e.WireframeHelper = function(e, t) {
      return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
      new gi(new Mi(e.geometry),new fi({
          color: void 0 !== t ? t : 16777215
      }))
  }
  ,
  e.XHRLoader = function(e) {
      return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
      new yn(e)
  }
  ,
  e.BinaryTextureLoader = function(e) {
      return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),
      new bn(e)
  }
  ,
  e.GeometryUtils = {
      merge: function(e, t, i) {
          console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
          var n;
          t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(),
          n = t.matrix,
          t = t.geometry),
          e.merge(t, n, i)
      },
      center: function(e) {
          return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
          e.center()
      }
  },
  e.ImageUtils = {
      crossOrigin: void 0,
      loadTexture: function(e, t, i, n) {
          console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
          var r = new En;
          return r.setCrossOrigin(this.crossOrigin),
          e = r.load(e, i, void 0, n),
          t && (e.mapping = t),
          e
      },
      loadTextureCube: function(e, t, i, n) {
          console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
          var r = new wn;
          return r.setCrossOrigin(this.crossOrigin),
          e = r.load(e, i, void 0, n),
          t && (e.mapping = t),
          e
      },
      loadCompressedTexture: function() {
          console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
      },
      loadCompressedTextureCube: function() {
          console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
      }
  },
  e.Projector = function() {
      console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
      this.projectVector = function(e, t) {
          console.warn("THREE.Projector: .projectVector() is now vector.project()."),
          e.project(t)
      }
      ,
      this.unprojectVector = function(e, t) {
          console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
          e.unproject(t)
      }
      ,
      this.pickingRay = function() {
          console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
      }
  }
  ,
  e.CanvasRenderer = function() {
      console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
      this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      this.clear = function() {}
      ,
      this.render = function() {}
      ,
      this.setClearColor = function() {}
      ,
      this.setSize = function() {}
  }
  ,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}),
/**
* @author alteredq / http://alteredqualia.com/
*
* Convolution shader
* ported from o3d sample to WebGL / GLSL
* http://o3d.googlecode.com/svn/trunk/samples/convolution.html
*/
THREE.ConvolutionShader = {
  defines: {
      KERNEL_SIZE_FLOAT: "25.0",
      KERNEL_SIZE_INT: "25"
  },
  uniforms: {
      tDiffuse: {
          value: null
      },
      uImageIncrement: {
          value: new THREE.Vector2(.001953125,0)
      },
      cKernel: {
          value: []
      }
  },
  vertexShader: ["uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
  fragmentShader: ["uniform float cKernel[ KERNEL_SIZE_INT ];", "uniform sampler2D tDiffuse;", "uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vec2 imageCoord = vUv;", "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );", "for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {", "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];", "imageCoord += uImageIncrement;", "}", "gl_FragColor = sum;", "}"].join("\n"),
  buildKernel: function(e) {
      function t(e, t) {
          return Math.exp(-(e * e) / (2 * t * t))
      }
      var i, n, r, o, a = 25, s = 2 * Math.ceil(3 * e) + 1;
      for (s > a && (s = a),
      o = .5 * (s - 1),
      n = new Array(s),
      r = 0,
      i = 0; s > i; ++i)
          n[i] = t(i - o, e),
          r += n[i];
      for (i = 0; s > i; ++i)
          n[i] /= r;
      return n
  }
},
/**
* @author alteredq / http://alteredqualia.com/
*
* Full-screen textured quad shader
*/
THREE.CopyShader = {
  uniforms: {
      tDiffuse: {
          value: null
      },
      opacity: {
          value: 1
      }
  },
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
  fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
},
/**
* @author alteredq / http://alteredqualia.com/
*
* Film grain & scanlines shader
*
* - ported from HLSL to WebGL / GLSL
* http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
*
* Screen Space Static Postprocessor
*
* Produces an analogue noise overlay similar to a film grain / TV static
*
* Original implementation and noise algorithm
* Pat 'Hawthorne' Shearon
*
* Optimized scanlines + noise version with intensity scaling
* Georg 'Leviathan' Steinrohder
*
* This version is provided under a Creative Commons Attribution 3.0 License
* http://creativecommons.org/licenses/by/3.0/
*/
THREE.FilmShader = {
  uniforms: {
      tDiffuse: {
          value: null
      },
      time: {
          value: 0
      },
      nIntensity: {
          value: .5
      },
      sIntensity: {
          value: .05
      },
      sCount: {
          value: 4096
      },
      grayscale: {
          value: 1
      }
  },
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
  fragmentShader: ["#include <common>", "uniform float time;", "uniform bool grayscale;", "uniform float nIntensity;", "uniform float sIntensity;", "uniform float sCount;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 cTextureScreen = texture2D( tDiffuse, vUv );", "float dx = rand( vUv + time );", "vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );", "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );", "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;", "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );", "if( grayscale ) {", "cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );", "}", "gl_FragColor =  vec4( cResult, cTextureScreen.a );", "}"].join("\n")
},
/**
* @author alteredq / http://alteredqualia.com/
*
* Focus shader
* based on PaintEffect postprocess from ro.me
* http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
*/
THREE.FocusShader = {
  uniforms: {
      tDiffuse: {
          value: null
      },
      screenWidth: {
          value: 1024
      },
      screenHeight: {
          value: 1024
      },
      sampleDistance: {
          value: .794
      },
      waveFactor: {
          value: .00125
      }
  },
  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
  fragmentShader: ["uniform float screenWidth;", "uniform float screenHeight;", "uniform float sampleDistance;", "uniform float waveFactor;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 color, org, tmp, add;", "float sample_dist, f;", "vec2 vin;", "vec2 uv = vUv;", "add = color = org = texture2D( tDiffuse, uv );", "vin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );", "sample_dist = dot( vin, vin ) * 2.0;", "f = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;", "vec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "add += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );", "if( tmp.b < color.b ) color = tmp;", "color = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );", "color = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );", "gl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );", "}"].join("\n")
},
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.EffectComposer = function(e, t) {
  if (this.renderer = e,
  void 0 === t) {
      var i = {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          stencilBuffer: !1
      }
        , n = e.getSize();
      t = new THREE.WebGLRenderTarget(n.width,n.height,i)
  }
  this.renderTarget1 = t,
  this.renderTarget2 = t.clone(),
  this.writeBuffer = this.renderTarget1,
  this.readBuffer = this.renderTarget2,
  this.passes = [],
  void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"),
  this.copyPass = new THREE.ShaderPass(THREE.CopyShader)
}
,
Object.assign(THREE.EffectComposer.prototype, {
  swapBuffers: function() {
      var e = this.readBuffer;
      this.readBuffer = this.writeBuffer,
      this.writeBuffer = e
  },
  addPass: function(e) {
      this.passes.push(e);
      var t = this.renderer.getSize();
      e.setSize(t.width, t.height)
  },
  insertPass: function(e, t) {
      this.passes.splice(t, 0, e)
  },
  render: function(e) {
      var t, i, n = !1, r = this.passes.length;
      for (i = 0; r > i; i++)
          if (t = this.passes[i],
          t.enabled !== !1) {
              if (t.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
              t.needsSwap) {
                  if (n) {
                      var o = this.renderer.context;
                      o.stencilFunc(o.NOTEQUAL, 1, 4294967295),
                      this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                      o.stencilFunc(o.EQUAL, 1, 4294967295)
                  }
                  this.swapBuffers()
              }
              void 0 !== THREE.MaskPass && (t instanceof THREE.MaskPass ? n = !0 : t instanceof THREE.ClearMaskPass && (n = !1))
          }
  },
  reset: function(e) {
      if (void 0 === e) {
          var t = this.renderer.getSize();
          e = this.renderTarget1.clone(),
          e.setSize(t.width, t.height)
      }
      this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      this.renderTarget1 = e,
      this.renderTarget2 = e.clone(),
      this.writeBuffer = this.renderTarget1,
      this.readBuffer = this.renderTarget2
  },
  setSize: function(e, t) {
      this.renderTarget1.setSize(e, t),
      this.renderTarget2.setSize(e, t);
      for (var i = 0; i < this.passes.length; i++)
          this.passes[i].setSize(e, t)
  }
}),
THREE.Pass = function() {
  this.enabled = !0,
  this.needsSwap = !0,
  this.clear = !1,
  this.renderToScreen = !1
}
,
Object.assign(THREE.Pass.prototype, {
  setSize: function() {},
  render: function() {
      console.error("THREE.Pass: .render() must be implemented in derived pass.")
  }
}),
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.MaskPass = function(e, t) {
  THREE.Pass.call(this),
  this.scene = e,
  this.camera = t,
  this.clear = !0,
  this.needsSwap = !1,
  this.inverse = !1
}
,
THREE.MaskPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.MaskPass,
  render: function(e, t, i) {
      var n = e.context
        , r = e.state;
      r.buffers.color.setMask(!1),
      r.buffers.depth.setMask(!1),
      r.buffers.color.setLocked(!0),
      r.buffers.depth.setLocked(!0);
      var o, a;
      this.inverse ? (o = 0,
      a = 1) : (o = 1,
      a = 0),
      r.buffers.stencil.setTest(!0),
      r.buffers.stencil.setOp(n.REPLACE, n.REPLACE, n.REPLACE),
      r.buffers.stencil.setFunc(n.ALWAYS, o, 4294967295),
      r.buffers.stencil.setClear(a),
      e.render(this.scene, this.camera, i, this.clear),
      e.render(this.scene, this.camera, t, this.clear),
      r.buffers.color.setLocked(!1),
      r.buffers.depth.setLocked(!1),
      r.buffers.stencil.setFunc(n.EQUAL, 1, 4294967295),
      r.buffers.stencil.setOp(n.KEEP, n.KEEP, n.KEEP)
  }
}),
THREE.ClearMaskPass = function() {
  THREE.Pass.call(this),
  this.needsSwap = !1
}
,
THREE.ClearMaskPass.prototype = Object.create(THREE.Pass.prototype),
Object.assign(THREE.ClearMaskPass.prototype, {
  render: function(e) {
      e.state.buffers.stencil.setTest(!1)
  }
}),
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.RenderPass = function(e, t, i, n, r) {
  THREE.Pass.call(this),
  this.scene = e,
  this.camera = t,
  this.overrideMaterial = i,
  this.clearColor = n,
  this.clearAlpha = void 0 !== r ? r : 0,
  this.clear = !0,
  this.clearDepth = !1,
  this.needsSwap = !1
}
,
THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.RenderPass,
  render: function(e, t, i) {
      var n = e.autoClear;
      e.autoClear = !1,
      this.scene.overrideMaterial = this.overrideMaterial;
      var r, o;
      this.clearColor && (r = e.getClearColor().getHex(),
      o = e.getClearAlpha(),
      e.setClearColor(this.clearColor, this.clearAlpha)),
      this.clearDepth && e.clearDepth(),
      e.render(this.scene, this.camera, this.renderToScreen ? null : i, this.clear),
      this.clearColor && e.setClearColor(r, o),
      this.scene.overrideMaterial = null,
      e.autoClear = n
  }
}),
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.BloomPass = function(e, t, i, n) {
  THREE.Pass.call(this),
  e = void 0 !== e ? e : 1,
  t = void 0 !== t ? t : 25,
  i = void 0 !== i ? i : 4,
  n = void 0 !== n ? n : 256;
  var r = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat
  };
  this.renderTargetX = new THREE.WebGLRenderTarget(n,n,r),
  this.renderTargetY = new THREE.WebGLRenderTarget(n,n,r),
  void 0 === THREE.CopyShader && console.error("THREE.BloomPass relies on THREE.CopyShader");
  var o = THREE.CopyShader;
  this.copyUniforms = THREE.UniformsUtils.clone(o.uniforms),
  this.copyUniforms.opacity.value = e,
  this.materialCopy = new THREE.ShaderMaterial({
      uniforms: this.copyUniforms,
      vertexShader: o.vertexShader,
      fragmentShader: o.fragmentShader,
      blending: THREE.AdditiveBlending,
      transparent: !0
  }),
  void 0 === THREE.ConvolutionShader && console.error("THREE.BloomPass relies on THREE.ConvolutionShader");
  var a = THREE.ConvolutionShader;
  this.convolutionUniforms = THREE.UniformsUtils.clone(a.uniforms),
  this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurX,
  this.convolutionUniforms.cKernel.value = THREE.ConvolutionShader.buildKernel(i),
  this.materialConvolution = new THREE.ShaderMaterial({
      uniforms: this.convolutionUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader,
      defines: {
          KERNEL_SIZE_FLOAT: t.toFixed(1),
          KERNEL_SIZE_INT: t.toFixed(0)
      }
  }),
  this.needsSwap = !1,
  this.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
  this.scene = new THREE.Scene,
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),
  this.quad.frustumCulled = !1,
  this.scene.add(this.quad)
}
,
THREE.BloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.BloomPass,
  render: function(e, t, i, n, r) {
      r && e.context.disable(e.context.STENCIL_TEST),
      this.quad.material = this.materialConvolution,
      this.convolutionUniforms.tDiffuse.value = i.texture,
      this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurX,
      e.render(this.scene, this.camera, this.renderTargetX, !0),
      this.convolutionUniforms.tDiffuse.value = this.renderTargetX.texture,
      this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurY,
      e.render(this.scene, this.camera, this.renderTargetY, !0),
      this.quad.material = this.materialCopy,
      this.copyUniforms.tDiffuse.value = this.renderTargetY.texture,
      r && e.context.enable(e.context.STENCIL_TEST),
      e.render(this.scene, this.camera, i, this.clear)
  }
}),
THREE.BloomPass.blurX = new THREE.Vector2(.001953125,0),
THREE.BloomPass.blurY = new THREE.Vector2(0,.001953125),
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.ShaderPass = function(e, t) {
  THREE.Pass.call(this),
  this.textureID = void 0 !== t ? t : "tDiffuse",
  e instanceof THREE.ShaderMaterial ? (this.uniforms = e.uniforms,
  this.material = e) : e && (this.uniforms = THREE.UniformsUtils.clone(e.uniforms),
  this.material = new THREE.ShaderMaterial({
      defines: e.defines || {},
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
  })),
  this.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
  this.scene = new THREE.Scene,
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),
  this.quad.frustumCulled = !1,
  this.scene.add(this.quad)
}
,
THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.ShaderPass,
  render: function(e, t, i) {
      this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = i.texture),
      this.quad.material = this.material,
      this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
  }
}),
/**
* @author alteredq / http://alteredqualia.com/
*/
THREE.FilmPass = function(e, t, i, n) {
  THREE.Pass.call(this),
  void 0 === THREE.FilmShader && console.error("THREE.FilmPass relies on THREE.FilmShader");
  var r = THREE.FilmShader;
  this.uniforms = THREE.UniformsUtils.clone(r.uniforms),
  this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: r.vertexShader,
      fragmentShader: r.fragmentShader
  }),
  void 0 !== n && (this.uniforms.grayscale.value = n),
  void 0 !== e && (this.uniforms.nIntensity.value = e),
  void 0 !== t && (this.uniforms.sIntensity.value = t),
  void 0 !== i && (this.uniforms.sCount.value = i),
  this.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
  this.scene = new THREE.Scene,
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),
  this.quad.frustumCulled = !1,
  this.scene.add(this.quad)
}
,
THREE.FilmPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.FilmPass,
  render: function(e, t, i, n) {
      this.uniforms.tDiffuse.value = i.texture,
      this.uniforms.time.value += n,
      this.quad.material = this.material,
      this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
  }
}),
/**
* Break faces with edges longer than maxEdgeLength
* - not recursive
*
* @author alteredq / http://alteredqualia.com/
*/
THREE.TessellateModifier = function(e) {
  this.maxEdgeLength = e
}
,
THREE.TessellateModifier.prototype.modify = function(e) {
  for (var t, i = [], n = [], r = this.maxEdgeLength * this.maxEdgeLength, o = 0, a = e.faceVertexUvs.length; a > o; o++)
      n[o] = [];
  for (var o = 0, a = e.faces.length; a > o; o++) {
      var s = e.faces[o];
      if (s instanceof THREE.Face3) {
          var c = s.a
            , h = s.b
            , l = s.c
            , u = e.vertices[c]
            , p = e.vertices[h]
            , d = e.vertices[l]
            , f = u.distanceToSquared(p)
            , m = p.distanceToSquared(d)
            , g = u.distanceToSquared(d);
          if (f > r || m > r || g > r) {
              var v = e.vertices.length
                , y = s.clone()
                , x = s.clone();
              if (f >= m && f >= g) {
                  var b = u.clone();
                  if (b.lerp(p, .5),
                  y.a = c,
                  y.b = v,
                  y.c = l,
                  x.a = v,
                  x.b = h,
                  x.c = l,
                  3 === s.vertexNormals.length) {
                      var _ = s.vertexNormals[0].clone();
                      _.lerp(s.vertexNormals[1], .5),
                      y.vertexNormals[1].copy(_),
                      x.vertexNormals[0].copy(_)
                  }
                  if (3 === s.vertexColors.length) {
                      var w = s.vertexColors[0].clone();
                      w.lerp(s.vertexColors[1], .5),
                      y.vertexColors[1].copy(w),
                      x.vertexColors[0].copy(w)
                  }
                  t = 0
              } else if (m >= f && m >= g) {
                  var b = p.clone();
                  if (b.lerp(d, .5),
                  y.a = c,
                  y.b = h,
                  y.c = v,
                  x.a = v,
                  x.b = l,
                  x.c = c,
                  3 === s.vertexNormals.length) {
                      var _ = s.vertexNormals[1].clone();
                      _.lerp(s.vertexNormals[2], .5),
                      y.vertexNormals[2].copy(_),
                      x.vertexNormals[0].copy(_),
                      x.vertexNormals[1].copy(s.vertexNormals[2]),
                      x.vertexNormals[2].copy(s.vertexNormals[0])
                  }
                  if (3 === s.vertexColors.length) {
                      var w = s.vertexColors[1].clone();
                      w.lerp(s.vertexColors[2], .5),
                      y.vertexColors[2].copy(w),
                      x.vertexColors[0].copy(w),
                      x.vertexColors[1].copy(s.vertexColors[2]),
                      x.vertexColors[2].copy(s.vertexColors[0])
                  }
                  t = 1
              } else {
                  var b = u.clone();
                  if (b.lerp(d, .5),
                  y.a = c,
                  y.b = h,
                  y.c = v,
                  x.a = v,
                  x.b = h,
                  x.c = l,
                  3 === s.vertexNormals.length) {
                      var _ = s.vertexNormals[0].clone();
                      _.lerp(s.vertexNormals[2], .5),
                      y.vertexNormals[2].copy(_),
                      x.vertexNormals[0].copy(_)
                  }
                  if (3 === s.vertexColors.length) {
                      var w = s.vertexColors[0].clone();
                      w.lerp(s.vertexColors[2], .5),
                      y.vertexColors[2].copy(w),
                      x.vertexColors[0].copy(w)
                  }
                  t = 2
              }
              i.push(y, x),
              e.vertices.push(b);
              for (var E = 0, M = e.faceVertexUvs.length; M > E; E++)
                  if (e.faceVertexUvs[E].length) {
                      var T = e.faceVertexUvs[E][o]
                        , S = T[0]
                        , A = T[1]
                        , R = T[2];
                      if (0 === t) {
                          var L = S.clone();
                          L.lerp(A, .5);
                          var P = [S.clone(), L.clone(), R.clone()]
                            , C = [L.clone(), A.clone(), R.clone()]
                      } else if (1 === t) {
                          var L = A.clone();
                          L.lerp(R, .5);
                          var P = [S.clone(), A.clone(), L.clone()]
                            , C = [L.clone(), R.clone(), S.clone()]
                      } else {
                          var L = S.clone();
                          L.lerp(R, .5);
                          var P = [S.clone(), A.clone(), L.clone()]
                            , C = [L.clone(), A.clone(), R.clone()]
                      }
                      n[E].push(P, C)
                  }
          } else {
              i.push(s);
              for (var E = 0, M = e.faceVertexUvs.length; M > E; E++)
                  n[E].push(e.faceVertexUvs[E][o])
          }
      }
  }
  e.faces = i,
  e.faceVertexUvs = n
}
;
var TWEEN = TWEEN || function() {
  var e = [];
  return {
      REVISION: "7",
      getAll: function() {
          return e
      },
      removeAll: function() {
          e = []
      },
      add: function(t) {
          e.push(t)
      },
      remove: function(t) {
          t = e.indexOf(t),
          -1 !== t && e.splice(t, 1)
      },
      update: function(t) {
          if (0 === e.length)
              return !1;
          for (var i = 0, n = e.length, t = void 0 !== t ? t : Date.now(); n > i; )
              e[i].update(t) ? i++ : (e.splice(i, 1),
              n--);
          return !0
      }
  }
}();
TWEEN.Tween = function(e) {
  var t = {}
    , i = {}
    , n = 1e3
    , r = 0
    , o = null
    , a = TWEEN.Easing.Linear.None
    , s = TWEEN.Interpolation.Linear
    , c = []
    , h = null
    , l = !1
    , u = null
    , p = null;
  this.to = function(e, t) {
      return null !== t && (n = t),
      i = e,
      this
  }
  ,
  this.start = function(n) {
      TWEEN.add(this),
      l = !1,
      o = void 0 !== n ? n : Date.now(),
      o += r;
      for (var a in i)
          if (null !== e[a]) {
              if (i[a]instanceof Array) {
                  if (0 === i[a].length)
                      continue;
                  i[a] = [e[a]].concat(i[a])
              }
              t[a] = e[a]
          }
      return this
  }
  ,
  this.stop = function() {
      return TWEEN.remove(this),
      this
  }
  ,
  this.delay = function(e) {
      return r = e,
      this
  }
  ,
  this.easing = function(e) {
      return a = e,
      this
  }
  ,
  this.interpolation = function(e) {
      return s = e,
      this
  }
  ,
  this.chain = function() {
      return c = arguments,
      this
  }
  ,
  this.onStart = function(e) {
      return h = e,
      this
  }
  ,
  this.onUpdate = function(e) {
      return u = e,
      this
  }
  ,
  this.onComplete = function(e) {
      return p = e,
      this
  }
  ,
  this.update = function(r) {
      if (o > r)
          return !0;
      !1 === l && (null !== h && h.call(e),
      l = !0);
      var d, f = (r - o) / n, f = f > 1 ? 1 : f, m = a(f);
      for (d in t) {
          var g = t[d]
            , v = i[d];
          e[d] = v instanceof Array ? s(v, m) : g + (v - g) * m
      }
      if (null !== u && u.call(e, m),
      1 == f) {
          for (null !== p && p.call(e),
          f = 0,
          m = c.length; m > f; f++)
              c[f].start(r);
          return !1
      }
      return !0
  }
}
,
TWEEN.Easing = {
  Linear: {
      None: function(e) {
          return e
      }
  },
  Quadratic: {
      In: function(e) {
          return e * e
      },
      Out: function(e) {
          return e * (2 - e)
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
      }
  },
  Cubic: {
      In: function(e) {
          return e * e * e
      },
      Out: function(e) {
          return --e * e * e + 1
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
      }
  },
  Quartic: {
      In: function(e) {
          return e * e * e * e
      },
      Out: function(e) {
          return 1 - --e * e * e * e
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
      }
  },
  Quintic: {
      In: function(e) {
          return e * e * e * e * e
      },
      Out: function(e) {
          return --e * e * e * e * e + 1
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
      }
  },
  Sinusoidal: {
      In: function(e) {
          return 1 - Math.cos(e * Math.PI / 2)
      },
      Out: function(e) {
          return Math.sin(e * Math.PI / 2)
      },
      InOut: function(e) {
          return .5 * (1 - Math.cos(Math.PI * e))
      }
  },
  Exponential: {
      In: function(e) {
          return 0 === e ? 0 : Math.pow(1024, e - 1)
      },
      Out: function(e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
      },
      InOut: function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : 1 > (e *= 2) ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
      }
  },
  Circular: {
      In: function(e) {
          return 1 - Math.sqrt(1 - e * e)
      },
      Out: function(e) {
          return Math.sqrt(1 - --e * e)
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
      }
  },
  Elastic: {
      In: function(e) {
          var t, i = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1,
          t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI),
          -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4)))
      },
      Out: function(e) {
          var t, i = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1,
          t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI),
          i * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / .4) + 1)
      },
      InOut: function(e) {
          var t, i = .1;
          return 0 === e ? 0 : 1 === e ? 1 : (!i || 1 > i ? (i = 1,
          t = .1) : t = .4 * Math.asin(1 / i) / (2 * Math.PI),
          1 > (e *= 2) ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) : .5 * i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) + 1)
      }
  },
  Back: {
      In: function(e) {
          return e * e * (2.70158 * e - 1.70158)
      },
      Out: function(e) {
          return --e * e * (2.70158 * e + 1.70158) + 1
      },
      InOut: function(e) {
          return 1 > (e *= 2) ? .5 * e * e * (3.5949095 * e - 2.5949095) : .5 * ((e -= 2) * e * (3.5949095 * e + 2.5949095) + 2)
      }
  },
  Bounce: {
      In: function(e) {
          return 1 - TWEEN.Easing.Bounce.Out(1 - e)
      },
      Out: function(e) {
          return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      },
      InOut: function(e) {
          return .5 > e ? .5 * TWEEN.Easing.Bounce.In(2 * e) : .5 * TWEEN.Easing.Bounce.Out(2 * e - 1) + .5
      }
  }
},
TWEEN.Interpolation = {
  Linear: function(e, t) {
      var i = e.length - 1
        , n = i * t
        , r = Math.floor(n)
        , o = TWEEN.Interpolation.Utils.Linear;
      return 0 > t ? o(e[0], e[1], n) : t > 1 ? o(e[i], e[i - 1], i - n) : o(e[r], e[r + 1 > i ? i : r + 1], n - r)
  },
  Bezier: function(e, t) {
      var i, n = 0, r = e.length - 1, o = Math.pow, a = TWEEN.Interpolation.Utils.Bernstein;
      for (i = 0; r >= i; i++)
          n += o(1 - t, r - i) * o(t, i) * e[i] * a(r, i);
      return n
  },
  CatmullRom: function(e, t) {
      var i = e.length - 1
        , n = i * t
        , r = Math.floor(n)
        , o = TWEEN.Interpolation.Utils.CatmullRom;
      return e[0] === e[i] ? (0 > t && (r = Math.floor(n = i * (1 + t))),
      o(e[(r - 1 + i) % i], e[r], e[(r + 1) % i], e[(r + 2) % i], n - r)) : 0 > t ? e[0] - (o(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[i] - (o(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i]) : o(e[r ? r - 1 : 0], e[r], e[r + 1 > i ? i : r + 1], e[r + 2 > i ? i : r + 2], n - r)
  },
  Utils: {
      Linear: function(e, t, i) {
          return (t - e) * i + e
      },
      Bernstein: function(e, t) {
          var i = TWEEN.Interpolation.Utils.Factorial;
          return i(e) / i(t) / i(e - t)
      },
      Factorial: function() {
          var e = [1];
          return function(t) {
              var i, n = 1;
              if (e[t])
                  return e[t];
              for (i = t; i > 1; i--)
                  n *= i;
              return e[t] = n
          }
      }(),
      CatmullRom: function(e, t, i, n, r) {
          var e = .5 * (i - e)
            , n = .5 * (n - t)
            , o = r * r;
          return (2 * t - 2 * i + e + n) * r * o + (-3 * t + 3 * i - 2 * e - n) * o + e * r + t
      }
  }
},
function() {
  function e() {
      i(),
      r(),
      n(),
      u(),
      o()
  }
  function t() {
      requestAnimationFrame(t),
      TWEEN.update(),
      Z && (S.geometry.verticesNeedUpdate = !0),
      b(),
      m(),
      g(),
      c(),
      I && I.update(),
      T.render()
  }
  function i() {
      M = new THREE.WebGLRenderer({
          antialias: !1,
          alpha: !0
      }),
      M.setSize(B, F),
      M.sortObjects = !1,
      M.autoClear = !1,
      M.domElement.id = "mainanim",
      document.body.appendChild(M.domElement),
      window.addEventListener("resize", d),
      window.addEventListener("orientationchange", d)
  }
  function n() {
      E = new THREE.PerspectiveCamera(ismobile ? 100 : 75,B / F,1,5e4),
      E.position.set(0, 0, 1e3),
      E.lookAt(new THREE.Vector3(0,0,0))
  }
  function r() {
      w = new THREE.Scene,
      debug || (w.fog = new THREE.FogExp2(328972,5e-4),
      M.setClearColor(w.fog.color))
  }
  function o() {
      if (!ismobile)
          var e = new THREE.TessellateModifier(.01);
      var t = 0
        , i = ["//game.gtimg.cn/images/up/act/a20170301pre/js/obj/cpgame3.json", "//game.gtimg.cn/images/up/act/a20170301pre/js/obj/cpac5.json", "//game.gtimg.cn/images/up/act/a20170301pre/js/obj/cpbook2.json", "//game.gtimg.cn/images/up/act/a20170301pre/js/obj/cpmovie4.json", "//game.gtimg.cn/images/up/act/a20170301pre/js/obj/cpkv3.json", "//game.gtimg.cn/images/up/act/a20170301pre/js/obj/qr.json"]
        , n = [700, 700, 1e3, 1200, 1500, 500]
        , r = [[72, 30, 60], [0, -30, 0], [0, 0, 0], [90, 180, 0], [10, 0, 0], [0, 0, 0]]
        , o = [[-400, 100, 0], [400, 0, 0], [-500, 150, 0], [0, 0, 0], [0, -500, 0], [0, 0, 0]];
      ismobile && (n = [700, 700, 1e3, 1200, 2e3, 500],
      r = [[72, 30, 60], [0, -30, 0], [10, 0, 0], [90, 180, 0], [-10, 0, 0], [0, 0, 0]],
      o = [[-250, 200, 0], [400, 50, 0], [-100, 250, 0], [0, 200, 0], [0, -800, 0], [0, 0, 0]]),
      i.forEach(function(s, c) {
          (new THREE.JSONLoader).load(s, function(h) {
              $("body").trigger("resloading"),
              resloaded += .1;
              s.match(/.*\/(.*?\.json)$/)[1];
              c !== i.length - 2 || ismobile || e.modify(h),
              ismobile && h.vertices.length > 4e3,
              h.center(),
              h.normalize(),
              h.rotateX(3.14 * r[c][0] / 180),
              h.rotateY(3.14 * r[c][1] / 180),
              h.rotateZ(3.14 * r[c][2] / 180),
              h.scale(n[c], n[c], n[c]),
              h.translate(o[c][0], o[c][1], o[c][2]);
              var l = [];
              h.vertices.forEach(function() {
                  l.push(new THREE.Color("hsl(160, 100%, 100%)"))
              });
              for (var u = 0; u < h.faces.length; u++) {
                  var p = h.faces[u];
                  l[p.a] = p.vertexColors[0] || new THREE.Color("hsl(" + (160 + 0 * Math.random()) + ", 100%, 100%)"),
                  l[p.b] = p.vertexColors[1] || new THREE.Color("hsl(" + (160 + 0 * Math.random()) + ", 100%, 100%)"),
                  l[p.c] = p.vertexColors[2] || new THREE.Color("hsl(" + (160 + 0 * Math.random()) + ", 100%, 100%)")
              }
              h.colors = l,
              j[c] = h,
              t++,
              t === i.length && a()
          })
      })
  }
  function a() {
      var e = new THREE.Geometry
        , t = 1e3
        , i = Math.max.apply(null, j.map(function(e) {
          return e.vertices.length
      }));
      e.colors = [];
      for (var n = 0; i > n; n++)
          e.vertices.push(1e6 > n ? new THREE.Vector3(_(-1 * t, t),_(-1 * t, t),_(-12 * t, 1 * t)) : new THREE.Vector3(0,0,0)),
          e.colors.push(new THREE.Color("hsl(" + (180 + 10 * Math.random()) + ", 100%, 100%)"));
      var r = new THREE.TextureLoader;
      r.crossOrigin = "",
      r.load("//game.gtimg.cn/images/up/act/a20170301pre/images/three/gradient.png", function(i) {
          var n = new THREE.PointsMaterial({
              size: 5,
              map: i,
              blending: THREE.AdditiveBlending,
              depthWrite: !1,
              transparent: !0,
              vertexColors: THREE.VertexColors
          });
          S = new THREE.Points(e,n),
          S.position.z = -1 * t,
          h()
      })
  }
  function s() {
      var e = new THREE.Geometry
        , t = 1500
        , i = 500;
      e.colors = [];
      for (var n = 0; i > n; n++)
          e.vertices.push(new THREE.Vector3(_(-1 * t, t),_(-1 * t, t),_(-1 * t, t))),
          e.colors.push(new THREE.Color("hsl(" + (190 + 30 * Math.random()) + ", 0%, 100%)"));
      var r = new THREE.TextureLoader;
      r.crossOrigin = "",
      r.load("//game.gtimg.cn/images/up/act/a20170301pre/images/three/gradient.png", function(i) {
          var n = new THREE.PointsMaterial({
              size: 7,
              map: i,
              blending: THREE.AdditiveBlending,
              depthWrite: !1,
              transparent: !0,
              vertexColors: THREE.VertexColors
          });
          A = new THREE.Points(e,n),
          A.position.z = -1 * t,
          A.position.x = -.1 * t,
          R = new THREE.Points(e,n),
          R.position.z = -1.1 * t,
          R.position.y = -.2 * t,
          L = new THREE.Points(e,n),
          L.position.z = -1.2 * t,
          w.add(A),
          w.add(R),
          w.add(L)
      })
  }
  function c() {
      A && introed && (A.rotation.x -= W.firefly / 1.5,
      R.rotation.y += W.firefly,
      L.rotation.z += W.firefly / 2)
  }
  function h() {
      C = new THREE.Object3D,
      C.add(S);
      for (var e = ["//game.gtimg.cn/images/up/act/a20170301pre/images/three/banner1.png", "//game.gtimg.cn/images/up/act/a20170301pre/images/three/banner2.png", "//game.gtimg.cn/images/up/act/a20170301pre/images/three/banner3.png", "//game.gtimg.cn/images/up/act/a20170301pre/images/three/banner4.png"], t = 3e3, i = -1e3, n = new THREE.PlaneBufferGeometry(1024,512), r = 0, o = 0; o < e.length; o++)
          !function(o) {
              var a = new THREE.TextureLoader;
              a.crossOrigin = "",
              a.load(e[o], function(a) {
                  $("body").trigger("resloading"),
                  resloaded += .1;
                  var s = new THREE.MeshLambertMaterial({
                      side: THREE.DoubleSide,
                      color: 16777215,
                      map: a,
                      transparent: !0
                  });
                  s.map = a;
                  var c = new THREE.Mesh(n,s);
                  c.position.z = i - t * o,
                  C.add(c),
                  r++,
                  r === e.length && (C.position.z = -2e3,
                  w.add(C),
                  $("body").trigger("resloaded"))
              })
          }(o)
  }
  function l() {
      for (var e, i = debug ? 2e3 : 25e3, n = 5, r = 1e3, o = 3e3, a = new TWEEN.Tween(S.position).to({
          z: .1
      }, i).easing(TWEEN.Easing.Linear.None).delay(1e3).onUpdate(function() {}).onStart(function() {}).onComplete(function() {}), s = [], c = 0; n > c; c++)
          e = new TWEEN.Tween(C.position).to({
              z: r + o * c
          }, i / n).easing(TWEEN.Easing.Quintic.InOut).onUpdate(function() {}).onStart(function() {}).onComplete(function() {}),
          s.push(e);
      for (var c = 0; c < s.length - 1; c++)
          s[c].chain(s[c + 1]);
      s[0].start(),
      a.start(),
      setTimeout(function() {
          introed || (v(),
          $("body").trigger("introed"))
      }, i - 1e3),
      t()
  }
  function u() {
      var e = new THREE.RenderPass(w,E)
        , t = new THREE.BloomPass(.75)
        , i = new THREE.FilmPass(.5,.5,1500,!1);
      P = new THREE.ShaderPass(THREE.FocusShader),
      P.uniforms.screenWidth.value = window.innerWidth,
      P.uniforms.screenHeight.value = window.innerHeight,
      P.renderToScreen = !0,
      T = new THREE.EffectComposer(M),
      T.addPass(e),
      T.addPass(t),
      T.addPass(i),
      T.addPass(P)
  }
  function p(e) {
      isnowpop || X || (V = 3e-4 * (e.clientX - z),
      k = 1e-4 * (e.clientY - H))
  }
  function d() {
      E.aspect = window.innerWidth / window.innerHeight,
      E.updateProjectionMatrix(),
      M.setSize(window.innerWidth, window.innerHeight),
      T.reset(),
      P.uniforms.screenWidth.value = window.innerWidth,
      P.uniforms.screenHeight.value = window.innerHeight
  }
  function f() {
      TWEEN.removeAll(),
      S.position.z = .1,
      v(),
      $("body").trigger("introed")
  }
  function m() {
      S && introed && stormed && !X && (G += W.qrcode,
      S.rotation.y = .2 * Math.sin(G))
  }
  function g() {
      X && (V = 0,
      k = 0),
      w.rotation.y += (V - w.rotation.y) / 50,
      w.rotation.x += (k - w.rotation.x) / 50
  }
  function v() {
      var e = 1e3;
      w.remove(C),
      S.geometry.vertices.forEach(function(t) {
          t.x = _(-1 * e, 1 * e),
          t.y = _(-1 * e, 1 * e),
          t.z = _(-1 * e, 1 * e)
      }),
      S.geometry.verticesNeedUpdate = !0,
      w.add(S),
      document.body.addEventListener("mousemove", p),
      s()
  }
  function y() {
      S.rotation.y = 3.14 * -.4,
      new TWEEN.Tween(S.rotation).easing(TWEEN.Easing.Quintic.Out).to({
          y: 0
      }, 1e4).onUpdate(function() {}).onComplete(function() {
          stormed = !0
      }).start()
  }
  function x(e) {
      q = "undefined" == typeof e ? ++q % j.length : e % j.length,
      X = e === j.length - 2 ? !0 : !1,
      Z = !0,
      clearTimeout(U),
      U = setTimeout(function() {
          Z = !1
      }, Y * (J + 2));
      var t = j[q];
      S.material.tween || (S.material.tween = new TWEEN.Tween(S.material).easing(TWEEN.Easing.Exponential.In)),
      S.material.tween.stop(),
      ismobile || (q === j.length - 1 ? (W.qrcode = W.qrcodeFAST,
      clearTimeout(N),
      S.material.map = null,
      S.material.needsUpdate = !0,
      20 !== S.material.size && S.material.tween.to({
          size: 20
      }, Y * (J + 1)).start()) : (W.qrcode = W.qrcodeSLOW,
      N = setTimeout(function() {
          var e = new THREE.TextureLoader;
          e.crossOrigin = "",
          e.load("//game.gtimg.cn/images/up/act/a20170301pre/images/three/gradient.png", function(e) {
              S.material.map = e,
              S.material.needsUpdate = !0
          })
      }, Y * (J + 1)),
      5 !== S.material.size && S.material.tween.to({
          size: 5
      }, Y * (J + 1)).start())),
      S.geometry.vertices.forEach(function(e, i) {
          var n = S.geometry.colors[i]
            , r = i % t.vertices.length
            , o = t.vertices[r]
            , a = t.colors[r] || new THREE.Color("hsl(" + (160 + 3 * Math.random()) + ", 100%, 100%)")
            , s = [n.r, n.g, n.b]
            , c = [a.r - s[0], a.g - s[1], a.b - s[2]];
          e.tweenvtx || (e.tweenvtx = new TWEEN.Tween(e).easing(TWEEN.Easing.Exponential.In).onUpdate(function(e) {
              n.r = s[0] + c[0] * e,
              n.g = s[1] + c[1] * e,
              n.b = s[2] + c[2] * e
          }).onStart(function() {}).onComplete(function() {
              e.tweenvtx.isplaying = !1
          }),
          e.tweenvtx.isplaying = !1),
          e.tweenvtx.stop(),
          e.tweenvtx.isplaying = !0,
          e.tweenvtx.to({
              x: o.x,
              y: o.y,
              z: o.z
          }, Y).delay(J * Y * Math.random()).start()
      }),
      D || (D = new TWEEN.Tween(W).easing(TWEEN.Easing.Exponential.In),
      O = new TWEEN.Tween(W).easing(TWEEN.Easing.Exponential.In)),
      D.stop(),
      O.stop(),
      D.to({
          firefly: W.fireflyFAST
      }, .5 * Y * (J + 1)).chain(O),
      O.to({
          firefly: W.fireflySLOW
      }, .5 * Y * (J + 1)),
      D.start(),
      Y = 1e3,
      J = .5
  }
  function b() {
      if (q % j.length === j.length - 2) {
          var e = j[q % j.length]
            , t = {
              x: 0,
              y: -150,
              z: 0
          };
          S.geometry.vertices.forEach(function(i, n) {
              if (!i.tweenvtx.isplaying) {
                  var r = n % e.vertices.length
                    , o = e.vertices[r]
                    , a = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.z - t.z, 2));
                  i.y = o.y + Math.sin(a / 70 + Q) * a / 30
              }
          }),
          S.geometry.verticesNeedUpdate = !0,
          Q -= .015
      }
  }
  function _(e, t) {
      return Math.random() * (t - e) + e
  }
  var w, E, M, T, S, A, R, L, P, C, I, U, N, D, O, B = window.innerWidth, F = window.innerHeight, z = window.innerWidth / 2, H = window.innerHeight / 2, G = 0, V = 0, k = 0, j = [], W = {
      firefly: .002,
      fireflySLOW: .002,
      fireflyFAST: .04,
      qrcode: .001,
      qrcodeFAST: .01,
      qrcodeSLOW: .001
  }, X = !1, q = -1, Y = 1500, Z = !1, J = 1.7, Q = 0;
  e(),
  window.toggleParticle = x,
  window.introBox = l,
  window.skipIntrobox = f,
  window.startStorm = y
}();
