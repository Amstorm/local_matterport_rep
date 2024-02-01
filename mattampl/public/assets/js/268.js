/*! For license information please see 268.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[268],{66211:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(97542);class o extends s.Y{constructor(){super(...arguments),this.name="base-controls",this.inputBindings=[]}registerActiveStateChangeBinding(){this.bindings.push(this.controls.onActiveStateChanged((()=>this.onActiveStateChanged())))}updateInputBindings(){this.controls.isActive?this.inputBindings.forEach((t=>t.renew())):this.inputBindings.forEach((t=>t.cancel()))}onActiveStateChanged(){this.controls.stop(),this.updateInputBindings()}dispose(t){super.dispose(t);for(const t of this.inputBindings)t.cancel();this.inputBindings=[]}}},41835:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(37082);class o{constructor(){this.poseControllerObservable=(0,s.Y)(null)}get poseController(){return this.poseControllerObservable.value}setController(t){return this.poseControllerObservable.value=t,this}get isActive(){return null!=this.poseController}onActiveStateChanged(t){return this.poseControllerObservable.onChanged(t)}}},22533:(t,e,i)=>{var s;i.d(e,{S:()=>s}),function(t){t[t.Standard=0]="Standard",t[t.Depth=1]="Depth",t[t.Transparent=2]="Transparent",t[t.Wireframe=3]="Wireframe",t[t.UV=4]="UV"}(s||(s={}))},7402:(t,e,i)=>{i.d(e,{g:()=>l});var s=i(81396),o=i(17878),n=i(56512),r=i(82814),a=i(12529),h=i(53203);class l extends r.S{constructor(t,e,i=o.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new s.Vector3,this.center=new s.Vector3,this.built=!1,this.layers.mask=i.mask,this.name=`RoomMesh:${t}-${e}`,this.meshGroup=t,this.meshSubgroup=e,this.renderOrder=a.z.default,this.onBeforeRender=(t,e,i,s,o,n)=>{this.updateUniforms(o,n)}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),delete this.onBuild,delete this.onOpacityUpdate,this.built=!1}addChunk(t){-1===this._chunks.indexOf(t)&&this._chunks.push(t)}getChunk(t){return this._chunks[t]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const t=(0,n.qf)(this._chunks.map((t=>t.geometry)));t.clearGroups();let e=0;this.material=[],this._chunks.forEach(((i,s)=>{i.geometry&&i.geometry.index&&(t.addGroup(e,i.geometry.index.count,s),e+=i.geometry.index.count,i.geometry.dispose(),i.geometry=t,i.notifyOnMaterialUpdated((t=>{Array.isArray(this.material)&&(this.material[s]=t),this.onMaterialUpdate&&this.onMaterialUpdate()})),i.onOpacityUpdate=t=>{this.opacity=t})})),this.geometry=t,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((t=>t.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}buildWithTileChunk(t){if(this.built)return;const{meshGroup:e,meshSubgroup:i,lod:s}=t;this.name=`RoomMesh:${s}-${e}-${i}-${t.chunkIndex}`,this.meshGroup=e,this.meshSubgroup=i,this._chunks.push(t),t.notifyOnMaterialUpdated((t=>{this.material=t,this.onMaterialUpdate&&this.onMaterialUpdate()})),t.onOpacityUpdate=t=>{this.opacity=t},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}updateUniforms(t,e){t instanceof s.RawShaderMaterial&&(e?this.chunks[e.materialIndex].onBeforeDraw(t):this.chunks.length&&this.chunks[0].onBeforeDraw(t))}get boundingBox(){return(0,n.A5)(this.geometry)}set opacity(t){t!==this.opacity&&(this._opacity=t,this.raycastEnabled=t>h.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=t<h.xx.FADE_OPAQUE?a.z.ghostFloor:a.z.default,this.onOpacityUpdate&&this.onOpacityUpdate(t))}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},51411:(t,e,i)=>{i.d(e,{n:()=>o});var s=i(19663);class o extends s.m{constructor(t,e,i){super(),this.id="MESH_PREVIEW_POSITION",this.payload={enabled:t,previewCirclePosition:e,size:i}}}},68191:(t,e,i)=>{i.d(e,{U:()=>n});var s=i(19663),o=i(22533);class n extends s.m{constructor(t){super(),this.id="SET_CHUNK_RENDER_MODE",this.payload={mode:t}}}n.modes=o.S},38987:(t,e,i)=>{i.d(e,{u:()=>o});var s=i(19663);class o extends s.m{constructor(t=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:t}}}},34956:(t,e,i)=>{var s;i.d(e,{C:()=>s}),function(t){t.NONE="none",t.DEFAULT="default",t.MOVE="move",t.MOVE_LF="col-resize",t.MOVE_UD="row-resize",t.XHAIR="crosshair",t.PLUS="cell",t.QUESTION="help",t.NOPE="not-allowed",t.FINGER="pointer",t.TEXT="text",t.TEXT_VERT="vertical-text",t.ZOOM_IN="zoom-in",t.ZOOM_OUT="zoom-in",t.GRAB="grab",t.GRABBING="grabbing",t.ARROW_R="e-resize",t.ARROW_L="w-resize",t.ARROW_U="n-resize",t.ARROW_D="s-resize",t.ARROW_UR="ne-resize",t.ARROW_UL="nw-resize",t.ARROW_DR="se-resize",t.ARROW_DL="sw-resize",t.ARROW_LR="ew-resize",t.ARROW_UD="ns-resize",t.ARROW_URDL="nesw-resize",t.ARROW_ULDR="nwse-resize",t.ROOMBOUNDS_DEFAULT="rbe-default",t.ROOMBOUNDS_MOVING="rbe-moving",t.ROOMBOUNDS_PLACE_NODE="rbe-place-node",t.ROOMBOUNDS_FINISH_ROOM="rbe-finish-room"}(s||(s={}))},93642:(t,e,i)=>{i.d(e,{O8:()=>a,SI:()=>o,WI:()=>h,uQ:()=>n,zf:()=>r});var s=i(69505);const o=1e3/60,n=(0,s.Id)(70),r=-n,a=.05,h=.1/60},49219:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S,lookAccelerationKey:()=>x});var s=i(81396),o=i(90304),n=i(93642),r=i(21646),a=i(49827),h=i(41835),l=i(46950);class c extends h.Z{constructor(t){super(),this.cameraPoseProxy=t,this.lookVelocity=new s.Vector2,this.lookAccel=new s.Vector2,this.tempAxis=new s.Vector3,this.tempOrientation=new s.Quaternion,this.currentOrientation=new s.Quaternion,this.tempEuler=new s.Euler,this.transition={active:!1,startTime:0,elapsed:0,duration:0,velocity:new s.Vector2,easeOut:!1}}setLookAcceleration(t,e=!1){this.transition.active||(e&&(t.x&&this.lookVelocity.x&&Math.sign(t.x)!==Math.sign(this.lookVelocity.x)&&(this.lookVelocity.x=0),t.y&&this.lookVelocity.y&&Math.sign(t.y)!==Math.sign(this.lookVelocity.y)&&(this.lookVelocity.y=0)),this.lookAccel.x=void 0!==t.x?t.x:this.lookAccel.x,this.lookAccel.y=void 0!==t.y?t.y:this.lookAccel.y)}startTransition(t,e,i){var s;const o=new l.Q;return this.transition.active=!0,this.transition.duration=t,this.transition.elapsed=0,this.transition.startTime=Date.now(),this.transition.deferred=o,this.transition.velocity.copy(e),this.transition.easeOut=i,this.lookAccel.set(0,0),this.lookVelocity.copy(e),null===(s=this.poseController)||void 0===s||s.beginExternalTransition(),o.promise()}stopTransition(){var t;this.transition.active&&(null===(t=this.poseController)||void 0===t||t.endExternalTransition(),this.transition.active=!1),this.transition.deferred&&(this.transition.deferred.resolve(),this.transition.deferred=void 0)}updateTransition(t){const e=t/n.SI;if(this.lookVelocity.copy(this.transition.velocity),this.transition.elapsed+=t,this.transition.elapsed>=this.transition.duration){const e=this.transition.duration-(this.transition.elapsed-t);this.lookVelocity.multiplyScalar(e/t)}else this.lookVelocity.multiplyScalar(e)}updateCameraParameters(){var t;const e=this.cameraPoseProxy.pose;this.tempEuler.setFromQuaternion(e.rotation,"YXZ");const i=this.tempEuler.x,s=(0,a.uZ)(this.lookVelocity.y,n.zf-i,n.uQ-i);this.tempAxis.copy(o.fU.RIGHT),this.tempOrientation.setFromAxisAngle(this.tempAxis.applyQuaternion(e.rotation),s),this.currentOrientation.copy(e.rotation).premultiply(this.tempOrientation),this.tempOrientation.setFromAxisAngle(o.fU.UP,this.lookVelocity.x),this.currentOrientation.premultiply(this.tempOrientation),e.rotation.equals(this.currentOrientation)||(this.tempOrientation.copy(this.currentOrientation).normalize(),null===(t=this.poseController)||void 0===t||t.updateCameraRotation(this.tempOrientation))}update(t){const e=this.cameraPoseProxy.pose,i=t/n.SI;e.rotation.equals(this.currentOrientation)||this.currentOrientation.copy(e.rotation),this.transition.active?(this.updateTransition(t),this.updateCameraParameters(),this.transition.elapsed>=this.transition.duration&&(this.stop(this.transition.easeOut),this.transition.active=!1)):(this.lookAccel.length()>r.Z.epsilon||this.lookVelocity.length()>r.Z.epsilon)&&(this.lookVelocity.addScaledVector(this.lookAccel,i),this.updateCameraParameters(),this.lookVelocity.multiplyScalar(Math.pow(1-n.O8,i)))}stop(t=!1){this.stopTransition(),this.lookAccel.set(0,0),t||this.lookVelocity.set(0,0)}startRotateTransition(t,e,i){return this.beforeStartRotationTransition&&this.beforeStartRotationTransition(),this.startTransition(t,e.clone().multiplyScalar(n.SI),i).nativePromise()}startTranslateTransition(t,e,i=!0){throw new Error("Panning isn't supported in Panorama Controls")}startZoomTransition(t,e,i){throw new Error("Zooming isn't supported in Panorama Controls")}}var d=i(5135),u=i(95882),p=i(16782),y=i(32597),m=i(6667),g=i(80592),O=i(89553),k=i(34029),A=i(92810),R=i(9037),v=i(66211);const x="Rotation speed";class S extends v.Z{constructor(){super(...arguments),this.name="panorama-controls",this.controlsEngaged=!1,this.lookAccelerationSpeed=n.WI,this.calcRotationAngle=(()=>{const t=new s.Matrix4,e=new s.Vector3,i=new s.Vector3;return(o,n)=>{t.copy(this.cameraData.pose.projection.asThreeMatrix4()),t.invert(),e.set(o.x-n.x,o.y-n.y,-1).applyMatrix4(t),i.set(o.x,o.y,-1).applyMatrix4(t);const r=Math.sqrt(e.x*e.x+e.z*e.z),a=Math.sqrt(i.x*i.x+i.z*i.z),h=Math.atan2(e.y,r),l=Math.atan2(i.y,a)-h;e.y=0,i.y=0,e.normalize(),i.normalize();const c=Math.acos(e.dot(i));let d=0;return isNaN(c)||(d=c,n.x>0&&(d*=-1)),new s.Vector2(-d,-l)}})()}async init(t,e){const i=await e.getModuleBySymbol(A.Ng);this.controls=new c(i.cameraPoseProxy),this.cameraData=await e.market.waitForData(R.M);const s=this.cameraData;this.controls.beforeStartRotationTransition=()=>{s.transition&&s.transition.activeInternal&&s.transition.to.rotation&&(s.transition.to.rotation=void 0)},i.addControls(u.Ey.Panorama,this.controls),i.addControls(u.Ey.Mesh,this.controls),this.market=e.market,this.registerActiveStateChangeBinding(),e.getModuleBySymbol(A.PZ).then((t=>{t.registerHandler(g.E0,(t=>{this.shouldBeActive()&&this.controls.stop()})),t.registerHandler(g._t,(t=>{this.shouldBeActive()&&t.buttons&p.r.PRIMARY&&(this.controlsEngaged=!0,this.onDrag(t.position,t.delta),this.controls.update(n.SI),this.controls.stop())})),t.registerHandler(g._R,(t=>{this.shouldBeActive()&&this.controlsEngaged&&(t.timeSinceLastMove<100&&!(t.buttons&p.r.PRIMARY)&&(this.onDrag(t.position,t.delta),this.controls.update(n.SI),this.controls.setLookAcceleration({x:0,y:0})),this.controlsEngaged=!1)})),t.registerHandler(O.e,(t=>{this.shouldBeActive()&&this.onKey(t.key,t.state)})),this.updateInputBindings()}))}onUpdate(t){this.shouldBeActive()&&this.controls.update(t)}onDrag(t,e){this.controls.setLookAcceleration(this.calcRotationAngle(t,e))}onKey(t,e){var i,s;const o=null!==(s=null===(i=this.market.tryGetData(k.e))||void 0===i?void 0:i.tryGetProperty(x,null))&&void 0!==s?s:null;this.lookAccelerationSpeed=o?o*(Math.PI/180)/60:this.lookAccelerationSpeed;const n=e===m.M.DOWN;switch(t){case y.R.LEFTARROW:case y.R.J:this.controls.setLookAcceleration({x:n?this.lookAccelerationSpeed:0},!0);break;case y.R.RIGHTARROW:case y.R.L:this.controls.setLookAcceleration({x:n?-this.lookAccelerationSpeed:0},!0);break;case y.R.K:this.controls.setLookAcceleration({y:n?-this.lookAccelerationSpeed:0},!0);break;case y.R.I:this.controls.setLookAcceleration({y:n?this.lookAccelerationSpeed:0},!0)}}shouldBeActive(){var t,e;return null!==(e=!(null===(t=this.market.tryGetData(d.Z))||void 0===t?void 0:t.isVR()))&&void 0!==e&&e}}},87928:(t,e,i)=>{i.d(e,{E:()=>o});var s=i(81396);class o extends s.Mesh{constructor(t,e){super(t,e)}}},69984:(t,e,i)=>{i.d(e,{D5:()=>l,Ex:()=>c,G1:()=>a,rn:()=>h});var s=i(81396),o=i(39880);const n=()=>Math.random(),r={},a=(t,e=n())=>(r[e]||(r[e]=new s.Vector4(n(),n(),n(),t)),r[e]),h=()=>new s.Color(n(),n(),n()),l=t=>t instanceof Object&&"r"in t&&"g"in t&&"b"in t;function c(t){return`#${(0,o.Q_)(255*t.r,2,"0",16)}${(0,o.Q_)(255*t.g,2,"0",16)}${(0,o.Q_)(255*t.b,2,"0",16)}`}}}]);