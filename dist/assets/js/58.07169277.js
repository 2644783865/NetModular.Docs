(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{335:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"更新日志-2019-08-30"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新日志-2019-08-30"}},[s._v("#")]),s._v(" 更新日志 2019-08-30")]),s._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")]),s._v(" Data")]),s._v(" "),a("blockquote",[a("p",[s._v("1、数据库配置项"),a("code",[s._v("DbConnectionOptions")]),s._v("新增"),a("code",[s._v("Version")]),s._v("属性用于配置数据库的版本")])]),s._v(" "),a("blockquote",[a("p",[s._v("2、SqlServer 针对 2008 及以下版本新增"),a("code",[s._v("ROW_NUMBER")]),s._v("方式分页查询，需要设置"),a("code",[s._v("Version")]),s._v("为 2008，2012+版本仍采用"),a("code",[s._v("OFFSET FETCH")]),s._v("方式分页查询")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Dialect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Database"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nm_Admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2008"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ConnString"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Server=.;Database=Nm_Admin;Uid=sa;Pwd=sa;MultipleActiveResultSets=true;"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("p",[s._v("3、数据查询新增"),a("code",[s._v("WhereNotNull")]),s._v("、"),a("code",[s._v("WhereNotEmpty")]),s._v("方法")])]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 字符串不为Null以及空字符串的时候添加过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 字符串不为Null以及空字符串的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// GUID不为Null以及Empty的时候添加过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Guid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// GUID不为Null以及Empty的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Guid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 数值不为Null的时候添加过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 数值不为Null的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 数值不为Null的时候添加过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 数值不为Null的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 日期不为Null的时候添加过滤")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 日期不为Null的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("?")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// GUID不为空的时候添加过滤条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="expression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guid")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// GUID不为空的时候添加ifExpression，反之添加elseExpression")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="condition"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="ifExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <param name="elseExpression"></param>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// <returns></returns>")]),s._v("\nINetSqlQueryable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WhereNotEmpty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Guid")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ifExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Func"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" elseExpression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br")])]),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("blockquote",[a("p",[s._v("1、新增"),a("code",[s._v("nm-flex")]),s._v("组件，用于"),a("code",[s._v("display:flex")]),s._v("布局需要")])]),s._v(" "),a("blockquote",[a("p",[s._v("2、组件"),a("code",[s._v("nm-box")]),s._v("新增"),a("code",[s._v("border")]),s._v("、"),a("code",[s._v("border-color")]),s._v("属性，用于设置盒子顶部边框颜色")])]),s._v(" "),a("blockquote",[a("p",[s._v("3、新增一些帮助样式类"),a("code",[s._v("_helper.scss")])])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("nm-p-0 内边距为0\nnm-p-1 内边距为1\n...\nnm-p-30 内边距为30\n\nnm-p-t-0 上内边距为0\n...\nnm-p-t-30 上内边距为30\n\nnm-p-b-0 下内边距为0\n...\nnm-p-b-30 下内边距为30\n\nnm-p-l-0 左侧内边距为0\n...\nnm-p-l-30 左侧边距为30\n\nnm-p-r-0 右侧内边距为0\n...\nnm-p-r-30 右侧内边距为30\n\n\n外边距与内边距规格类似，只需把nm-p换成nm-m即可\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);