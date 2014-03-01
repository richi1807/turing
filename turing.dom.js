turing.dom = function(){
  var macros , rules ;
  /*the macros for CSS selector. Taken directly from css2 lexer specification*/
  macros = {
    'nl':        '\n|\r\n|\r|\f',
    'w':         '[\s\r\n\f]*',
    'nonascii':  '[^\0-\177]',
    'num':       '-?([0-9]+|[0-9]*\.[0-9]+)',
    'unicode':   '\\[0-9A-Fa-f]{1,6}(\r\n|[\s\n\r\t\f])?',
    'escape':    '#{unicode}|\\[^\n\r\f0-9A-Fa-f]',
    'nmchar':    '[_A-Za-z0-9-]|#{nonascii}|#{escape}',
    'nmstart':   '[_A-Za-z]|#{nonascii}|#{escape}',
    'ident':     '[-@]?(#{nmstart})(#{nmchar})*',
    'name':      '(#{nmchar})+',
    'string1':   '"([^\n\r\f"]|#{nl}|#{nonascii}|#{escape})*"',
    'string2':   "'([^\n\r\f']|#{nl}|#{nonascii}|#{escape})*'",
    'string':    '#{string1}|#{string2}'
  };
  /*The rules for the CSS lexer*/
  rules = {
      'name and id': '(#{ident}##{ident})',
      'id': '(##{ident})',
      'class': '(\\.#{ident})',
      'name and class': '(#{ident}\\.#{ident})',
      'element':'(#{ident})',
      'pseudo class':   '(:#{ident})'
  }
};

turing.dom.findMap = {
    'name and id': function(){
        
    },
    'id': function(){
        
    }, 
    'class': function(){
        
    },
    'name': function(){
        
    },
    'name and class': function(){
        
    },
    'pseudo class': function(){
        
    }
};

var Token = function(identity , finder){
    this.identity = identity ;
    this.finder = finder ;
};

Token.prototype.toString = function(){
    return this.identity + ' ' + this.finder ;
}

var Scanner = function(){
    
  function replacePattern(patterns , pattern){
      var matched = true, match;
      while(matched){
          match = pattern.match(/#\{([^}]+)\}/);
          if(match && match[1]){
              pattern = pattern.replace(new RegExp('#\{' + match[1] + '\}', 'g'), patterns[match[1]]);
              match = true ;
          }
          else{
              match = false ;
          }
      }
      return pattern ;
  }    ;
  function joinPatterns(patterns){
      var results = [];
      for(var key in patterns){
          results.push(patterns[key]);
      }
      return new RegExp(results.join('|') , 'g');
  }  ;
  
  function convertPatterns(){
      var key , pattern , source , patterns , results = {};
      
      if(arguments.length == 2){
          source = arguments[0];
          patterns = arguments[1];
      }
      else{
          source = arguments[0];
          patterns = arguments[1];
      }
      for(key in patterns){
          patterns = escapePattern(replacePattern(patterns[key] , source));
          results[key] = patterns ;
      }
      return results ;
  };
  
  function escapePattern(text){
      return text.replace(/\//g, '//');
  };
  
  return joinPatterns(convertPatterns(convertPatterns(rules) , macros));
};











