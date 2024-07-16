import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, projectImg }: ProjectType) => {
  const defaultImg = "/img/no-image.svg";

  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4" style={{ height: "500px" }}>
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <img
                src={projectImg || defaultImg}
                alt={`${name} image`}
                className="img-fluid mb-3"
                style={{ minWidth: "200px", minHeight: "200px" }}
              />
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="Github"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Demo"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
