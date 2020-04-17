	
addEvent(window, 'load', domCollapse);
	
	var expandedTriggerClass='triggerexpanded';
		var normalTriggerClass='triggernormal';
		var hoverTriggerClass='triggerhover';
		var normalElementClass='elementnormal';
		var collapsedElementClass='elementcollapsed';
		var collapsedElements=new Array();
		var triggerElements=new Array();
		var innerText=new Array();
		var more=" <span>(More details...)</span>";		
		var less=" <span>(Hide details .....)</span>";
    	function domCollapse()
		{
			if(document.getElementById && document.createTextNode)
			{
				//parentElementId='collapsesection';
				//triggerelements='h2';
				var triggerClass=/trigger/;
	
				var elms,tohide,colobj,elementsToCheck,triggerelements,parentElementId,myText;
				elementsToCheck=triggerelements?triggerelements:'*';
				if(parentElementId)
				{
					elms=document.getElementById('parentElementId').getElementsByTagName(elementsToCheck);
				} else {
					elms=document.getElementsByTagName(elementsToCheck);
				}
				for (i=0;i<elms.length;i++)
				{
					if(triggerClass.test(elms[i].className))
					{
						tohide=elms[i].nextSibling;
						while(tohide.nodeType!=1)
						{
							tohide=tohide.nextSibling;
						}
						collapsedElements.push(tohide);
						triggerElements.push(elms[i]);
						innerText.push(elms[i].innerHTML);
						elms[i].myText=elms[i].innerHTML;
						elms[i].innerHTML=elms[i].myText+more;
						juggleClass(tohide,normalElementClass,0);
						juggleClass(tohide,collapsedElementClass,1);
						elms[i].colobj=tohide;						
						elms[i].onmouseover=function(){doTriggerHover(this);}
						elms[i].onmouseout=function(){juggleClass(this,hoverTriggerClass,0);}
						elms[i].onclick=function(){doDomCollapse(this,this.colobj,this.myText);return false}
						elms[i].className=elms[i].className+' '+normalTriggerClass;
					}
				}
			}
		}
		function doTriggerHover(o)
		{
			if(!checkClass(hoverTriggerClass,o) && !checkClass(expandedTriggerClass,o))
			{
				juggleClass(o,hoverTriggerClass,1);
			}
		}
		function doDomCollapse(o,t,x)
		{
			if(t)
			{
				if(checkClass(collapsedElementClass,t))
				{	o.innerHTML=x+less;
					juggleClass(t,collapsedElementClass,0);
					juggleClass(t,normalElementClass,1);
					juggleClass(o,normalTriggerClass,0);
					juggleClass(o,expandedTriggerClass,1);
				}else{		
					o.innerHTML=x+more;
					juggleClass(t,normalElementClass,0);
					juggleClass(t,collapsedElementClass,1);
					juggleClass(o,expandedTriggerClass,0);
					juggleClass(o,normalTriggerClass,1);
				}
			}
		}
		function doDomCollapseAll(state){
			var i,o,t,x;
			for(i=0;i<collapsedElements.length;i++){
				t=collapsedElements[i];	
				o=triggerElements[i];	
				x=innerText[i];
				if(state==1){
					o.innerHTML=x+less;
					juggleClass(t,collapsedElementClass,0);
					juggleClass(t,normalElementClass,1);
					juggleClass(o,normalTriggerClass,0);
					juggleClass(o,expandedTriggerClass,1);
				} else {
					o.innerHTML=x+more;
					juggleClass(t,normalElementClass,0);
					juggleClass(t,collapsedElementClass,1);
					juggleClass(o,expandedTriggerClass,0);
					juggleClass(o,normalTriggerClass,1);
				}
			}
		}
		function juggleClass(o,c,s)
		{
			if(s==0) 
			{
				o.className=o.className.replace(c,'');	
			}
			if (s==1 && !checkClass(c,o))
			{
				o.className+=' '+c;
			}
		}
		function checkClass(c,o)
		{
			var re=new RegExp('\\b'+c+'\\b');
			return re.test(o.className);
		}

		//window.onload=domCollapse;
	
/* Thanks to Scott Andrew */
function addEvent(obj, evType, fn){
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, true);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on"+evType, fn);
        return r;
    } else {
	    return false;
    }
}