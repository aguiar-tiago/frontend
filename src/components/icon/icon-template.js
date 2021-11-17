function template( { template }, opts, { imports, componentName, props, jsx, exports }, ) {
	return template.ast`
// Automatically generated by @svgr, do not edit directly! See icon/icon-template
${imports}
const ${componentName} = (${props}) => ${jsx};

export default ${componentName};
`;
}

module.exports = template;