// wedge.js
/*
 * Example usage:
 * <Wedge
 *   outerRadius={50}
 *   startAngle={0}
 *   endAngle={360}
 *   fill="blue"
 * />
 */
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	ART
} from 'react-native';

var Shape = ART.Shape;
var Path = ART.Path;

/**
 * Wedge is a React component for drawing circles, wedges and arcs.  Like other
 * ReactART components, it must be used in a <Surface>.
 */
class SOCWedge extends Component {
  circleRadians = Math.PI * 2;

  radiansPerDegree = Math.PI / 180;

  /**
   * _degreesToRadians(degrees)
   *
   * Helper function to convert degrees to radians
   *
   * @param {number} degrees
   * @return {number}
   */
  _degreesToRadians(degrees) {
    if (degrees !== 0 && degrees % 360 === 0) { // 360, 720, etc.
      return this.circleRadians;
    } else {
      return degrees * this.radiansPerDegree % this.circleRadians;
    }
  }

  /**
   * _createCirclePath(or, ir)
   *
   * Creates the ReactART Path for a complete circle.
   *
   * @param {number} or The outer radius of the circle
   * @param {number} ir The inner radius, greater than zero for a ring
   * @return {object}
   */
  _createCirclePath(or, ir) {
    var path = Path();

    path.move(this.props.cx, or + this.props.cy)
        .arc(or * 2, 0, or)
        .arc(-or * 2, 0, or);

    if (ir) {
      path.move(this.props.cx + or - ir, this.props.cy)
          .counterArc(ir * 2, 0, ir)
          .counterArc(-ir * 2, 0, ir);
    }

    path.close();

    return path;
  }

  /**
   * _createArcPath(sa, ea, ca, or, ir)
   *
   * Creates the ReactART Path for an arc or wedge.
   *
   * @param {number} startAngle The starting degrees relative to 12 o'clock
   * @param {number} endAngle The ending degrees relative to 12 o'clock
   * @param {number} or The outer radius in pixels
   * @param {number} ir The inner radius in pixels, greater than zero for an arc
   * @return {object}
   */
  _createArcPath(startAngle, endAngle, or, ir) {
      var path = Path();

      // angles in radians
      var sa = this._degreesToRadians(startAngle);
      var ea = this._degreesToRadians(endAngle);

      // central arc angle in radians
      var ca = sa > ea ? this.circleRadians - sa + ea : ea - sa;

      // cached sine and cosine values
      var ss = Math.sin(sa);
      var es = Math.sin(ea);
      var sc = Math.cos(sa);
      var ec = Math.cos(ea);

      // cached differences
      var ds = es - ss;
      var dc = ec - sc;
      var dr = ir - or;

      // if the angle is over pi radians (180 degrees)
      // we will need to let the drawing method know.
      var large = ca > Math.PI;

      // TODO (sema) Please improve theses comments to make the math
      // more understandable.
      //
      // Formula for a point on a circle at a specific angle with a center
      // at (0, 0):
      // x = radius * Math.sin(radians)
      // y = radius * Math.cos(radians)
      //
      // For our starting point, we offset the formula using the outer
      // radius because our origin is at (top, left).
      // In typical web layout fashion, we are drawing in quadrant IV
      // (a.k.a. Southeast) where x is positive and y is negative.
      //
      // The arguments for path.arc and path.counterArc used below are:
      // (endX, endY, radiusX, radiusY, largeAngle)

      path.move(or + or * ss + this.props.cx, or - or * sc + this.props.cy) // move to starting point
          .arc(or * ds, or * -dc, or, or, large) // outer arc

        //   .line(dr * es, dr * -ec);  // width of arc or wedge

      if (ir) {
        path.counterArc(ir * -ds, ir * dc, ir, ir, large); // inner arc
      }

      return path;
  }

  render() {
    // angles are provided in degrees
    var startAngle = this.props.startAngle;
    var endAngle = this.props.endAngle;

    if (startAngle - endAngle === 0) {
      return <Shape></Shape>
    }

    // radii are provided in pixels
    var innerRadius = this.props.innerRadius || 0;
    var outerRadius = this.props.outerRadius;

    // sorted radii
    var ir = Math.min(innerRadius, outerRadius);
    var or = Math.max(innerRadius, outerRadius);

    var path;
    if (endAngle >= startAngle + 360) {
      path = this._createCirclePath(or, ir);
    } else {
      path = this._createArcPath(startAngle, endAngle, or, ir);
    }

    return <Shape {...this.props} d={path}></Shape>
  }
}

SOCWedge.propTypes = {
  outerRadius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  innerRadius: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number
};

export default SOCWedge;