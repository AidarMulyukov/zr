import React from 'react';
import './styles.css';
import MoreButton from "../../atoms/MoreButton";

const BriefInfo = () => (
    <div className="container-fluid pb-1" id="about">
        <div className="row text-center">
            <div className="col-12">
                <h1 className="display-5">
                    ZR Premium Tobacco - это:
                </h1>
            </div>
        </div>
        {/*<hr/>*/}
        {/*<div className="col-12 text-center">
            <p className="lead w-50">
                Два-три коротких предложения, описывающие бизнес-модель.
                Два-три коротких предложения, описывающие бизнес-модель.
                Два-три коротких предложения, описывающие бизнес-модель.
                Два-три коротких предложения, описывающие бизнес-модель.
            </p>
        </div>*/}
        <div className="container-fluid p-1">
            <div className="row text-center p-1">
                <div className="col-xs-12 col-sm-6 col-md-4 p-lg-5">
                    <i className="fas fa-industry fa-5x"></i>
                    <p className="lead py-4 fixedHeight mb-md-4">Собственное производство табака</p>
                    <MoreButton/>
                    <hr/>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 p-lg-5">
                    <i className="far fa-thumbs-up fa-5x"></i>
                    <p className="lead py-4 fixedHeight mb-md-4">Довольные клиенты в 10 городах России</p>
                    <MoreButton/>
                    <hr/>
                </div>

                <div className="col-xs-12 col-md-4 p-lg-5">
                    {/*<span className="fa-stack fa-5x">*/}
                        <i className="fas fa-tasks fa-5x"></i>
                        {/*<i className="fas fa-circle" data-fa-transform="shrink-6 down-4 left-14"></i>*/}
                    {/*</span>*/}
                    <p className="lead py-4 fixedHeight mb-md-4">Широкий ассортимент вкусов</p>
                    <MoreButton/>
                    <hr/>
                </div>
            </div>

        </div>
    </div>
)

export default BriefInfo;
